<?php
$servername = "localhost";
$username = "root"; // your database username
$password = ""; // your database password
$dbname = "user_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $jobTitle = $_POST['jobTitle'];
    $jobDescription = $_POST['jobDescription'];
    $eligibility = $_POST['eligibility'];
    $deadline = $_POST['deadline'];

    $sql = "INSERT INTO job_openings (job_title, job_description, eligibility, deadline) VALUES ('$jobTitle', '$jobDescription', '$eligibility', '$deadline')";

    if ($conn->query($sql) === TRUE) {
        echo "New job opening added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Job Opening</title>
    <link rel="stylesheet" href="job-opening.css">
</head>
<body>
    <div class="form-container">
        <h1>Add Job Opening</h1>
        <form method="POST" action="">
            <label for="jobTitle">Job Title:</label>
            <input type="text" id="jobTitle" name="jobTitle" required>
            
            <label for="jobDescription">Job Description:</label>
            <textarea id="jobDescription" name="jobDescription" required></textarea>
            
            <label for="eligibility">Eligibility Criteria:</label>
            <textarea id="eligibility" name="eligibility" required></textarea>
            
            <label for="deadline">Application Deadline:</label>
            <input type="date" id="deadline" name="deadline" required>
            
            <button type="submit">Add Job</button>
        </form>
    </div>
</body>
</html>