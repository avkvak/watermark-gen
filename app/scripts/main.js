(function() {    

  var app = {

    // Инициализация
    initialize : function () {
      console.log('Инициализация приложения');

      this.setUpListeners();

      // TODO: only in ie
      $('input, textarea').placeholder();
    },

    // Подключаем прослушку событий
    setUpListeners: function () {
      console.log('Прослушка событий включена');

      $('.add-new-item').on('click', app.showModal); // модальное окно "добавть проект"
      $('form').on('keydown', '.has-error', app.removeError); // удаляем красную обводку у элементов форм
      $('form').on('reset', app.clearForm); // при сбросе формы удаляем также: тултипы, обводку, сообщение от сервера
      $('#add-new-project').on('submit', app.addProject); // добавление проекта
      $('#login').on('submit', app.login); //  авторизация пользователя
      $('#contact-me').on('submit', app.contactMe); // отправка формы "связаться со мной""
    },    

    // Подгрузка новых проектов
    fileUp : function () {      
      console.log('Инициализируем файлаплоад');

      var divUpload = $('#uploadfile'), // div, в который обернут fileUpload
          inpFileName = $('#filename'), // input, в который мы будем помещать название файла
          inpFile = $('#fileupload'), // input file
          inpUrl = $('#fileurl'), // input fileurl
          form = divUpload.parents('.form'); // сама форма

      // Загрузка файлов на сервер
      inpFile.fileupload({
        url: '/app/upload.php',
        dataType: 'json',
        success: function(ans){
          var mes = ans.mes,
               status = ans.status;
          if (status === 'OK') {
            inpFileName
              .val(ans.name) // добавляем в инпут называние картинки 
              .removeClass('has-error') // удаялем красную обводку
              .trigger('hideTooltip'); // удаляем тултип
            inpUrl.val(ans.url);
          }
          else{
            form.find('.error-mes').text(mes).show(); // в случае ошибки, показываем её текст
          }
        }
      });
    },    

    // Вызывает модальное окно
    showModal: function () {
      console.log('Вызов модального окна');

      app.fileUp(); // инициализируем fileUpload

      // Подключаем плагин bPopup
      $('#new-progect-popup').bPopup({
        speed: 650,
        transition: 'slideDown',
        onClose: function () {
          this.find('.form').trigger("reset"); // сбрасываем форму
        }
      });
    },

    // Обрабатывает форму "Связаться со мной"
    contactMe: function (ev) {
      console.log('Работаем с формой связи');

      ev.preventDefault();

      var form = $(this),          
          url = '/app/send_mail.php',
          defObject = app.ajaxForm(form, url);

      if (defObject) {
        defObject.done(function(ans) {
          var mes = ans.mes,
              status = ans.status;

          if ( status === 'OK'){
            form.trigger('reset');
            form.find('.success-mes').text(mes).show();           
          } else{
            form.find('.error-mes').text(mes).show();
          }
        });
      }
    },

    // Обрабатывает форму авторизации
    login: function (ev) {
      console.log('Работаем с формой авторизации');

      ev.preventDefault();

      var form = $(this),
          url = '/app/login_server.php',
          defObject = app.ajaxForm(form, url);

      if (defObject) {
        defObject.done(function(ans) {
          var mes = ans.mes,
              status = ans.status;
          if ( status === 'OK'){
            form.trigger('reset');
            form.find('.success-mes').text(mes).show();
            window.location.href = '/';
          } else{
            form.find('.error-mes').text(mes).show();
          }
        });
      }      
    },

    // Обрабатывает форму добавления проекта
    addProject: function (ev) {
      console.log('Работаем с формой добавления проекта');

      ev.preventDefault();

      var form = $(this),
          url = '/app/ajax.php',
          defObject = app.ajaxForm(form, url);

      if (defObject) {
        defObject.done(function(ans) {
          var mes = ans.mes,
              status = ans.status;

          if ( status === 'OK'){
            form.trigger('reset');
            form.find('.success-mes').text(mes).show();
            // TODO: отрисовать новый элемент в DOM при помощи js шаблона
            location.reload(); // сразу перезагрузим страницу
          } else{
            form.find('.error-mes').text(mes).show();
          }
        });
      }        
    },

    // Проверяет форму и делает ajax запрос
    ajaxForm: function (form, url) {
      
      if (!app.validateForm(form)) return false;  // Возвращает false, если не проходит валидацию 
      var data = form.serialize(); // собираем данные из формы в объект data

      return $.ajax({ // Возвращает Deferred Object
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
      }).fail( function(ans) {
        console.log('Проблемы в PHP');
        form.find('.error-mes').text('На сервере произошла ошибка').show();
      });
    },    

    // Универсальная функция очистки формы
    clearForm: function(form) {
      console.log('Очищаем форму');

      var form = $(this);
      form.find('.input, .textarea').trigger('hideTooltip'); // удаляем тултипы
      form.find('.has-error').removeClass('has-error'); // удаляем красную подсветку
      form.find('.error-mes, success-mes').text('').hide(); // очищаем и прячем сообщения с сервера
    },

    // Убирает красную обводку у элементов форм
    removeError: function() {
      console.log('Красная обводка у элементов форм удалена');

      $(this).removeClass('has-error');
    },

    // Проверяет форму
    validateForm: function (form) {
      console.log('Проверяем форму');

      var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
          valid = true;

      $.each(elements, function(index, val) {
        var element = $(val),
            val = element.val(),
            pos = element.attr('qtip-position');         

        if(val.length === 0){
          element.addClass('has-error');
          app.createQtip(element, pos);            
          valid = false;
        }

      }); // each

      return valid;
    },

    // Создаёт тултипы
    createQtip: function (element, position) {
      console.log('Создаем тултип');

      // позиция тултипа
      if (position === 'right') {
        position = {
          my: 'left center', 
          at: 'right center'
        }
      }else{
        position = {
          my: 'right center', 
          at: 'left center',
          adjust: {
            method: 'shift none'
          }
        }
      }

      // инициализация тултипа
      element.qtip({
        content: {
          text: function() {
            return $(this).attr('qtip-content');
          }
        },
        show: {
          event: 'show'
        },
        hide: {
          event: 'keydown hideTooltip'
        },
        position: position,
        style: {
          classes: 'qtip-mystyle qtip-rounded',
          tip: {
            height: 10,
            width: 16
          }
        }
      }).trigger('show');
    }
  }

  app.initialize();

}());
