<aside class="controllers">
  <h2 class="controllers-title">Настройки</h2>
  <form action="" method="POST" class="controllers-form">
    <!--Раздел загрузки файлов-->
    <div class="uploud block">
      <div class="input-form">
        <div class="title-label">Исходное изображение</div>
        <label for="input-image" class="input-label">
          <input type="text" name="image" id="input-image" value="Загрузите изображение" disabled="disabled" class="input"/><span class="upload-img"></span>
        </label>
        <label for="input-upload-img"></label>
        <input type="file" name="upload-img" id="input-upload-img" onchange="readURL(this);" class="upload-btn"/>
      </div>
      <div class="input-form">
        <div class="title-label">Водяной знак</div>
        <label for="input-watermark" class="input-label">
          <input type="text" name="watermark" id="input-watermark" value="Загрузите водяной знак" disabled="disabled" class="input"/><span class="upload-img"></span>
        </label>
        <label for="input-upload-watermark"></label>
        <input type="file" name="upload-watermark" id="input-upload-watermark" onchange="readURL2(this);" class="upload-btn"/>
      </div>
    </div>
    <!--Раздел положение wotermark-->
    <div class="position block">
      <div class="position-row clearfix">
        <label class="position-label">Положение</label>
        <!--Кнопки преключения режима нормальный/замостить-->
        <div class="position__type-button-wrap"><a href="#" class="position__type-button position__type-button_tile"></a><a href="#" class="position__type-button position__type-button_normal position__type-button_normal-active"></a></div>
      </div>
      <div class="position-row clearfix">
        <!--Окно визаульного позиционирования.-->
        <div class="position__grid-wrap">
          <!--Cетка-->
          <div id="grid" class="grid">
            <div class="top-row">
              <div class="left"></div>
              <div class="center"></div>
              <div class="right"></div>
            </div>
            <div class="middle-row">
              <div class="left"></div>
              <div class="center"></div>
              <div class="right"></div>
            </div>
            <div class="bottom-row">
              <div class="left"></div>
              <div class="center"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
        <!--Кнопки управления-->
        <div class="position__controller-wrap">
          <div class="position__controller_X"><span class="position__controller_X-description">X</span>
            <input type="text" value="00" class="position__controller_X-input"/><a href="#" class="position__controller_X-up"></a><a href="#" class="position__controller_X-down"></a>
          </div>
          <div class="position__controller_Y"><span class="position__controller_Y-description">Y</span>
            <input type="text" value="00" class="position__controller_Y-input"/><a href="#" class="position__controller_Y-up"></a><a href="#" class="position__controller_Y-down"></a>
          </div>
        </div>
      </div>
    </div>
    <!--Раздел с прозрачностью 
    <input type="range" min="0" max="1" step="0.05" value="1" id="slider"  />-->
    <div class="opacity block">
      <label class="opasity__label">Прозрачность</label>
      <div class="opasity__slider-wrap">
        <div class="opasity-slider">
          <input id="opacity-control" type="range" min="0" max="1" step="0.05" value="1"/>
         </div>                 
      </div>
    </div>
    <!--Раздел с кнопками-->
    <div class="buttons">
      <div class="buttons-wrap clearfix">
        <button type="reset" value="Сброс" class="btn btn-res" id="btn-reset">Сброс</button>
        <button type="submit" value="скачать" class="btn">Скачать</button>
      </div>
    </div>
  </form>
</aside>