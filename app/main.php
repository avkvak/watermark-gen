<?php

  // Открываем сессию
  session_start();
  require_once 'config.php';


  // Получаем значение адресной строки
  $page = $_GET['page'];
  // подключение к БД
  $pdo = connectToDB();
  $data = array();
  switch($page){
    // выводим страницу портфолио
    case 'my-work':
      $data['title'] = 'Мои работы';
      $data['portfolio'] = getDataAsArray($pdo, $data_sql['getPortfolio']);
      require_once 'my-work.php';
      break;
    // выводим страницу с контактной формой
    case 'contact':
      $data['title'] = 'Связаться со мной';
      require_once 'contact-me.php';
      break;
    // выводим страницу админки
    case 'admin':
      $data['title'] = 'Админка';
      require_once 'login.php';
      break;
    // выводим главную страницу
    default:
      $data['title'] = "Сайт веб-разработчика";
      $data['page'] = "index";
      require_once 'index.php';
      break;
  }

