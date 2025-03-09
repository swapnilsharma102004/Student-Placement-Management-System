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
    $studentName = $_POST['studentSelect'];
    $interviewDate = $_POST['interviewDate'];
    $interviewTime = $_POST['interviewTime'];

    $sql = "INSERT INTO interviews (student_name, interview_date, interview_time) VALUES ('$studentName', '$interviewDate', '$interviewTime')";

    if ($conn->query($sql) === TRUE) {
        echo "<div id='successMessage'><p>Interview scheduled successfully!</p></div>";
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
    <title>Schedule Interview</title>
    <link rel="stylesheet" href="schedual-interview.css">
</head>
<body>
    <div class="container">
        <h1>Schedule Interview</h1>

        <form method="POST" action="">
            <label for="studentSelect">Select Student:</label>
            <select id="studentSelect" name="studentSelect" required>
                <option value="">Select a student</option>
                <option value="Sana K S">Student 1 (Sana K S)</option>
                <option value="Swapnil Sharma">Student 2 (Swapnil Sharma)</option>
                <option value="Rishikesh Raj">Student 3 (Rishikesh Raj)</option>
                <!-- Add more student options as needed -->
            </select>

            <label for="interviewDate">Interview Date:</label>
            <input type="date" id="interviewDate" name="interviewDate" required>

            <label for="interviewTime">Interview Time:</label>
            <input type="time" id="interviewTime" name="interviewTime" required>

            <button type="submit">Schedule Interview</button>
        </form>
    </div>
</body>
</html>