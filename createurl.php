<html>
  <title>0url</title>
    
</html>
<?php



    $req1 = '{"shortthisurl": "';
    $req1 .= $_POST['lname'];
    $req1 .= '"}';
    $body = $req1;



$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://localhost:9135/urlshort");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
$result = curl_exec($ch);
echo '<link rel="stylesheet" href="style.css">';
echo '<html>';
echo '<div class="name">';
echo '<h1><center>Your shortened url ';
echo $result;
echo '</h1></center>';
echo '</div>';
echo '</html>';




exit();




?>
