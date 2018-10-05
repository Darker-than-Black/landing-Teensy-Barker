<?php
 function translate_key()
{   
    $translate = array(
        "username" => "Ім'я",
        "phone" => "Телефон",
        "email" => "Пошта",
        "comment" => "Коментарі",
        "price" => "Ціна",
        "room" => "Кімната",
        "date" => "Дата",
        "time" => "Час",
        "team" => "Кількість гравців",
        "promocode" => "Промокод"
    );
    return $translate[func_get_arg(0)];
}

$email = $_POST["email"];
$name = $_POST["username"];
$phone = $_POST["phone"];
$gamers_amount = $_POST["gamers"];
$price = $_POST["price"];
echo $price;
$comment = $_POST["comment"];
$date = $_POST["date"];
$time = $_POST["time"];
$room_name = $_POST["room"];
$promocode = $_POST["promocode"];


$to = 's.ocheretyany@gmail.com';
$message='<html><body>';


if(!empty($_POST['date'])){$message .= translate_key("date").' : '.$_POST['date'].' ; <br> ';};
if(!empty($_POST['time'])){$message .= translate_key("time").' : '.$_POST['time'].' ; <br> ';};
if(!empty($_POST['username'])){$message .= translate_key("username").' : '.$_POST['username'].' ; <br> ';};
if(!empty($_POST['phone'])){$message .= translate_key("phone").' : '.$_POST['phone'].' ; <br> ';};
if(!empty($_POST['email'])){$message .= translate_key("email").' : '.$_POST['email'].' ; <br> ';};
if(!empty($_POST['gamers'])){$message .= translate_key("gamers").' : '.$_POST['gamers'].' ; <br> ';};
if(!empty($_POST['comment'])){$message .= translate_key("comment").' : '.$_POST['comment'].' ; <br> ';};
if(!empty($_POST['promocode'])){$message .= translate_key("promocode").' : '.$_POST['promocode'].' ; <br></body></html> ';};


$from = 'tee@gmail.com';
echo $message;
$subject ='Teensy landing';
$header .= 'Content-type: text/html; charset=utf-8' . "\r\n";;

mail($to, $subject, $message, $header);

?>