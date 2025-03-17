<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "supply_request_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the database
$sql = "SELECT * FROM supplies_request_form";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Process Order</title>
    <link rel="stylesheet" href="style.css"> <!-- Link to your CSS file -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>
<body>
<div class="table-container">
    <h2>Order Details</h2>
    <div class="search-container">
    <input type="text" id="searchInput" placeholder="Search..." autocomplete="off">
</div>

    <table id="orderTable">
        <thead>
            <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Employee ID</th>
                <th>Office Designation</th>
                <th>Item</th>
                <th>Date</th>
                <th>Supplier Name</th>
                <th>Supplier Company</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['full_name'] . "</td>";
                    echo "<td>" . $row['employee_id'] . "</td>";
                    echo "<td>" . $row['office_designation'] . "</td>";
                    echo "<td>" . $row['item'] . "</td>";
                    echo "<td>" . $row['date'] . "</td>";
                    echo "<td>" . $row['supplier_name'] . "</td>";
                    echo "<td>" . $row['supplier_company'] . "</td>";
                    echo "<td class='actions'>
                            <i class='fas fa-eye' onclick='viewOrder(" . $row['id'] . ")'></i>
                            <i class='fas fa-edit' onclick='editOrder(" . $row['id'] . ")'></i>
                            <i class='fas fa-trash' onclick='deleteOrder(" . $row['id'] . ")'></i>
                          </td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='9'>No orders found</td></tr>";
            }
            ?>
        </tbody>
    </table>
    <div class="pagination-container">
        <div class="entries-info">Showing 5 out of 25 entries</div>
        <div class="pagination" id="pagination">
            <button>&laquo;</button>
            <button>1</button>
            <button class="active">2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>&raquo;</button>
        </div>
    </div>
</div>

</body>
</html>
