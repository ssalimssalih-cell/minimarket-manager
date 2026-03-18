// script.js

// ---------------- SIDEBAR ----------------
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const menuClose = document.getElementById("menu-close");

if(menuToggle) menuToggle.onclick = () => sidebar.classList.add("active");
if(menuClose) menuClose.onclick = () => sidebar.classList.remove("active");

// ---------------- FORMS ----------------
const productsForm = document.getElementById("products-form");
const clientsForm = document.getElementById("clients-form");
const suppliersForm = document.getElementById("suppliers-form");
const posForm = document.getElementById("pos-form");
const salesForm = document.getElementById("sales-form");
const creditsForm = document.getElementById("credits-form");
const statisticsForm = document.getElementById("statistics-form");
const addCreditForm = document.getElementById("add-credit-form");
const addProductForm = document.getElementById("add-product-form");
const addClientForm = document.getElementById("add-client-form");
const addSupplierForm = document.getElementById("add-supplier-form");

const sidebarLinks = document.querySelectorAll("#sidebar a");

if(sidebarLinks[0]){
    sidebarLinks[0].onclick = (e) => {
        e.preventDefault();
        posForm.classList.remove("d-none");
        salesForm.classList.add("d-none");
        creditsForm.classList.add("d-none");
        productsForm.classList.add("d-none");
        clientsForm.classList.add("d-none");
        suppliersForm.classList.add("d-none");
        statisticsForm.classList.add("d-none");
        addCreditForm?.classList.add("d-none");
        addProductForm?.classList.remove("active");
        addProductForm?.classList.add("d-none");
        addClientForm?.classList.remove("active");
        addClientForm?.classList.add("d-none");
        addSupplierForm?.classList.remove("active");
        addSupplierForm?.classList.add("d-none");
        sidebar.classList.remove("active");
        startNewSale();
    };
}
if(sidebarLinks[1]){
    sidebarLinks[1].onclick = (e) => {
        e.preventDefault();
        productsForm.classList.remove("d-none");
        salesForm.classList.add("d-none");
        creditsForm.classList.add("d-none");
        posForm.classList.add("d-none");
        clientsForm.classList.add("d-none");
        suppliersForm.classList.add("d-none");
        statisticsForm.classList.add("d-none");
        addCreditForm?.classList.add("d-none");
        addProductForm?.classList.remove("active");
        addProductForm?.classList.add("d-none");
        addClientForm?.classList.remove("active");
        addClientForm?.classList.add("d-none");
        addSupplierForm?.classList.remove("active");
        addSupplierForm?.classList.add("d-none");
        sidebar.classList.remove("active");
        loadProducts();
    };
}
if(sidebarLinks[2]){
    sidebarLinks[2].onclick = (e) => {
        e.preventDefault();
        clientsForm.classList.remove("d-none");
        salesForm.classList.add("d-none");
        creditsForm.classList.add("d-none");
        posForm.classList.add("d-none");
        productsForm.classList.add("d-none");
        suppliersForm.classList.add("d-none");
        statisticsForm.classList.add("d-none");
        addCreditForm?.classList.add("d-none");
        addProductForm?.classList.remove("active");
        addProductForm?.classList.add("d-none");
        addClientForm?.classList.remove("active");
        addClientForm?.classList.add("d-none");
        addSupplierForm?.classList.remove("active");
        addSupplierForm?.classList.add("d-none");
        sidebar.classList.remove("active");
        loadClients();
    };
}
if(sidebarLinks[3]){
    sidebarLinks[3].onclick = (e) => {
        e.preventDefault();
        suppliersForm.classList.remove("d-none");
        salesForm.classList.add("d-none");
        creditsForm.classList.add("d-none");
        posForm.classList.add("d-none");
        productsForm.classList.add("d-none");
        clientsForm.classList.add("d-none");
        statisticsForm.classList.add("d-none");
        addCreditForm?.classList.add("d-none");
        addProductForm?.classList.remove("active");
        addProductForm?.classList.add("d-none");
        addClientForm?.classList.remove("active");
        addClientForm?.classList.add("d-none");
        addSupplierForm?.classList.remove("active");
        addSupplierForm?.classList.add("d-none");
        sidebar.classList.remove("active");
        loadSuppliers();
    };
}
if(sidebarLinks[4]){ // Sales link
    sidebarLinks[4].onclick = (e) => {
        e.preventDefault();
        salesForm.classList.remove("d-none");
        posForm.classList.add("d-none");
        creditsForm.classList.add("d-none");
        productsForm.classList.add("d-none");
        clientsForm.classList.add("d-none");
        suppliersForm.classList.add("d-none");
        statisticsForm.classList.add("d-none");
        addCreditForm?.classList.add("d-none");
        addProductForm?.classList.remove("active");
        addProductForm?.classList.add("d-none");
        addClientForm?.classList.remove("active");
        addClientForm?.classList.add("d-none");
        addSupplierForm?.classList.remove("active");
        addSupplierForm?.classList.add("d-none");
        sidebar.classList.remove("active");
        loadSalesList();
    };
}
if(sidebarLinks[5]){ // Credits link
    sidebarLinks[5].onclick = (e) => {
        e.preventDefault();
        creditsForm.classList.remove("d-none");
        salesForm.classList.add("d-none");
        posForm.classList.add("d-none");
        productsForm.classList.add("d-none");
        clientsForm.classList.add("d-none");
        suppliersForm.classList.add("d-none");
        statisticsForm.classList.add("d-none");
        addCreditForm?.classList.add("d-none");
        addProductForm?.classList.remove("active");
        addProductForm?.classList.add("d-none");
        addClientForm?.classList.remove("active");
        addClientForm?.classList.add("d-none");
        addSupplierForm?.classList.remove("active");
        addSupplierForm?.classList.add("d-none");
        sidebar.classList.remove("active");
        loadCredits();
    };
}
if(sidebarLinks[6]){ // Statistics link
    sidebarLinks[6].onclick = (e) => {
        e.preventDefault();
        statisticsForm.classList.remove("d-none");
        posForm.classList.add("d-none");
        salesForm.classList.add("d-none");
        creditsForm.classList.add("d-none");
        productsForm.classList.add("d-none");
        clientsForm.classList.add("d-none");
        suppliersForm.classList.add("d-none");
        addCreditForm?.classList.add("d-none");
        addProductForm?.classList.remove("active");
        addProductForm?.classList.add("d-none");
        addClientForm?.classList.remove("active");
        addClientForm?.classList.add("d-none");
        addSupplierForm?.classList.remove("active");
        addSupplierForm?.classList.add("d-none");
        sidebar.classList.remove("active");
        loadStatistics();
    };
}

document.getElementById("products-close")?.addEventListener("click",()=>productsForm.classList.add("d-none"));
document.getElementById("clients-close")?.addEventListener("click",()=>clientsForm.classList.add("d-none"));
document.getElementById("suppliers-close")?.addEventListener("click",()=>suppliersForm.classList.add("d-none"));
document.getElementById("pos-close")?.addEventListener("click",()=>posForm.classList.add("d-none"));
document.getElementById("sales-close")?.addEventListener("click",()=>salesForm.classList.add("d-none"));
document.getElementById("credits-close")?.addEventListener("click",()=>creditsForm?.classList.add("d-none"));
document.getElementById("statistics-close")?.addEventListener("click",()=>statisticsForm?.classList.add("d-none"));
document.getElementById("add-credit-close")?.addEventListener("click",()=>addCreditForm?.classList.add("d-none"));

// ---------------- ADD PRODUCT BUTTON ----------------
document.getElementById("add-product-btn")?.addEventListener("click", () => {
    // Réinitialiser le formulaire
    document.getElementById("product-form").reset();
    delete document.getElementById("product-form").dataset.editId;
    
    // Charger les listes de catégories et fournisseurs
    loadCategoryList();
    loadSupplierList();
    
    // Afficher le formulaire
    document.getElementById("add-product-form").classList.add("active");
    document.getElementById("add-product-form").classList.remove("d-none");
});

// ---------------- ADD CLIENT BUTTON ----------------
document.getElementById("add-client-btn")?.addEventListener("click", () => {
    // Réinitialiser le formulaire
    document.getElementById("client-form").reset();
    delete document.getElementById("client-form").dataset.editId;
    
    // Afficher le formulaire
    document.getElementById("add-client-form").classList.add("active");
    document.getElementById("add-client-form").classList.remove("d-none");
});

// ---------------- ADD SUPPLIER BUTTON ----------------
document.getElementById("add-supplier-btn")?.addEventListener("click", () => {
    // Réinitialiser le formulaire
    document.getElementById("supplier-form").reset();
    delete document.getElementById("supplier-form").dataset.editId;
    
    // Afficher le formulaire
    document.getElementById("add-supplier-form").classList.add("active");
    document.getElementById("add-supplier-form").classList.remove("d-none");
});

// ---------------- CLOSE ADD/EDIT FORMS ----------------
document.getElementById("add-product-close")?.addEventListener("click", () => {
    document.getElementById("add-product-form").classList.remove("active");
    document.getElementById("add-product-form").classList.add("d-none");
});

document.getElementById("add-client-close")?.addEventListener("click", () => {
    document.getElementById("add-client-form").classList.remove("active");
    document.getElementById("add-client-form").classList.add("d-none");
});

document.getElementById("add-supplier-close")?.addEventListener("click", () => {
    document.getElementById("add-supplier-form").classList.remove("active");
    document.getElementById("add-supplier-form").classList.add("d-none");
});

// ---------------- CURRENCY FORMATTER ----------------
function formatMAD(amount) {
    return new Intl.NumberFormat('fr-MA', {
        style: 'currency',
        currency: 'MAD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount || 0);
}

// ---------------- SORTING STATE ----------------
let sortState = {
    products: { column: 'name', direction: 'asc' },
    clients: { column: 'name', direction: 'asc' },
    suppliers: { column: 'name', direction: 'asc' },
    sales: { column: 'date', direction: 'desc' },
    credits: { column: 'date', direction: 'desc' }
};

// ---------------- LOAD CATEGORY LIST FOR PRODUCT FORM ----------------
function loadCategoryList() {
    getAllItems("products").then(products => {
        const categories = [...new Set(products.map(p => p.category).filter(c => c))];
        const datalist = document.getElementById("category-list");
        if (datalist) {
            datalist.innerHTML = "";
            categories.forEach(cat => {
                const option = document.createElement("option");
                option.value = cat;
                datalist.appendChild(option);
            });
        }
    });
}

// ---------------- LOAD SUPPLIER LIST FOR PRODUCT FORM ----------------
function loadSupplierList() {
    getAllItems("suppliers").then(suppliers => {
        const datalist = document.getElementById("supplier-list");
        if (datalist) {
            datalist.innerHTML = "";
            suppliers.forEach(s => {
                const option = document.createElement("option");
                option.value = s.name || s.supplierName;
                datalist.appendChild(option);
            });
        }
    });
}

// ---------------- CALCULATE PRICE UNIT AND PROFIT ----------------
document.getElementById("product-box-price")?.addEventListener("input", calculatePriceUnit);
document.getElementById("product-box-unit")?.addEventListener("input", calculatePriceUnit);
document.getElementById("product-price-sell")?.addEventListener("input", calculateProfit);

function calculatePriceUnit() {
    const boxPrice = parseFloat(document.getElementById("product-box-price").value) || 0;
    const boxUnit = parseFloat(document.getElementById("product-box-unit").value) || 1;
    const priceUnit = boxPrice / boxUnit;
    document.getElementById("product-price-unit").value = priceUnit.toFixed(2);
    calculateProfit();
}

function calculateProfit() {
    const priceSell = parseFloat(document.getElementById("product-price-sell").value) || 0;
    const priceUnit = parseFloat(document.getElementById("product-price-unit").value) || 0;
    const profit = priceSell - priceUnit;
    document.getElementById("product-profit").value = profit.toFixed(2);
}

// ---------------- PRODUCT FORM SUBMIT ----------------
document.getElementById("product-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const product = {
        name: document.getElementById("product-name").value,
        category: document.getElementById("product-category").value,
        boxUnit: parseFloat(document.getElementById("product-box-unit").value) || 0,
        boxPrice: parseFloat(document.getElementById("product-box-price").value) || 0,
        priceUnit: parseFloat(document.getElementById("product-price-unit").value) || 0,
        priceSell: parseFloat(document.getElementById("product-price-sell").value) || 0,
        profit: parseFloat(document.getElementById("product-profit").value) || 0,
        brand: document.getElementById("product-brand").value,
        unit: document.getElementById("product-unit").value,
        supplier: document.getElementById("product-supplier").value,
        expiration: document.getElementById("product-expiration").value,
        stock: parseInt(document.getElementById("product-stock").value) || 0,
        sold: parseInt(document.getElementById("product-sold").value) || 0,
        description: document.getElementById("product-description").value
    };
    
    const editId = document.getElementById("product-form").dataset.editId;
    const store = getStore("products", "readwrite");
    
    if (editId) {
        // Update existing
        product.id = parseInt(editId);
        store.put(product).onsuccess = () => {
            alert("Produit mis à jour avec succès!");
            document.getElementById("add-product-form").classList.remove("active");
            document.getElementById("add-product-form").classList.add("d-none");
            document.getElementById("product-form").reset();
            delete document.getElementById("product-form").dataset.editId;
            loadProducts();
        };
    } else {
        // Add new
        store.add(product).onsuccess = () => {
            alert("Produit ajouté avec succès!");
            document.getElementById("add-product-form").classList.remove("active");
            document.getElementById("add-product-form").classList.add("d-none");
            document.getElementById("product-form").reset();
            loadProducts();
        };
    }
});

// ---------------- CLIENT FORM SUBMIT ----------------
document.getElementById("client-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const client = {
        name: document.getElementById("client-name").value,
        phone: document.getElementById("client-phone").value,
        whatsapp: document.getElementById("client-whatsapp").value,
        address: document.getElementById("client-address").value,
        points: parseInt(document.getElementById("client-points").value) || 0,
        ca: parseFloat(document.getElementById("client-ca").value) || 0,
        profit: parseFloat(document.getElementById("client-profit").value) || 0,
        createdAt: new Date().toISOString()
    };
    
    const editId = document.getElementById("client-form").dataset.editId;
    const store = getStore("clients", "readwrite");
    
    if (editId) {
        client.id = parseInt(editId);
        store.put(client).onsuccess = () => {
            alert("Client mis à jour avec succès!");
            document.getElementById("add-client-form").classList.remove("active");
            document.getElementById("add-client-form").classList.add("d-none");
            document.getElementById("client-form").reset();
            delete document.getElementById("client-form").dataset.editId;
            loadClients();
            loadAllData(); // Recharger pour POS
        };
    } else {
        store.add(client).onsuccess = () => {
            alert("Client ajouté avec succès!");
            document.getElementById("add-client-form").classList.remove("active");
            document.getElementById("add-client-form").classList.add("d-none");
            document.getElementById("client-form").reset();
            loadClients();
            loadAllData(); // Recharger pour POS
        };
    }
});

// ---------------- SUPPLIER FORM SUBMIT ----------------
document.getElementById("supplier-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const supplier = {
        name: document.getElementById("supplier-name").value,
        supplierName: document.getElementById("supplier-name").value,
        phone: document.getElementById("supplier-phone").value,
        whatsapp: document.getElementById("supplier-whatsapp").value,
        address: document.getElementById("supplier-address").value,
        ca: parseFloat(document.getElementById("supplier-ca").value) || 0
    };
    
    const editId = document.getElementById("supplier-form").dataset.editId;
    const store = getStore("suppliers", "readwrite");
    
    if (editId) {
        supplier.id = parseInt(editId);
        store.put(supplier).onsuccess = () => {
            alert("Fournisseur mis à jour avec succès!");
            document.getElementById("add-supplier-form").classList.remove("active");
            document.getElementById("add-supplier-form").classList.add("d-none");
            document.getElementById("supplier-form").reset();
            delete document.getElementById("supplier-form").dataset.editId;
            loadSuppliers();
        };
    } else {
        store.add(supplier).onsuccess = () => {
            alert("Fournisseur ajouté avec succès!");
            document.getElementById("add-supplier-form").classList.remove("active");
            document.getElementById("add-supplier-form").classList.add("d-none");
            document.getElementById("supplier-form").reset();
            loadSuppliers();
        };
    }
});

// ---------------- EDIT PRODUCT ----------------
document.getElementById("products-tbody")?.addEventListener("click", (e) => {
    if(e.target.classList.contains("edit-product") || e.target.closest('.edit-product')) {
        const btn = e.target.closest('.edit-product');
        const id = Number(btn.dataset.id);
        
        getItem("products", id).then(product => {
            if (!product) return;
            
            // Remplir le formulaire
            document.getElementById("product-name").value = product.name || '';
            document.getElementById("product-category").value = product.category || '';
            document.getElementById("product-box-unit").value = product.boxUnit || '';
            document.getElementById("product-box-price").value = product.boxPrice || '';
            document.getElementById("product-price-unit").value = product.priceUnit || '';
            document.getElementById("product-price-sell").value = product.priceSell || '';
            document.getElementById("product-profit").value = product.profit || '';
            document.getElementById("product-brand").value = product.brand || '';
            document.getElementById("product-unit").value = product.unit || '';
            document.getElementById("product-supplier").value = product.supplier || '';
            document.getElementById("product-expiration").value = product.expiration || '';
            document.getElementById("product-stock").value = product.stock || '';
            document.getElementById("product-sold").value = product.sold || '';
            document.getElementById("product-description").value = product.description || '';
            
            // Charger les listes
            loadCategoryList();
            loadSupplierList();
            
            // Stocker l'ID pour la mise à jour
            document.getElementById("product-form").dataset.editId = id;
            
            // Afficher le formulaire
            document.getElementById("add-product-form").classList.add("active");
            document.getElementById("add-product-form").classList.remove("d-none");
        });
    }
});

// ---------------- EDIT CLIENT ----------------
document.getElementById("clients-tbody")?.addEventListener("click", (e) => {
    if(e.target.classList.contains("edit-client") || e.target.closest('.edit-client')) {
        const btn = e.target.closest('.edit-client');
        const id = Number(btn.dataset.id);
        
        getItem("clients", id).then(client => {
            if (!client) return;
            
            // Remplir le formulaire
            document.getElementById("client-name").value = client.name || '';
            document.getElementById("client-phone").value = client.phone || '';
            document.getElementById("client-whatsapp").value = client.whatsapp || '';
            document.getElementById("client-address").value = client.address || '';
            document.getElementById("client-points").value = client.points || 0;
            document.getElementById("client-ca").value = client.ca || 0;
            document.getElementById("client-profit").value = client.profit || 0;
            
            // Stocker l'ID pour la mise à jour
            document.getElementById("client-form").dataset.editId = id;
            
            // Afficher le formulaire
            document.getElementById("add-client-form").classList.add("active");
            document.getElementById("add-client-form").classList.remove("d-none");
        });
    }
});

// ---------------- EDIT SUPPLIER ----------------
document.getElementById("suppliers-tbody")?.addEventListener("click", (e) => {
    if(e.target.classList.contains("edit-supplier") || e.target.closest('.edit-supplier')) {
        const btn = e.target.closest('.edit-supplier');
        const id = Number(btn.dataset.id);
        
        getItem("suppliers", id).then(supplier => {
            if (!supplier) return;
            
            // Remplir le formulaire
            document.getElementById("supplier-name").value = supplier.name || supplier.supplierName || '';
            document.getElementById("supplier-phone").value = supplier.phone || '';
            document.getElementById("supplier-whatsapp").value = supplier.whatsapp || '';
            document.getElementById("supplier-address").value = supplier.address || '';
            document.getElementById("supplier-ca").value = supplier.ca || 0;
            
            // Stocker l'ID pour la mise à jour
            document.getElementById("supplier-form").dataset.editId = id;
            
            // Afficher le formulaire
            document.getElementById("add-supplier-form").classList.add("active");
            document.getElementById("add-supplier-form").classList.remove("d-none");
        });
    }
});

// ---------------- PRODUCTS WITH ALL DETAILS ----------------
// ---------------- PRODUCTS WITH ALL DETAILS ----------------
function loadProducts(sortColumn = sortState.products.column, sortDirection = sortState.products.direction) {
    const tbody = document.getElementById("products-tbody");
    if(!tbody) return;
    tbody.innerHTML = '<tr><td colspan="16" class="text-center"><div class="spinner"></div> Chargement...</td></tr>';
    
    getAllItems("products").then(products => {
        // Sort products
        products.sort((a, b) => {
            let valA = a[sortColumn] || '';
            let valB = b[sortColumn] || '';
            
            if (sortColumn === 'boxPrice' || sortColumn === 'priceSell' || sortColumn === 'profit' || sortColumn === 'stock' || sortColumn === 'sold') {
                valA = a[sortColumn] || 0;
                valB = b[sortColumn] || 0;
            } else {
                if (typeof valA === 'string') valA = valA.toLowerCase();
                if (typeof valB === 'string') valB = valB.toLowerCase();
            }
            
            if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
            if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
        
        tbody.innerHTML = "";
        products.forEach(p => {
            const row = document.createElement("tr");
            
            // Ajouter la classe CSS si le stock est <= 10
            let stockClass = '';
            if (p.stock <= 10) {
            stockClass = 'table-warning'; // Jaune pour stock <= 10 
            }
            row.className = stockClass;
            
            row.innerHTML = `
                <td data-label="ID">${p.id || ''}</td>
                <td data-label="Name">${p.name || ''}</td>
                <td data-label="Category">${p.category || ''}</td>
                <td data-label="Box Unit">${p.boxUnit || ''}</td>
                <td data-label="Box Price">${formatMAD(p.boxPrice || 0)}</td>
                <td data-label="Price Unit">${formatMAD(p.priceUnit || 0)}</td>
                <td data-label="Price Sell">${formatMAD(p.priceSell || 0)}</td>
                <td data-label="Profit">${formatMAD(p.profit || 0)}</td>
                <td data-label="Brand">${p.brand || ''}</td>
                <td data-label="Unit">${p.unit || ''}</td>
                <td data-label="Supplier">${p.supplier || ''}</td>
                <td data-label="Expiration">${p.expiration || ''}</td>
                <td data-label="Current Stock" class="${p.stock <= 10 ? 'fw-bold' : ''}">${p.stock || 0}</td>
                <td data-label="Sold Stock">${p.sold || 0}</td>
                <td data-label="Description">${p.description || ''}</td>
                <td data-label="Actions">
                    <button class="btn btn-warning btn-sm edit-product" data-id="${p.id}"><i class="bi bi-pencil"></i> Edit</button>
                    <button class="btn btn-danger btn-sm delete-product" data-id="${p.id}"><i class="bi bi-trash"></i> Delete</button>
                </td>`;
            tbody.appendChild(row);
        });
    }).catch(err => {
        tbody.innerHTML = '<tr><td colspan="16" class="text-center text-danger">Erreur de chargement</td></tr>';
    });
}

// Sort products
function sortProducts(column) {
    if (sortState.products.column === column) {
        sortState.products.direction = sortState.products.direction === 'asc' ? 'desc' : 'asc';
    } else {
        sortState.products.column = column;
        sortState.products.direction = 'asc';
    }
    loadProducts(sortState.products.column, sortState.products.direction);
    updateSortIcons('products', column);
}

// ---------------- CLIENTS WITH ALL DETAILS ----------------
function loadClients(sortColumn = sortState.clients.column, sortDirection = sortState.clients.direction) {
    const tbody = document.getElementById("clients-tbody");
    if(!tbody) return;
    tbody.innerHTML = '<tr><td colspan="10" class="text-center"><div class="spinner"></div> Chargement...</td></tr>';
    
    getAllItems("clients").then(clients => {
        // Sort clients
        clients.sort((a, b) => {
            let valA = a[sortColumn] || '';
            let valB = b[sortColumn] || '';
            
            if (sortColumn === 'points' || sortColumn === 'ca' || sortColumn === 'profit') {
                valA = a[sortColumn] || 0;
                valB = b[sortColumn] || 0;
            } else if (sortColumn === 'createdAt') {
                valA = new Date(a.createdAt || 0).getTime();
                valB = new Date(b.createdAt || 0).getTime();
            } else {
                if (typeof valA === 'string') valA = valA.toLowerCase();
                if (typeof valB === 'string') valB = valB.toLowerCase();
            }
            
            if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
            if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
        
        tbody.innerHTML = "";
        clients.forEach(c => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td data-label="ID">${c.id || ''}</td>
                <td data-label="Name">${c.name || ''}</td>
                <td data-label="Address">${c.address || ''}</td>
                <td data-label="Phone">${c.phone || ''}</td>
                <td data-label="WhatsApp">${c.whatsapp || ''}</td>
                <td data-label="Created At">${c.createdAt ? new Date(c.createdAt).toLocaleString() : ''}</td>
                <td data-label="Points">${c.points || 0}</td>
                <td data-label="CA">${formatMAD(c.ca || 0)}</td>
                <td data-label="Profit">${formatMAD(c.profit || 0)}</td>
                <td data-label="Actions">
                    <button class="btn btn-warning btn-sm edit-client" data-id="${c.id}"><i class="bi bi-pencil"></i> Edit</button>
                    <button class="btn btn-danger btn-sm delete-client" data-id="${c.id}"><i class="bi bi-trash"></i> Delete</button>
                </td>`;
            tbody.appendChild(row);
        });
    }).catch(err => {
        tbody.innerHTML = '<tr><td colspan="10" class="text-center text-danger">Erreur de chargement</td></tr>';
    });
}

// Sort clients
function sortClients(column) {
    if (sortState.clients.column === column) {
        sortState.clients.direction = sortState.clients.direction === 'asc' ? 'desc' : 'asc';
    } else {
        sortState.clients.column = column;
        sortState.clients.direction = 'asc';
    }
    loadClients(sortState.clients.column, sortState.clients.direction);
    updateSortIcons('clients', column);
}

// ---------------- SUPPLIERS WITH ALL DETAILS ----------------
function loadSuppliers(sortColumn = sortState.suppliers.column, sortDirection = sortState.suppliers.direction) {
    const tbody = document.getElementById("suppliers-tbody");
    if(!tbody) return;
    tbody.innerHTML = '<tr><td colspan="7" class="text-center"><div class="spinner"></div> Chargement...</td></tr>';
    
    getAllItems("suppliers").then(suppliers => {
        // Sort suppliers
        suppliers.sort((a, b) => {
            let valA = a[sortColumn] || '';
            let valB = b[sortColumn] || '';
            
            if (sortColumn === 'ca') {
                valA = a.ca || 0;
                valB = b.ca || 0;
            } else {
                if (typeof valA === 'string') valA = valA.toLowerCase();
                if (typeof valB === 'string') valB = valB.toLowerCase();
            }
            
            if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
            if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
        
        tbody.innerHTML = "";
        suppliers.forEach(s => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td data-label="ID">${s.id || ''}</td>
                <td data-label="Name">${s.name || s.supplierName || ''}</td>
                <td data-label="Address">${s.address || ''}</td>
                <td data-label="Phone">${s.phone || ''}</td>
                <td data-label="WhatsApp">${s.whatsapp || ''}</td>
                <td data-label="CA">${formatMAD(s.ca || 0)}</td>
                <td data-label="Actions">
                    <button class="btn btn-warning btn-sm edit-supplier" data-id="${s.id}"><i class="bi bi-pencil"></i> Edit</button>
                    <button class="btn btn-danger btn-sm delete-supplier" data-id="${s.id}"><i class="bi bi-trash"></i> Delete</button>
                </td>`;
            tbody.appendChild(row);
        });
    }).catch(err => {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center text-danger">Erreur de chargement</td></tr>';
    });
}

// Sort suppliers
function sortSuppliers(column) {
    if (sortState.suppliers.column === column) {
        sortState.suppliers.direction = sortState.suppliers.direction === 'asc' ? 'desc' : 'asc';
    } else {
        sortState.suppliers.column = column;
        sortState.suppliers.direction = 'asc';
    }
    loadSuppliers(sortState.suppliers.column, sortState.suppliers.direction);
    updateSortIcons('suppliers', column);
}

// ---------------- SALES WITH ALL DETAILS (PRODUITS SÉPARÉS) ----------------
// ---------------- SALES WITH ALL DETAILS (PRODUITS SÉPARÉS) ----------------
function loadSalesList(sortColumn = sortState.sales.column, sortDirection = sortState.sales.direction) {
    const tbody = document.getElementById("sales-tbody");
    if(!tbody) return;
    tbody.innerHTML = '<tr><td colspan="16" class="text-center"><div class="spinner"></div> Chargement...</td></tr>';
    
    getAllItems("sales").then(sales => {
        // Créer un tableau de lignes de produits
        let productRows = [];
        
        sales.forEach(sale => {
            if (sale.items && Array.isArray(sale.items)) {
                // Calculer le profit total de la vente
                const saleTotalProfit = sale.items.reduce((sum, item) => {
                    return sum + ((item.price - (item.priceUnit || 0)) * item.qty || 0);
                }, 0);
                
                sale.items.forEach((item, index) => {
                    // S'assurer que priceUnit existe
                    const priceUnit = item.priceUnit || 0;
                    const profitPerItem = (item.price - priceUnit) || 0;
                    const totalProfitForItem = profitPerItem * (item.qty || 1);
                    
                    productRows.push({
                        sale: sale,
                        item: item,
                        saleTotalProfit: saleTotalProfit,
                        profitPerItem: profitPerItem,
                        totalProfitForItem: totalProfitForItem,
                        productName: item.name || '',
                        clientName: sale.clientName || '',
                        clientId: sale.clientId || '',
                        date: new Date(sale.date || 0),
                        price: item.price || 0,
                        priceUnit: priceUnit,
                        qty: item.qty || 1,
                        invoiceNumber: sale.invoiceNumber || '',
                        paymentType: sale.paymentType || '',
                        montantPaye: sale.montantPaye || 0,
                        resteDu: sale.resteDu || 0,
                        cashGiven: sale.cashGiven || 0,
                        change: sale.change || 0,
                        discount: sale.discount || 0,
                        id: sale.id
                    });
                });
            }
        });
        
        // Trier les lignes
        productRows.sort((a, b) => {
            let valA = a[sortColumn] || '';
            let valB = b[sortColumn] || '';
            
            if (sortColumn === 'total' || sortColumn === 'discount' || sortColumn === 'montantPaye' || sortColumn === 'resteDu' || 
                sortColumn === 'cashGiven' || sortColumn === 'change' || sortColumn === 'price' || sortColumn === 'qty' || 
                sortColumn === 'profitPerItem' || sortColumn === 'totalProfitForItem' || sortColumn === 'saleTotalProfit' ||
                sortColumn === 'priceUnit') {
                valA = a[sortColumn] || 0;
                valB = b[sortColumn] || 0;
            } else if (sortColumn === 'date') {
                valA = a.date.getTime();
                valB = b.date.getTime();
            } else if (sortColumn === 'id' || sortColumn === 'clientId' || sortColumn === 'invoiceNumber') {
                valA = a[sortColumn] || '';
                valB = b[sortColumn] || '';
                if (typeof valA === 'string') valA = valA.toLowerCase();
                if (typeof valB === 'string') valB = valB.toLowerCase();
            } else {
                if (typeof valA === 'string') valA = valA.toLowerCase();
                if (typeof valB === 'string') valB = valB.toLowerCase();
            }
            
            if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
            if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
        
        tbody.innerHTML = "";
        productRows.forEach(row => {
            addSaleProductRow(row);
        });
        
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // >>>>> AJOUTEZ CETTE LIGNE ICI - ELLE MANQUE DANS VOTRE CODE <<<<<
        updateSalesTotals();
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        
    }).catch(err => {
        tbody.innerHTML = '<tr><td colspan="16" class="text-center text-danger">Erreur de chargement</td></tr>';
    });
}

// Fonction pour ajouter une ligne de produit dans la table des ventes
// Fonction pour ajouter une ligne de produit dans la table des ventes
// Fonction pour ajouter une ligne de produit dans la table des ventes
function addSaleProductRow(rowData) {
    const tbody = document.getElementById("sales-tbody");
    if(!tbody) return;
    
    const sale = rowData.sale;
    const item = rowData.item;
    
    const tr = document.createElement("tr");
    tr.dataset.date = sale.date;
    tr.dataset.client = sale.clientName || '';
    tr.dataset.id = sale.id;
    tr.dataset.invoice = sale.invoiceNumber || '';
    tr.dataset.products = item.name || '';
    
    let paymentTypeText = sale.paymentType === 'cash' ? 'Espèce' : 
                          (sale.paymentType === 'credit' ? 'Crédit' : 
                          (sale.paymentType === 'credit_partial' ? 'Crédit partiel' : sale.paymentType));
    
    // Calculs
    const subtotal = (item.price || 0) * (item.qty || 1);
    const priceUnit = item.priceUnit || 0;
    const profitPerItem = (item.price - priceUnit) || 0;
    const totalProfitForItem = profitPerItem * (item.qty || 1);
    
    tr.innerHTML = `
        <td data-label="N° Facture">${sale.invoiceNumber || ''}</td>
        <td data-label="ID Vente">${sale.id || ''}</td>
        <td data-label="Date">${sale.date ? new Date(sale.date).toLocaleString() : ''}</td>
        <td data-label="Client ID">${sale.clientId || ''}</td>
        <td data-label="Client Name">${sale.clientName || ''}</td>
        <td data-label="Produit">${item.name || ''}</td>
        <td data-label="Quantité">${item.qty || 1}</td>
        <td data-label="Prix vente">${formatMAD(item.price || 0)}</td>
        <td data-label="Prix revient">${formatMAD(priceUnit)}</td>
        <td data-label="Profit unitaire">${formatMAD(profitPerItem)}</td>
        <td data-label="Total produit">${formatMAD(subtotal)}</td>
        <td data-label="Profit total">${formatMAD(totalProfitForItem)}</td>
        <td data-label="Profit vente">${formatMAD(rowData.saleTotalProfit)}</td>
        <td data-label="Payé">${formatMAD(sale.montantPaye || 0)}</td>
        <td data-label="Reste">${formatMAD(sale.resteDu || 0)}</td>
        <td data-label="Paiement">${paymentTypeText}</td>
        <td data-label="Actions" style="min-width: 180px;">
            <button class="btn btn-success btn-sm whatsapp-invoice" data-id="${sale.id}" title="Envoyer par WhatsApp"><i class="bi bi-whatsapp"></i></button>
            <button class="btn btn-primary btn-sm print-invoice" data-id="${sale.id}" title="Générer PDF"><i class="bi bi-file-pdf"></i></button>
            <button class="btn btn-warning btn-sm edit-sale" data-id="${sale.id}"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-danger btn-sm delete-sale" data-id="${sale.id}"><i class="bi bi-trash"></i></button>
        </td>`;
    tbody.appendChild(tr);
}

// Sort sales
function sortSales(column) {
    if (sortState.sales.column === column) {
        sortState.sales.direction = sortState.sales.direction === 'asc' ? 'desc' : 'asc';
    } else {
        sortState.sales.column = column;
        sortState.sales.direction = 'desc';
    }
    loadSalesList(sortState.sales.column, sortState.sales.direction);
    updateSortIcons('sales', column);
}

// Fonction pour générer un numéro de facture unique
function generateInvoiceNumber() {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `FACT-${year}${month}${day}-${random}`;
}

// ---------------- CREDITS WITH ALL DETAILS ----------------
// ---------------- CREDITS WITH ALL DETAILS ----------------
// ---------------- CREDITS WITH ALL DETAILS ----------------
function loadCredits(sortColumn = sortState.credits.column, sortDirection = sortState.credits.direction) {
    const tbody = document.getElementById("credits-tbody");
    if(!tbody) return;
    tbody.innerHTML = '<tr><td colspan="11" class="text-center"><div class="spinner"></div> Chargement...</td></tr>';
    
    getAllItems("credits").then(credits => {
        // Filtrer pour n'afficher que les crédits non payés
        const pendingCredits = credits.filter(c => c.status !== 'paid');
        
        // Trier les crédits
        pendingCredits.sort((a, b) => {
            let valA = a[sortColumn] || '';
            let valB = b[sortColumn] || '';
            
            // Gestion des différents types de colonnes
            if (sortColumn === 'amount' || sortColumn === 'totalVente' || sortColumn === 'montantPaye') {
                valA = a[sortColumn] || 0;
                valB = b[sortColumn] || 0;
            } else if (sortColumn === 'date') {
                valA = new Date(a.date || 0).getTime();
                valB = new Date(b.date || 0).getTime();
            } else if (sortColumn === 'id' || sortColumn === 'clientId' || sortColumn === 'invoiceNumber') {
                valA = a[sortColumn] || '';
                valB = b[sortColumn] || '';
                if (typeof valA === 'string') valA = valA.toLowerCase();
                if (typeof valB === 'string') valB = valB.toLowerCase();
            } else {
                if (typeof valA === 'string') valA = valA.toLowerCase();
                if (typeof valB === 'string') valB = valB.toLowerCase();
            }
            
            if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
            if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
        
        tbody.innerHTML = "";
        if (pendingCredits.length === 0) {
            tbody.innerHTML = '<tr><td colspan="11" class="text-center">Aucun crédit en attente</td></tr>';
        } else {
            pendingCredits.forEach(c => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td data-label="ID">${c.id || ''}</td>
                    <td data-label="N° Facture">${c.invoiceNumber || ''}</td>
                    <td data-label="Date">${c.date ? new Date(c.date).toLocaleString() : ''}</td>
                    <td data-label="Client ID">${c.clientId || ''}</td>
                    <td data-label="Client Name">${c.clientName || ''}</td>
                    <td data-label="Total Vente">${formatMAD(c.totalVente || c.amount || 0)}</td>
                    <td data-label="Montant Payé">${formatMAD(c.montantPaye || 0)}</td>
                    <td data-label="Reste Dû">${formatMAD(c.amount || 0)}</td>
                    <td data-label="Statut">
                        <span class="badge ${c.status === 'paid' ? 'bg-success' : 'bg-warning'}">
                            ${c.status === 'paid' ? 'Payé' : 'En attente'}
                        </span>
                    </td>
                    <td data-label="Actions" style="min-width: 250px;">
                        <button class="btn btn-success btn-sm whatsapp-credit" data-id="${c.id}" title="Envoyer rappel par WhatsApp"><i class="bi bi-whatsapp"></i></button>
                        <button class="btn btn-primary btn-sm print-credit" data-id="${c.id}" title="Générer PDF du crédit"><i class="bi bi-file-pdf"></i></button>
                        <button class="btn btn-success btn-sm pay-credit" data-id="${c.id}" title="Payer"><i class="bi bi-check-circle"></i> Payer</button>
                        <button class="btn btn-warning btn-sm edit-credit" data-id="${c.id}" title="Modifier"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-danger btn-sm delete-credit" data-id="${c.id}" title="Supprimer"><i class="bi bi-trash"></i></button>
                    </td>`;
                tbody.appendChild(row);
            });
        }
    }).catch(err => {
        console.error("Erreur chargement crédits:", err);
        tbody.innerHTML = '<tr><td colspan="11" class="text-center text-danger">Erreur de chargement</td></tr>';
    });
}
// Sort credits
function sortCredits(column) {
    if (sortState.credits.column === column) {
        sortState.credits.direction = sortState.credits.direction === 'asc' ? 'desc' : 'asc';
    } else {
        sortState.credits.column = column;
        sortState.credits.direction = 'desc'; // Par défaut, plus récent d'abord
    }
    loadCredits(sortState.credits.column, sortState.credits.direction);
    updateSortIcons('credits', column);
}


// ---------------- STATISTICS ----------------
// ---------------- STATISTICS AVEC FILTRE DE PÉRIODE ----------------
function getDateRangeFromPeriodStats(period) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let startDate = null;
    
    if (period === 'all') return null;
    
    startDate = new Date(today);
    
    switch(period) {
        case 'today': break;
        case '3days': startDate.setDate(today.getDate() - 3); break;
        case '1week': startDate.setDate(today.getDate() - 7); break;
        case '15days': startDate.setDate(today.getDate() - 15); break;
        case '1month': startDate.setMonth(today.getMonth() - 1); break;
        case '3months': startDate.setMonth(today.getMonth() - 3); break;
        case '6months': startDate.setMonth(today.getMonth() - 6); break;
        case '1year': startDate.setFullYear(today.getFullYear() - 1); break;
        default: return null;
    }
    
    return {
        start: startDate,
        end: new Date(today.setHours(23, 59, 59, 999))
    };
}

function loadStatisticsWithPeriod(period = 'all') {
    Promise.all([
        getAllItems("sales"),
        getAllItems("credits"),
        getAllItems("clients"),
        getAllItems("products")
    ]).then(([allSales, allCredits, clients, products]) => {
        
        // Filtrer par période si nécessaire
        const dateRange = getDateRangeFromPeriodStats(period);
        let filteredSales = allSales;
        let filteredCredits = allCredits;
        
        if (dateRange) {
            filteredSales = allSales.filter(sale => {
                const saleDate = new Date(sale.date || 0);
                return saleDate >= dateRange.start && saleDate <= dateRange.end;
            });
            
            filteredCredits = allCredits.filter(credit => {
                const creditDate = new Date(credit.date || 0);
                return creditDate >= dateRange.start && creditDate <= dateRange.end;
            });
        }
        
        // Calculs principaux
        let totalCA = 0;
        let totalProfit = 0;
        let totalItemsSold = 0;
        let invoiceCount = filteredSales.length;
        
        // Stats par client
        const clientStats = {};
        
        filteredSales.forEach(sale => {
            totalCA += sale.total || 0;
            
            if (sale.items) {
                sale.items.forEach(item => {
                    const profit = ((item.price - (item.priceUnit || 0)) * item.qty) || 0;
                    totalProfit += profit;
                    totalItemsSold += item.qty || 0;
                });
            }
            
            // Stats client
            if (sale.clientName && sale.clientName !== "Passager") {
                if (!clientStats[sale.clientName]) {
                    clientStats[sale.clientName] = {
                        name: sale.clientName,
                        ca: 0,
                        profit: 0,
                        count: 0
                    };
                }
                clientStats[sale.clientName].ca += sale.total || 0;
                clientStats[sale.clientName].count += 1;
                
                // Calculer le profit pour ce client
                if (sale.items) {
                    sale.items.forEach(item => {
                        const profit = ((item.price - (item.priceUnit || 0)) * item.qty) || 0;
                        clientStats[sale.clientName].profit += profit;
                    });
                }
            }
        });
        
        // Statistiques des crédits
        let creditsPaid = filteredCredits.filter(c => c.status === 'paid');
        let creditsUnpaid = filteredCredits.filter(c => c.status !== 'paid');
        
        let totalCreditsPaid = creditsPaid.reduce((sum, c) => sum + (c.montantPaye || 0), 0);
        let totalCreditsUnpaid = creditsUnpaid.reduce((sum, c) => sum + (c.amount || 0), 0);
        
        // Mise à jour de l'affichage
        document.getElementById("stats-ca").textContent = formatMAD(totalCA);
        document.getElementById("stats-profit").textContent = formatMAD(totalProfit);
        document.getElementById("stats-invoices").textContent = invoiceCount;
        document.getElementById("stats-items-sold").textContent = totalItemsSold;
        
        document.getElementById("stats-credits-paid-count").textContent = creditsPaid.length;
        document.getElementById("stats-credits-paid-amount").textContent = formatMAD(totalCreditsPaid);
        document.getElementById("stats-credits-unpaid-count").textContent = creditsUnpaid.length;
        document.getElementById("stats-credits-unpaid-amount").textContent = formatMAD(totalCreditsUnpaid);
        document.getElementById("stats-credits-paid-total").textContent = formatMAD(totalCreditsPaid);
        document.getElementById("stats-credits-unpaid-total").textContent = formatMAD(totalCreditsUnpaid);
        
        // Top clients
// Top clients - Affichage en liste verticale
const topClients = Object.values(clientStats)
    .sort((a, b) => b.ca - a.ca)
    .slice(0, 10);

const topClientsList = document.getElementById("stats-top-clients-list");
topClientsList.innerHTML = "";

if (topClients.length === 0) {
    topClientsList.innerHTML = '<div class="list-group-item text-center">Aucune vente sur cette période</div>';
} else {
    topClients.forEach(client => {
        const item = document.createElement("div");
        item.className = "list-group-item";
        item.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <strong class="fs-5">${client.name}</strong>
                <span class="badge bg-primary">${client.count} achat(s)</span>
            </div>
            <div class="row">
                <div class="col-6">
                    <small class="text-muted">Chiffre d'Affaire</small>
                    <div class="fw-bold">${formatMAD(client.ca)}</div>
                </div>
                <div class="col-6">
                    <small class="text-muted">Profit</small>
                    <div class="fw-bold text-success">${formatMAD(client.profit)}</div>
                </div>
            </div>
        `;
        topClientsList.appendChild(item);
    });
}

// Top produits - Affichage en liste verticale
const productStats = {};

filteredSales.forEach(sale => {
    if (sale.items) {
        sale.items.forEach(item => {
            if (!productStats[item.name]) {
                productStats[item.name] = {
                    name: item.name,
                    qty: 0,
                    ca: 0,
                    profit: 0
                };
            }
            productStats[item.name].qty += item.qty || 0;
            productStats[item.name].ca += (item.price || 0) * (item.qty || 0);
            productStats[item.name].profit += ((item.price - (item.priceUnit || 0)) * item.qty) || 0;
        });
    }
});

const topProducts = Object.values(productStats)
    .sort((a, b) => b.qty - a.qty)
    .slice(0, 10);

const topProductsList = document.getElementById("stats-top-products-list");
topProductsList.innerHTML = "";

if (topProducts.length === 0) {
    topProductsList.innerHTML = '<div class="list-group-item text-center">Aucun produit vendu sur cette période</div>';
} else {
    topProducts.forEach(product => {
        const item = document.createElement("div");
        item.className = "list-group-item";
        item.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <strong class="fs-5">${product.name}</strong>
                <span class="badge bg-info">${product.qty} vendu(s)</span>
            </div>
            <div class="row">
                <div class="col-6">
                    <small class="text-muted">Chiffre d'Affaire</small>
                    <div class="fw-bold">${formatMAD(product.ca)}</div>
                </div>
                <div class="col-6">
                    <small class="text-muted">Profit</small>
                    <div class="fw-bold text-success">${formatMAD(product.profit)}</div>
                </div>
            </div>
        `;
        topProductsList.appendChild(item);
    });
}
        
    }).catch(err => {
        console.error("Error loading statistics:", err);
    });
}

// Remplacer l'ancienne fonction loadStatistics
function loadStatistics() {
    loadStatisticsWithPeriod('all');
}

// Écouteur pour le filtre de période
document.getElementById("stats-period-filter")?.addEventListener("change", function() {
    loadStatisticsWithPeriod(this.value);
});

// Bouton actualiser
document.getElementById("refresh-stats")?.addEventListener("click", function() {
    const period = document.getElementById("stats-period-filter").value;
    loadStatisticsWithPeriod(period);
});

// ---------------- UPDATE SORT ICONS ----------------
function updateSortIcons(table, column) {
    const tableElement = document.getElementById(`${table}-table`);
    if (!tableElement) return;
    
    const headers = tableElement.querySelectorAll('thead th');
    headers.forEach(th => {
        th.classList.remove('sort-asc', 'sort-desc');
        const icon = th.querySelector('i.sort-icon');
        if (icon) icon.remove();
    });
    
    const th = tableElement.querySelector(`thead th[data-column="${column}"]`);
    if (th) {
        const direction = sortState[table].direction;
        th.classList.add(`sort-${direction}`);
        const icon = document.createElement('i');
        icon.className = `bi bi-arrow-${direction === 'asc' ? 'up' : 'down'} ms-1 sort-icon`;
        th.appendChild(icon);
    }
}

// ---------------- ADD SORT HEADERS TO TABLES ----------------
function addSortHeaders() {
    // Products table
    const productsTable = document.getElementById('products-table');
    if (productsTable) {
        const headers = productsTable.querySelectorAll('thead th');
        const columns = ['id', 'name', 'category', 'boxUnit', 'boxPrice', 'priceUnit', 'priceSell', 'profit', 'brand', 'unit', 'supplier', 'expiration', 'stock', 'sold', 'description'];
        headers.forEach((th, index) => {
            if (index < columns.length) {
                th.style.cursor = 'pointer';
                th.setAttribute('data-column', columns[index]);
                th.addEventListener('click', () => sortProducts(columns[index]));
            }
        });
    }
    
    // Clients table
    const clientsTable = document.getElementById('clients-table');
    if (clientsTable) {
        const headers = clientsTable.querySelectorAll('thead th');
        const columns = ['id', 'name', 'address', 'phone', 'whatsapp', 'createdAt', 'points', 'ca', 'profit'];
        headers.forEach((th, index) => {
            if (index < columns.length) {
                th.style.cursor = 'pointer';
                th.setAttribute('data-column', columns[index]);
                th.addEventListener('click', () => sortClients(columns[index]));
            }
        });
    }
    
    // Suppliers table
    const suppliersTable = document.getElementById('suppliers-table');
    if (suppliersTable) {
        const headers = suppliersTable.querySelectorAll('thead th');
        const columns = ['id', 'name', 'address', 'phone', 'whatsapp', 'ca'];
        headers.forEach((th, index) => {
            if (index < columns.length) {
                th.style.cursor = 'pointer';
                th.setAttribute('data-column', columns[index]);
                th.addEventListener('click', () => sortSuppliers(columns[index]));
            }
        });
    }
    
    // Sales table
    const salesTable = document.getElementById('sales-table');
    if (salesTable) {
        const headers = salesTable.querySelectorAll('thead th');
        const columns = ['invoiceNumber', 'id', 'date', 'clientId', 'clientName', 'productName', 'qty', 'price', 'priceUnit', 'profitPerItem', 'total', 'totalProfitForItem', 'saleTotalProfit', 'montantPaye', 'resteDu', 'paymentType'];
        headers.forEach((th, index) => {
            if (index < columns.length) {
                th.style.cursor = 'pointer';
                th.setAttribute('data-column', columns[index]);
                th.addEventListener('click', () => sortSales(columns[index]));
            }
        });
    }
    
    // Credits table
    const creditsTable = document.getElementById('credits-table');
    if (creditsTable) {
        const headers = creditsTable.querySelectorAll('thead th');
        const columns = ['id', 'invoiceNumber', 'date', 'clientId', 'clientName', 'totalVente', 'montantPaye', 'amount', 'status'];
        headers.forEach((th, index) => {
            if (index < columns.length) {
                th.style.cursor = 'pointer';
                th.setAttribute('data-column', columns[index]);
                th.addEventListener('click', () => sortCredits(columns[index]));
            }
        });
    }
}
/////
///
// ---------------- AJOUTER LE TRI SUR LA TABLE POS ----------------
function addPOSSortHeaders() {
    const table = document.querySelector('#pos-sales-list table');
    if (!table) return;
    
    const headers = table.querySelectorAll('thead th');
    const columns = ['invoice', 'date', 'client', 'product', 'qty', 'price', 'total', 'payment'];
    
    // Correspondance entre les colonnes et les propriétés de données
    const columnMap = {
        'invoice': 'invoiceNumber',
        'date': 'date',
        'client': 'clientName',
        'product': 'productName',
        'qty': 'qty',
        'price': 'price',
        'total': 'total',
        'payment': 'paymentType'
    };
    
    headers.forEach((th, index) => {
        if (index < columns.length) {
            th.style.cursor = 'pointer';
            th.setAttribute('data-column', columns[index]);
            
            // Ajouter l'événement de clic
            th.addEventListener('click', () => {
                const column = columns[index];
                const dataColumn = columnMap[column];
                
                // Inverser la direction ou mettre asc par défaut
                const currentDirection = th.classList.contains('sort-asc') ? 'asc' : 
                                        (th.classList.contains('sort-desc') ? 'desc' : null);
                
                let newDirection = 'asc';
                if (currentDirection === 'asc') {
                    newDirection = 'desc';
                }
                
                // Mettre à jour les classes de tous les en-têtes
                headers.forEach(h => {
                    h.classList.remove('sort-asc', 'sort-desc');
                    const icon = h.querySelector('i.sort-icon');
                    if (icon) icon.remove();
                });
                
                // Ajouter la classe et l'icône à l'en-tête cliqué
                th.classList.add(`sort-${newDirection}`);
                const icon = document.createElement('i');
                icon.className = `bi bi-arrow-${newDirection === 'asc' ? 'up' : 'down'} ms-1 sort-icon`;
                th.appendChild(icon);
                
                // Trier les données
                sortPOSTable(dataColumn, newDirection);
            });
        }
    });
}

// Fonction pour trier la table POS
function sortPOSTable(column, direction) {
    if (!posAllSales || posAllSales.length === 0) return;
    
    // Recréer les lignes de produits avec les données actuelles
    let productRows = [];
    posAllSales.forEach(sale => {
        if (sale.items && Array.isArray(sale.items)) {
            sale.items.forEach(item => {
                productRows.push({
                    sale: sale,
                    item: item,
                    productName: item.name || '',
                    clientName: sale.clientName || '',
                    date: new Date(sale.date || 0),
                    price: item.price || 0,
                    qty: item.qty || 1,
                    invoiceNumber: sale.invoiceNumber || '',
                    paymentType: sale.paymentType || '',
                    total: (item.price || 0) * (item.qty || 1)
                });
            });
        }
    });
    
    // Trier selon la colonne
    productRows.sort((a, b) => {
        let valA, valB;
        
        switch(column) {
            case 'invoiceNumber':
                valA = a.invoiceNumber.toLowerCase();
                valB = b.invoiceNumber.toLowerCase();
                break;
            case 'date':
                valA = a.date.getTime();
                valB = b.date.getTime();
                break;
            case 'clientName':
                valA = a.clientName.toLowerCase();
                valB = b.clientName.toLowerCase();
                break;
            case 'productName':
                valA = a.productName.toLowerCase();
                valB = b.productName.toLowerCase();
                break;
            case 'qty':
                valA = a.qty;
                valB = b.qty;
                break;
            case 'price':
                valA = a.price;
                valB = b.price;
                break;
            case 'total':
                valA = a.total;
                valB = b.total;
                break;
            case 'paymentType':
                valA = a.paymentType || '';
                valB = b.paymentType || '';
                break;
            default:
                valA = a.date.getTime();
                valB = b.date.getTime();
        }
        
        if (valA < valB) return direction === 'asc' ? -1 : 1;
        if (valA > valB) return direction === 'asc' ? 1 : -1;
        return 0;
    });
    
    // Afficher les résultats triés
    displayPOSProductRows(productRows);
}

// Modifier la fonction displayPOSProductRows pour qu'elle accepte les données triées
// Remplacer la fonction existante par celle-ci :

// Afficher les ventes (une ligne par facture)
// Afficher les ventes (une ligne par facture)
function displayPOSProductRows(rows) {
    const tbody = document.getElementById("pos-sales-tbody");
    if(!tbody) return;
    
    tbody.innerHTML = "";
    
    if (rows.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" class="text-center">Aucune vente trouvée</td></tr>';
        return;
    }
    
    rows.forEach(sale => {
        const tr = document.createElement("tr");
        
        tr.innerHTML = `
            <td data-label="N° Facture">${sale.invoiceNumber}</td>
            <td data-label="Date">${sale.date.toLocaleString()}</td>
            <td data-label="Client">${sale.clientName}</td>
            <td data-label="Produits">${sale.productsSummary}</td>
            <td data-label="Total">${formatMAD(sale.total)}</td>
            <td data-label="Payé">${formatMAD(sale.montantPaye)}</td>
            <td data-label="Reste">${formatMAD(sale.resteDu)}</td>
            <td data-label="Paiement">${sale.paymentTypeText}</td>
            <td data-label="Actions" style="min-width: 180px;">
                <button class="btn btn-success btn-sm whatsapp-invoice" data-id="${sale.id}" title="Envoyer par WhatsApp"><i class="bi bi-whatsapp"></i></button>
                <button class="btn btn-primary btn-sm print-invoice" data-id="${sale.id}" title="Générer PDF"><i class="bi bi-file-pdf"></i></button>
                <button class="btn btn-warning btn-sm edit-sale" data-id="${sale.id}" title="Modifier"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-danger btn-sm delete-sale" data-id="${sale.id}" title="Supprimer"><i class="bi bi-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ---------------- POS WITH DIRECT SEARCH IN DATALIST ----------------
let cart = [];
let selectedClientId = null;
let allProducts = [];
let allClients = [];

// Variables pour les filtres POS
let posAllSales = [];
let posFilteredSales = [];

// Ensure passenger client exists
function ensurePassengerClient() {
    return new Promise((resolve) => {
        getAllItems("clients").then(clients => {
            const passenger = clients.find(c => c.name === "Passager");
            if (!passenger) {
                const store = getStore("clients", "readwrite");
                const newPassenger = {
                    name: "Passager",
                    phone: "",
                    whatsapp: "",
                    address: "Client sans compte",
                    points: 0,
                    ca: 0,
                    profit: 0,
                    createdAt: new Date().toISOString()
                };
                const request = store.add(newPassenger);
                request.onsuccess = () => {
                    console.log("Client Passager créé");
                    resolve();
                };
                request.onerror = () => resolve();
            } else {
                resolve();
            }
        });
    });
}

// Start new sale
function startNewSale(){
    cart = [];
    selectedClientId = null;
    
    document.getElementById("pos-steps").classList.remove("d-none");
    document.getElementById("pos-sales-list").classList.add("d-none");
    
    // Ensure passenger client exists
    ensurePassengerClient().then(() => {
        loadAllData();
        showPOSStep(1);
        
        document.getElementById("client-search-select").value = "Passager";
        document.getElementById("product-search").value = "";
        document.getElementById("product-results").innerHTML = "";
        document.getElementById("discount").value = "0";
        document.getElementById("cash-given").value = "";
        
        // Initialiser la monnaie rendue à 0
        document.getElementById("cash-return").textContent = formatMAD(0);
        document.getElementById("cash-return").style.color = "#28a745";
        
        // Vider le panier et réinitialiser le total
        renderCart();
    });
}

// Load all data
function loadAllData() {
    // Load clients
    allClients = [];
    getAllItems("clients").then(clients => {
        allClients = clients;
        updateClientDatalist();
        
        // Set default passenger client
        const passenger = allClients.find(c => c.name === "Passager");
        if (passenger) {
            selectedClientId = passenger.id;
            document.getElementById("client-search-select").value = "Passager";
        }
    });
    
    // Load products
    allProducts = [];
    getAllItems("products").then(products => {
        allProducts = products;
    });
}

// Update client datalist
function updateClientDatalist() {
    const datalist = document.getElementById("client-list");
    if (!datalist) return;
    
    datalist.innerHTML = "";
    allClients.forEach(c => {
        const option = document.createElement("option");
        option.value = c.name;
        option.dataset.id = c.id;
        datalist.appendChild(option);
    });
}

// Handle client selection from datalist
document.getElementById("client-search-select")?.addEventListener("change", function(e) {
    const selectedName = this.value.trim();
    
    if (selectedName === "") {
        const passenger = allClients.find(c => c.name === "Passager");
        if (passenger) {
            selectedClientId = passenger.id;
            this.value = "Passager";
        }
        return;
    }
    
    const client = allClients.find(c => c.name.toLowerCase() === selectedName.toLowerCase());
    
    if (client) {
        selectedClientId = client.id;
    } else {
        if (confirm(`Le client "${selectedName}" n'existe pas. Voulez-vous le créer ?`)) {
            const store = getStore("clients", "readwrite");
            const newClient = {
                name: selectedName,
                phone: "",
                whatsapp: "",
                address: "",
                points: 0,
                ca: 0,
                profit: 0,
                createdAt: new Date().toISOString()
            };
            
            const request = store.add(newClient);
            request.onsuccess = (e) => {
                const newId = e.target.result;
                selectedClientId = newId;
                
                getAllItems("clients").then(clients => {
                    allClients = clients;
                    updateClientDatalist();
                });
                
                alert(`Client "${selectedName}" créé avec succès!`);
            };
        } else {
            const passenger = allClients.find(c => c.name === "Passager");
            if (passenger) {
                selectedClientId = passenger.id;
                this.value = "Passager";
            }
        }
    }
});

document.getElementById("client-search-select")?.addEventListener("input", function(e) {
    if (this.value === "") {
        const passenger = allClients.find(c => c.name === "Passager");
        if (passenger) {
            this.value = "Passager";
            selectedClientId = passenger.id;
        }
    }
});

// Filter products in real-time
document.getElementById("product-search")?.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const resultsDiv = document.getElementById("product-results");
    
    if(searchTerm.length === 0) {
        resultsDiv.innerHTML = "";
        return;
    }
    
    const filtered = allProducts.filter(p => 
        p.name.toLowerCase().includes(searchTerm) && (p.stock || 0) > 0
    );
    
    resultsDiv.innerHTML = filtered.map(p => `
        <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-id="${p.id}">
            <span><strong>${p.name}</strong> - ${p.category || ''}</span>
            <span>
                <span class="badge bg-primary">${formatMAD(p.priceSell || 0)}</span>
                <span class="badge bg-secondary">Stock: ${p.stock || 0}</span>
            </span>
        </a>
    `).join('');
});

document.getElementById("product-results")?.addEventListener("click", (e) => {
    e.preventDefault();
    const link = e.target.closest('a');
    if(!link) return;
    
    const id = Number(link.dataset.id);
    const product = allProducts.find(p => p.id === id);
    if(!product) return;
    
    addProductToCart(id, 1);
    document.getElementById("product-results").innerHTML = "";
    document.getElementById("product-search").value = "";
    document.getElementById("product-search").focus();
});

function addProductToCart(id, qty) {
    const product = allProducts.find(p => p.id === id);
    if(!product) return;
    
    const exist = cart.find(i => i.id === id);
    if(exist) { 
        if(exist.qty + qty > (product.stock || 0)) {
            alert("Quantité dépasse le stock!");
            return;
        }
        exist.qty += qty; 
    } else { 
        if(qty > (product.stock || 0)) {
            alert("Quantité dépasse le stock!");
            return;
        }
        cart.push({...product, qty}); 
    }
    
    renderCart();
}

function renderCart(){
    const tbody = document.getElementById("pos-cart-tbody");
    if(!tbody) return;
    tbody.innerHTML = "";
    let totalPanier = 0;
    
    cart.forEach(item=>{
        const subtotal = (item.priceSell || 0) * item.qty;
        totalPanier += subtotal;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td data-label="Produit">${item.name}</td>
            <td data-label="Qty">
                <input type="number" class="form-control form-control-sm cart-qty" data-id="${item.id}" value="${item.qty}" min="1" max="${item.stock || 0}" style="width:80px">
            </td>
            <td data-label="Prix">${formatMAD(item.priceSell || 0)}</td>
            <td data-label="Total">${formatMAD(subtotal)}</td>
            <td data-label="Action">
                <button class="btn btn-danger btn-sm remove-from-cart" data-id="${item.id}"><i class="bi bi-trash"></i></button>
            </td>`;
        tbody.appendChild(row);
    });
    
    document.querySelectorAll('.cart-qty').forEach(input => {
        input.addEventListener('change', (e) => {
            const id = Number(e.target.dataset.id);
            const newQty = parseInt(e.target.value) || 1;
            const item = cart.find(i => i.id === id);
            if(item) {
                if(newQty > (item.stock || 0)) {
                    alert("Quantité dépasse le stock!");
                    e.target.value = item.qty;
                    return;
                }
                item.qty = newQty;
                renderCart();
            }
        });
    });
    
    const discount = parseFloat(document.getElementById("discount").value) || 0;
    const totalApresRemise = Math.max(0, totalPanier - discount);
    
    const totalSpan = document.getElementById("pos-total");
    totalSpan.textContent = formatMAD(totalApresRemise);
    totalSpan.style.color = "#28a745";
    totalSpan.style.fontWeight = "bold";
    totalSpan.style.fontSize = "1.3rem";
    
    const stepPaymentTotal = document.getElementById("step-payment-total");
    if (stepPaymentTotal) {
        stepPaymentTotal.innerHTML = `Total à payer : ${formatMAD(totalApresRemise)}`;
    }
    
    if (!document.getElementById("cash-given").value) {
        document.getElementById("cash-return").textContent = formatMAD(0);
        document.getElementById("cash-return").style.color = "#28a745";
    } else {
        updateCashReturn();
    }
}

document.getElementById("pos-cart-tbody")?.addEventListener("click", e => {
    if(e.target.classList.contains("remove-from-cart") || e.target.closest('.remove-from-cart')) {
        const btn = e.target.closest('.remove-from-cart');
        const id = Number(btn.dataset.id);
        cart = cart.filter(i => i.id !== id);
        renderCart();
    }
});

document.getElementById("discount")?.addEventListener("input", renderCart);

function showPOSStep(step) {
    document.getElementById("step-client").classList.add("d-none");
    document.getElementById("step-cart").classList.add("d-none");
    document.getElementById("step-payment").classList.add("d-none");
    
    if(step === 1) {
        document.getElementById("step-client").classList.remove("d-none");
        document.getElementById("client-search-select").focus();
    } else if(step === 2) {
        document.getElementById("step-cart").classList.remove("d-none");
        renderCart();
        document.getElementById("product-search").focus();
    } else if(step === 3) {
        document.getElementById("step-payment").classList.remove("d-none");
        document.getElementById("payment-type").value = "cash";
        togglePaymentFields();
        
        const totalText = document.getElementById("pos-total").textContent;
        
        let totalDisplay = document.getElementById("step-payment-total");
        if (!totalDisplay) {
            totalDisplay = document.createElement("div");
            totalDisplay.id = "step-payment-total";
            totalDisplay.className = "alert alert-success text-center mb-3";
            totalDisplay.style.fontSize = "1.5rem";
            totalDisplay.style.fontWeight = "bold";
            
            const paymentTitle = document.querySelector("#step-payment h4");
            if (paymentTitle) {
                paymentTitle.insertAdjacentElement('afterend', totalDisplay);
            }
        }
        totalDisplay.innerHTML = `Total à payer : ${totalText}`;
        
        document.getElementById("cash-return").textContent = formatMAD(0);
        document.getElementById("cash-return").style.color = "#28a745";
        document.getElementById("cash-given").value = "";
        
        document.getElementById("cash-given").focus();
    }
}

document.getElementById("next-to-cart")?.addEventListener("click", () => {
    if(!selectedClientId) {
        const passenger = allClients.find(c => c.name === "Passager");
        if (passenger) {
            selectedClientId = passenger.id;
            document.getElementById("client-search-select").value = "Passager";
        } else {
            alert("Veuillez sélectionner un client");
            return;
        }
    }
    showPOSStep(2);
});

document.getElementById("back-to-client")?.addEventListener("click", () => {
    showPOSStep(1);
});

document.getElementById("next-to-payment")?.addEventListener("click", () => {
    if(cart.length === 0) {
        alert("Panier vide");
        return;
    }
    showPOSStep(3);
});

document.getElementById("back-to-cart")?.addEventListener("click", () => {
    showPOSStep(2);
});

document.getElementById("payment-type")?.addEventListener("change", togglePaymentFields);

function togglePaymentFields() {
    const type = document.getElementById("payment-type").value;
    const cashZone = document.getElementById("cash-zone");
    
    if (type === "cash") {
        cashZone.style.display = "block";
        document.getElementById("cash-given").required = true;
        document.getElementById("cash-given").value = "";
        document.getElementById("cash-return").textContent = formatMAD(0);
    } else {
        cashZone.style.display = "none";
        document.getElementById("cash-given").required = false;
        document.getElementById("cash-given").value = "0";
        // Pour un crédit, le montant dû est le total
        const totalText = document.getElementById("pos-total").textContent;
        document.getElementById("cash-return").textContent = `Crédit: ${totalText}`;
        document.getElementById("cash-return").style.color = "#dc3545";
    }
}

document.getElementById("cash-given")?.addEventListener("input", updateCashReturn);

function updateCashReturn() {
    const totalText = document.getElementById("pos-total").textContent;
    const totalApresRemise = parseFloat(totalText.replace(/[^\d,-]/g, '').replace(',', '.')) || 0;
    
    const given = parseFloat(document.getElementById("cash-given").value) || 0;
    
    if (document.getElementById("cash-given").value === "") {
        document.getElementById("cash-return").textContent = formatMAD(0);
        document.getElementById("cash-return").style.color = "#28a745";
        return;
    }
    
    const returned = given - totalApresRemise;
    const cashReturnSpan = document.getElementById("cash-return");
    
    if (returned < 0) {
        const resteDu = Math.abs(returned);
        cashReturnSpan.textContent = `Reste à payer: ${formatMAD(resteDu)} (sera enregistré en crédit)`;
        cashReturnSpan.style.color = "#dc3545";
    } else {
        cashReturnSpan.textContent = `Monnaie à rendre: ${formatMAD(returned)}`;
        cashReturnSpan.style.color = "#28a745";
    }
}

function updateClientStats(clientId, total, profit) {
    const store = getStore("clients", "readwrite");
    store.get(clientId).onsuccess = e => {
        const client = e.target.result;
        if (client) {
            client.ca = (client.ca || 0) + total;
            client.profit = (client.profit || 0) + (profit || 0);
            client.points = (client.points || 0) + 1;
            store.put(client);
        }
    };
}

// ---------------- SAVE SALE ----------------
document.getElementById("save-sale")?.addEventListener("click", () => {
    if(!selectedClientId) {
        const passenger = allClients.find(c => c.name === "Passager");
        if (passenger) {
            selectedClientId = passenger.id;
        } else {
            alert("Client non sélectionné");
            return;
        }
    }
    
    if(cart.length === 0) {
        alert("Panier vide");
        return;
    }
    
    let paymentType = document.getElementById("payment-type").value;
    const totalText = document.getElementById("pos-total").textContent;
    const total = parseFloat(totalText.replace(/[^\d,-]/g, '').replace(',', '.')) || 0;
    const cashGiven = parseFloat(document.getElementById("cash-given").value) || 0;
    
    const totalProfit = cart.reduce((sum, item) => sum + ((item.priceSell - (item.priceUnit || 0)) * item.qty || 0), 0);
    
    let montantPaye = 0;
    let resteDu = total;
    let finalPaymentType = paymentType;
    
    // Gestion selon le type de paiement
    if(paymentType === "cash") {
        montantPaye = Math.min(cashGiven, total);
        resteDu = total - montantPaye;
        
        if(resteDu > 0) {
            if(!confirm(`Il reste ${formatMAD(resteDu)} à payer. Voulez-vous l'enregistrer comme crédit?`)) {
                return; // L'utilisateur a annulé
            }
            // Si l'utilisateur accepte, on passe en crédit partiel
            finalPaymentType = "credit_partial";
        }
    } else if(paymentType === "credit") {
        // Pour un crédit pur, montant payé = 0, reste dû = total
        montantPaye = 0;
        resteDu = total;
        finalPaymentType = "credit";
        
        if(!confirm(`Voulez-vous enregistrer cette vente à crédit pour ${formatMAD(total)}?`)) {
            return; // L'utilisateur a annulé
        }
    }
    
    const client = allClients.find(c => c.id === selectedClientId);
    
    const sale = {
        clientId: selectedClientId,
        clientName: client?.name || "Passager",
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            qty: item.qty,
            price: item.priceSell,
            priceUnit: item.priceUnit || 0,
            subtotal: (item.priceSell || 0) * item.qty
        })),
        total: total,
        montantPaye: montantPaye,
        resteDu: resteDu,
        discount: parseFloat(document.getElementById("discount").value) || 0,
        paymentType: finalPaymentType,
        date: new Date().toISOString(),
        timestamp: Date.now(),
        invoiceNumber: generateInvoiceNumber(),
        cashGiven: cashGiven,
        change: cashGiven - montantPaye
    };
    
    console.log("Vente à enregistrer:", sale); // Pour déboguer
    
    const editId = document.getElementById("pos-form").dataset.editSaleId;
    
    if (editId) {
        // Gestion de la modification
        getItem("sales", parseInt(editId)).then(oldSale => {
            if (oldSale) {
                // Restaurer les stocks de l'ancienne vente
                oldSale.items.forEach(item => {
                    const productStore = getStore("products", "readwrite");
                    productStore.get(item.id).onsuccess = e => {
                        const product = e.target.result;
                        if(product) {
                            product.stock = (product.stock || 0) + item.qty;
                            product.sold = (product.sold || 0) - item.qty;
                            productStore.put(product);
                        }
                    };
                });
                
                // Supprimer l'ancien crédit si existant
                if (oldSale.paymentType === 'credit' || oldSale.paymentType === 'credit_partial') {
                    getAllItems("credits").then(credits => {
                        const credit = credits.find(c => c.saleId === oldSale.timestamp || c.saleId === oldSale.id);
                        if (credit) {
                            deleteItem("credits", credit.id);
                        }
                    });
                }
                
                // Supprimer l'ancienne vente
                deleteItem("sales", parseInt(editId)).then(() => {
                    saveNewSale(sale, client, totalProfit, resteDu);
                });
            } else {
                saveNewSale(sale, client, totalProfit, resteDu);
            }
        });
    } else {
        saveNewSale(sale, client, totalProfit, resteDu);
    }
});

function saveNewSale(sale, client, totalProfit, resteDu) {
    const salesStore = getStore("sales", "readwrite");
    salesStore.add(sale).onsuccess = (e) => {
        const saleId = e.target.result;
        
        // Mettre à jour les statistiques du client
        if (client && client.name !== "Passager") {
            updateClientStats(client.id, sale.total, totalProfit);
        }
        
        // Mettre à jour les stocks
        cart.forEach(item => {
            const productStore = getStore("products", "readwrite");
            productStore.get(item.id).onsuccess = e => {
                const product = e.target.result;
                if(product) {
                    product.stock = (product.stock || 0) - item.qty;
                    product.sold = (product.sold || 0) + item.qty;
                    productStore.put(product);
                }
            };
        });
        
        // Enregistrer le crédit si nécessaire
        if(resteDu > 0) {
            const credit = {
                clientId: client?.id,
                clientName: client?.name || "Passager",
                amount: resteDu,
                totalVente: sale.total,
                montantPaye: sale.montantPaye,
                date: sale.date,
                status: "pending",
                saleId: sale.timestamp,
                invoiceNumber: sale.invoiceNumber,
                paymentType: sale.paymentType
            };
            
            const creditsStore = getStore("credits", "readwrite");
            creditsStore.add(credit).onsuccess = () => {
                console.log("Crédit enregistré avec succès");
                
                if(sale.paymentType === "credit") {
                    alert(`Vente à crédit enregistrée avec succès!\nMontant total: ${formatMAD(sale.total)}\nCe montant a été ajouté à la liste des crédits.`);
                } else if(sale.paymentType === "credit_partial") {
                    alert(`Vente enregistrée avec un crédit partiel de ${formatMAD(resteDu)}\nLe montant payé: ${formatMAD(sale.montantPaye)}`);
                }
            };
        } else {
            alert("Vente enregistrée avec succès!");
        }
        
        // Réinitialiser le formulaire
        delete document.getElementById("pos-form").dataset.editSaleId;
        document.getElementById("pos-steps").classList.add("d-none");
        document.getElementById("pos-sales-list").classList.remove("d-none");
        
        // Recharger les listes
        loadPOSSalesList();
        loadCredits();
        loadClients();
        loadProducts();
        loadAllData();
    };
}

// Charger les ventes avec filtres
function loadPOSSalesListWithFilters(){
    const tbody = document.getElementById("pos-sales-tbody");
    if(!tbody) return;
    tbody.innerHTML = '<tr><td colspan="9" class="text-center"><div class="spinner"></div> Chargement...</td></tr>';
    
    getAllItems("sales").then(sales => {
        posAllSales = sales;
        applyPOSFilters();
    }).catch(err => {
        tbody.innerHTML = '<tr><td colspan="9" class="text-center text-danger">Erreur de chargement</td></tr>';
    });
}

// Appliquer les filtres POS
// Appliquer les filtres POS
function applyPOSFilters() {
    const tbody = document.getElementById("pos-sales-tbody");
    if(!tbody) return;
    
    const searchTerm = document.getElementById("pos-search")?.value.toLowerCase() || '';
    const sortBy = document.getElementById("pos-sort-by")?.value || 'date-desc';
    const dateFilter = document.getElementById("pos-date-filter")?.value || '';
    
    // Créer un tableau de ventes (une ligne par vente)
    let salesRows = [];
    posAllSales.forEach(sale => {
        // Calculer le total de la vente
        const totalVente = sale.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
        
        // Créer un résumé des produits
        const productsSummary = sale.items.map(item => 
            `${item.name} (x${item.qty})`
        ).join(', ');
        
        salesRows.push({
            id: sale.id,
            invoiceNumber: sale.invoiceNumber || '',
            date: new Date(sale.date || 0),
            clientName: sale.clientName || 'Passager',
            productsSummary: productsSummary,
            total: totalVente,
            montantPaye: sale.montantPaye || 0,
            resteDu: sale.resteDu || 0,
            paymentTypeText: sale.paymentType === 'cash' ? 'Espèce' : 
                            (sale.paymentType === 'credit' ? 'Crédit' : 
                            (sale.paymentType === 'credit_partial' ? 'Crédit partiel' : ''))
        });
    });
    
    // Filtrer par recherche
    if (searchTerm) {
        salesRows = salesRows.filter(sale => 
            sale.clientName.toLowerCase().includes(searchTerm) ||
            sale.invoiceNumber.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filtrer par date
    if (dateFilter) {
        salesRows = salesRows.filter(sale => {
            const saleDate = sale.date.toISOString().split('T')[0];
            return saleDate === dateFilter;
        });
    }
    
    // Trier
    salesRows.sort((a, b) => {
        switch(sortBy) {
            case 'date-asc': return a.date - b.date;
            case 'date-desc': return b.date - a.date;
            case 'client-asc': return a.clientName.localeCompare(b.clientName);
            case 'client-desc': return b.clientName.localeCompare(a.clientName);
            case 'price-asc': return a.total - b.total;
            case 'price-desc': return b.total - a.total;
            default: return b.date - a.date;
        }
    });
    
    // Afficher les résultats
    displayPOSProductRows(salesRows);
}

// Afficher les lignes de produits
// Afficher les ventes (une ligne par facture)
// Afficher les ventes (une ligne par facture)
function displayPOSProductRows(rows) {
    const tbody = document.getElementById("pos-sales-tbody");
    if(!tbody) return;
    
    tbody.innerHTML = "";
    
    if (rows.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" class="text-center">Aucune vente trouvée</td></tr>';
        return;
    }
    
    rows.forEach(sale => {
        const tr = document.createElement("tr");
        
        tr.innerHTML = `
            <td data-label="N° Facture">${sale.invoiceNumber}</td>
            <td data-label="Date">${sale.date.toLocaleString()}</td>
            <td data-label="Client">${sale.clientName}</td>
            <td data-label="Produits">${sale.productsSummary}</td>
            <td data-label="Total">${formatMAD(sale.total)}</td>
            <td data-label="Payé">${formatMAD(sale.montantPaye)}</td>
            <td data-label="Reste">${formatMAD(sale.resteDu)}</td>
            <td data-label="Paiement">${sale.paymentTypeText}</td>
            <td data-label="Actions" style="min-width: 200px;">
                <button class="btn btn-success btn-sm whatsapp-invoice" data-id="${sale.id}" title="Envoyer par WhatsApp"><i class="bi bi-whatsapp"></i></button>
                <button class="btn btn-primary btn-sm print-invoice" data-id="${sale.id}" title="Générer PDF"><i class="bi bi-file-pdf"></i></button>
                <button class="btn btn-warning btn-sm edit-sale" data-id="${sale.id}" title="Modifier"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-danger btn-sm delete-sale" data-id="${sale.id}" title="Supprimer"><i class="bi bi-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Event listeners pour les filtres POS
document.getElementById("pos-search")?.addEventListener("input", applyPOSFilters);
document.getElementById("pos-sort-by")?.addEventListener("change", applyPOSFilters);
document.getElementById("pos-date-filter")?.addEventListener("change", applyPOSFilters);
document.getElementById("pos-reset-filters")?.addEventListener("click", () => {
    document.getElementById("pos-search").value = '';
    document.getElementById("pos-sort-by").value = 'date-desc';
    document.getElementById("pos-date-filter").value = '';
    applyPOSFilters();
});

// Remplacer loadPOSSalesList par la nouvelle version
function loadPOSSalesList() {
    loadPOSSalesListWithFilters();
}

document.getElementById("new-sale-btn")?.addEventListener("click", startNewSale);

// Delete handlers
document.getElementById("products-tbody")?.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-product") || e.target.closest('.delete-product')) {
        const btn = e.target.closest('.delete-product');
        const id = Number(btn.dataset.id);
        if(confirm("Delete this product?")) {
            deleteItem("products", id).then(() => loadProducts());
        }
    }
});

document.getElementById("clients-tbody")?.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-client") || e.target.closest('.delete-client')) {
        const btn = e.target.closest('.delete-client');
        const id = Number(btn.dataset.id);
        if(confirm("Delete this client?")) {
            deleteItem("clients", id).then(() => {
                loadClients();
                loadAllData();
            });
        }
    }
});

document.getElementById("suppliers-tbody")?.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-supplier") || e.target.closest('.delete-supplier')) {
        const btn = e.target.closest('.delete-supplier');
        const id = Number(btn.dataset.id);
        if(confirm("Delete this supplier?")) {
            deleteItem("suppliers", id).then(() => loadSuppliers());
        }
    }
});

// Sales Actions
// ---------------- GESTIONNAIRE D'ÉVÉNEMENTS POUR LES ACTIONS ----------------
document.addEventListener("click", function(e) {
    // Pour générer un PDF

       if(e.target.classList.contains("whatsapp-invoice") || e.target.closest('.whatsapp-invoice')) {
        const btn = e.target.closest('.whatsapp-invoice');
        const id = Number(btn.dataset.id);
        sendInvoiceToWhatsApp(id);
    }
        // POUR ENVOYER RAPPEL DE CRÉDIT PAR WHATSAPP (NOUVEAU)
    if(e.target.classList.contains("whatsapp-credit") || e.target.closest('.whatsapp-credit')) {
        const btn = e.target.closest('.whatsapp-credit');
        const id = Number(btn.dataset.id);
        sendCreditReminderToWhatsApp(id);
    }
    // Pour générer un PDF
    if(e.target.classList.contains("print-invoice") || e.target.closest('.print-invoice')) {
        const btn = e.target.closest('.print-invoice');
        const id = Number(btn.dataset.id);
        generateInvoicePDF(id);
    }
      // POUR GÉNÉRER PDF DE CRÉDIT (NOUVEAU)
    if(e.target.classList.contains("print-credit") || e.target.closest('.print-credit')) {
        const btn = e.target.closest('.print-credit');
        const id = Number(btn.dataset.id);
        generateCreditPDF(id);
    }
    
    // Pour supprimer une vente
    if(e.target.classList.contains("delete-sale") || e.target.closest('.delete-sale')) {
        const btn = e.target.closest('.delete-sale');
        const id = Number(btn.dataset.id);
        
        if(confirm("Êtes-vous sûr de vouloir supprimer cette vente ?")) {
            getItem("sales", id).then(sale => {
                if (sale && sale.items) {
                    sale.items.forEach(item => {
                        const productStore = getStore("products", "readwrite");
                        productStore.get(item.id).onsuccess = e => {
                            const product = e.target.result;
                            if(product) {
                                product.stock = (product.stock || 0) + item.qty;
                                product.sold = (product.sold || 0) - item.qty;
                                productStore.put(product);
                            }
                        };
                    });
                    
                    if (sale.paymentType === 'credit' || sale.paymentType === 'credit_partial') {
                        getAllItems("credits").then(credits => {
                            const credit = credits.find(c => c.saleId === sale.timestamp || c.saleId === sale.id);
                            if (credit) {
                                deleteItem("credits", credit.id);
                            }
                        });
                    }
                    
                    if (sale.clientId && sale.clientName !== "Passager") {
                        const clientStore = getStore("clients", "readwrite");
                        clientStore.get(sale.clientId).onsuccess = e => {
                            const client = e.target.result;
                            if (client) {
                                client.ca = (client.ca || 0) - sale.total;
                                clientStore.put(client);
                            }
                        };
                    }
                }
                
                deleteItem("sales", id).then(() => {
                    alert("Vente supprimée avec succès!");
                    loadPOSSalesList();
                    loadSalesList();
                    loadProducts();
                    loadCredits();
                    loadClients();
                });
            });
        }
    }
    
    // Pour éditer une vente
    if(e.target.classList.contains("edit-sale") || e.target.closest('.edit-sale')) {
        const btn = e.target.closest('.edit-sale');
        const id = Number(btn.dataset.id);
        editSale(id);
    }
});

function editSale(id) {
    getItem("sales", id).then(sale => {
        if (!sale) return;
        
        if (confirm("Voulez-vous charger cette vente dans le POS pour la modifier ?")) {
            document.getElementById("pos-form").dataset.editSaleId = id;
            cart = [];
            
            document.getElementById("pos-form").classList.remove("d-none");
            document.getElementById("sales-form")?.classList.add("d-none");
            document.getElementById("credits-form")?.classList.add("d-none");
            document.getElementById("products-form")?.classList.add("d-none");
            document.getElementById("clients-form")?.classList.add("d-none");
            document.getElementById("suppliers-form")?.classList.add("d-none");
            document.getElementById("statistics-form")?.classList.add("d-none");
            
            ensurePassengerClient().then(() => {
                loadAllData();
                
                if (sale.items && Array.isArray(sale.items)) {
                    Promise.all(sale.items.map(item => getItem("products", item.id))).then(products => {
                        cart = sale.items.map((item, index) => {
                            const product = products[index] || {};
                            return {
                                ...product,
                                id: item.id,
                                name: item.name,
                                qty: item.qty,
                                priceSell: item.price,
                                priceUnit: product.priceUnit || 0
                            };
                        });
                        
                        document.getElementById("pos-steps").classList.remove("d-none");
                        document.getElementById("pos-sales-list").classList.add("d-none");
                        
                        selectedClientId = sale.clientId;
                        document.getElementById("client-search-select").value = sale.clientName || '';
                        document.getElementById("discount").value = sale.discount || 0;
                        
                        showPOSStep(2);
                        renderCart();
                        
                        alert("Vente chargée dans le POS. Vous pouvez maintenant la modifier et l'enregistrer à nouveau.");
                    });
                }
            });
        }
    });
}

// ---------------- CREDIT ACTIONS ----------------

// Credit actions
// ---------------- CREDIT ACTIONS ----------------

// Variable pour stocker le crédit en cours de traitement
let currentCreditForPayment = null;

// Credit actions
document.getElementById("credits-tbody")?.addEventListener("click", e => {
    if(e.target.classList.contains("pay-credit") || e.target.closest('.pay-credit')) {
        const btn = e.target.closest('.pay-credit');
        const id = Number(btn.dataset.id);
        
        // Récupérer le crédit
        getItem("credits", id).then(credit => {
            if (!credit) {
                alert("Crédit non trouvé!");
                return;
            }
            
            currentCreditForPayment = credit;
            
            // Créer une boîte de dialogue personnalisée
            showPaymentDialog(credit);
        });
    }
    
    if(e.target.classList.contains("delete-credit") || e.target.closest('.delete-credit')) {
        const btn = e.target.closest('.delete-credit');
        const id = Number(btn.dataset.id);
        if(confirm("Supprimer ce crédit?")) {
            deleteItem("credits", id).then(() => {
                alert("Crédit supprimé!");
                loadCredits();
                loadAllData();
            });
        }
    }
    
    if(e.target.classList.contains("edit-credit") || e.target.closest('.edit-credit')) {
        const btn = e.target.closest('.edit-credit');
        const id = Number(btn.dataset.id);
        editCredit(id);
    }
});

// Fonction pour afficher la boîte de dialogue de paiement
function showPaymentDialog(credit) {
    // Créer un overlay pour le paiement
    const overlay = document.createElement('div');
    overlay.className = 'payment-dialog-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    
    // Créer la boîte de dialogue
    const dialog = document.createElement('div');
    dialog.className = 'payment-dialog';
    dialog.style.cssText = `
        background: white;
        padding: 25px;
        border-radius: 10px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    `;
    
    const resteDu = credit.amount || 0;
    const totalVente = credit.totalVente || resteDu;
    const dejaPaye = credit.montantPaye || 0;
    
    dialog.innerHTML = `
        <h4 class="mb-3">Paiement du crédit</h4>
        <div class="mb-3">
            <p><strong>Client:</strong> ${credit.clientName || 'Inconnu'}</p>
            <p><strong>Facture:</strong> ${credit.invoiceNumber || 'N/A'}</p>
            <p><strong>Total vente:</strong> ${formatMAD(totalVente)}</p>
            <p><strong>Déjà payé:</strong> ${formatMAD(dejaPaye)}</p>
            <p><strong>Reste à payer:</strong> <span id="remaining-amount" style="color: #dc3545; font-weight: bold;">${formatMAD(resteDu)}</span></p>
        </div>
        <div class="mb-3">
            <label class="form-label"><strong>Montant à payer aujourd'hui:</strong></label>
            <input type="number" id="payment-amount" class="form-control" min="0.01" max="${resteDu}" step="0.01" value="${resteDu}">
        </div>
        <div class="mb-3">
            <p><strong>Reste après paiement:</strong> <span id="new-remaining" style="color: #28a745; font-weight: bold;">${formatMAD(0)}</span></p>
        </div>
        <div class="d-flex justify-content-end gap-2">
            <button id="cancel-payment" class="btn btn-secondary">Annuler</button>
            <button id="confirm-payment" class="btn btn-success">Confirmer le paiement</button>
        </div>
    `;
    
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    
    // Gestionnaire pour mettre à jour le reste en temps réel
    const paymentInput = document.getElementById('payment-amount');
    const newRemainingSpan = document.getElementById('new-remaining');
    
    paymentInput.addEventListener('input', function() {
        let montant = parseFloat(this.value) || 0;
        const maxMontant = resteDu;
        
        // Validation
        if (montant > maxMontant) {
            montant = maxMontant;
            this.value = maxMontant;
        }
        if (montant < 0) {
            montant = 0;
            this.value = 0;
        }
        
        const nouveauReste = maxMontant - montant;
        newRemainingSpan.textContent = formatMAD(nouveauReste);
        newRemainingSpan.style.color = nouveauReste === 0 ? '#28a745' : '#dc3545';
    });
    
    // Déclencher l'événement input pour initialiser
    paymentInput.dispatchEvent(new Event('input'));
    
    // Bouton Annuler
    document.getElementById('cancel-payment').addEventListener('click', () => {
        document.body.removeChild(overlay);
        currentCreditForPayment = null;
    });
    
    // Bouton Confirmer
    document.getElementById('confirm-payment').addEventListener('click', () => {
        const montantPaye = parseFloat(paymentInput.value) || 0;
        
        if (montantPaye <= 0) {
            alert("Veuillez entrer un montant valide");
            return;
        }
        
        if (montantPaye > resteDu) {
            alert(`Le montant ne peut pas dépasser ${formatMAD(resteDu)}`);
            return;
        }
        
        processCreditPayment(credit, montantPaye);
        document.body.removeChild(overlay);
        currentCreditForPayment = null;
    });
}

// Fonction pour traiter le paiement
function processCreditPayment(credit, montantPaye) {
    const resteDu = credit.amount || 0;
    const nouveauReste = resteDu - montantPaye;
    const nouveauMontantPaye = (credit.montantPaye || 0) + montantPaye;
    
    // Mettre à jour le crédit
    const store = getStore("credits", "readwrite");
    
    if (nouveauReste <= 0) {
        // Crédit complètement payé
        credit.status = "paid";
        credit.amount = 0;
        credit.montantPaye = credit.totalVente || (credit.montantPaye || 0) + montantPaye;
        
        // Ajouter l'historique des paiements
        if (!credit.payments) credit.payments = [];
        credit.payments.push({
            date: new Date().toISOString(),
            amount: montantPaye,
            remaining: 0,
            type: "final"
        });
        
        store.put(credit).onsuccess = () => {
            alert(`✅ Crédit complètement payé !\nMontant total payé: ${formatMAD(credit.montantPaye)}`);
            
            // METTRE À JOUR LA VENTE ASSOCIÉE
            if (credit.saleId) {
                getAllItems("sales").then(sales => {
                    const sale = sales.find(s => s.timestamp === credit.saleId || s.id === credit.saleId);
                    if (sale) {
                        // Mettre à jour le montant payé et le reste
                        sale.montantPaye = (sale.montantPaye || 0) + montantPaye;
                        sale.resteDu = Math.max(0, sale.total - sale.montantPaye);
                        
                        const saleStore = getStore("sales", "readwrite");
                        saleStore.put(sale).onsuccess = () => {
                            console.log(`Vente mise à jour: payé=${sale.montantPaye}, reste=${sale.resteDu}`);
                        };
                    }
                });
            }
            
            // Mettre à jour le CA du client
            if (credit.clientId) {
                updateClientCA(credit.clientId, montantPaye);
            }
            
            loadCredits();
            loadAllData();
        };
    } else {
        // Paiement partiel
        credit.amount = nouveauReste;
        credit.montantPaye = nouveauMontantPaye;
        credit.status = "pending";
        
        // Ajouter l'historique des paiements
        if (!credit.payments) credit.payments = [];
        credit.payments.push({
            date: new Date().toISOString(),
            amount: montantPaye,
            remaining: nouveauReste,
            type: "partial"
        });
        
        store.put(credit).onsuccess = () => {
            alert(`✅ Paiement partiel enregistré !\nPayé aujourd'hui: ${formatMAD(montantPaye)}\nReste à payer: ${formatMAD(nouveauReste)}`);
            
            // METTRE À JOUR LA VENTE ASSOCIÉE
            if (credit.saleId) {
                getAllItems("sales").then(sales => {
                    const sale = sales.find(s => s.timestamp === credit.saleId || s.id === credit.saleId);
                    if (sale) {
                        // Mettre à jour le montant payé et le reste
                        sale.montantPaye = (sale.montantPaye || 0) + montantPaye;
                        sale.resteDu = Math.max(0, sale.total - sale.montantPaye);
                        
                        const saleStore = getStore("sales", "readwrite");
                        saleStore.put(sale).onsuccess = () => {
                            console.log(`Vente mise à jour: payé=${sale.montantPaye}, reste=${sale.resteDu}`);
                        };
                    }
                });
            }
            
            // Mettre à jour le CA du client
            if (credit.clientId) {
                updateClientCA(credit.clientId, montantPaye);
            }
            
            loadCredits();
            loadAllData();
        };
    }
}

// Fonction pour mettre à jour le CA du client
function updateClientCA(clientId, amount) {
    if (!clientId) return;
    
    getItem("clients", clientId).then(client => {
        if (!client) return;
        
        client.ca = (client.ca || 0) + amount;
        
        const store = getStore("clients", "readwrite");
        store.put(client);
    });
}

// Credit form submission
document.getElementById("credit-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const clientName = document.getElementById("credit-client-search").value.trim();
    const clientId = document.getElementById("credit-client-id").value;
    const invoiceNumber = document.getElementById("credit-invoice").value;
    const totalVente = parseFloat(document.getElementById("credit-total").value) || 0;
    const montantPaye = parseFloat(document.getElementById("credit-paye").value) || 0;
    const resteDu = totalVente - montantPaye;
    const status = document.getElementById("credit-status").value;
    const editId = document.getElementById("credit-form").dataset.editId;
    
    if (!clientName) {
        alert("Veuillez sélectionner un client");
        return;
    }
    
    if (totalVente <= 0) {
        alert("Le total de la vente doit être supérieur à 0");
        return;
    }
    
    if (resteDu < 0) {
        alert("Le montant payé ne peut pas être supérieur au total de la vente!");
        return;
    }
    
    document.getElementById("credit-reste").value = resteDu.toFixed(2);
    
    const credit = {
        clientId: clientId || Date.now().toString(),
        clientName: clientName,
        totalVente: totalVente,
        montantPaye: montantPaye,
        amount: resteDu,
        status: status,
        date: new Date().toISOString(),
        invoiceNumber: invoiceNumber
    };
    
    const store = getStore("credits", "readwrite");
    
    if (editId) {
        credit.id = parseInt(editId);
        store.put(credit).onsuccess = () => {
            alert("Crédit mis à jour avec succès!");
            document.getElementById("add-credit-form").classList.add("d-none");
            document.getElementById("credit-form").reset();
            delete document.getElementById("credit-form").dataset.editId;
            loadCredits();
        };
    } else {
        store.add(credit).onsuccess = () => {
            alert("Crédit ajouté avec succès!");
            document.getElementById("add-credit-form").classList.add("d-none");
            document.getElementById("credit-form").reset();
            loadCredits();
        };
    }
});

// ---------------- ADD CREDIT BUTTON ----------------
document.getElementById("add-credit-btn")?.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Bouton Ajouter Crédit cliqué");
    
    // Réinitialiser le formulaire
    const form = document.getElementById("credit-form");
    if (form) {
        form.reset();
    }
    
    // Supprimer l'ID d'édition
    const creditForm = document.getElementById("credit-form");
    if (creditForm) {
        delete creditForm.dataset.editId;
    }
    
    // Réinitialiser les champs
    document.getElementById("credit-client-search").value = '';
    document.getElementById("credit-client-id").value = '';
    document.getElementById("credit-invoice").value = '';
    document.getElementById("credit-total").value = '';
    document.getElementById("credit-paye").value = '0';
    document.getElementById("credit-reste").value = '0';
    document.getElementById("credit-status").value = 'pending';
    
    // Charger la liste des clients
    getAllItems("clients").then(clients => {
        const datalist = document.getElementById("credit-client-list");
        if (datalist) {
            datalist.innerHTML = "";
            clients.forEach(c => {
                const option = document.createElement("option");
                option.value = c.name;
                option.dataset.id = c.id;
                datalist.appendChild(option);
            });
            console.log("Clients chargés pour le datalist:", clients.length);
        }
    });
    
    // Cacher les autres formulaires
    document.getElementById("add-product-form")?.classList.add("d-none");
    document.getElementById("add-client-form")?.classList.add("d-none");
    document.getElementById("add-supplier-form")?.classList.add("d-none");
    document.getElementById("add-product-form")?.classList.remove("active");
    document.getElementById("add-client-form")?.classList.remove("active");
    document.getElementById("add-supplier-form")?.classList.remove("active");
    
    // Afficher le formulaire
    const creditFormDiv = document.getElementById("add-credit-form");
    if (creditFormDiv) {
        creditFormDiv.classList.remove("d-none");
        creditFormDiv.classList.add("active");
        console.log("Formulaire de crédit affiché");
    } else {
        console.error("Formulaire add-credit-form non trouvé!");
    }
});

// Credit client search
document.getElementById("credit-client-search")?.addEventListener("change", function() {
    const selectedName = this.value;
    getAllItems("clients").then(clients => {
        const client = clients.find(c => c.name === selectedName);
        if (client) {
            document.getElementById("credit-client-id").value = client.id;
        }
    });
});

// Calculate reste dû
document.getElementById("credit-total")?.addEventListener("input", calculateReste);
document.getElementById("credit-paye")?.addEventListener("input", calculateReste);

function calculateReste() {
    const total = parseFloat(document.getElementById("credit-total").value) || 0;
    const paye = parseFloat(document.getElementById("credit-paye").value) || 0;
    const reste = Math.max(0, total - paye);
    document.getElementById("credit-reste").value = reste.toFixed(2);
}

// Search filters
document.getElementById("search-products")?.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const tbody = document.getElementById("products-tbody");
    if(!tbody) return;
    
    Array.from(tbody.children).forEach(row => {
        const name = row.cells[1]?.textContent.toLowerCase() || '';
        const category = row.cells[2]?.textContent.toLowerCase() || '';
        row.style.display = name.includes(searchTerm) || category.includes(searchTerm) ? '' : 'none';
    });
});

document.getElementById("search-clients")?.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const tbody = document.getElementById("clients-tbody");
    if(!tbody) return;
    
    Array.from(tbody.children).forEach(row => {
        const name = row.cells[1]?.textContent.toLowerCase() || '';
        const phone = row.cells[3]?.textContent.toLowerCase() || '';
        row.style.display = name.includes(searchTerm) || phone.includes(searchTerm) ? '' : 'none';
    });
});

document.getElementById("search-suppliers")?.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const tbody = document.getElementById("suppliers-tbody");
    if(!tbody) return;
    
    Array.from(tbody.children).forEach(row => {
        const name = row.cells[1]?.textContent.toLowerCase() || '';
        const phone = row.cells[3]?.textContent.toLowerCase() || '';
        row.style.display = name.includes(searchTerm) || phone.includes(searchTerm) ? '' : 'none';
    });
});

document.getElementById("search-credits")?.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const tbody = document.getElementById("credits-tbody");
    if(!tbody) return;
    
    Array.from(tbody.children).forEach(row => {
        const clientName = row.cells[4]?.textContent.toLowerCase() || '';
        const clientId = row.cells[3]?.textContent.toLowerCase() || '';
        const invoice = row.cells[1]?.textContent.toLowerCase() || '';
        row.style.display = clientName.includes(searchTerm) || clientId.includes(searchTerm) || invoice.includes(searchTerm) ? '' : 'none';
    });
});

document.getElementById("sales-client-search")?.addEventListener("input", filterSales);
document.getElementById("sales-product-search")?.addEventListener("input", filterSales);
document.getElementById("sales-invoice-search")?.addEventListener("input", filterSales);
document.getElementById("sales-date-filter")?.addEventListener("change", filterSales);


// ---------------- MISE À JOUR DES TOTAUX CA ET PROFIT DANS SALES HISTORY ----------------
function updateSalesTotals() {
    const rows = document.querySelectorAll("#sales-tbody tr");
    let totalCA = 0;
    let totalProfit = 0;
    let visibleCount = 0;
    
    rows.forEach(row => {
        // Vérifier si la ligne est visible (non cachée par les filtres)
        if (row.style.display !== 'none') {
            visibleCount++;
            
            // Récupérer le CA (Total produit) - colonne 10 (index 10)
            const caCell = row.cells[10]; // "Total produit"
            if (caCell) {
                const caText = caCell.textContent.replace(/[^\d,-]/g, '').replace(',', '.');
                totalCA += parseFloat(caText) || 0;
            }
            
            // Récupérer le Profit total - colonne 11 (index 11)
            const profitCell = row.cells[11]; // "Profit total"
            if (profitCell) {
                const profitText = profitCell.textContent.replace(/[^\d,-]/g, '').replace(',', '.');
                totalProfit += parseFloat(profitText) || 0;
            }
        }
    });
    
    // Créer ou mettre à jour l'affichage des totaux
    let summaryDiv = document.getElementById('sales-summary');
    if (!summaryDiv) {
        summaryDiv = document.createElement('div');
        summaryDiv.id = 'sales-summary';
        summaryDiv.className = 'alert alert-info mb-3';
        
        // Insérer après les filtres
        const filtersDiv = document.querySelector('#sales-form .form-actions');
        if (filtersDiv) {
            filtersDiv.after(summaryDiv);
        }
    }
    
    summaryDiv.innerHTML = `
        <div class="d-flex justify-content-between align-items-center flex-wrap">
            <span><strong>📊 Résultats filtrés :</strong> ${visibleCount} vente(s)</span>
            <span class="badge bg-success p-2">CA Total: ${formatMAD(totalCA)}</span>
            <span class="badge bg-info p-2">Profit Total: ${formatMAD(totalProfit)}</span>
            <button class="btn btn-sm btn-outline-secondary" onclick="resetSalesFilters()">Réinitialiser</button>
        </div>
    `;
}

// Modifier la fonction filterSales existante pour mettre à jour les totaux
// Remplacez votre fonction filterSales actuelle par celle-ci :
function filterSales() {
    const clientSearch = document.getElementById("sales-client-search").value.toLowerCase();
    const productSearch = document.getElementById("sales-product-search").value.toLowerCase();
    const invoiceSearch = document.getElementById("sales-invoice-search").value.toLowerCase();
    const dateFilter = document.getElementById("sales-date-filter").value;
    const periodFilter = document.getElementById("sales-period-filter")?.value || 'all';
    
    const rows = document.querySelectorAll("#sales-tbody tr");
    
    // Calcul de la date de début selon la période
    let startDate = null;
    if (periodFilter !== 'all') {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        startDate = new Date(today);
        
        switch(periodFilter) {
            case 'today': break;
            case '3days': startDate.setDate(today.getDate() - 3); break;
            case '1week': startDate.setDate(today.getDate() - 7); break;
            case '15days': startDate.setDate(today.getDate() - 15); break;
            case '1month': startDate.setMonth(today.getMonth() - 1); break;
            case '3months': startDate.setMonth(today.getMonth() - 3); break;
            case '6months': startDate.setMonth(today.getMonth() - 6); break;
            case '1year': startDate.setFullYear(today.getFullYear() - 1); break;
        }
    }
    
    rows.forEach(row => {
        let show = true;
        
        if(clientSearch) {
            const client = row.cells[4]?.textContent.toLowerCase() || '';
            if(!client.includes(clientSearch)) show = false;
        }
        
        if(show && productSearch) {
            const product = row.cells[5]?.textContent.toLowerCase() || '';
            if(!product.includes(productSearch)) show = false;
        }
        
        if(show && invoiceSearch) {
            const invoice = row.cells[0]?.textContent.toLowerCase() || '';
            if(!invoice.includes(invoiceSearch)) show = false;
        }
        
        if(show && dateFilter) {
            const rowDate = row.dataset.date?.split('T')[0] || '';
            if(rowDate !== dateFilter) show = false;
        }
        
        // Filtre par période
        if(show && startDate) {
            const rowDate = new Date(row.dataset.date || 0);
            if(rowDate < startDate) show = false;
        }
        
        row.style.display = show ? '' : 'none';
    });
    
    updateSalesTotals();
}

// Fonction pour réinitialiser les filtres
function resetSalesFilters() {
    document.getElementById("sales-client-search").value = '';
    document.getElementById("sales-product-search").value = '';
    document.getElementById("sales-invoice-search").value = '';
    document.getElementById("sales-date-filter").value = '';
    
    // Réafficher toutes les lignes
    const rows = document.querySelectorAll("#sales-tbody tr");
    rows.forEach(row => row.style.display = '');
    
    // Mettre à jour les totaux
    updateSalesTotals();
}

// Modifier la fonction loadSalesList pour ajouter les totaux après le chargement
// Ajoutez cette ligne à la fin de votre fonction loadSalesList existante
// Dans loadSalesList, après avoir ajouté toutes les lignes, appelez updateSalesTotals()

// ---------------- EXPORT/IMPORT ----------------
document.getElementById("export-sales")?.addEventListener("click", async() => {
    const json = await exportStoreToJSON("sales");
    const blob = new Blob([json], {type: "application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ventes.json";
    a.click();
});

document.getElementById("import-sales")?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async e => {
        const file = e.target.files[0];
        const text = await file.text();
        await importStoreFromJSON("sales", text);
        loadPOSSalesList();
        loadSalesList();
    };
    input.click();
});

document.getElementById("export-sales-full")?.addEventListener("click", async() => {
    const json = await exportStoreToJSON("sales");
    const blob = new Blob([json], {type: "application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sales_complete.json";
    a.click();
});

document.getElementById("import-sales-full")?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async e => {
        const file = e.target.files[0];
        const text = await file.text();
        await importStoreFromJSON("sales", text);
        loadPOSSalesList();
        loadSalesList();
    };
    input.click();
});

document.getElementById("export-credits")?.addEventListener("click", async() => {
    const json = await exportStoreToJSON("credits");
    const blob = new Blob([json], {type: "application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "credits.json";
    a.click();
});

document.getElementById("import-credits")?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async e => {
        const file = e.target.files[0];
        const text = await file.text();
        await importStoreFromJSON("credits", text);
        loadCredits();
    };
    input.click();
});

document.getElementById("export-products")?.addEventListener("click", async() => {
    const json = await exportStoreToJSON("products");
    const blob = new Blob([json], {type: "application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "products.json";
    a.click();
});

document.getElementById("import-products")?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async e => {
        const file = e.target.files[0];
        const text = await file.text();
        await importStoreFromJSON("products", text);
        loadProducts();
    };
    input.click();
});

document.getElementById("export-clients")?.addEventListener("click", async() => {
    const json = await exportStoreToJSON("clients");
    const blob = new Blob([json], {type: "application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "clients.json";
    a.click();
});

document.getElementById("import-clients")?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async e => {
        const file = e.target.files[0];
        const text = await file.text();
        await importStoreFromJSON("clients", text);
        loadClients();
        loadAllData();
    };
    input.click();
});

document.getElementById("export-suppliers")?.addEventListener("click", async() => {
    const json = await exportStoreToJSON("suppliers");
    const blob = new Blob([json], {type: "application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "suppliers.json";
    a.click();
});

document.getElementById("import-suppliers")?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async e => {
        const file = e.target.files[0];
        const text = await file.text();
        await importStoreFromJSON("suppliers", text);
        loadSuppliers();
    };
    input.click();
});
// ---------------- BOUTON AFFICHER LA LISTE ----------------
document.getElementById("show-sales-list-btn")?.addEventListener("click", function() {
    // Masquer le formulaire de nouvelle vente
    document.getElementById("pos-steps").classList.add("d-none");
    // Afficher la liste des ventes
    document.getElementById("pos-sales-list").classList.remove("d-none");
    // Afficher les filtres
    document.getElementById("pos-filters").classList.remove("d-none");
    // Recharger la liste des ventes
    loadPOSSalesList();
    
    console.log("Liste des ventes affichée");
});
// ---------------- GÉNÉRER PDF FACTURE ----------------
// ---------------- GÉNÉRER PDF FACTURE ET ENVOYER PAR WHATSAPP ----------------
// ---------------- ENVOYER FACTURE PAR WHATSAPP ----------------
// ---------------- ENVOYER FACTURE DIRECTEMENT SUR WHATSAPP ----------------
// ---------------- VERSION SIMPLIFIÉE POUR IPHONE PWA ----------------
function sendInvoiceToWhatsApp(saleId) {
    getItem("sales", saleId).then(sale => {
        if (!sale) {
            alert("Vente non trouvée!");
            return;
        }
        
        getItem("clients", sale.clientId).then(client => {
            const clientPhone = client?.whatsapp || client?.phone || '';
            
            // VOTRE MESSAGE EXACTEMENT IDENTIQUE
            const subTotal = sale.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const discount = sale.discount || 0;
            const totalApresRemise = subTotal - discount;
            
            let message = `           MINIMARKET      \n`;
            message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
            message += `FACTURE ${sale.invoiceNumber}\n`;
            message += ` ${new Date(sale.date).toLocaleString('fr-FR')}\n`;
            message += ` ${sale.clientName}\n\n`;
            
            message += `        DÉTAILS DES PRODUITS :    \n`;
            message += `━━━━━━━━━━━━━━━━━━━━━\n`;
            
            sale.items.forEach(item => {
                const itemTotal = item.price * item.qty;
                message += `• ${item.name}\n`;
                message += `  ${item.qty} x ${formatMAD(item.price)} = ${formatMAD(itemTotal)}\n`;
            });
            
            message += `━━━━━━━━━━━━━━━━━━━━━\n`;
            message += `         RÉCAPITULATIF  :   \n`;
            message += ` Sous-total: ${formatMAD(subTotal)}\n`;
            
            if (discount > 0) {
                message += `Remise: -${formatMAD(discount)}\n`;
            }
            
            message += ` TOTAL: ${formatMAD(totalApresRemise)}\n`;
            message += ` Payé: ${formatMAD(sale.montantPaye || 0)}\n`;
            
            if (sale.resteDu > 0) {
                message += `   Reste à payer : ${formatMAD(sale.resteDu)}\n`;
            }
            
            message += ` Paiement: ${sale.paymentType === 'cash' ? 'Espèces' : 
                                        (sale.paymentType === 'credit' ? 'Crédit' : 'Crédit partiel')}\n\n`;
            
            message += `      Merci de votre confiance !  \n`;
            message += `━━━━━━━━━━━━━━━━━━━━━`;
            
            const encodedMessage = encodeURIComponent(message);
            
            if (clientPhone) {
                const cleanPhone = clientPhone.replace(/[^0-9]/g, '');
                
                // SOLUTION UNIVERSELLE : créer un lien et simuler un clic
                const link = document.createElement('a');
                link.href = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.style.display = 'none';
                document.body.appendChild(link);
                
                // Simuler un clic
                link.click();
                
                // Nettoyer après un court délai
                setTimeout(() => {
                    document.body.removeChild(link);
                }, 100);
            } else {
                const manualPhone = prompt("Numéro WhatsApp du client:");
                if (manualPhone) {
                    const cleanPhone = manualPhone.replace(/[^0-9]/g, '');
                    
                    const link = document.createElement('a');
                    link.href = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
                    link.target = '_blank';
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    setTimeout(() => document.body.removeChild(link), 100);
                }
            }
        });
    });
}
// ---------------- GÉNÉRER PDF DE CRÉDIT ----------------
function generateCreditPDF(creditId) {
    getItem("credits", creditId).then(credit => {
        if (!credit) {
            alert("Crédit non trouvé!");
            return;
        }
        
        // Récupérer les informations du client
        getItem("clients", credit.clientId).then(client => {
            // Créer un nouveau document PDF
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Couleurs
            const primaryColor = [220, 53, 69]; // Rouge pour crédit
            const secondaryColor = [100, 100, 100]; // Gris
            
            // En-tête du document
            doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            doc.rect(0, 0, 210, 30, 'F');
            
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(22);
            doc.setFont("helvetica", "bold");
            doc.text("MINIMARKET SYSTEM", 105, 15, { align: "center" });
            
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.text("DOCUMENT DE CRÉDIT", 105, 25, { align: "center" });
            
            // Informations
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(10);
            
            let yPos = 40;
            
            // Numéro et date
            doc.setFont("helvetica", "bold");
            doc.text(`N° Crédit: ${credit.id || 'N/A'}`, 20, yPos);
            doc.setFont("helvetica", "normal");
            doc.text(`Date: ${credit.date ? new Date(credit.date).toLocaleDateString('fr-FR') : 'N/A'}`, 120, yPos);
            
            yPos += 10;
            
            // Informations client
            doc.setFillColor(240, 240, 240);
            doc.rect(20, yPos - 5, 170, 25, 'F');
            
            doc.setFont("helvetica", "bold");
            doc.text("CLIENT:", 25, yPos);
            doc.setFont("helvetica", "normal");
            doc.text(credit.clientName || 'N/A', 45, yPos);
            
            yPos += 7;
            
            if (client) {
                if (client.phone) {
                    doc.text(`Tél: ${client.phone}`, 25, yPos);
                }
                if (client.whatsapp) {
                    doc.text(`WhatsApp: ${client.whatsapp}`, 80, yPos);
                }
            }
            
            yPos += 10;
            
            // Informations de facture
            doc.setFont("helvetica", "bold");
            doc.text("INFORMATIONS DE FACTURE:", 20, yPos);
            yPos += 7;
            
            doc.setFont("helvetica", "normal");
            doc.text(`N° Facture: ${credit.invoiceNumber || 'N/A'}`, 25, yPos);
            yPos += 7;
            doc.text(`Total de la vente: ${formatMAD(credit.totalVente || credit.amount || 0)}`, 25, yPos);
            
            yPos += 10;
            
            // Détails du crédit
            doc.setFillColor(255, 243, 205);
            doc.rect(20, yPos - 5, 170, 30, 'F');
            
            doc.setFont("helvetica", "bold");
            doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            doc.text("DÉTAILS DU CRÉDIT:", 25, yPos);
            
            yPos += 7;
            doc.setFont("helvetica", "normal");
            doc.text(`Montant déjà payé: ${formatMAD(credit.montantPaye || 0)}`, 25, yPos);
            
            yPos += 7;
            doc.setFont("helvetica", "bold");
            doc.text(`RESTE À PAYER: ${formatMAD(credit.amount || 0)}`, 25, yPos);
            
            yPos += 15;
            
            // Statut
            doc.setTextColor(0, 0, 0);
            doc.setFont("helvetica", "bold");
            doc.text("STATUT:", 20, yPos);
            doc.setFont("helvetica", "normal");
            
            const status = credit.status === 'paid' ? 'Payé' : 'En attente';
            doc.setTextColor(credit.status === 'paid' ? 40 : 220, credit.status === 'paid' ? 167 : 53, credit.status === 'paid' ? 69 : 69);
            doc.text(status, 50, yPos);
            
            yPos += 15;
            
            // Historique des paiements (si disponible)
            if (credit.payments && credit.payments.length > 0) {
                doc.setTextColor(0, 0, 0);
                doc.setFont("helvetica", "bold");
                doc.text("HISTORIQUE DES PAIEMENTS:", 20, yPos);
                yPos += 7;
                
                credit.payments.forEach((payment, index) => {
                    doc.setFont("helvetica", "normal");
                    doc.text(`${index + 1}. ${new Date(payment.date).toLocaleDateString('fr-FR')} - ${formatMAD(payment.amount)}`, 25, yPos);
                    yPos += 5;
                });
            }
            
            // Pied de page
            doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            doc.rect(0, 280, 210, 17, 'F');
            
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(9);
            doc.text("Merci de régulariser votre situation", 105, 290, { align: "center" });
            doc.text("Minimarket System - Service Crédits", 105, 297, { align: "center" });
            
            // Sauvegarder le PDF
            doc.save(`Credit_${credit.invoiceNumber || credit.id}.pdf`);
        });
    });
}
// ---------------- ENVOYER RAPPEL DE CRÉDIT PAR WHATSAPP ----------------
function sendCreditReminderToWhatsApp(creditId) {
    getItem("credits", creditId).then(credit => {
        if (!credit) {
            alert("Crédit non trouvé!");
            return;
        }
        
        // Récupérer les informations du client
        getItem("clients", credit.clientId).then(client => {
            const clientPhone = client?.whatsapp || client?.phone || '';
            
            // Créer un message de rappel pour WhatsApp
            let message = ` MINIMARKET *\n`;
            message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
            message += ` *RAPPEL DE CRÉDIT*\n\n`;
            message += ` Client: ${credit.clientName}\n`;
            message += ` Facture: ${credit.invoiceNumber || 'N/A'}\n`;
            message += ` Date: ${credit.date ? new Date(credit.date).toLocaleDateString('fr-FR') : 'N/A'}\n\n`;
            message += ` DÉTAILS:*\n`;
            message += ` Total vente: ${formatMAD(credit.totalVente || credit.amount || 0)}\n`;
            message += ` Déjà payé: ${formatMAD(credit.montantPaye || 0)}\n`;
            message += ` Reste à payer: ${formatMAD(credit.amount || 0)}*\n\n`;
            message += ` Merci de régulariser votre situation*\n`;
            message += `━━━━━━━━━━━━━━━━━━━━━`;
            
            // Encoder le message
            const encodedMessage = encodeURIComponent(message);
            
            if (clientPhone) {
                const cleanPhone = clientPhone.replace(/[^0-9]/g, '');
                
                // Détecter si c'est un mobile ou un ordinateur
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                
                if (isMobile) {
                    window.location.href = `whatsapp://send?phone=${cleanPhone}&text=${encodedMessage}`;
                } else {
                    window.open(`https://wa.me/${cleanPhone}?text=${encodedMessage}`, '_blank');
                }
            } else {
                const manualPhone = prompt("Le client n'a pas de numéro WhatsApp. Entrez son numéro :");
                if (manualPhone) {
                    const cleanPhone = manualPhone.replace(/[^0-9]/g, '');
                    window.open(`https://wa.me/${cleanPhone}?text=${encodedMessage}`, '_blank');
                }
            }
        });
    });
}
// ---------------- FILTRE SIMPLE PAR PÉRIODE ----------------
document.getElementById("sales-period-filter")?.addEventListener("change", function() {
    filterSales(); // Utilise votre fonction filterSales existante
});
// ---------------- DB READY ----------------
document.addEventListener("db-ready", () => {
    console.log("DB Ready, loading data...");
    loadProducts();
    loadClients();
    loadSuppliers();
    loadPOSSalesList();
    loadSalesList();
    loadCredits();
    loadStatistics();
    addSortHeaders();
        addPOSSortHeaders(); // <<< AJOUTEZ CETTE LIGNE ICI
   // addPeriodFiltersToUI();
   // filterStatisticsByPeriod('all'); // Initialiser avec "Tous les temps"
});

// ================ LISTE DES VENTES DANS POS ================
// ---------------- GÉNÉRER PDF FACTURE ----------------
function generateInvoicePDF(saleId) {
    getItem("sales", saleId).then(sale => {
        if (!sale) {
            alert("Vente non trouvée!");
            return;
        }
        
        // Récupérer les informations du client
        getItem("clients", sale.clientId).then(client => {
            // Créer un nouveau document PDF
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Couleurs
            const primaryColor = [0, 188, 212]; // Cyan
            const secondaryColor = [100, 100, 100]; // Gris
            
            // En-tête de la facture
            doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            doc.rect(0, 0, 210, 30, 'F');
            
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(22);
            doc.setFont("helvetica", "bold");
            doc.text("MINIMARKET SYSTEM", 105, 15, { align: "center" });
            
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.text("FACTURE DE VENTE", 105, 25, { align: "center" });
            
            // Informations de la facture
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(10);
            
            let yPos = 40;
            
            // Numéro de facture et date
            doc.setFont("helvetica", "bold");
            doc.text(`N° Facture: ${sale.invoiceNumber || 'N/A'}`, 20, yPos);
            doc.setFont("helvetica", "normal");
            doc.text(`Date: ${new Date(sale.date).toLocaleString('fr-FR')}`, 120, yPos);
            
            yPos += 10;
            
            // Informations client
            doc.setFillColor(240, 240, 240);
            doc.rect(20, yPos - 5, 170, 20, 'F');
            
            doc.setFont("helvetica", "bold");
            doc.text("CLIENT:", 25, yPos);
            doc.setFont("helvetica", "normal");
            doc.text(sale.clientName || 'Passager', 45, yPos);
            
            yPos += 7;
            
            if (client) {
                if (client.phone) {
                    doc.text(`Tél: ${client.phone}`, 25, yPos);
                }
                if (client.whatsapp) {
                    doc.text(`WhatsApp: ${client.whatsapp}`, 80, yPos);
                }
                if (client.address) {
                    yPos += 7;
                    doc.text(`Adresse: ${client.address}`, 25, yPos);
                }
            }
            
            yPos += 15;
            
            // Tableau des produits
            const tableColumn = ["Produit", "Qté", "Prix unit.", "Total"];
            const tableRows = [];
            
            let subTotal = 0;
            
            sale.items.forEach(item => {
                const itemTotal = item.price * item.qty;
                subTotal += itemTotal;
                
                const rowData = [
                    item.name,
                    item.qty.toString(),
                    formatMAD(item.price),
                    formatMAD(itemTotal)
                ];
                tableRows.push(rowData);
            });
            
            // Générer le tableau
            doc.autoTable({
                startY: yPos,
                head: [tableColumn],
                body: tableRows,
                theme: 'striped',
                headStyles: {
                    fillColor: primaryColor,
                    textColor: [255, 255, 255],
                    fontStyle: 'bold'
                },
                alternateRowStyles: {
                    fillColor: [245, 245, 245]
                },
                columnStyles: {
                    0: { cellWidth: 70 },
                    1: { cellWidth: 25, halign: 'center' },
                    2: { cellWidth: 35, halign: 'right' },
                    3: { cellWidth: 35, halign: 'right' }
                },
                margin: { left: 20, right: 20 }
            });
            
            // Récupérer la position Y après le tableau
            const finalY = doc.lastAutoTable.finalY + 10;
            
            // Calculs
            const discount = sale.discount || 0;
            const totalApresRemise = subTotal - discount;
            
            // Récupérer les informations de paiement
            const montantPaye = sale.montantPaye || 0;
            const resteDu = sale.resteDu || 0;
            
            // Résumé et totaux
            doc.setFillColor(240, 240, 240);
            doc.rect(120, finalY, 70, 40, 'F');
            
            doc.setFont("helvetica", "bold");
            doc.text("RÉCAPITULATIF:", 125, finalY + 7);
            
            doc.setFont("helvetica", "normal");
            doc.text(`Sous-total:`, 125, finalY + 14);
            doc.text(`${formatMAD(subTotal)}`, 175, finalY + 14, { align: "right" });
            
            if (discount > 0) {
                doc.text(`Remise:`, 125, finalY + 21);
                doc.text(`-${formatMAD(discount)}`, 175, finalY + 21, { align: "right" });
            }
            
            doc.setFont("helvetica", "bold");
            doc.text(`TOTAL:`, 125, finalY + 28);
            doc.text(`${formatMAD(totalApresRemise)}`, 175, finalY + 28, { align: "right" });
            
            doc.setFont("helvetica", "normal");
            doc.setTextColor(0, 150, 0);
            doc.text(`Payé: ${formatMAD(montantPaye)}`, 125, finalY + 35);
            
            if (resteDu > 0) {
                doc.setTextColor(200, 0, 0);
                doc.text(`Reste: ${formatMAD(resteDu)}`, 125, finalY + 42);
            }
            
            // Mode de paiement
            doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
            let paymentText = "Mode de paiement: ";
            if (sale.paymentType === 'cash') paymentText += "Espèces";
            else if (sale.paymentType === 'credit') paymentText += "Crédit";
            else if (sale.paymentType === 'credit_partial') paymentText += "Crédit partiel";
            else paymentText += sale.paymentType;
            
            doc.text(paymentText, 20, finalY + 15);
            
            // Pied de page
            doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            doc.rect(0, 280, 210, 17, 'F');
            
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(9);
            doc.text("Merci de votre confiance !", 105, 290, { align: "center" });
            doc.text("Minimarket System - Votre partenaire de confiance", 105, 297, { align: "center" });
            
            // Sauvegarder le PDF
            doc.save(`Facture_${sale.invoiceNumber || sale.id}.pdf`);
        });
    });
}
// ---------------- GRAPHIQUE STATISTIQUES ----------------
let statsChart = null;

function getChartLabelsAndData(period, sales) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let labels = [];
    let caData = [];
    let profitData = [];
    
    // Fonction pour formater la date
    const formatDate = (date) => {
        return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
    };
    
    // Fonction pour formater l'heure
    const formatHour = (date) => {
        return date.getHours().toString().padStart(2, '0') + 'h';
    };
    
    // Fonction pour obtenir le nom du jour
    const getDayName = (date) => {
        const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
        return days[date.getDay()];
    };
    
    // Fonction pour obtenir le nom du mois
    const getMonthName = (date) => {
        const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
        return months[date.getMonth()];
    };
    
    switch(period) {
        case 'today':
            // Aujourd'hui : par heure
            for (let i = 0; i <= 23; i++) {
                labels.push(i + 'h');
                caData.push(0);
                profitData.push(0);
            }
            
            sales.forEach(sale => {
                const saleDate = new Date(sale.date);
                const hour = saleDate.getHours();
                if (saleDate.toDateString() === today.toDateString()) {
                    caData[hour] += sale.total || 0;
                    
                    // Calculer le profit pour cette vente
                    let saleProfit = 0;
                    if (sale.items) {
                        sale.items.forEach(item => {
                            saleProfit += ((item.price - (item.priceUnit || 0)) * item.qty) || 0;
                        });
                    }
                    profitData[hour] += saleProfit;
                }
            });
            break;
            
        case '3days':
        case '1week':
        case '15days':
            // Par jour
            let days = period === '3days' ? 3 : (period === '1week' ? 7 : 15);
            let startDate = new Date(today);
            startDate.setDate(today.getDate() - days + 1);
            
            for (let i = 0; i < days; i++) {
                let currentDate = new Date(startDate);
                currentDate.setDate(startDate.getDate() + i);
                labels.push(getDayName(currentDate) + ' ' + currentDate.getDate());
                caData.push(0);
                profitData.push(0);
            }
            
            sales.forEach(sale => {
                const saleDate = new Date(sale.date);
                const saleDay = saleDate.toDateString();
                
                for (let i = 0; i < days; i++) {
                    let checkDate = new Date(startDate);
                    checkDate.setDate(startDate.getDate() + i);
                    if (saleDay === checkDate.toDateString()) {
                        caData[i] += sale.total || 0;
                        
                        let saleProfit = 0;
                        if (sale.items) {
                            sale.items.forEach(item => {
                                saleProfit += ((item.price - (item.priceUnit || 0)) * item.qty) || 0;
                            });
                        }
                        profitData[i] += saleProfit;
                        break;
                    }
                }
            });
            break;
            
        case '1month':
        case '3months':
        case '6months':
        case '1year':
            // Par mois
            let months = period === '1month' ? 1 : (period === '3months' ? 3 : (period === '6months' ? 6 : 12));
            let startMonth = new Date(today);
            startMonth.setMonth(today.getMonth() - months + 1);
            startMonth.setDate(1);
            
            for (let i = 0; i < months; i++) {
                let currentMonth = new Date(startMonth);
                currentMonth.setMonth(startMonth.getMonth() + i);
                labels.push(getMonthName(currentMonth) + ' ' + currentMonth.getFullYear());
                caData.push(0);
                profitData.push(0);
            }
            
            sales.forEach(sale => {
                const saleDate = new Date(sale.date);
                const saleMonth = saleDate.getMonth();
                const saleYear = saleDate.getFullYear();
                
                for (let i = 0; i < months; i++) {
                    let checkDate = new Date(startMonth);
                    checkDate.setMonth(startMonth.getMonth() + i);
                    if (saleMonth === checkDate.getMonth() && saleYear === checkDate.getFullYear()) {
                        caData[i] += sale.total || 0;
                        
                        let saleProfit = 0;
                        if (sale.items) {
                            sale.items.forEach(item => {
                                saleProfit += ((item.price - (item.priceUnit || 0)) * item.qty) || 0;
                            });
                        }
                        profitData[i] += saleProfit;
                        break;
                    }
                }
            });
            break;
            
        default:
            // Pour "all" - afficher par mois sur 12 mois
            for (let i = 11; i >= 0; i--) {
                let pastMonth = new Date(today);
                pastMonth.setMonth(today.getMonth() - i);
                labels.push(getMonthName(pastMonth) + ' ' + pastMonth.getFullYear());
                caData.push(0);
                profitData.push(0);
            }
            
            sales.forEach(sale => {
                const saleDate = new Date(sale.date);
                const saleMonth = saleDate.getMonth();
                const saleYear = saleDate.getFullYear();
                
                for (let i = 0; i < 12; i++) {
                    let checkDate = new Date(today);
                    checkDate.setMonth(today.getMonth() - 11 + i);
                    if (saleMonth === checkDate.getMonth() && saleYear === checkDate.getFullYear()) {
                        caData[i] += sale.total || 0;
                        
                        let saleProfit = 0;
                        if (sale.items) {
                            sale.items.forEach(item => {
                                saleProfit += ((item.price - (item.priceUnit || 0)) * item.qty) || 0;
                            });
                        }
                        profitData[i] += saleProfit;
                        break;
                    }
                }
            });
    }
    
    return { labels, caData, profitData };
}

function updateChart(period = 'all') {
    getAllItems("sales").then(sales => {
        const { labels, caData, profitData } = getChartLabelsAndData(period, sales);
        
        const ctx = document.getElementById('stats-chart').getContext('2d');
        
        // Détruire l'ancien graphique s'il existe
        if (statsChart) {
            statsChart.destroy();
        }
        
        // Créer le nouveau graphique
        statsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Chiffre d\'Affaire (MAD)',
                        data: caData,
                        backgroundColor: 'rgba(8, 218, 255, 0.91)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Profit (MAD)',
                        data: profitData,
                        backgroundColor: 'rgba(0, 255, 98, 0.84)',
                        borderColor: 'rgb(0, 172, 77)',
                        borderWidth: 1,
                        yAxisID: 'y'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + ' MAD';
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += formatMAD(context.raw);
                                return label;
                            }
                        }
                    }
                }
            }
        });
    });
}

// Modifier la fonction loadStatisticsWithPeriod pour inclure le graphique
function loadStatisticsWithPeriod(period = 'all') {
    Promise.all([
        getAllItems("sales"),
        getAllItems("credits"),
        getAllItems("clients"),
        getAllItems("products")
    ]).then(([allSales, allCredits, clients, products]) => {
        
        // Filtrer par période si nécessaire
        const dateRange = getDateRangeFromPeriodStats(period);
        let filteredSales = allSales;
        let filteredCredits = allCredits;
        
        if (dateRange) {
            filteredSales = allSales.filter(sale => {
                const saleDate = new Date(sale.date || 0);
                return saleDate >= dateRange.start && saleDate <= dateRange.end;
            });
            
            filteredCredits = allCredits.filter(credit => {
                const creditDate = new Date(credit.date || 0);
                return creditDate >= dateRange.start && creditDate <= dateRange.end;
            });
        }
        
        // Calculs principaux
        let totalCA = 0;
        let totalProfit = 0;
        let totalItemsSold = 0;
        let invoiceCount = filteredSales.length;
        
        // Stats par client
        const clientStats = {};
        
        filteredSales.forEach(sale => {
            totalCA += sale.total || 0;
            
            if (sale.items) {
                sale.items.forEach(item => {
                    const profit = ((item.price - (item.priceUnit || 0)) * item.qty) || 0;
                    totalProfit += profit;
                    totalItemsSold += item.qty || 0;
                });
            }
            
            // Stats client
            if (sale.clientName && sale.clientName !== "Passager") {
                if (!clientStats[sale.clientName]) {
                    clientStats[sale.clientName] = {
                        name: sale.clientName,
                        ca: 0,
                        profit: 0,
                        count: 0
                    };
                }
                clientStats[sale.clientName].ca += sale.total || 0;
                clientStats[sale.clientName].count += 1;
                
                // Calculer le profit pour ce client
                if (sale.items) {
                    sale.items.forEach(item => {
                        const profit = ((item.price - (item.priceUnit || 0)) * item.qty) || 0;
                        clientStats[sale.clientName].profit += profit;
                    });
                }
            }
        });
        
        // Statistiques des crédits
        let creditsPaid = filteredCredits.filter(c => c.status === 'paid');
        let creditsUnpaid = filteredCredits.filter(c => c.status !== 'paid');
        
        let totalCreditsPaid = creditsPaid.reduce((sum, c) => sum + (c.montantPaye || 0), 0);
        let totalCreditsUnpaid = creditsUnpaid.reduce((sum, c) => sum + (c.amount || 0), 0);
        
        // Mise à jour de l'affichage
        document.getElementById("stats-ca").textContent = formatMAD(totalCA);
        document.getElementById("stats-profit").textContent = formatMAD(totalProfit);
        document.getElementById("stats-invoices").textContent = invoiceCount;
        document.getElementById("stats-items-sold").textContent = totalItemsSold;
        
        document.getElementById("stats-credits-paid-count").textContent = creditsPaid.length;
        document.getElementById("stats-credits-paid-amount").textContent = formatMAD(totalCreditsPaid);
        document.getElementById("stats-credits-unpaid-count").textContent = creditsUnpaid.length;
        document.getElementById("stats-credits-unpaid-amount").textContent = formatMAD(totalCreditsUnpaid);
        document.getElementById("stats-credits-paid-total").textContent = formatMAD(totalCreditsPaid);
        document.getElementById("stats-credits-unpaid-total").textContent = formatMAD(totalCreditsUnpaid);
        
        // Top clients - Affichage en liste verticale
        const topClients = Object.values(clientStats)
            .sort((a, b) => b.ca - a.ca)
            .slice(0, 10);
        
        const topClientsList = document.getElementById("stats-top-clients-list");
        topClientsList.innerHTML = "";
        
        if (topClients.length === 0) {
            topClientsList.innerHTML = '<div class="list-group-item text-center">Aucune vente sur cette période</div>';
        } else {
            topClients.forEach(client => {
                const item = document.createElement("div");
                item.className = "list-group-item";
                item.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <strong class="fs-5">${client.name}</strong>
                        <span class="badge bg-primary">${client.count} achat(s)</span>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <small class="text-muted">Chiffre d'Affaire</small>
                            <div class="fw-bold">${formatMAD(client.ca)}</div>
                        </div>
                        <div class="col-6">
                            <small class="text-muted">Profit</small>
                            <div class="fw-bold text-success">${formatMAD(client.profit)}</div>
                        </div>
                    </div>
                `;
                topClientsList.appendChild(item);
            });
        }
        
        // Top produits - Affichage en liste verticale
        const productStats = {};
        
        filteredSales.forEach(sale => {
            if (sale.items) {
                sale.items.forEach(item => {
                    if (!productStats[item.name]) {
                        productStats[item.name] = {
                            name: item.name,
                            qty: 0,
                            ca: 0,
                            profit: 0
                        };
                    }
                    productStats[item.name].qty += item.qty || 0;
                    productStats[item.name].ca += (item.price || 0) * (item.qty || 0);
                    productStats[item.name].profit += ((item.price - (item.priceUnit || 0)) * item.qty) || 0;
                });
            }
        });
        
        const topProducts = Object.values(productStats)
            .sort((a, b) => b.qty - a.qty)
            .slice(0, 10);
        
        const topProductsList = document.getElementById("stats-top-products-list");
        topProductsList.innerHTML = "";
        
        if (topProducts.length === 0) {
            topProductsList.innerHTML = '<div class="list-group-item text-center">Aucun produit vendu sur cette période</div>';
        } else {
            topProducts.forEach(product => {
                const item = document.createElement("div");
                item.className = "list-group-item";
                item.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <strong class="fs-5">${product.name}</strong>
                        <span class="badge bg-info">${product.qty} vendu(s)</span>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <small class="text-muted">Chiffre d'Affaire</small>
                            <div class="fw-bold">${formatMAD(product.ca)}</div>
                        </div>
                        <div class="col-6">
                            <small class="text-muted">Profit</small>
                            <div class="fw-bold text-success">${formatMAD(product.profit)}</div>
                        </div>
                    </div>
                `;
                topProductsList.appendChild(item);
            });
        }
        
        // Mettre à jour le graphique
        updateChart(period);
        
    }).catch(err => {
        console.error("Error loading statistics:", err);
    });
}
// ---------------- GESTION DES CHARGES ----------------

// Variables pour les catégories
let chargeCategories = [];

// Charger les catégories existantes
function loadChargeCategories() {
    getAllItems("charges").then(charges => {
        const categories = [...new Set(charges.map(c => c.category).filter(c => c))];
        const datalist = document.getElementById("charge-category-list");
        if (datalist) {
            // Garder les options par défaut
            const defaultOptions = ['Loyer', 'Électricité', 'Eau', 'Internet', 'Téléphone', 'Salaires', 'Fournitures', 'Transport', 'Maintenance', 'Marketing', 'Impôts', 'Assurance', 'Autre'];
            
            datalist.innerHTML = "";
            // Ajouter les catégories par défaut
            defaultOptions.forEach(cat => {
                const option = document.createElement("option");
                option.value = cat;
                datalist.appendChild(option);
            });
            // Ajouter les catégories personnalisées
            categories.forEach(cat => {
                if (!defaultOptions.includes(cat)) {
                    const option = document.createElement("option");
                    option.value = cat;
                    datalist.appendChild(option);
                }
            });
        }
    });
}

// Charger la liste des charges
// Charger la liste des charges avec le filtre des statistiques
function loadCharges() {
    const tbody = document.getElementById("charges-tbody");
    if(!tbody) return;
    
    // Récupérer la période sélectionnée dans les statistiques
    const period = document.getElementById("stats-period-filter")?.value || 'all';
    
    tbody.innerHTML = '<tr><td colspan="7" class="text-center"><div class="spinner"></div> Chargement...</td></tr>';
    
    getAllItems("charges").then(allCharges => {
        
        // Filtrer par période (même fonction que les statistiques)
        const dateRange = getDateRangeFromPeriodStats(period);
        let filteredCharges = allCharges;
        
        if (dateRange) {
            filteredCharges = allCharges.filter(charge => {
                const chargeDate = new Date(charge.date || 0);
                return chargeDate >= dateRange.start && chargeDate <= dateRange.end;
            });
        }
        
        // Trier par date (plus récent d'abord)
        filteredCharges.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        tbody.innerHTML = "";
        let total = 0;
        
        if (filteredCharges.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" class="text-center">Aucune charge sur cette période</td></tr>';
        } else {
            filteredCharges.forEach(charge => {
                total += charge.amount || 0;
                
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td data-label="ID">${charge.id || ''}</td>
                    <td data-label="Nom">${charge.name || ''}</td>
                    <td data-label="Catégorie">${charge.category || ''}</td>
                    <td data-label="Montant">${formatMAD(charge.amount || 0)}</td>
                    <td data-label="Date">${charge.date ? new Date(charge.date).toLocaleDateString('fr-FR') : ''}</td>
                    <td data-label="Date création">${charge.createdAt ? new Date(charge.createdAt).toLocaleString() : ''}</td>
                    <td data-label="Actions">
                        <button class="btn btn-warning btn-sm edit-charge" data-id="${charge.id}"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-danger btn-sm delete-charge" data-id="${charge.id}"><i class="bi bi-trash"></i></button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }
        
        // Mettre à jour le total avec indication de la période
        const periodLabel = getChargesPeriodLabel(period);
        document.getElementById("total-charges").innerHTML = `${formatMAD(total)} <small class="text-muted">(${periodLabel})</small>`;
        
    }).catch(err => {
        console.error("Erreur chargement charges:", err);
        tbody.innerHTML = '<tr><td colspan="7" class="text-center text-danger">Erreur de chargement</td></tr>';
    });
}
// Quand on change la période dans les statistiques, on recharge les charges si elles sont visibles
document.getElementById("stats-period-filter")?.addEventListener("change", function() {
    // Vérifier si la page des charges est ouverte (pas cachée)
    if (!document.getElementById("charges-form").classList.contains("d-none")) {
        loadCharges(); // Recharger les charges avec la nouvelle période
    }
});
// Fonction pour obtenir le libellé de la période (à ajouter)
function getChargesPeriodLabel(period) {
    const labels = {
        'all': 'toutes périodes',
        'today': "aujourd'hui",
        '3days': '3 derniers jours',
        '1week': 'cette semaine',
        '15days': '15 derniers jours',
        '1month': 'ce mois',
        '3months': '3 derniers mois',
        '6months': '6 derniers mois',
        '1year': 'cette année'
    };
    return labels[period] || 'toutes périodes';
}

// Initialiser la date du formulaire avec la date du jour
function initChargeFormDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("charge-date").value = today;
}

// Afficher le formulaire d'ajout de charge
document.getElementById("add-charge-btn")?.addEventListener("click", () => {
    // Réinitialiser le formulaire
    document.getElementById("charge-form").reset();
    delete document.getElementById("charge-form").dataset.editId;
    
    // Initialiser la date
    initChargeFormDate();
    
    // Charger les catégories
    loadChargeCategories();
    
    // Afficher le formulaire
    document.getElementById("add-charge-form").classList.add("active");
    document.getElementById("add-charge-form").classList.remove("d-none");
});

// Fermer le formulaire
document.getElementById("add-charge-close")?.addEventListener("click", () => {
    document.getElementById("add-charge-form").classList.remove("active");
    document.getElementById("add-charge-form").classList.add("d-none");
});

// Soumettre le formulaire
document.getElementById("charge-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const charge = {
        name: document.getElementById("charge-name").value,
        category: document.getElementById("charge-category").value,
        amount: parseFloat(document.getElementById("charge-amount").value) || 0,
        date: document.getElementById("charge-date").value,
        createdAt: new Date().toISOString()
    };
    
    const editId = document.getElementById("charge-form").dataset.editId;
    const store = getStore("charges", "readwrite");
    
    if (editId) {
        // Mise à jour
        charge.id = parseInt(editId);
        store.put(charge).onsuccess = () => {
            alert("Charge mise à jour avec succès!");
            document.getElementById("add-charge-form").classList.remove("active");
            document.getElementById("add-charge-form").classList.add("d-none");
            document.getElementById("charge-form").reset();
            delete document.getElementById("charge-form").dataset.editId;
            loadCharges();
            loadChargeCategories();
        };
    } else {
        // Ajout
        store.add(charge).onsuccess = () => {
            alert("Charge ajoutée avec succès!");
            document.getElementById("add-charge-form").classList.remove("active");
            document.getElementById("add-charge-form").classList.add("d-none");
            document.getElementById("charge-form").reset();
            loadCharges();
            loadChargeCategories();
        };
    }
});

// Éditer une charge
document.getElementById("charges-tbody")?.addEventListener("click", (e) => {
    if(e.target.classList.contains("edit-charge") || e.target.closest('.edit-charge')) {
        const btn = e.target.closest('.edit-charge');
        const id = Number(btn.dataset.id);
        
        getItem("charges", id).then(charge => {
            if (!charge) return;
            
            document.getElementById("charge-name").value = charge.name || '';
            document.getElementById("charge-category").value = charge.category || '';
            document.getElementById("charge-amount").value = charge.amount || 0;
            document.getElementById("charge-date").value = charge.date || '';
            
            document.getElementById("charge-form").dataset.editId = id;
            
            document.getElementById("add-charge-form").classList.add("active");
            document.getElementById("add-charge-form").classList.remove("d-none");
        });
    }
});

// Supprimer une charge
document.getElementById("charges-tbody")?.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-charge") || e.target.closest('.delete-charge')) {
        const btn = e.target.closest('.delete-charge');
        const id = Number(btn.dataset.id);
        
        if(confirm("Supprimer cette charge ?")) {
            deleteItem("charges", id).then(() => {
                alert("Charge supprimée!");
                loadCharges();
            });
        }
    }
});

// Toggle affichage de la section charges
document.getElementById("toggle-charges-btn")?.addEventListener("click", function() {
    const chargesSection = document.getElementById("charges-section");
    const icon = this.querySelector('i');
    
    if (chargesSection.classList.contains("d-none")) {
        chargesSection.classList.remove("d-none");
        this.innerHTML = '<i class="bi bi-chevron-up"></i> Masquer les charges';
        loadCharges(); // Charger les données quand on affiche
    } else {
        chargesSection.classList.add("d-none");
        this.innerHTML = '<i class="bi bi-chevron-down"></i> Afficher les charges';
    }
});

// Export des charges
document.getElementById("export-charges")?.addEventListener("click", async() => {
    const json = await exportStoreToJSON("charges");
    const blob = new Blob([json], {type: "application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "charges.json";
    a.click();
});

// Import des charges
document.getElementById("import-charges")?.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async e => {
        const file = e.target.files[0];
        const text = await file.text();
        await importStoreFromJSON("charges", text);
        loadCharges();
        loadChargeCategories();
        alert("Charges importées avec succès!");
    };
    input.click();
});

// Modifier la fonction loadStatisticsWithPeriod pour inclure les charges dans le calcul du profit net
// Ajoutez ces lignes dans la fonction loadStatisticsWithPeriod (après le calcul du totalProfit)

// Récupérer les charges pour la période
getAllItems("charges").then(allCharges => {
    let filteredCharges = allCharges;
    if (dateRange) {
        filteredCharges = allCharges.filter(charge => {
            const chargeDate = new Date(charge.date || 0);
            return chargeDate >= dateRange.start && chargeDate <= dateRange.end;
        });
    }
    
    const totalCharges = filteredCharges.reduce((sum, c) => sum + (c.amount || 0), 0);
    const profitNet = totalProfit - totalCharges;
    
    // Vous pouvez ajouter un élément pour afficher le profit net
    // Par exemple, ajoutez une carte "Profit Net" dans votre HTML
});