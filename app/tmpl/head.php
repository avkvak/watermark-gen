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
  <title><?php echo $data['title'];?></title>

  <!-- SEO теги -->
  <meta name="description" content="seo here">
  <meta name="keywords" content="seo here"/>
  <meta name="author" content=""/>

  <!-- // favicon -->

  <!-- normalize -->
  <link rel="stylesheet" href="/app/bower_components/normalize.css/normalize.css" />

  <!-- Основные таблицы -->
  <link rel="stylesheet" href="/app/styles/main.css">

  <!-- Плагины -->
  <link rel="stylesheet" type="text/css" href="/app/bower_components/qtip2/jquery.qtip.css">

  <!-- modernizr - исключение, подулючается только в head -->
  <script src="/app/bower_components/modernizr/modernizr.js"></script>    
</head>
<body>
<!--[if lt IE 7]>
  <p class="browsehappy">Вы используете <strong>устаревший</strong> браузер. Пожалуйста <a href="http://browsehappy.com/">обновите</a> его.</p>
<![endif]-->