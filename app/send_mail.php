<?php
// Открываем сессию
session_start();

// Получаем данные из формы
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$message = htmlspecialchars(strip_tags(trim($_POST['message'])), ENT_QUOTES);
$captcha_code = $_POST['captcha'];
$sess_captcha = $_SESSION['randStrn'];

// массив для отправки на фронтенд
$data = array();

// Если капча введена не верно
if($sess_captcha != $captcha_code){

    $data['status'] = 'NO';
    $data['mes'] = "Код с картинки введен не верно";

}
// Если капча введена верно
else {
    // Проверяем email
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        // Конфигурируем результат
        require_once 'libs/autoload.php';
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'smtp.yandex.ru';
        $mail->SMTPAuth = true;
        $mail->Username = 'email';
        $mail->Password = 'пароль';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->CharSet = 'UTF-8';

        $mail->From = 'email';
        $mail->FromName = 'Сообщение с сайта';
        $mail->addAddress($email, $name);

        $mail->WordWrap = 80;
        $mail->Subject = 'Сообщение с сайта портфолио';
        $mail->Body    = $message;

        if($mail->send()){
            $data['status'] = 'OK';
            $data['mes'] = "Письмо успешно отправлено";
        } else {
            $data['status'] = 'NO';
            $data['mes'] = "Возникла неизвестная ошибка при отправке письма";
        }

    } else {

        $data['status'] = 'NO';
        $data['mes'] = "Правильно заполните поле e-mail";

    }

}

echo json_encode($data);
exit;
