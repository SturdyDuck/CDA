<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    require 'vendor/autoload.php';

    try {
        $mailer = new PHPMailer();
        $mailer -> isSMTP();
        $mailer -> SMTPAuth = true;
        $mailer -> SMTPDebug = 0;
        $mailer -> CharSet = 'UTF-8';
        $mailer -> Encoding = 'base64';

        $name = $_POST['name'];
        $mail = $_POST['email'];
        $phone = $_POST['phone'];
        $msg = $_POST['message'];

        $subject = 'Получена заявка!';
        $content = 'От: ' . $name . '<br>'
            . 'Почта: ' . $mail . '<br>'
            . 'Телефон: ' . $phone . '<br>'
            . 'Сообщение: ' . $msg;
        // Sending message

        $fromAddress = 'CreativeDigitalAgencyTemplate@gmail.com';
        $fromPass = 'asd125125';
        $toAddress = 'NikitinDanV@gmail.com';

        $mailer -> Host = 'ssl://smtp.gmail.com';
        $mailer -> Port = 465;
        $mailer -> Username = $fromAddress;
        $mailer -> Password = $fromPass;

        $mailer -> setFrom($fromAddress, 'CDA');

        $mailer -> addAddress($toAddress, 'Хозяин');
        $mailer -> Subject = $subject;
        $mailer -> isHTML(true);
        $mailer -> Body = mb_convert_encoding($content, 'utf-8');
        $mailer -> AltBody = "Пришла заявка: " . $content;

        if (!$mailer->send()) {
            //echo 'Mailer Error: ' . $mailer->ErrorInfo;
        } else {
            //echo 'Message sent!';
        }

        
    }
    catch (Exception $ex) {
        //echo $ex;
    }
?>