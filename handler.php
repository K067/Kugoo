<?php
$user_email=htmlspecialchars($_POST["user_email"]);
$user_phone=htmlspecialchars($_POST["user_phone"]);

$token = "";
$chat_id = "";

$formData = array(
   "email: " => $user_email ,
    "phone: " => $user_phone
);

foreach($formData as $key => $value){
    $text .=$key."<b>".urlencode($value)."</b>"."%0A";
}

$sendToTelegram=fopen("","r");

if($sendToTelegram){
    echo "Ok";
}else{
    echo "no";
}
