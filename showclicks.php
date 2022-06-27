<html>
  <title>0url</title>
    <link rel="stylesheet" href="style.css">
</html>
<?php



    $urlid = $_POST['lname'];
    $req1 = '{"urlid": "';
    $req1 .= $_POST['lname'];
    $req1 .= '"}';
    $body = $req1;



$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://localhost:9135/getclicks");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
$result = curl_exec($ch);
echo "<body>";

echo "<strong><center><h1 class='phptext'>$result</h1></center></strong>";
echo "</body>";




exit();





?>
