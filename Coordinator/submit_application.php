<?php
session_start();

// Database connection
$conn = new mysqli("localhost", "root", "", "user_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usn = $conn->real_escape_string($_POST['usn']);
    $domain = $conn->real_escape_string($_POST['domain']);
    
    // Handle file upload
    $cv = $_FILES['cv'];
    $cvName = $cv['name'];
    $cvTmpName = $cv['tmp_name'];
    $cvError = $cv['error'];
    
    // Check if the file is a PDF
    if ($cvError === 0) {
        $cvDestination = 'uploads/' . $cvName; // Make sure the 'uploads' directory exists
        move_uploaded_file($cvTmpName, $cvDestination);
        
        // Insert data into the database
        $query = "INSERT INTO applications (usn, domain, cv) VALUES ('$usn', '$domain', '$cvDestination')";
        
        if ($conn->query($query) === TRUE) {
            echo "Application submitted successfully!";
        } else {
            echo "Error: " . $query . "<br>" . $conn->error;
        }
    } else {
        echo "Error uploading the CV. Please try again.";
    }
}

$conn->close();
?>