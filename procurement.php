<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="style.css"> <!-- Link to external CSS -->
  <script src="script.js" defer></script> <!-- Link to the JavaScript file -->
</head>
<body>
  <header>
    <!-- Menu button and dropdown code -->
    <div class="left-button">
      <button class="menu-btn">Menu</button>
      <div class="menu-dropdown">
        <a href="javascript:void(0)" onclick="loadPage('SupplyRequest')">Supply Request</a>
        <a href="javascript:void(0)" onclick="loadPage('ProcessOrder')">Process Order</a>
        <a href="javascript:void(0)" onclick="loadPage('DeliveryMonitoring')">Delivery Monitoring</a>
      </div>
    </div>
    <div class="logo">Logo</div>
    <div class="user-info">
      <div class="user-name">
        <span class="role">Administrator</span>
        <span class="name">Kyle Javier</span>
      </div>
      <div class="dropdown">
        <button class="dropdown-btn">▼</button>
        <div class="dropdown-content">
          <a href="javascript:void(0)" onclick="loadPage('EditProfile')">Edit Profile</a>
          <a href="logout.php">Logout</a>
        </div>
      </div>
    </div>
  </header>

  <main id="main-content">
    <h1>Welcome to the Admin Dashboard</h1>
    <p>Select an option from the menu.</p>
  </main>

</body>
</html>
