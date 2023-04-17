<?php
$user_name=htmlspecialchars($_POST["username"]);
$user_phone=htmlspecialchars($_POST["userphone"]);

$token = "6144473339:AAGEvoLd26LjgExd0hPEkxpUJig5GSLDBA8";
$chat_id = "-993149160";

$formData = array(
   "client: " => $user_name ,
    "phone: " => $user_phone
);

foreach($formData as $key => $value){
    $text .=$key."<b>".urlencode($value)."</b>"."%0A";
}

$sendToTelegram=fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html","r");

if($sendToTelegram){
    echo "Ok";
}else{
    echo "no";
}