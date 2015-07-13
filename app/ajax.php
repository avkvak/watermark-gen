<?php
require_once 'config.php';

// Название проекта
$projectName = htmlspecialchars(strip_tags(trim($_POST['projectName'])), ENT_QUOTES);
// URL проекта
$projectUrl = trim($_POST['projectUrl']);
// Описание проекта
$projectDesc = $_POST['text'];
// Файл с картинкой
$fileurl = $_POST['fileurl'];
$data = array();
if(empty($projectName) || empty($projectUrl) || empty($projectDesc) || empty($fileurl)) {
    $data['status'] = 'NO';
    $data['mes'] = "Есть пустые поля";
} else {
    $pdo = connectToDB();
    $sql = "INSERT INTO portfolio VALUES(NULL, '$projectName', '$fileurl', '$projectUrl', '$projectDesc')";
    // Если все нормально доабвлено в БД
    if($pdo->exec($sql)){
        $data['title'] = $projectName;
        $data['url'] = $projectUrl;
        $data['img'] = $fileurl;
        $data['desc'] = $projectDesc;
        $data['status'] = 'OK';
        $data['mes'] = "Проект успешно добавлен в базу данных";
    } else {
        $data['status'] = 'NO';
        $data['mes'] = "Неизвестная ошибка при добавлении проекта в БД";
    }
}

// выводим результат в JSON
echo json_encode($data);
exit;