// Function to load the page content dynamically
function loadPage(page) {
    let content = '';

    // Switch statement to load different content based on the page
    switch (page) {
        case 'SupplyRequest':
            // Fetch the content for the Supply Request page
            fetch('Supply Request.php')
                .then(response => response.text())
                .then(html => { 
                    document.getElementById('main-content').innerHTML = html;
                    // Show product cards after the content is loaded
                    showProductCards();
                })
                .catch(error => console.log('Error loading the page:', error));
            break;
        case 'ProcessOrder':
            fetch('Process Order.php')
                .then(response => response.text())
                .then(html => {
                    document.getElementById('main-content').innerHTML = html;
                })
                .catch(error => console.log('Error loading the page:', error));
            break;
        case 'DeliveryMonitoring':
            fetch('Delivery Monitoring.php')
                .then(response => response.text())
                .then(html => {
                    document.getElementById('main-content').innerHTML = html;
                })
                .catch(error => console.log('Error loading the page:', error));
            break;
        case 'EditProfile':
            content = `
                <h1>Edit Profile</h1>
                <form action="updateProfile.php" method="POST">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" value="" required>
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="" required>
                    
                    <button type="submit">Update Profile</button>
                </form>`;
            break;
        default:
            content = '<h1>Welcome to the Admin Dashboard</h1><p>Select an option from the menu.</p>';
            break;
    }

    // If it's not the 'SupplyRequest' page, just insert the content directly
    if (page !== 'SupplyRequest') {
        document.getElementById('main-content').innerHTML = content;
    }
}

// Function to handle the selection of items (WritingTools, Ballpen, etc.)
function handleItemSelection() {
    const item = document.getElementById('item').value;
    console.log('Selected item:', item); // Debugging line
    
    const rightFormContainer = document.getElementById('right-form-container');
    const rightCornerContainer = document.getElementById('right-corner-container');
    const productCardsContainer = document.getElementById('product-cards-container');
    
    // Reset right corner content
    productCardsContainer.innerHTML = ''; 
    rightCornerContainer.style.display = "none"; // Hide right corner initially
    
    // Clear previous content
    rightFormContainer.innerHTML = ''; 
    

        

    if (item === 'writingtools') {
        console.log('Writing tools selected'); // Debugging line
        // Display a dropdown for selecting writing tools (Pencil, Ballpen, Crayon)
        rightFormContainer.innerHTML = `
            <h3>Select Writing Tool</h3>
            <form action="SupplyRequest.php" method="POST">
                <label for="writing_tool">Writing Tool:</label>
                <select id="writing_tool" name="writing_tool" required onchange="showProductCards()">
                    <option value="" disabled selected>Select Writing Tool</option>
                    <option value="pencil">Pencil</option>
                    <option value="ballpen">Ballpen</option>
                    <option value="coloredpencil">Colored Pencil</option>
                    <option value="marker">Marker</option>
                    <option value="signature">Signature Pen</option>
                    <option value="highlighter">Highlighter</option>
                </select><br>
            </form>
        `;
    }
    else if (item === 'paperproducts') {
        console.log('Paper products selected');
        // Display a dropdown for selecting paper products (A4 Paper, Notebooks, etc.)
        rightFormContainer.innerHTML = `
            <h3>Select Paper Product</h3>
            <form id="paperProductForm" action="SupplyRequest.php" method="POST">
                <label for="paper_product">Paper Product:</label>
                <select id="paper_product" name="paper_product" required onchange="showProductCards()">
                    <option value="" disabled selected>Select Paper Product</option>
                    <option value="a4paper">A4 Paper</option>
                    <option value="notebooks">Notebooks</option>
                    <option value="stickyNotes">Sticky Notes</option>
                </select><br>
            </form>
        `;
    }
    else if (item === 'organizationtools') {
        console.log('Organization tools selected');
        // Display a dropdown for selecting organization tools
        rightFormContainer.innerHTML = `
            <h3>Select Organization Tool</h3>
            <form id="organizationToolForm" action="SupplyRequest.php" method="POST">
                <label for="organization_tool">Organization Tool:</label>
                <select id="organization_tool" name="organization_tool" required onchange="showProductCards()">
                    <option value="" disabled selected>Select Organization Tool</option>
                    <option value="folders">Folders</option>
                    <option value="binders">Binders</option>
                    <option value="labels">Labels</option>
                </select><br>
            </form>
        `;
    }
    else if (item === 'storagecontainer') {
        console.log('Storage containers selected');
        // Display a dropdown for selecting storage containers
        rightFormContainer.innerHTML = `
            <h3>Select Storage Container</h3>
            <form id="storageContainerForm" action="SupplyRequest.php" method="POST">
                <label for="storage_container">Storage Container:</label>
                <select id="storage_container" name="storage_container" required onchange="showProductCards()">
                    <option value="" disabled selected>Select Storage Container</option>
                    <option value="plasticboxes">Plastic Boxes</option>
                    <option value="drawerorganizers">Drawer Organizers</option>
                    <option value="storagebins">Storage Bins</option>
                </select><br>
            </form>
        `;
    
    }
    else if (item === 'cutting&gluingtools') {
        console.log('Cutting & Gluing tools selected');
        // Display a dropdown for selecting cutting and gluing tools
        rightFormContainer.innerHTML = `
            <h3>Select Cutting & Gluing Tool</h3>
            <form id="cuttingGluingToolsForm" action="SupplyRequest.php" method="POST">
                <label for="cutting_gluing_tool">Cutting & Gluing Tool:</label>
                <select id="cutting_gluing_tool" name="cutting_gluing_tool" required onchange="showProductCards()">
                    <option value="" disabled selected>Select Cutting & Gluing Tool</option>
                    <option value="scissors">Scissors</option>
                    <option value="gluegun">Glue Gun</option>
                    <option value="tape">Tape</option>
                </select><br>
            </form>
        `;
   
    }

    else if (item === 'technologysupplies') {
        console.log('Technology supplies selected');
        rightFormContainer.innerHTML = `
            <h3>Select Technology Supply</h3>
            <form id="technologySuppliesForm" action="SupplyRequest.php" method="POST">
                <label for="technology_supply">Technology Supply:</label>
                <select id="technology_supply" name="technology_supply" required onchange="showProductCards()">
                    <option value="" disabled selected>Select Technology Supply</option>
                    <option value="headphones">Headphones</option>
                    <option value="usb">USB Drives</option>
                    <option value="keyboard">Keyboards</option>
                </select><br>
            </form>
        `;
    }
    
    

    else if (item === 'office/schoolequipment') {
        console.log('Office/School equipment selected');
        // Display a dropdown for selecting office/school equipment
        rightFormContainer.innerHTML = `
            <h3>Select Office/School Equipment</h3>
            <form id="officeSchoolEquipmentForm" action="SupplyRequest.php" method="POST">
                <label for="office_school_equipment">Office/School Equipment:</label>
                <select id="office_school_equipment" name="office_school_equipment" required onchange="showProductCards()">
                    <option value="" disabled selected>Select Office/School Equipment</option>
                    <option value="projector">Projector</option>
                    <option value="printer">Printer</option>
                    <option value="calculator">Calculator</option>
                </select><br>
            </form>
        `;
       
    }

    else if (item === 'miscellaneoussupplies') {
        console.log('Miscellaneous supplies selected');
        // Display a dropdown for selecting miscellaneous supplies
        rightFormContainer.innerHTML = `
            <h3>Select Miscellaneous Supply</h3>
            <form id="miscellaneousSuppliesForm" action="SupplyRequest.php" method="POST">
                <label for="miscellaneous_supply">Miscellaneous Supply:</label>
                <select id="miscellaneous_supply" name="miscellaneous_supply" required onchange="showProductCards()">
                    <option value="" disabled selected>Select Miscellaneous Supply</option>
                    <option value="batteries">Batteries</option>
                    <option value="chalk">Chalk</option>
                    <option value="tissues">Tissues</option>
                </select><br>
            </form>
        `;
    }
    
       
    

    else if (item === 'health&safety') {
        console.log('Health & Safety supplies selected');
        // Display a dropdown for selecting health & safety supplies
        rightFormContainer.innerHTML = `
            <h3>Select Health & Safety Supply</h3>
            <form id="healthSafetySuppliesForm" action="SupplyRequest.php" method="POST">
                <label for="health_safety">Health & Safety Supply:</label>
                <select id="health_safety" name="health_safety" required onchange="showProductCards()">
                    <option value="" disabled selected>Select Health & Safety Supply</option>
                    <option value="firstaidkit">First Aid Kit</option>
                    <option value="face_masks">Face Masks</option>
                    <option value="gloves">Hand Sanitizer</option>
                </select><br>
            </form>
        `;
        
    }
}

// Function to show product cards when an item is selected
function showProductCards() {
    const item = document.getElementById('item').value;
    const writingTool = document.getElementById('writing_tool') ? document.getElementById('writing_tool').value : null;
    const paperProduct = document.getElementById('paper_product') ? document.getElementById('paper_product').value : null;
    const organizationTools = document.getElementById('organization_tool') ? document.getElementById('organization_tool').value : null;
    const storageContainer = document.getElementById('storage_container') ? document.getElementById('storage_container').value : null;
    const cuttingGluingTools = document.getElementById('cutting_gluing_tool') ? document.getElementById('cutting_gluing_tool').value : null;
    const technologySupplies = document.getElementById('technology_supply') ? document.getElementById('technology_supply').value : null;
    const officeSchoolEquipment = document.getElementById('office_school_equipment') ? document.getElementById('office_school_equipment').value : null;
    const miscellaneousSupply = document.getElementById('miscellaneous_supply') ? document.getElementById('miscellaneous_supply').value : null;
    const healthSafetySupply = document.getElementById('health_safety') ? document.getElementById('health_safety').value : null;


    const productCardsContainer = document.getElementById('product-cards-container');
    
    // Clear any previous product cards
    productCardsContainer.innerHTML = '';
     // Show the product cards container after content has been added
    

    // If writing tool is selected
    if (item === 'writingtools' && writingTool) {
        let productCardContent = '';
        
        if (writingTool === 'pencil') {
            productCardContent = `
                <div class="product-card">
                    <img src="monggol.jpg" alt="Mongol Pencil">
                    <h4>Mongol Pencil</h4>
                    <button onclick="viewProduct(' Pencil', 'Mongol', 'monggol.jpg')">View</button>
                </div>
                <div class="product-card">
                    <img src="faber.jpg" alt="Castle Pencil">
                    <h4>Castle Pencil</h4>
                    <button onclick="viewProduct(' Pencil', 'Castle', 'faber.jpg')">View</button>
                </div>
                <div class="product-card">
                    <img src="joy.jpg" alt="Joy Pencil">
                    <h4>Joy Pencil</h4>
                    <button onclick="viewProduct(' Pencil', 'Joy', 'joy.jpg')">View</button>
                </div>
                
            `;
        } else if (writingTool === 'ballpen') {
            productCardContent = `
                <div class="product-card">
                    <img src="faber.jpg" alt="Ballpen">
                    <h4>Faber Ballpen</h4>
                    <button onclick="viewProduct(' Ballpen', 'FaberCastell', 'faber.jpg')">View</button>
                </div>
                <div class="product-card">
                    <img src="pilot.jpg" alt="Ballpen">
                    <h4>Pilot Ballpen</h4>
                    <button onclick="viewProduct(' Ballpen', 'Pilot', 'pilot.jpg')">View</button>
                </div>
                <div class="product-card">
                    <img src="pentel.jpg" alt="Ballpen">
                    <h4>Pentel Ballpen</h4>
                    <button onclick="viewProduct(' Ballpen', 'Pentel', 'pentel.jpg')">View</button>
                </div>
            `;
        } else if (writingTool === 'coloredpencil') {
            productCardContent = `
                <div class="product-card">
                    <img src="crayola.jpg" alt="Crayon">
                    <h4>Crayola Crayon</h4>
                    <button onclick="viewProduct(' Crayon', 'Crayola', 'crayola.jpg')">View</button>
                </div>
                <div class="product-card">
                    <img src="marker-crayon.jpg" alt="Crayon">
                    <h4>Marker Crayon</h4>
                    <button onclick="viewProduct(' Crayon', 'Marker', 'marker-crayon.jpg')">View</button>
                </div>
            `;
        } else if (writingTool === 'marker') {
            productCardContent = `
                <div class="product-card marker-card sharpie-card">
            <img src="sharpie.jpg" alt="Marker">
            <h4>Sharpie Marker</h4>
            <button onclick="viewProduct('Sharpie Marker', 'Sharpie', 'sharpie.jpg')">View</button>
        </div>
        <div class="product-card marker-card pilot-marker-card">
            <img src="pilot-marker.jpg" alt="Marker">
            <h4>Pilot Marker</h4>
            <button onclick="viewProduct('Pilot Marker', 'Pilots', 'pilot-marker.jpg')">View</button>
        </div>
        <div class="product-card marker-card faber-marker-card">
            <img src="faber-marker.jpg" alt="Marker">
            <h4>Faber Castell Marker</h4>
            <button onclick="viewProduct('Faber Castell Marker', 'FaberCastells', 'faber-marker.jpg')">View</button>
        </div>
    `;
} else if (writingTool === 'signature') {
    productCardContent = `
        <div class="product-card">
            <img src="parker.jpg" alt="Signature Pen">
            <h4>Parker Signature Pen</h4>
            <button onclick="viewProduct('Parker','Parker', 'parker.jpg')">View</button>
        </div>
        <div class="product-card">
            <img src="montblanc.jpg" alt="Signature Pen">
            <h4>Montblanc Signature Pen</h4>
            <button onclick="viewSignaturePenProduct('Montblanc','Montblanc', 'montblanc.jpg')">View</button>
        </div>
        <div class="product-card">
            <img src="cross.jpg" alt="Signature Pen">
            <h4>Cross Signature Pen</h4>
            <button onclick="viewSignaturePenProduct('Cross','Cross', 'cross.jpg')">View</button>
        </div>
    `;
        } else if (writingTool === 'highlighter') {
            productCardContent = `
                <div class="product-card">
                    <img src="stabilo.jpg" alt="Highlighter">
                    <h4>Stabilo Highlighter</h4>
                    <button onclick="viewProduct('Stabilo Highlighter', 'Stabilo', 'stabilo.jpg')">View</button>
                </div>
                <div class="product-card">
                    <img src="faber-highlighter.jpg" alt="Highlighter">
                    <h4>Faber Castell Highlighter</h4>
                    <button onclick="viewProduct('Faber Castell Highlighter', 'FaberCastell', 'faber-highlighter.jpg')">View</button>
                </div>
                <div class="product-card">
                    <img src="pilot-highlighter.jpg" alt="Highlighter">
                    <h4>Pilot Highlighter</h4>
                    <button onclick="viewProduct(' Highlighter', 'Piloter', 'pilot-highlighter.jpg')">View</button>
                </div>
            `;
        }
        // Append the product cards for writing tools
        productCardsContainer.innerHTML = productCardContent;
    } 
    
    
    // Paper products section
else if (item === 'paperproducts' && paperProduct) {
    let paperProductCardContent = '';

    // Handle A4 Paper
    if (paperProduct === 'a4paper') {
        paperProductCardContent = `
             <div class="product-card">
                <img src="a4paper.jpg" alt="A4 Paper">
                <h4>A4 Paper</h4>
                <button onclick="viewProduct('A4 Paper', 'Standard', 'a4paper.jpg')">View</button>
            </div>
            <div class="product-card">
                <img src="glossy-a4paper.jpg" alt="Glossy A4 Paper">
                <h4>Glossy A4 Paper</h4>
                <button onclick="viewProduct('Glossy A4 Paper', 'Glossy', 'glossy-a4paper.jpg')">View</button>
            </div>
            <div class="product-card">
                <img src="recycled-a4paper.jpg" alt="Recycled A4 Paper">
                <h4>Recycled A4 Paper</h4>
                <button onclick="viewProduct('Recycled A4 Paper', 'Recycled', 'recycled-a4paper.jpg')">View</button>
            </div>
        `;
    } 
    // Handle Notebooks
    else if (paperProduct === 'notebooks') {
        paperProductCardContent = `
            <div class="product-card">
                <img src="notebooks.jpg" alt="Note Books">
                <h4>Note Books</h4>
                <button onclick="viewProduct('Product Name: Note Books', 'notebooks.jpg')">View</button>
            </div>
        `;
    } 
    // Handle Sticky Notes
    else if (paperProduct === 'stickyNotes') {
        paperProductCardContent = `
            <div class="product-card">
                <img src="sticky-notes.jpg" alt="Sticky Notes">
                <h4>Sticky Notes</h4>
                <button onclick="viewProduct('Product Name: Sticky Notes', 'sticky-notes.jpg')">View</button>
            </div>
        `;
    } 
        // Append the paper product cards
        productCardsContainer.innerHTML = paperProductCardContent;
    } 
    
    // Organization tools section
    else if (item === 'organizationtools' && organizationTools) {
        let organizationToolsCardContent = '';
        
        if (organizationTools === 'folders') {
            organizationToolsCardContent = `
                <div class="product-card">
                    <img src="folder.jpg" alt="Folder">
                    <h4>Folder</h4>
                    <button onclick="viewProduct('Product Name: Folder', 'folder.jpg')">View</button>
                </div>
            `;
        } else if (organizationTools === 'binders') {
            organizationToolsCardContent = `
                <div class="product-card">
                    <img src="binder.jpg" alt="Binder">
                    <h4>Binder</h4>
                    <button onclick="viewProduct('Product Name: Binder', 'binder.jpg')">View</button>
                </div>
            `;
        } else if (organizationTools === 'labels') {
            organizationToolsCardContent = `
                <div class="product-card">
                    <img src="labels.jpg" alt="Labels">
                    <h4>Labels</h4>
                    <button onclick="viewProduct('Product Name: Labels', 'labels.jpg')">View</button>
                </div>
            `;
        }
        
        // Append the organization tool cards
        productCardsContainer.innerHTML = organizationToolsCardContent;
    } 
    
    // **Storage Containers section FIXED**
else if (item === 'storagecontainer' && storageContainer) {
    let storageContainerCardContent = '';

    // Now we are adding the storage container logic similar to organization tools
    if (storageContainer === 'plasticboxes') {
        storageContainerCardContent = `
            <div class="product-card">
                <img src="plastic-box.jpg" alt="Plastic Box">
                <h4>Plastic Box</h4>
                <button onclick="viewProduct('Product Name: Plastic Box', 'plastic-box.jpg')">View</button>
            </div>
        `;
    } else if (storageContainer === 'drawerorganizers') {
        storageContainerCardContent = `
            <div class="product-card">
                <img src="drawer-organizer.jpg" alt="Drawer Organizer">
                <h4>Drawer Organizer</h4>
                <button onclick="viewProduct('Product Name: Drawer Organizer', 'drawer-organizer.jpg')">View</button>
            </div>
        `;
    } else if (storageContainer === 'storagebins') {
        storageContainerCardContent = `
            <div class="product-card">
                <img src="storage-bin.jpg" alt="Storage Bin">
                <h4>Storage Bin</h4>
                <button onclick="viewProduct('Product Name: Storage Bin', 'storage-bin.jpg')">View</button>
            </div>
        `;
    }

    // Append the storage container cards
    productCardsContainer.innerHTML = storageContainerCardContent;
}

// **Cutting & Gluing Tools section FIXED**
else if (item === 'cutting&gluingtools' && cuttingGluingTools) {
    let cuttingGluingCardContent = '';

    if (cuttingGluingTools === 'scissors') {
        cuttingGluingCardContent = `
            <div class="product-card">
                <img src="scissors.jpg" alt="Scissors">
                <h4>Scissors</h4>
                <button onclick="viewProduct('Product Name: Scissors', 'scissors.jpg')">View</button>
            </div>
        `;
    } else if (cuttingGluingTools === 'gluegun') {
        cuttingGluingCardContent = `
            <div class="product-card">
                <img src="glue.jpg" alt="Glue">
                <h4>Glue</h4>
                <button onclick="viewProduct('Product Name: Glue', 'glue.jpg')">View</button>
            </div>
        `;
    } else if (cuttingGluingTools === 'tape') {
        cuttingGluingCardContent = `
            <div class="product-card">
                <img src="glue.jpg" alt="Glue">
                <h4>Glue</h4>
                <button onclick="viewProduct('Product Name: Tape ', 'glue.jpg')">View</button>
            </div>
        `;
    }
    // Append the cutting and gluing tools product cards
    productCardsContainer.innerHTML = cuttingGluingCardContent;
}

 // **Technology Supplies Section**
 else if (item === 'technologysupplies' && technologySupplies) {
    let technologyCardContent = '';

    if (technologySupplies === 'headphones') {
        technologyCardContent = `
            <div class="product-card">
                <img src="headphones.jpg" alt="Headphones">
                <h4>Headphones</h4>
                <button onclick="viewProduct('Product Name: Headphones', 'headphones.jpg')">View</button>
            </div>
        `;
    } else if (technologySupplies === 'usb') {
        technologyCardContent = `
            <div class="product-card">
                <img src="usb.jpg" alt="USB Drive">
                <h4>USB Drive</h4>
                <button onclick="viewProduct('Product Name: USB Drive', 'usb.jpg')">View</button>
            </div>
        `;
    } else if (technologySupplies === 'keyboard') {
        technologyCardContent = `
            <div class="product-card">
                <img src="keyboard.jpg" alt="Keyboard">
                <h4>Keyboard</h4>
                <button onclick="viewProduct('Product Name: Keyboard', 'keyboard.jpg')">View</button>
            </div>
        `;
    }

    // Append the product cards for technology supplies
    productCardsContainer.innerHTML = technologyCardContent;
}
     // **Office/School Equipment Section**
     if (item === 'office/schoolequipment' && officeSchoolEquipment) {
        let officeSchoolCardContent = '';

        if (officeSchoolEquipment === 'projector') {
            officeSchoolCardContent = `
                <div class="product-card">
                    <img src="projector.jpg" alt="Projector">
                    <h4>Projector</h4>
                    <button onclick="viewProduct('Product Name: Projector', 'projector.jpg')">View</button>
                </div>
            `;
        } else if (officeSchoolEquipment === 'printer') {
            officeSchoolCardContent = `
                <div class="product-card">
                    <img src="printer.jpg" alt="Printer">
                    <h4>Printer</h4>
                    <button onclick="viewProduct('Product Name: Printer', 'printer.jpg')">View</button>
                </div>
            `;
        } else if (officeSchoolEquipment === 'calculator') {
            officeSchoolCardContent = `
                <div class="product-card">
                    <img src="calculator.jpg" alt="Calculator">
                    <h4>Calculator</h4>
                    <button onclick="viewProduct('Product Name: Calculator', 'calculator.jpg')">View</button>
                </div>
            `;
        }

        // Append the office/school equipment product cards
        productCardsContainer.innerHTML = officeSchoolCardContent;
    }
    else if (item === 'miscellaneoussupplies' && miscellaneousSupply) {
        let miscellaneousSupplyCardContent = '';
    
        if (miscellaneousSupply === 'batteries') {
            miscellaneousSupplyCardContent = `
                <div class="product-card">
                    <img src="batteries.jpg" alt="Batteries">
                    <h4>Batteries</h4>
                    <button onclick="viewProduct('Product Name: Batteries', 'batteries.jpg')">View</button>
                </div>
            `;
        } else if (miscellaneousSupply === 'chalk') {
            miscellaneousSupplyCardContent = `
                <div class="product-card">
                    <img src="chalk.jpg" alt="Chalk">
                    <h4>Chalk</h4>
                    <button onclick="viewProduct('Product Name: Chalk', 'chalk.jpg')">View</button>
                </div>
            `;
        } else if (miscellaneousSupply === 'tissues') {
            miscellaneousSupplyCardContent = `
                <div class="product-card">
                    <img src="tissues.jpg" alt="Tissues">
                    <h4>Tissues</h4>
                    <button onclick="viewProduct('Product Name: Tissues', 'tissues.jpg')">View</button>
                </div>
            `;
        }
    
        // Append the miscellaneous supply product cards
        productCardsContainer.innerHTML = miscellaneousSupplyCardContent;
    }
    else if (item === 'health&safety' && healthSafetySupply) {
        let healthSafetyCardContent = '';
    
        if (healthSafetySupply === 'firstaidkit') {
            healthSafetyCardContent = `
                <div class="product-card">
                    <img src="firstaidkit.jpg" alt="First Aid Kit">
                    <h4>First Aid Kit</h4>
                    <button onclick="viewProduct('Product Name: First Aid Kit', 'firstaidkit.jpg')">View</button>
                </div>
            `;
        } else if (healthSafetySupply === 'face_masks') {
            healthSafetyCardContent = `
                <div class="product-card">
                    <img src="mask.jpg" alt="Face Mask">
                    <h4>Face Mask</h4>
                    <button onclick="viewProduct('Product Name: Face Mask', 'mask.jpg')">View</button>
                </div>
            `;
        } else if (healthSafetySupply === 'gloves') {
            healthSafetyCardContent = `
                <div class="product-card">
                    <img src="sanitizer.jpg" alt="Hand Sanitizer">
                    <h4>Hand Sanitizer</h4>
                    <button onclick="viewProduct('Product Name: Hand Sanitizer', 'sanitizer.jpg')">View</button>
                </div>
            `;
        }
    
        // Append the health & safety product cards
        productCardsContainer.innerHTML = healthSafetyCardContent;
    }
    

    // Display the product cards section
    document.getElementById('right-corner-container').style.display = 'block'; // Show product cards section
}



    


// Updated viewProduct function to handle brand-specific variants and options
function viewProduct(name, brand, image) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupName = document.getElementById('popup-name');
    const popupOverlay = document.getElementById('popup-overlay');
    const availableProducts = document.getElementById('available-products');
    const optionSelect = document.getElementById('option');
    const sizeSelect = document.getElementById('size');
    const colorSelect = document.getElementById('color');
    

    if (!availableProducts || !optionSelect || !sizeSelect || !colorSelect) {
        console.error('Dropdown elements not found');
        return;
    }

    // Show the popup with product details
    popup.style.display = 'block';
    popupOverlay.style.display = 'block';
    popupImage.src = image;
    popupName.textContent = `${brand} ${name}`;

    // Reset dropdowns before updating them
    availableProducts.innerHTML = '';
    optionSelect.innerHTML = '';
    sizeSelect.innerHTML = '';
    colorSelect.innerHTML = '';

    // Product variants and options organized by brand
    const productVariants = {
        Mongol: ['Regular #1', 'Regular #2', 'Regular #3'],
        Castle: ['Graphite #1', 'Graphite #2', 'Graphite #3'],
        FaberCastell: ['HB', '2B', '4B', 'Crayon Set'],
        Joy: ['Regular', 'Graphite', 'Soft'],
        Pilot: ['G2', 'V5', 'Frixion'],
        Pentel: ['EnerGel', 'R.S.V.P', 'Hybrid Gel Grip'],
        Crayola: ['12 Colors', '24 Colors', '48 Colors'],
        Marker: ['Permanent', 'Whiteboard', 'Crayon'],
        Sharpie: ['Fine Point', 'Ultra Fine Point', 'Chisel Tip'],
        Pilots: ['Permanent', 'Whiteboard', 'Paint Marker'],
        FaberCastells: ['Black', 'Red', 'Blue'],
        Parker: ['Jotter', 'IM', 'Urban'],
        Montblanc: ['Meisterstück', 'StarWalker', 'Pix'],
        Cross: ['Classic Century', 'Bailey', 'Townsend'],
        Stabilo: ['Boss Original', 'Swing Cool', 'Pastel'],
        FaberCastell: ['Textliner', 'Grip', 'Superfluorescent'],
        Piloter: ['FriXion Light', 'Spotliter', 'V-Board Master'],
        Standard: ['A4 Paper - Standard', 'Standard Glossy Finish', 'Standard Recycled Finish'],
        Glossy: ['Glossy A4 Paper', 'Glossy High Quality Finish'],
        Recycled: ['Recycled A4 Paper', 'Environmentally Friendly A4 Paper'],
    };

    const productOptions = {
        Mongol: ['1 Tuck Box', '2 Tuck Box', '1 Box (12x12)', '1 Box (3pcs x 48pchs)'],
        Castle: ['Pack of 12', 'Pack of 24', 'Box of 48'],
        FaberCastell: ['Single', 'Pack of 10', 'Box of 50'],
        Joy: ['Pack of 12', 'Pack of 24', 'Box of 48'],
        Pilot: ['Single', 'Pack of 5', 'Box of 20'],
        Pentel: ['Single', 'Pack of 3', 'Bulk (20 pcs)'],
        Crayola: ['Small Pack', 'Medium Pack', 'Large Pack'],
        Marker: ['Pack of 4', 'Pack of 8', 'Bulk Pack'],
        Sharpie: ['Single', 'Pack of 5', 'Box of 20'],
        Pilots: ['Single', 'Pack of 3', 'Pack of 12'],
        FaberCastells: ['Single', 'Pack of 4', 'Bulk (20 pcs)'],
        Parker: ['Single', 'Gift Box', 'Refill Pack'],
        Montblanc: ['Luxury Box', 'Leather Pouch', 'Refill Set'],
        Cross: ['Classic Case', 'Premium Gift Box', 'Refill Set'],
        Stabilo: ['Pack of 4', 'Pack of 6', 'Pack of 8'],
        FaberCastell: ['Single', 'Pack of 3', 'Pack of 5'],
        Piloter: ['Single', 'Pack of 2', 'Pack of 4'],
        Standard: ['Pack of 100', 'Pack of 500', 'Pack of 1000'],
        Glossy: ['Pack of 100', 'Pack of 500', 'Pack of 1000'],
        Recycled: ['Pack of 100', 'Pack of 500', 'Pack of 1000'],
    };
    const highlighterSizes = {
        Joy: ['Small', 'Medium', 'Large'],
        Stabilo: ['Small', 'Medium', 'Large'],
        FaberCastell: ['Compact', 'Standard', 'Jumbo'],
        Piloter: ['Fine', 'Medium', 'Broad']
    };

    const highlighterColors = {
        Joy:  ['Red', 'Blue', 'Green', 'Black'],
        Stabilo: ['Yellow', 'Pink', 'Orange', 'Green'],
        FaberCastell: ['Blue', 'Red', 'Green', 'Purple'],
        Piloter: ['Black', 'Blue', 'Red', 'Green']
    };


    const variants = productVariants[brand] || [];
    const options = productOptions[brand] || [];
    const sizes = highlighterSizes[brand] || [];
    const colors = highlighterColors[brand] || [];

    // Populate the available products dropdown
    variants.forEach(variant => {
        availableProducts.innerHTML += `<option value="${variant}">${variant}</option>`;
    });

    // Populate the options dropdown
    options.forEach(option => {
        optionSelect.innerHTML += `<option value="${option}">${option}</option>`;
    });
    // Populate the size dropdown
    sizes.forEach(size => {
        sizeSelect.innerHTML += `<option value="${size}">${size}</option>`;
    });

    // Populate the color dropdown
    colors.forEach(color => {
        colorSelect.innerHTML += `<option value="${color}">${color}</option>`;
    });

    // Default case if no variants or options are available
    if (variants.length === 0) {
        availableProducts.innerHTML = '<option value="none">No available products</option>';
    }
    if (options.length === 0) {
        optionSelect.innerHTML = '<option value="none">No available options</option>';
    }
    if (sizes.length === 0) {
        sizeSelect.innerHTML = '<option value="none">No available sizes</option>';
    }
    if (colors.length === 0) {
        colorSelect.innerHTML = '<option value="none">No available colors</option>';
    }
}
// Function to close the popup modal
function closePopup() {
    const popup = document.getElementById('popup');
    const popupOverlay = document.getElementById('popup-overlay');
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
}




function viewOrder(id) {
    alert('View details of order ID: ' + id);
}

function editOrder(id) {
    alert('Edit order ID: ' + id);
}

function deleteOrder(id) {
    if (confirm('Are you sure you want to delete this order?')) {
        alert('Order ID ' + id + ' deleted.');
        // Here you can add an AJAX call to delete the order from the database
    }
}





function openPopup(productId) {
    fetch(`get_products.php?product_id=${productId}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
                return;
            }

            document.getElementById("popup-name").textContent = data.product.name;
            document.getElementById("popup-image").src = data.product.image_url;

            function populateDropdown(selectId, items) {
                let select = document.getElementById(selectId);
                select.innerHTML = "";
                items.forEach(item => {
                    let opt = document.createElement("option");
                    opt.value = item;
                    opt.textContent = item;
                    select.appendChild(opt);
                });
            }

            populateDropdown("available-products", data.available_products);
            populateDropdown("option", data.options);
            populateDropdown("size", data.sizes);
            populateDropdown("color", data.colors);

            document.getElementById("popup-overlay").style.display = "block";
            document.getElementById("popup").style.display = "block";
        })
        .catch(error => console.error("Error fetching product data:", error));
}

function closePopup() {
    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
}






document.addEventListener("DOMContentLoaded", function () {
    // Get the Add to Cart button
    let addToCartBtn = document.querySelector(".add-to-cart-btn");

    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", function () {
            // Get selected values

            let popupName = document.getElementById("popup-name").textContent;
            let availableProduct = document.getElementById("available-products").value;
            let option = document.getElementById("option").value;
            let quantity = document.getElementById("quantity").value;
            let size = document.getElementById("size").value;
            let color = document.getElementById("color").value;

            // Prepare data to send
            let formData = new FormData();
            formData.append("popup_name", popupName);
            formData.append("available_product", availableProduct);
            formData.append("option", option);
            formData.append("quantity", quantity);
            formData.append("size", size);
            formData.append("color", color);

            // Send data via AJAX to PHP
            fetch("add_item_request.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    alert("Item added successfully!");
                    closePopup(); // Close the popup after adding the request
                } else {
                    alert("Error: " + data.message);
                }
            })
            .catch(error => console.error("AJAX error:", error));
        });
    }
});

function addItemRequest() {
    const availableProducts = document.getElementById("available-products").value;
    const option = document.getElementById("option").value;
    const quantity = document.getElementById("quantity").value;
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;

    // Get the product name and image from the popup
    const popupName = document.getElementById("popup-name").innerText;
    const popupImage = document.getElementById("popup-image").src;

    // Prepare data to send
    const formData = new FormData();
    formData.append("popup_name", popupName);
    formData.append("popup_image", popupImage);
    formData.append("available_products", availableProducts);
    formData.append("option", option);
    formData.append("quantity", quantity);
    formData.append("size", size);
    formData.append("color", color);

    // Send data via AJAX
    fetch("add_item.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Display success or error message
        closePopup(); // Close the popup after submission
    })
    .catch(error => {
        alert("Error: " + error);
    });
}




function openViewItemsPopup() {
    const popupOverlay = document.getElementById("popup-overlay");
    const popup = document.getElementById("popup");

    // Load the viewItems.php content into the popup
    fetch("viewItems.php")
        .then(response => response.text())
        .then(data => {
            popup.innerHTML = data;

            // Adjust the table container size inside the popup
            const tableContainer = popup.querySelector('.table-container');
            if (tableContainer) {
                tableContainer.style.maxWidth = "100%";
                tableContainer.style.minHeight = "100%";
                tableContainer.style.margin = "0 auto";
            }

            // Set the popup size to 80% of the viewport
            popup.style.width = "80%";
            popup.style.height = "80%";
            popup.style.overflow = "auto"; // Enable scroll if content overflows
            popup.style.margin = "auto"; // Center the popup

            popupOverlay.style.display = "block";
            popup.style.display = "block";
        })
        .catch(error => {
            alert("Error loading view items: " + error);
        });
}

// Initialize the search and pagination functionality
function initializeSearchAndPagination() {
    const searchInput = document.getElementById("searchInput");
    const tableRows = document.querySelectorAll("table tbody tr");

    // Search Functionality
    searchInput?.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(filter) ? "" : "none";
        });
    });

    // Pagination Functionality
    const paginationButtons = document.querySelectorAll(".pagination-button");
    paginationButtons.forEach(button => {
        button.addEventListener("click", function () {
            const page = parseInt(this.getAttribute("data-page"));
            loadPage(page);
        });
    });
}




