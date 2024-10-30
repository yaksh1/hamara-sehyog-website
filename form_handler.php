<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->isSMTP();//Send using SMTP
$mail->Host ='smtp.gmail.com';//Set the SMTP server to send through
$mail->SMTPAuth = true; //Enable SMTP authentication
$mail->Username = 'foundation.hamarasehyog@gmail.com'; //SMTP username (email)
$mail->Password ='lofr jxuk ydtv qxbo'; //SMTP password (email password)
$mail->Port = '587';
$mail->SMTPSecure = 'TLS';

//From SMTP username (email)
$mail->setFrom('yakshgandhi1@gmail.com','Hamara Sehyog');
//To ...
$mail->addAddress('yakshg01@gmail.com');
//Subject
$mail->Subject = 'Joining Hamara Sehyog';

//Body
$body = 'Hello there!';

$mail->Body = $body;

if(trim(!empty($_POST['name']))){
$body .= "<p>Name: <strong>".$_POST['name' ]."</strong></p>";
}
if(trim(!empty($_POST['email']))){
$body .= "<p>E-mail: <strong>".$_POST['email' ]."</strong></p>";
}
if(trim(!empty($_POST['email']))){
$body .= "<p>E-mail: <strong>".$_POST['email' ]."</strong></p>";
}

if(trim(!empty($_POST['subject']))){
$body .= "<p>Subject: <strong>".$_POST['subject' ]."</strong></p>";
}


$mail->Body = $body;
//Sending
$mail->send();
$mail->smtpClose():

    // if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //     $to = "foundation.hamarasehyog@gmail.com";

    //     $name = isset($_POST["name"]) ? $_POST["name"] : "";
    //     $email = isset($_POST["email"]) ? $_POST["email"] : "";
    //     $subject = isset($_POST["subject"]) ? $_POST["subject"] : "";
    //     $message = isset($_POST["message"]) ? $_POST["message"] : "";

    //     if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    //         echo "Please fill in all fields.";
    //         exit;
    //     }

    //     $email_content = "Name: $name\n";
    //     $email_content .= "Email: $email\n";
    //     $email_content .= "Subject: $subject\n";
    //     $email_content .= "Message: $message\n";

    //     $headers = "From: $email\r\n";
    //     $headers .= "Reply-To: $email\r\n";

    //     if (mail($to, $subject, $email_content, $headers)) {
    //         echo "Email sent successfully!";
    //     } else {
    //         echo "Error sending email.";
    //     }
    // }
?>
