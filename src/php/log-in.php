<?php
//DB connect
include('connect.php');

//log-in
if (!isset($_POST['submit'])) {
    exit('Invalid visit')
}


//data reading
$username = $_POST['username'];
$password = $_POST['password'];


//data issue handling
if (strlen($password)<6) {
    exit('Error: Invalid password setting. Please enter more than 6 units');
}

//password encryption
$password = md5($password);

//data inserting
$sql = "INSERT INTO user_info(username,password)VALUES('$username','$password')"  



$res = mysqli_query($sql,$conn); 
if ($res) {
    exit('Registed/Login completed! <a href="index.html" Continue</a>');
}else{
    echo 'Sorry,you have inputed incorrect password or username: ',mysql_error(), '<br />';
    echo 'Please try it again<a href="javascript:history.back(-1);"> return </a>';

}

?>