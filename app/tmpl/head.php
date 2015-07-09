<?php
session_start();

$host = $_SERVER['SERVER_NAME'];

if (isset($_GET['lang'])){
  $lang = $_GET['lang'];
} elseif($_SESSION['lang']){
  $lang = $_SESSION['lang'];
} else{
  $lang = 'ru';
}

switch($lang){
  case 'eng':
  case 'ru':
    $_SESSION['lang'] = $lang;
    break;
  default:
    $_SESSION['lang'] = 'ru';
}

if(!file_exists('lang.ini')){
  die("Not exist file language");
}

$lang_config = parse_ini_file('lang.ini', true);
if(!$lang_config){
  die("Error! Can not read language file!");
}

$labels = $lang_config[$lang];

?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Тег для корректной работы в IE -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- Заголовок берем из PHP переменной -->
  <title><?php echo $labels['title']; ?></title>

  <!-- SEO теги -->
  <meta name="description" content="seo here">
  <meta name="keywords" content="seo here"/>
  <meta name="author" content=""/>

</head>
<body>
<!--[if lt IE 7]>
  <p class="browsehappy">Вы используете <strong>устаревший</strong> браузер. Пожалуйста <a href="http://browsehappy.com/">обновите</a> его.</p>
<![endif]-->