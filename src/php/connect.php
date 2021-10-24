<?php
   $dbhost = '34.66.219.112';
   $dbuser = 'php';
   $dbpass = 'php';
   $dbname = 'cloud_computing'
   $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
   
   if(! $conn ){
      die('Could not connect: ' . mysql_error());
   }
   echo 'Connected successfully<br />';
   
   $sql = "CREATE TABLE user_info( ".
   "user_id INT NOT NULL AUTO_INCREMENT, ".
   "username VARCHAR(100) NOT NULL, ".
   "password VARCHAR(40) NOT NULL, ".
   "PRIMARY KEY ( user_id )); ";
   
   
   $retval = mysqli_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not create table: ' . mysql_error());
   }
   echo "Table created successfully";
   mysql_close($conn);
?>
