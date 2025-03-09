<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submitted Applications</title>
    <link rel="stylesheet" href="view_applications.css">
</head>
<body>
    <div class="applications-container">
        <h1>Submitted Applications</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USN</th>
                    <th>Domain</th>
                    <th>CV</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Database connection
                $conn = new mysqli("localhost", "root", "", "user_db");

                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                // Query to fetch submitted applications
                $query = "SELECT * FROM applications";
                $result = $conn->query($query);

                // Check if there are results
                if ($result->num_rows > 0) {
                    // Output data of each row
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . htmlspecialchars($row['id']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['USN']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['Domain']) . "</td>";
                        echo "<td><a href='" . htmlspecialchars($row['CV']) . "' target='_blank'>View CV</a></td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='4'>No applications submitted yet.</td></tr>";
                }

                $conn->close();
                ?>
            </tbody>
        </table>
        <div class="center-button">
    <button onclick="window.location.href='coordinator.php'">Back to Dashboard</button>
</div>
    </div>
</body>
</html>