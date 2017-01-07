<?php
$letter = '';
$emailTo = $_POST['email_to'];
$emailFrom = $_POST['email_from'];
$siteName = $_POST['site_name'];

$letter = $_POST['text'];
$subject = $_POST['subject'];


$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: " . $siteName . " <" . $emailFrom . ">\r\n";
$headers .= "Bcc: admin-archive@". $siteName ."\r\n";
$mailed = mail($emailTo, $subject, $letter, $headers);
echo 'Отправлено письмо, статус отправки:' . $mailed . ', на ящик: ' . $emailTo;
?>