<?php
$name = isset($_POST['name'])? 
$_POST['name']: '';
$email =isset($_POST['email'])? 
$_POST['email']: '';
$phone = isset($_POST['phone'])? 
$_POST['phone']: '';
$address = isset($_POST['address'])? 
$_POST['address']: '';

$output = "
    <h2>Registration Successful!</h2>
    <p>Name: $name</p>
    <p>Email: $email</p>
    <p>Phone: $phone</p>
    <p>Address: $address</p>
";

echo $output;
?>