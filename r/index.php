<?php

if (isset($_GET['u'])) {
    echo $_GET['u'];
    $urlid = $_GET['u'];
    $req1 = '{"urlid": "';
    $req1 .= $_GET['u'];
    $req1 .= '"}';
    $body = $req1;
 


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://localhost:9135/getclearurl");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
$result = curl_exec($ch);
echo $result;
echo $body;


header("Location: $result", TRUE, 301);
exit();


} else {
  echo 'no url';
}


?>