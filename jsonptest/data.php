<?php
 
$data = ".......";
$callback = $_GET['callback'];
echo $callback.'('.json_encode($data).')';
exit;
 
?>