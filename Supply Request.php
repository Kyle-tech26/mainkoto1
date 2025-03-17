<?php
// Enable error reporting for debugging
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

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $full_name = $_POST['full_name'];
    $employee_id = $_POST['employee_id'];
    $office_designation = $_POST['office_designation'];
    $item = $_POST['item'];
    $date = $_POST['date'];
    $supplier_name = $_POST['supplier_name'];
    $supplier_company = $_POST['supplier_company'];

    // Use prepared statement to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO supplies_request_form (full_name, employee_id, office_designation, item, date, supplier_name, supplier_company) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $full_name, $employee_id, $office_designation, $item, $date, $supplier_name, $supplier_company);

    // Execute and check the query
    if ($stmt->execute()) {
        echo "<script>alert('Request submitted successfully!'); window.location.href='Supply Request.php';</script>";
    } else {
        echo "Error executing statement: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supply Request</title>
    <link rel="stylesheet" href="style.css"> <!-- Link to external CSS -->
    <script src="script.js" defer></script> <!-- Link to the JavaScript file -->
</head>
<body>

<main id="main-contentrequest">
    
    <!-- Left Side: Supply Request Form -->
    <div id="left-form-container">
        <form action="Supply Request.php" method="POST" id="request-form">
            <label for="full_name">Full Name:</label>
            <input type="text" id="full_name" name="full_name" required><br>

            <label for="employee_id">Employee ID No.:</label>
            <input type="text" id="employee_id" name="employee_id" required><br>

            <label for="office_designation">Office Designation:</label>
            <select id="office_designation" name="office_designation" required>
                <option value="registrar">Registrar</option>
                <option value="finance">Finance</option>
                <option value="vpaa">VPAA</option>
                <option value="hrdo">HRDO</option>
                <option value="wastfi">WASTFI</option>
                <option value="library">Library</option>
                <option value="computerlab">Computer Lab</option>
            </select><br>

            <label for="item">Category of Item:</label>
            <select id="item" name="item" required onchange="handleItemSelection()">
                <option value="" disabled selected>Select Item</option>
                <option value="writingtools">Writing Tools</option>
                <option value="paperproducts">Paper Products</option>
                <option value="organizationtools">Organization Tools</option>
                <option value="storagecontainer">Storage Containers</option>
                <option value="cutting&gluingtools">Cutting & Gluing Tools</option>
                <option value="technologysupplies">Technology Supplies</option>
                <option value="office/schoolequipment">Office/School Equipment</option>
                <option value="miscellaneoussupplies">Miscellaneous Supplies</option>
                <option value="health&safety">Health & Safety</option>
            </select><br>

            <button class="add-to-cart-btn" onclick="openViewItemsPopup()">View Item Request</button>

            



            <!-- New fields -->
            <label for="date">Date:</label>
            <input type="date" id="date" name="date" required><br>

            <label for="supplier_name">Supplier Name:</label>
            <input type="text" id="supplier_name" name="supplier_name" required><br>

            <label for="supplier_company">Supplier Company:</label>
            <input type="text" id="supplier_company" name="supplier_company" required><br>

            <button type="submit">Submit Request</button>
            <button type="reset">Cancel Request</button>
        </form>
    </div>

    <!-- Right Side: Items Form (Initially Empty) -->
    <div id="right-form-container">
        <p>Hello Kyle! Select a category to begin.</p>
    </div>

    <!-- Right Corner: Product Cards -->
    <div id="right-corner-container" style="display: none;">
        <div id="product-cards-container">
            
            <!-- Product cards will be dynamically displayed here -->
        </div>

        <!-- Popup Modal -->
        <div id="popup-overlay" class="popup-overlay"></div>
    <div id="popup" class="popup">

        <h2>Product Details</h2>
        <img id="popup-image" src="" alt="Product Image">
        <p id="popup-name"></p>

        
        <input type="hidden" name="popup_image" id="hidden-popup-image">
        <input type="hidden" name="popup_name" id="hidden-popup-name">


        <label for="available-products">Available Products:</label>
        <select id="available-products"></select><br><br>

        <label for="option">Option:</label>
        <select id="option"></select><br><br>

        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="1" value="1"><br><br>

        <label for="size">Size:</label>
        <select id="size"></select><br><br>

        <label for="color">Color:</label>
        <select id="color"></select><br><br>

       

        <button class="add-to-cart-btn" onclick="addItemRequest()">Add Item Request</button>

        <button class="close-btn" onclick="closePopup()">Close</button>
    </div>
</main>

</body>
</html>
