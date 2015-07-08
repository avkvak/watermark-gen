<?php
// открываем сессию
session_start();
require_once 'config.php';
// получаем объект подключения к БД
$pdo = connectToDB();

// Получаем данные формы
$login = htmlspecialchars(strip_tags(trim($_POST['login'])), ENT_QUOTES);
$password = md5($_POST['password']);
// Делаем запрос на проверку пользователя в БД
$sql = "SELECT COUNT(users.id) as cnt FROM users WHERE users.login = '{$login}' AND users.`password` = '{$password}'";
$result = $pdo->query($sql);
$res = $result->fetch(PDO::FETCH_ASSOC);
$data = array();
// Если пользователь есть в БД
if($res['cnt'] == 1) {
    $_SESSION['auth'] = true;
    $data['status'] = "OK";
    $data['mes'] = 'Добро пожаловать на сайт';
} else {
    $data['status'] = "NO";
    $data['mes'] = 'Пользователя с таким логином / паролем нет в базе';
}

echo json_encode($data);
exit;
