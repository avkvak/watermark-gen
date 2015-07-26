<?php
session_start();

$host = $_SERVER['SERVER_NAME'];

$lang_data = parse_ini_file('lang.ini', true);

if(isset($_SESSION['lang'])){
    $lang = $_SESSION['lang'];
} else {
    $lang = 'ru';
}

switch($lang){
    case 'us':
    case 'ru':
        $labels = $lang_data[$lang];
        break;
    default:
        $labels = $lang_data['ru'];
        break;
}

?>
<!DOCTYPE html>
<html lang="ru-Ru">

<head>
  <title><?php echo $labels['title']; ?></title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--seo-->
  <meta name="description" content="Cервис по созданию водяных знаков">
  <meta name="author" content="Квашук Андрей, Ильина Лада, Заславская Анастасия, Минка Дмитирий">
  <meta name="keywords" content="watermark">
  <!--favicon-->
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <!-- build:css css/vendor.min.css -->
  <!-- bower:css-->
  <!-- endbower-->
  <!-- endbuild -->
  <!--html5 for ie8-->
  <!--[if lt IE 9]><script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script><script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
  <!-- build:css css/main.min.css -->
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <link rel="stylesheet" href="css/main.css">
    <!-- endbuild -->
</head>

<body>
<!--[if lt IE 10]>
  <p class="browsehappy">Вы используете <strong>устаревший</strong> браузер. Пожалуйста <a href="http://browsehappy.com/">обновите</a> его.</p>
<![endif]-->
