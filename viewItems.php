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

// Pagination settings
$itemsPerPage = 10;
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$offset = ($page - 1) * $itemsPerPage;

// Search functionality
$searchQuery = "";
if (isset($_GET['search'])) {
    $searchQuery = $_GET['search'];
}

// Fetch data from the items table with pagination and search
$sql = "SELECT * FROM items WHERE popup_name LIKE '%$searchQuery%' LIMIT $offset, $itemsPerPage";
$result = $conn->query($sql);

// Get total number of items for pagination
$totalItems = $conn->query("SELECT COUNT(*) AS count FROM items WHERE popup_name LIKE '%$searchQuery%'")->fetch_assoc()['count'];
$totalPages = ceil($totalItems / $itemsPerPage);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Item Requests</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>
<div class="table-container">
    <h2>Customer Details</h2>
    <div class="search-container">
        <input type="text" id="searchInput" placeholder="Search..." onkeyup="searchItems()" autocomplete="off">
    </div>

    <table id="orderTable">
        <thead>
            <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Available Product</th>
                <th>Option</th>
                <th>Quantity</th>
                <th>Size</th>
                <th>Color</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result->num_rows > 0) {
                $counter = $offset + 1;
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $counter . "</td>";
                    echo "<td><img src='" . $row['popup_image'] . "' alt='" . $row['popup_name'] . "' width='50'></td>";
                    echo "<td>" . $row['popup_name'] . "</td>";
                    echo "<td>" . $row['available_products'] . "</td>";
                    echo "<td>" . $row['option_name'] . "</td>";
                    echo "<td>" . $row['quantity'] . "</td>";
                    echo "<td>" . $row['size'] . "</td>";
                    echo "<td>" . $row['color'] . "</td>";
                    echo "<td class='actions'>
                            <i class='fas fa-eye' onclick='viewItem(" . $row['id'] . ")'></i>
                            <i class='fas fa-edit' onclick='editItem(" . $row['id'] . ")'></i>
                            <i class='fas fa-trash' onclick='deleteItem(" . $row['id'] . ")'></i>
                          </td>";
                    echo "</tr>";
                    $counter++;
                }
            } else {
                echo "<tr><td colspan='9'>No items found</td></tr>";
            }
            ?>
        </tbody>
    </table>

   <!-- Pagination -->
<div class="pagination-container">
    <?php if ($totalPages > 1): ?>
        <?php for ($i = 1; $i <= $totalPages; $i++): ?>
            <button class="pagination-button <?= ($i == $page) ? 'active' : '' ?>" onclick="goToPage(<?= $i ?>)"><?= $i ?></button>
        <?php endfor; ?>
    <?php else: ?>
        <button class="pagination-button active">1</button>
    <?php endif; ?>
</div>


</div>

<script>
    // Real-time search function
    document.getElementById("searchInput").addEventListener("input", function() {
        const searchTerm = this.value.toLowerCase();
        fetch("viewItems.php?search=" + encodeURIComponent(searchTerm))
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const newRows = doc.querySelector("#orderTable tbody").innerHTML;
                document.querySelector("#orderTable tbody").innerHTML = newRows;
            });
    });

    // Pagination without reloading
    function goToPage(page) {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const url = new URL(window.location.href);
        url.searchParams.set("page", page);
        url.searchParams.set("search", searchTerm);
        window.history.pushState({}, "", url);

        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const newRows = doc.querySelector("#orderTable tbody").innerHTML;
                document.querySelector("#orderTable tbody").innerHTML = newRows;

                const paginationContainer = doc.querySelector(".pagination-container").innerHTML;
                document.querySelector(".pagination-container").innerHTML = paginationContainer;
            });
    }
</script>
</body>
</html>
