<?php
session_start();
$conn = new mysqli("localhost", "root", "", "user_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to get all job openings
$query = "SELECT * FROM job_openings";
$result = $conn->query($query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Listings</title>
    <link rel="stylesheet" href="listings.css">
</head>
<body>
    <div class="job-listings-container">
        <h1>Available Job Openings</h1>
        <div id="jobList">
            <?php if ($result->num_rows > 0): ?>
                <?php while ($row = $result->fetch_assoc()): ?>
                    <div class="job-item">
                        <h2><?php echo htmlspecialchars($row['job_title']); ?></h2>
                        <p><strong>Description:</strong> <?php echo htmlspecialchars($row['job_description']); ?></p>
                        <p><strong>Eligibility:</strong> <?php echo htmlspecialchars($row['eligibility']); ?></p>
                        <p><strong>Deadline:</strong> <?php echo htmlspecialchars($row['deadline']); ?></p>
                        <button onclick="window.location.href='jobapp.html'">Apply Now</button>
                    </div>
                <?php endwhile; ?>
            <?php else: ?>
                <p>No job postings available at the moment.</p>
            <?php endif; ?>
        </div>
        <button class="home-btn" onclick="window.location.href='home.php'">Go Back to Home</button>
    </div>
</body>
</html>

<?php
$conn->close();
?>