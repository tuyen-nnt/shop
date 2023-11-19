<?php
// https://phpapprentice.com/web/http-server.html
$info=$_POST["id"];
echo "hello".$info;

$arr = []
$arr["id"] = $_POST["id"];

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$protocol = $_SERVER['SERVER_PROTOCOL'];
$headers = getallheaders();

echo "$method $uri $protocol <br/>";
foreach ($headers as $key => $header) {
    echo "$key: $header <br/>";
}
?>