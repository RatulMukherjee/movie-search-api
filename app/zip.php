<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["tozip"]["name"]);
$uploadOk = 1;


if(isset($_POST["submit"])) {
// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["tozip"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}


if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} 
else {
    if (move_uploaded_file($_FILES["tozip"]["tmp_name"], $target_file)) 
    {
        echo "The file ". basename( $_FILES["tozip"]["name"]). " has been uploaded.";
    } 
    else 
    {
        echo "Sorry, there was an error uploading your file.";
    }
}
}
?>