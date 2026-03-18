// db.js
const DB_NAME = "MinimarketDB";
const DB_VERSION = 7; // Augmenté pour ajouter tous les indexes nécessaires
let db;

// ---------------- OPEN / CREATE DATABASE ----------------
const request = indexedDB.open(DB_NAME, DB_VERSION);

request.onupgradeneeded = (event) => {
    db = event.target.result;

    // Créer products store avec tous les indexes
    if (!db.objectStoreNames.contains("products")) {
        const productsStore = db.createObjectStore("products", { keyPath: "id", autoIncrement: true });
        productsStore.createIndex("name", "name", { unique: false });
        productsStore.createIndex("category", "category", { unique: false });
        productsStore.createIndex("brand", "brand", { unique: false });
        productsStore.createIndex("supplier", "supplier", { unique: false });
        productsStore.createIndex("priceSell", "priceSell", { unique: false });
        productsStore.createIndex("priceUnit", "priceUnit", { unique: false });
        productsStore.createIndex("stock", "stock", { unique: false });
        productsStore.createIndex("sold", "sold", { unique: false });
        productsStore.createIndex("expiration", "expiration", { unique: false });
    }

    // Créer clients store avec tous les indexes
    if (!db.objectStoreNames.contains("clients")) {
        const clientsStore = db.createObjectStore("clients", { keyPath: "id", autoIncrement: true });
        clientsStore.createIndex("name", "name", { unique: false });
        clientsStore.createIndex("phone", "phone", { unique: false });
        clientsStore.createIndex("whatsapp", "whatsapp", { unique: false });
        clientsStore.createIndex("points", "points", { unique: false });
        clientsStore.createIndex("ca", "ca", { unique: false });
        clientsStore.createIndex("profit", "profit", { unique: false });
        clientsStore.createIndex("createdAt", "createdAt", { unique: false });
    }

    // Créer suppliers store avec tous les indexes
    if (!db.objectStoreNames.contains("suppliers")) {
        const suppliersStore = db.createObjectStore("suppliers", { keyPath: "id", autoIncrement: true });
        suppliersStore.createIndex("name", "name", { unique: false });
        suppliersStore.createIndex("supplierName", "supplierName", { unique: false });
        suppliersStore.createIndex("phone", "phone", { unique: false });
        suppliersStore.createIndex("ca", "ca", { unique: false });
    }
    
    // Créer sales store avec tous les indexes
    if (!db.objectStoreNames.contains("sales")) {
        const salesStore = db.createObjectStore("sales", { keyPath: "id", autoIncrement: true });
        salesStore.createIndex("date", "date", { unique: false });
        salesStore.createIndex("clientId", "clientId", { unique: false });
        salesStore.createIndex("clientName", "clientName", { unique: false });
        salesStore.createIndex("total", "total", { unique: false });
        salesStore.createIndex("montantPaye", "montantPaye", { unique: false });
        salesStore.createIndex("resteDu", "resteDu", { unique: false });
        salesStore.createIndex("discount", "discount", { unique: false });
        salesStore.createIndex("paymentType", "paymentType", { unique: false });
        salesStore.createIndex("timestamp", "timestamp", { unique: false });
    }
    
    // Créer credits store avec tous les indexes
    if (!db.objectStoreNames.contains("credits")) {
        const creditsStore = db.createObjectStore("credits", { keyPath: "id", autoIncrement: true });
        creditsStore.createIndex("clientId", "clientId", { unique: false });
        creditsStore.createIndex("clientName", "clientName", { unique: false });
        creditsStore.createIndex("amount", "amount", { unique: false });
        creditsStore.createIndex("totalVente", "totalVente", { unique: false });
        creditsStore.createIndex("montantPaye", "montantPaye", { unique: false });
        creditsStore.createIndex("status", "status", { unique: false });
        creditsStore.createIndex("date", "date", { unique: false });
        creditsStore.createIndex("saleId", "saleId", { unique: false });
    }
     // AJOUTEZ CES LIGNES POUR LES CHARGES
    if (!db.objectStoreNames.contains("charges")) {
        const chargesStore = db.createObjectStore("charges", { keyPath: "id", autoIncrement: true });
        chargesStore.createIndex("name", "name", { unique: false });
        chargesStore.createIndex("category", "category", { unique: false });
        chargesStore.createIndex("amount", "amount", { unique: false });
        chargesStore.createIndex("date", "date", { unique: false });
        chargesStore.createIndex("createdAt", "createdAt", { unique: false });
    }

    console.log("Database upgrade complete - Version 7"); // Passez à version 7
};



request.onsuccess = (event) => {
    db = event.target.result;
    console.log("Database opened successfully:", DB_NAME);
    
    // Ajouter des données de test si la base est vide
    addTestDataIfNeeded();
    
    document.dispatchEvent(new Event("db-ready"));
};

request.onerror = (event) => {
    console.error("Database error:", event.target.error);
};

request.onblocked = () => {
    console.error("Database blocked - please close other tabs");
};

// ---------------- HELPER FUNCTION TO GET STORE ----------------
function getStore(storeName, mode = "readonly") {
    if (!db) {
        console.error("Database not initialized yet!");
        return null;
    }
    if (!db.objectStoreNames.contains(storeName)) {
        console.error(`Store "${storeName}" does not exist in DB`);
        return null;
    }
    try {
        const tx = db.transaction(storeName, mode);
        return tx.objectStore(storeName);
    } catch (err) {
        console.error(`Failed to get store "${storeName}":`, err);
        return null;
    }
}

// ---------------- ADD TEST DATA ----------------
function addTestDataIfNeeded() {
    // Vérifier si des données existent déjà
    const clientStore = getStore("clients", "readonly");
    if (!clientStore) return;
    
    const countRequest = clientStore.count();
    countRequest.onsuccess = () => {
        if (countRequest.result === 0) {
            console.log("Adding test data...");
            addTestClients();
            addTestProducts();
            addTestSuppliers();
            addTestSales();
            addTestCredits();
        }
    };
}

function addTestClients() {
    const store = getStore("clients", "readwrite");
    if (!store) return;
    
    const now = new Date().toISOString();
    const clients = [
        { 
            name: "Passager", 
            phone: "", 
            whatsapp: "", 
            address: "Client sans compte", 
            points: 0, 
            ca: 0, 
            profit: 0, 
            createdAt: now 
        },
        { 
            name: "Jean Dupont", 
            phone: "0612345678", 
            whatsapp: "0612345678", 
            address: "12 Rue de Paris, 75001 Paris", 
            points: 150, 
            ca: 1250.50, 
            profit: 375.15, 
            createdAt: now 
        },
        { 
            name: "Marie Martin", 
            phone: "0687654321", 
            whatsapp: "0687654321", 
            address: "5 Avenue des Fleurs, 69001 Lyon", 
            points: 75, 
            ca: 850.00, 
            profit: 255.00, 
            createdAt: now 
        },
        { 
            name: "Pierre Durand", 
            phone: "0655555555", 
            whatsapp: "0655555555", 
            address: "8 Boulevard de la Mer, 13001 Marseille", 
            points: 200, 
            ca: 2100.00, 
            profit: 630.00, 
            createdAt: now 
        },
        { 
            name: "Sophie Bernard", 
            phone: "0644444444", 
            whatsapp: "0644444444", 
            address: "3 Rue Victor Hugo, 33000 Bordeaux", 
            points: 50, 
            ca: 450.00, 
            profit: 135.00, 
            createdAt: now 
        },
        { 
            name: "Lucas Petit", 
            phone: "0633333333", 
            whatsapp: "0633333333", 
            address: "15 Rue de la République, 44000 Nantes", 
            points: 90, 
            ca: 980.00, 
            profit: 294.00, 
            createdAt: now 
        }
    ];
    
    clients.forEach(client => store.add(client));
}

function addTestProducts() {
    const store = getStore("products", "readwrite");
    if (!store) return;
    
    const products = [
        { 
            name: "Coca-Cola", 
            category: "Boissons", 
            boxUnit: 6, 
            boxPrice: 30.00, 
            priceUnit: 5.00, 
            priceSell: 8.00, 
            profit: 3.00, 
            brand: "Coca-Cola", 
            unit: "bouteille 1L", 
            supplier: "Coca-Cola Maroc",
            expiration: "2025-12-31", 
            stock: 100, 
            sold: 45, 
            description: "Coca-Cola 1L - Boisson gazeuse"
        },
        { 
            name: "Pâtes Barilla", 
            category: "Épicerie", 
            boxUnit: 10, 
            boxPrice: 65.00, 
            priceUnit: 6.50, 
            priceSell: 9.50, 
            profit: 3.00, 
            brand: "Barilla", 
            unit: "paquet 500g", 
            supplier: "Barilla Maroc",
            expiration: "2026-06-30", 
            stock: 50, 
            sold: 20, 
            description: "Pâtes Barilla n°5 500g"
        },
        { 
            name: "Lait Jaouda", 
            category: "Produits laitiers", 
            boxUnit: 6, 
            boxPrice: 42.00, 
            priceUnit: 7.00, 
            priceSell: 9.50, 
            profit: 2.50, 
            brand: "Jaouda", 
            unit: "brique 1L", 
            supplier: "Copag",
            expiration: "2025-10-15", 
            stock: 30, 
            sold: 60, 
            description: "Lait demi-écrémé 1L"
        },
        { 
            name: "Huile d'olive", 
            category: "Épicerie", 
            boxUnit: 4, 
            boxPrice: 140.00, 
            priceUnit: 35.00, 
            priceSell: 49.00, 
            profit: 14.00, 
            brand: "Lesieur", 
            unit: "bouteille 1L", 
            supplier: "Lesieur Maroc",
            expiration: "2026-03-20", 
            stock: 25, 
            sold: 10, 
            description: "Huile d'olive vierge extra 1L"
        },
        { 
            name: "Café", 
            category: "Épicerie", 
            boxUnit: 12, 
            boxPrice: 180.00, 
            priceUnit: 15.00, 
            priceSell: 22.00, 
            profit: 7.00, 
            brand: "Lavazza", 
            unit: "paquet 250g", 
            supplier: "Lavazza Maroc",
            expiration: "2025-09-30", 
            stock: 40, 
            sold: 25, 
            description: "Café moulu 250g"
        },
        { 
            name: "Eau minérale", 
            category: "Boissons", 
            boxUnit: 6, 
            boxPrice: 24.00, 
            priceUnit: 4.00, 
            priceSell: 6.00, 
            profit: 2.00, 
            brand: "Sidi Ali", 
            unit: "bouteille 1.5L", 
            supplier: "Sidi Ali",
            expiration: "2026-12-31", 
            stock: 200, 
            sold: 150, 
            description: "Eau minérale naturelle 1.5L"
        }
    ];
    
    products.forEach(product => store.add(product));
}

function addTestSuppliers() {
    const store = getStore("suppliers", "readwrite");
    if (!store) return;
    
    const suppliers = [
        { 
            name: "Coca-Cola Maroc", 
            supplierName: "Coca-Cola Maroc", 
            phone: "0522454545", 
            whatsapp: "0522454545", 
            address: "Casablanca, Maroc", 
            ca: 15000 
        },
        { 
            name: "Barilla Maroc", 
            supplierName: "Barilla Maroc", 
            phone: "0522434343", 
            whatsapp: "0522434343", 
            address: "Rabat, Maroc", 
            ca: 8500 
        },
        { 
            name: "Copag", 
            supplierName: "Copag", 
            phone: "0522323232", 
            whatsapp: "0522323232", 
            address: "Meknès, Maroc", 
            ca: 12000 
        },
        { 
            name: "Lesieur Maroc", 
            supplierName: "Lesieur Maroc", 
            phone: "0522787878", 
            whatsapp: "0522787878", 
            address: "Casablanca, Maroc", 
            ca: 9500 
        },
        { 
            name: "Sidi Ali", 
            supplierName: "Sidi Ali", 
            phone: "0522696969", 
            whatsapp: "0522696969", 
            address: "Meknès, Maroc", 
            ca: 18000 
        }
    ];
    
    suppliers.forEach(supplier => store.add(supplier));
}

function addTestSales() {
    const store = getStore("sales", "readwrite");
    if (!store) return;
    
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const lastWeek = new Date(now);
    lastWeek.setDate(lastWeek.getDate() - 7);
    
    const sales = [
        {
            clientId: 2,
            clientName: "Jean Dupont",
            items: [
                { id: 1, name: "Coca-Cola", qty: 2, price: 8.00, subtotal: 16.00 },
                { id: 6, name: "Eau minérale", qty: 1, price: 6.00, subtotal: 6.00 }
            ],
            total: 22.00,
            montantPaye: 22.00,
            resteDu: 0,
            discount: 0,
            paymentType: "cash",
            date: now.toISOString(),
            timestamp: now.getTime()
        },
        {
            clientId: 3,
            clientName: "Marie Martin",
            items: [
                { id: 3, name: "Lait Jaouda", qty: 3, price: 9.50, subtotal: 28.50 },
                { id: 5, name: "Café", qty: 1, price: 22.00, subtotal: 22.00 }
            ],
            total: 50.50,
            montantPaye: 50.50,
            resteDu: 0,
            discount: 5,
            paymentType: "credit",
            date: yesterday.toISOString(),
            timestamp: yesterday.getTime()
        },
        {
            clientId: 4,
            clientName: "Pierre Durand",
            items: [
                { id: 2, name: "Pâtes Barilla", qty: 2, price: 9.50, subtotal: 19.00 },
                { id: 4, name: "Huile d'olive", qty: 1, price: 49.00, subtotal: 49.00 },
                { id: 1, name: "Coca-Cola", qty: 3, price: 8.00, subtotal: 24.00 }
            ],
            total: 92.00,
            montantPaye: 50.00,
            resteDu: 42.00,
            discount: 10,
            paymentType: "credit_partial",
            date: lastWeek.toISOString(),
            timestamp: lastWeek.getTime()
        }
    ];
    
    sales.forEach(sale => store.add(sale));
}

function addTestCredits() {
    const store = getStore("credits", "readwrite");
    if (!store) return;
    
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const lastWeek = new Date(now);
    lastWeek.setDate(lastWeek.getDate() - 7);
    
    const credits = [
        {
            clientId: 3,
            clientName: "Marie Martin",
            amount: 50.50,
            totalVente: 50.50,
            montantPaye: 50.50,
            date: yesterday.toISOString(),
            status: "paid",
            saleId: 2
        },
        {
            clientId: 5,
            clientName: "Sophie Bernard",
            amount: 120.00,
            totalVente: 120.00,
            montantPaye: 0,
            date: lastWeek.toISOString(),
            status: "pending",
            saleId: 4
        },
        {
            clientId: 6,
            clientName: "Lucas Petit",
            amount: 75.00,
            totalVente: 75.00,
            montantPaye: 0,
            date: now.toISOString(),
            status: "pending",
            saleId: 5
        },
        {
            clientId: 4,
            clientName: "Pierre Durand",
            amount: 42.00,
            totalVente: 92.00,
            montantPaye: 50.00,
            date: lastWeek.toISOString(),
            status: "pending",
            saleId: 3
        }
    ];
    
    credits.forEach(credit => store.add(credit));
}

// ---------------- EXPORT STORE TO JSON ----------------
function exportStoreToJSON(storeName) {
    return new Promise((resolve, reject) => {
        const store = getStore(storeName, "readonly");
        if (!store) return reject("Store not found");

        const allItems = [];
        store.openCursor().onsuccess = (e) => {
            const cursor = e.target.result;
            if (cursor) {
                allItems.push(cursor.value);
                cursor.continue();
            } else {
                resolve(JSON.stringify(allItems, null, 2));
            }
        };
        store.openCursor().onerror = (e) => reject(e.target.error);
    });
}

// ---------------- IMPORT JSON TO STORE ----------------
function importStoreFromJSON(storeName, jsonData) {
    return new Promise((resolve, reject) => {
        const store = getStore(storeName, "readwrite");
        if (!store) return reject("Store not found");

        let items;
        try {
            items = JSON.parse(jsonData);
        } catch (err) {
            return reject("Invalid JSON");
        }

        // Compter le nombre d'items pour déterminer quand c'est fini
        let count = 0;
        
        if (items.length === 0) {
            resolve();
            return;
        }
        
        items.forEach(item => {
            // Si l'item a un id, on le garde, sinon on le laisse sans (autoIncrement)
            const request = store.put(item);
            request.onsuccess = () => {
                count++;
                if (count === items.length) {
                    resolve();
                }
            };
            request.onerror = (e) => reject(e.target.error);
        });

        store.transaction.oncomplete = () => {
            if (count === 0) resolve();
        };
        store.transaction.onerror = (e) => reject(e.target.error);
    });
}

// ---------------- DELETE ITEM ----------------
function deleteItem(storeName, id) {
    return new Promise((resolve, reject) => {
        const store = getStore(storeName, "readwrite");
        if (!store) return reject("Store not found");
        
        const request = store.delete(id);
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

// ---------------- GET ITEM BY ID ----------------
function getItem(storeName, id) {
    return new Promise((resolve, reject) => {
        const store = getStore(storeName, "readonly");
        if (!store) return reject("Store not found");
        
        const request = store.get(id);
        request.onsuccess = () => resolve(request.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

// ---------------- UPDATE ITEM ----------------
function updateItem(storeName, item) {
    return new Promise((resolve, reject) => {
        const store = getStore(storeName, "readwrite");
        if (!store) return reject("Store not found");
        
        const request = store.put(item);
        request.onsuccess = () => resolve(request.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

// ---------------- GET ALL ITEMS ----------------
function getAllItems(storeName) {
    return new Promise((resolve, reject) => {
        const store = getStore(storeName, "readonly");
        if (!store) return reject("Store not found");
        
        const items = [];
        store.openCursor().onsuccess = (e) => {
            const cursor = e.target.result;
            if (cursor) {
                items.push(cursor.value);
                cursor.continue();
            } else {
                resolve(items);
            }
        };
        store.openCursor().onerror = (e) => reject(e.target.error);
    });
}

// ---------------- CLEAR STORE ----------------
function clearStore(storeName) {
    return new Promise((resolve, reject) => {
        const store = getStore(storeName, "readwrite");
        if (!store) return reject("Store not found");
        
        const request = store.clear();
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

// ---------------- SEARCH ITEMS BY INDEX ----------------
function searchItems(storeName, indexName, searchValue) {
    return new Promise((resolve, reject) => {
        const store = getStore(storeName, "readonly");
        if (!store) return reject("Store not found");
        
        const index = store.index(indexName);
        const range = IDBKeyRange.only(searchValue);
        const items = [];
        
        index.openCursor(range).onsuccess = (e) => {
            const cursor = e.target.result;
            if (cursor) {
                items.push(cursor.value);
                cursor.continue();
            } else {
                resolve(items);
            }
        };
        index.openCursor(range).onerror = (e) => reject(e.target.error);
    });
}

// ---------------- SEARCH ITEMS BY RANGE ----------------
function searchItemsByRange(storeName, indexName, lowerValue, upperValue, lowerOpen = false, upperOpen = false) {
    return new Promise((resolve, reject) => {
        const store = getStore(storeName, "readonly");
        if (!store) return reject("Store not found");
        
        const index = store.index(indexName);
        const range = IDBKeyRange.bound(lowerValue, upperValue, lowerOpen, upperOpen);
        const items = [];
        
        index.openCursor(range).onsuccess = (e) => {
            const cursor = e.target.result;
            if (cursor) {
                items.push(cursor.value);
                cursor.continue();
            } else {
                resolve(items);
            }
        };
        index.openCursor(range).onerror = (e) => reject(e.target.error);
    });
}

// ---------------- COUNT ITEMS IN STORE ----------------
function countItems(storeName) {
    return new Promise((resolve, reject) => {
        const store = getStore(storeName, "readonly");
        if (!store) return reject("Store not found");
        
        const request = store.count();
        request.onsuccess = () => resolve(request.result);
        request.onerror = (e) => reject(e.target.error);
    });
}