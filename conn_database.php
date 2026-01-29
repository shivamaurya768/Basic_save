<?php
    $server="localhost";
    $username="root";
    $password="";
    $database="students";
    $conn=new mysqli($server,$username,$password,$database);
    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }   
    else{
        //echo "Connected successfully";
    }

    if(isset($_POST['signup'])){
        $n = $_POST['username'];
        $u = $_POST['email'];
        $p = $_POST['password'];
        $qu = "INSERT INTO logins (names,username,passwd) VALUES ('$n', '$u', '$p')";
        if ($conn->query($qu) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $qu . "<br>" . $conn->error;
        }
        
    }

    //login code
    if(isset($_POST['login'])){
        $u = $_POST['email'];
        $p = $_POST['password'];
        $qu = "SELECT * FROM logins WHERE username='$u' AND passwd='$p'";
        $res = $conn->query($qu);
        if ($res->num_rows > 0) {
            echo "Login successful";
        } else {
            echo "Invalid email or password";
        }
    }
?>
