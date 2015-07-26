<?php
session_start();
$lang = null;

if(isset($_GET['lang'])){
    $lang = $_GET['lang'];
} else {
    $lang = 'ru';
}


switch($lang){
    case 'us':
    case 'ru':
        $_SESSION['lang'] = $lang;
        break;
    default:
        $_SESSION['lang'] = 'ru';
        break;
}

header("HTTP/1.1 307 Temporary Redirect");
header('Location: /app/');

exit;