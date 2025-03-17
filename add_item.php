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

// Check if POST data is received
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Use isset() to check if POST variables exist
    $popup_image = isset($_POST['popup_image']) ? $_POST['popup_image'] : '';
    $popup_name = isset($_POST['popup_name']) ? $_POST['popup_name'] : '';
    $availableProducts = isset($_POST['available_products']) ? $_POST['available_products'] : '';
    $option = isset($_POST['option']) ? $_POST['option'] : '';
    $quantity = isset($_POST['quantity']) ? intval($_POST['quantity']) : 0;
    $size = isset($_POST['size']) ? $_POST['size'] : '';
    $color = isset($_POST['color']) ? $_POST['color'] : '';

    // Insert into database
    $stmt = $conn->prepare("INSERT INTO items (popup_image, popup_name, available_products, option_name, quantity, size, color) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssiss", $popup_image, $popup_name, $availableProducts, $option, $quantity, $size, $color);

    if ($stmt->execute()) {
        echo "Item request added successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
