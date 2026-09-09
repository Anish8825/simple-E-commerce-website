/* ==========================================================================
   FRESHMART SUPERMARKET E-COMMERCE CORE APPLICATION LOGIC
   ========================================================================== */

// Initial Supermarket Products Database
const INITIAL_PRODUCTS = [
  {
    id: 101,
    sku: "8901001",
    name: "Organic Honeycrisp Bananas",
    category: "produce",
    price: 1.99,
    originalPrice: 2.49,
    unit: "per lb",
    aisle: "Aisle 1A - Fresh Produce",
    rating: 4.9,
    reviewsCount: 142,
    stock: 45,
    dietary: ["organic", "vegan", "gluten-free"],
    isFlashDeal: true,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop",
    description: "Naturally sweet, farm-fresh organic bananas ripened to perfection. Excellent source of potassium.",
    nutrition: { calories: 105, fat: "0.3g", carbs: "27g", protein: "1.3g", sugar: "14g", sodium: "1mg" },
    ingredients: "100% Organic USDA Bananas."
  },
  {
    id: 102,
    sku: "8901002",
    name: "Farm Fresh Whole Milk (1 Gallon)",
    category: "dairy",
    price: 3.89,
    originalPrice: 4.29,
    unit: "1 gallon",
    aisle: "Aisle 3B - Dairy & Cold",
    rating: 4.8,
    reviewsCount: 98,
    stock: 20,
    dietary: ["gluten-free", "keto"],
    isFlashDeal: false,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop",
    description: "Pasteurized Grade A whole milk sourced daily from local family dairy farms. Rich in Calcium and Vitamin D.",
    nutrition: { calories: 150, fat: "8g", carbs: "12g", protein: "8g", sugar: "12g", sodium: "120mg" },
    ingredients: "Grade A Pasteurized Milk, Vitamin D3."
  },
  {
    id: 103,
    sku: "8901003",
    name: "Artisanal Sourdough Bread Loaf",
    category: "bakery",
    price: 4.99,
    originalPrice: 5.99,
    unit: "per loaf",
    aisle: "Aisle 2 - Fresh Bakery",
    rating: 4.9,
    reviewsCount: 215,
    stock: 12,
    dietary: ["vegan"],
    isFlashDeal: true,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=500&auto=format&fit=crop",
    description: "Hand-crafted 36-hour naturally fermented sourdough with a crispy crust and airy soft crumb.",
    nutrition: { calories: 160, fat: "1g", carbs: "32g", protein: "6g", sugar: "1g", sodium: "320mg" },
    ingredients: "Unbleached Wheat Flour, Filtered Water, Sea Salt, Natural Starter Culture."
  },
  {
    id: 104,
    sku: "8901004",
    name: "Grass-Fed USDA Choice Ribeye Steak",
    category: "meat",
    price: 14.99,
    originalPrice: 17.99,
    unit: "per lb",
    aisle: "Aisle 4A - Meat & Butchery",
    rating: 5.0,
    reviewsCount: 84,
    stock: 8,
    dietary: ["keto", "gluten-free"],
    isFlashDeal: true,
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&auto=format&fit=crop",
    description: "100% grass-fed, beautifully marbled ribeye steak. Exceptionally juicy, tender, and rich in flavor.",
    nutrition: { calories: 290, fat: "21g", carbs: "0g", protein: "24g", sugar: "0g", sodium: "60mg" },
    ingredients: "100% Grass-Fed Beef Ribeye."
  },
  {
    id: 105,
    sku: "8901005",
    name: "Organic Hass Avocados (Bag of 4)",
    category: "produce",
    price: 4.49,
    originalPrice: 5.49,
    unit: "4 pack",
    aisle: "Aisle 1B - Fresh Produce",
    rating: 4.7,
    reviewsCount: 160,
    stock: 30,
    dietary: ["organic", "vegan", "keto", "gluten-free"],
    isFlashDeal: false,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop",
    description: "Creamy, nutrient-rich organic avocados packed with healthy omega fats and dietary fiber.",
    nutrition: { calories: 240, fat: "22g", carbs: "12g", protein: "3g", sugar: "1g", sodium: "10mg" },
    ingredients: "100% Organic Hass Avocados."
  },
  {
    id: 106,
    sku: "8901006",
    name: "Cold-Pressed Organic Orange Juice",
    category: "beverages",
    price: 5.29,
    originalPrice: 5.99,
    unit: "52 fl oz",
    aisle: "Aisle 5 - Chilled Beverages",
    rating: 4.8,
    reviewsCount: 110,
    stock: 18,
    dietary: ["organic", "vegan", "gluten-free"],
    isFlashDeal: false,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop",
    description: "100% pure cold-pressed Florida oranges with juicy pulp. Never from concentrate, no added sugars.",
    nutrition: { calories: 110, fat: "0g", carbs: "26g", protein: "2g", sugar: "22g", sodium: "0mg" },
    ingredients: "100% Organic Cold-Pressed Orange Juice."
  },
  {
    id: 107,
    sku: "8901007",
    name: "Fresh Atlantic Salmon Fillet",
    category: "meat",
    price: 11.99,
    originalPrice: 13.99,
    unit: "per lb",
    aisle: "Aisle 4B - Seafood Counter",
    rating: 4.9,
    reviewsCount: 76,
    stock: 10,
    dietary: ["keto", "gluten-free"],
    isFlashDeal: false,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop",
    description: "Sustainably farm-raised Atlantic salmon fillet rich in Omega-3 fatty acids and clean protein.",
    nutrition: { calories: 206, fat: "12g", carbs: "0g", protein: "22g", sugar: "0g", sodium: "55mg" },
    ingredients: "Fresh Atlantic Salmon (Salmo Salar)."
  },
  {
    id: 108,
    sku: "8901008",
    name: "Greek Vanilla Bean Yogurt (32 oz)",
    category: "dairy",
    price: 4.19,
    originalPrice: 4.79,
    unit: "32 oz tub",
    aisle: "Aisle 3A - Dairy",
    rating: 4.7,
    reviewsCount: 92,
    stock: 25,
    dietary: ["gluten-free"],
    isFlashDeal: false,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop",
    description: "Thick, creamy strained Greek yogurt made with real Madagascar vanilla beans and live probiotics.",
    nutrition: { calories: 140, fat: "2.5g", carbs: "16g", protein: "14g", sugar: "14g", sodium: "50mg" },
    ingredients: "Grade A Cultured Milk, Organic Cane Sugar, Natural Vanilla Bean Extract."
  },
  {
    id: 109,
    sku: "8901009",
    name: "Artisan Pepperoni Wood-Fired Pizza",
    category: "frozen",
    price: 6.99,
    originalPrice: 8.49,
    unit: "16 oz frozen",
    aisle: "Aisle 7 - Frozen Foods",
    rating: 4.6,
    reviewsCount: 188,
    stock: 15,
    dietary: [],
    isFlashDeal: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop",
    description: "Crispy wood-fired crust topped with San Marzano tomato sauce, whole milk mozzarella, and zesty pepperoni.",
    nutrition: { calories: 340, fat: "16g", carbs: "36g", protein: "14g", sugar: "3g", sodium: "780mg" },
    ingredients: "Wheat Crust, San Marzano Tomatoes, Mozzarella Cheese, Cured Pepperoni, Italian Herbs."
  },
  {
    id: 110,
    sku: "8901010",
    name: "Dark Chocolate Roasted Almonds",
    category: "snacks",
    price: 5.49,
    originalPrice: 6.29,
    unit: "10 oz bag",
    aisle: "Aisle 6 - Snacks & Sweets",
    rating: 4.9,
    reviewsCount: 230,
    stock: 35,
    dietary: ["gluten-free", "vegan"],
    isFlashDeal: false,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&auto=format&fit=crop",
    description: "Dry roasted California almonds generously dipped in 70% dark Belgian cocoa.",
    nutrition: { calories: 170, fat: "12g", carbs: "14g", protein: "4g", sugar: "9g", sodium: "25mg" },
    ingredients: "Dark Chocolate (Cocoa Mass, Cane Sugar, Cocoa Butter), Roasted Almonds, Sea Salt."
  },
  {
    id: 111,
    sku: "8901011",
    name: "Extra Virgin Organic Olive Oil",
    category: "pantry",
    price: 9.99,
    originalPrice: 11.99,
    unit: "16.9 fl oz",
    aisle: "Aisle 8 - Oils & Condiments",
    rating: 4.9,
    reviewsCount: 145,
    stock: 22,
    dietary: ["organic", "vegan", "keto", "gluten-free"],
    isFlashDeal: true,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop",
    description: "First cold-pressed single origin Italian olives. Perfect for salad dressings, roasting, and drizzling.",
    nutrition: { calories: 120, fat: "14g", carbs: "0g", protein: "0g", sugar: "0g", sodium: "0mg" },
    ingredients: "100% Extra Virgin Cold-Pressed Organic Olive Oil."
  },
  {
    id: 112,
    sku: "8901012",
    name: "Fresh Strawberries (1 lb Container)",
    category: "produce",
    price: 3.49,
    originalPrice: 4.29,
    unit: "1 lb clamshell",
    aisle: "Aisle 1A - Fresh Produce",
    rating: 4.6,
    reviewsCount: 104,
    stock: 16,
    dietary: ["organic", "vegan", "gluten-free"],
    isFlashDeal: false,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop",
    description: "Sweet, juicy ruby-red strawberries picked fresh from local berry patches.",
    nutrition: { calories: 50, fat: "0.5g", carbs: "11g", protein: "1g", sugar: "7g", sodium: "1mg" },
    ingredients: "100% Fresh Strawberries."
  }
];

// App State
let products = [...INITIAL_PRODUCTS];
let cart = [];
let wishlist = new Set();
let activeCategory = 'all';
let activeDietary = 'all';
let currentSort = 'featured';
let inStockOnly = false;
let searchQuery = '';
let isManagerMode = false;
let appliedCoupon = null; // { code: 'FRESH20', discountPercent: 20, fixedDiscount: 0, freeBag: false }
let selectedBagOption = 'eco'; // 'eco', 'thermal', 'own'
let selectedTipAmount = 3;

// Packaging Fee Mapping
const BAG_FEES = {
  eco: 0.15,
  thermal: 0.99,
  own: 0.00
};

// Available Promo Codes
const PROMO_CODES = {
  'FRESH20': { type: 'percent', val: 0.20, desc: '20% Off Order' },
  'SUPER10': { type: 'fixed', val: 10.00, desc: '$10 Off Order' },
  'ECOFREE': { type: 'freebag', val: 0.15, desc: 'Free Eco Bag' }
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupEventListeners();
  startCountdownTimer();
  updateCartBadge();
});

/* ==========================================================================
   EVENT LISTENERS & BINDINGS
   ========================================================================== */
function setupEventListeners() {
  // Search Bar
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    clearSearchBtn.classList.toggle('hidden', searchQuery === '');
    renderSearchSuggestions(searchQuery);
    renderProducts();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    document.getElementById('searchSuggestions').classList.add('hidden');
    renderProducts();
  });

  // Global Keyboard Shortcut: '/' to focus search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Voice Search Simulation
  document.getElementById('voiceSearchBtn').addEventListener('click', () => {
    showToast("🎙️ Voice search listening... (Simulated: 'Organic Bananas')", "info");
    setTimeout(() => {
      searchInput.value = "Organic Bananas";
      searchQuery = "organic bananas";
      clearSearchBtn.classList.remove('hidden');
      renderProducts();
    }, 1200);
  });

  // Category Pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.category;
      updateSectionTitle();
      renderProducts();
    });
  });

  // Dietary Chips
  document.querySelectorAll('.diet-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.diet-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeDietary = chip.dataset.diet;
      renderProducts();
    });
  });

  // Sort Dropdown
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  // In Stock Toggle
  document.getElementById('inStockOnlyCheck').addEventListener('change', (e) => {
    inStockOnly = e.target.checked;
    renderProducts();
  });

  // Cart Drawer Triggers
  document.getElementById('openCartBtn').addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn').addEventListener('click', closeCartDrawer);
  document.getElementById('cartOverlay').addEventListener('click', closeCartDrawer);

  // Bag Option Select
  document.getElementById('bagOptionSelect').addEventListener('change', (e) => {
    selectedBagOption = e.target.value;
    renderCart();
  });

  // Coupon Apply
  document.getElementById('applyCouponBtn').addEventListener('click', applyCouponCode);

  // Barcode Scanner Triggers
  document.getElementById('openScannerBtn').addEventListener('click', () => openModal('scannerModal'));
  document.getElementById('quickScanHeroBtn').addEventListener('click', () => openModal('scannerModal'));
  document.getElementById('triggerScanBtn').addEventListener('click', executeBarcodeScan);

  document.querySelectorAll('.scan-sample-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('manualBarcodeSKU').value = btn.dataset.sku;
      executeBarcodeScan();
    });
  });

  // Store Manager Toggle
  document.getElementById('toggleAdminBtn').addEventListener('click', toggleManagerMode);
  document.getElementById('addNewProductBtn').addEventListener('click', () => openModal('addProductModal'));

  // Checkout Triggers
  document.getElementById('proceedCheckoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast("Your shopping cart is empty!", "warning");
      return;
    }
    closeCartDrawer();
    openModal('checkoutModal');
    updateCheckoutTotalDisplay();
  });

  // Tip Selector
  document.querySelectorAll('.tip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTipAmount = parseFloat(btn.dataset.tip);
      updateCheckoutTotalDisplay();
    });
  });

  // Fulfillment Selector
  document.getElementById('fulfillmentSelect').addEventListener('change', (e) => {
    const text = e.target.options[e.target.selectedIndex].text;
    document.getElementById('cartFulfillmentText').innerText = `Fulfillment: ${text}`;
    showToast(`Fulfillment mode set to: ${text}`, "info");
    renderCart();
  });

  // Reset Filters
  document.getElementById('resetFiltersBtn').addEventListener('click', () => {
    activeCategory = 'all';
    activeDietary = 'all';
    searchQuery = '';
    inStockOnly = false;
    document.getElementById('searchInput').value = '';
    document.getElementById('inStockOnlyCheck').checked = false;
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
    document.querySelectorAll('.diet-chip').forEach(c => c.classList.toggle('active', c.dataset.diet === 'all'));
    renderProducts();
  });
}

/* ==========================================================================
   PRODUCT RENDERING & FILTERING
   ========================================================================== */
function filterByCat(catName) {
  const pill = document.querySelector(`.cat-pill[data-category="${catName}"]`);
  if (pill) pill.click();
}

function updateSectionTitle() {
  const titleMap = {
    all: "All Supermarket Groceries",
    deals: "Daily Supermarket Flash Deals 🔥",
    produce: "Fresh Organic Produce",
    dairy: "Farm Dairy, Milk & Cheese",
    bakery: "Artisanal Bakery & Deli",
    meat: "Fresh Cut Meat & Seafood",
    beverages: "Chilled Juices & Drinks",
    snacks: "Snacks & Sweet Treats",
    frozen: "Frozen Meals & Ice Creams",
    pantry: "Pantry Oils & Staples"
  };
  document.getElementById('sectionTitle').innerText = titleMap[activeCategory] || "Supermarket Groceries";
}

function getFilteredProducts() {
  return products.filter(p => {
    // Category match
    if (activeCategory === 'deals' && !p.isFlashDeal) return false;
    if (activeCategory !== 'all' && activeCategory !== 'deals' && p.category !== activeCategory) return false;

    // Dietary match
    if (activeDietary !== 'all' && !p.dietary.includes(activeDietary)) return false;

    // In Stock match
    if (inStockOnly && p.stock <= 0) return false;

    // Search query match
    if (searchQuery) {
      const q = searchQuery;
      const matchName = p.name.toLowerCase().includes(q);
      const matchAisle = p.aisle.toLowerCase().includes(q);
      const matchSKU = p.sku.includes(q);
      const matchTags = p.dietary.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchAisle && !matchSKU && !matchTags) return false;
    }

    return true;
  }).sort((a, b) => {
    if (currentSort === 'price-low') return a.price - b.price;
    if (currentSort === 'price-high') return b.price - a.price;
    if (currentSort === 'rating') return b.rating - a.rating;
    if (currentSort === 'aisle') return a.aisle.localeCompare(b.aisle);
    return b.isFlashDeal - a.isFlashDeal; // Default featured
  });
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const filtered = getFilteredProducts();
  const countEl = document.getElementById('resultsCount');
  const noResults = document.getElementById('noResultsState');

  countEl.innerText = `Showing ${filtered.length} products`;
  grid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  filtered.forEach(product => {
    const cartItem = cart.find(ci => ci.id === product.id);
    const inCartQty = cartItem ? cartItem.qty : 0;
    const isWishlisted = wishlist.has(product.id);

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="card-top">
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" />
        
        <div class="card-badges">
          ${product.isFlashDeal ? `<span class="badge-sale">SAVE $${(product.originalPrice - product.price).toFixed(2)}</span>` : ''}
          <span class="badge-aisle"><i class="fa-solid fa-location-dot"></i> ${product.aisle.split(' - ')[0]}</span>
        </div>

        <div class="card-actions-quick">
          <button class="quick-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id})" title="Save to Wishlist">
            <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
          </button>
          <button class="quick-btn" onclick="openProductDetail(${product.id})" title="View Nutrition Facts">
            <i class="fa-solid fa-circle-info"></i>
          </button>
        </div>
      </div>

      <div class="card-body">
        <span class="card-category">${product.category} • SKU: ${product.sku}</span>
        <h3 class="product-title" onclick="openProductDetail(${product.id})" style="cursor:pointer;">${product.name}</h3>

        <div class="dietary-tags">
          ${product.dietary.map(d => `<span class="tag-mini">${d}</span>`).join('')}
        </div>

        <div class="rating-row">
          <span class="stars"><i class="fa-solid fa-star"></i> ${product.rating}</span>
          <span>(${product.reviewsCount} reviews)</span>
        </div>

        <div class="price-row">
          <div class="price-box">
            <span class="current-price">$${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `<span class="old-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <span class="unit-label">${product.unit}</span>
        </div>

        <div class="stock-indicator">
          <div class="stock-bar-bg">
            <div class="stock-bar-fill" style="width: ${Math.min((product.stock / 50) * 100, 100)}%;"></div>
          </div>
          <span class="stock-text">${product.stock > 0 ? `In Stock: ${product.stock} units` : 'Out of Stock'}</span>
        </div>

        <!-- Manager Inline Edit Mode Controls -->
        ${isManagerMode ? `
          <div class="admin-inline-controls" style="background:#fef3c7; padding:6px; border-radius:6px; margin-bottom:8px; font-size:0.8rem;">
            <strong>Manager Edit:</strong>
            <div style="display:flex; gap:4px; margin-top:4px;">
              <input type="number" step="0.1" value="${product.price}" onchange="updateProductPrice(${product.id}, this.value)" style="width:60px;" />
              <input type="number" value="${product.stock}" onchange="updateProductStock(${product.id}, this.value)" style="width:50px;" />
            </div>
          </div>
        ` : ''}

        <div class="card-footer-btns">
          ${inCartQty > 0 ? `
            <div class="qty-control-inline">
              <button class="qty-inline-btn" onclick="updateCartQty(${product.id}, -1)">-</button>
              <span class="qty-inline-val">${inCartQty} in Cart</span>
              <button class="qty-inline-btn" onclick="updateCartQty(${product.id}, 1)">+</button>
            </div>
          ` : `
            <button class="btn btn-primary btn-block" onclick="addToCart(${product.id})" ${product.stock <= 0 ? 'disabled' : ''}>
              <i class="fa-solid fa-cart-plus"></i> ${product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          `}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderSearchSuggestions(query) {
  const container = document.getElementById('searchSuggestions');
  if (!query) {
    container.classList.add('hidden');
    return;
  }
  const matches = products.filter(p => p.name.toLowerCase().includes(query) || p.category.includes(query)).slice(0, 5);
  if (matches.length === 0) {
    container.classList.add('hidden');
    return;
  }
  container.innerHTML = matches.map(p => `
    <div class="sugg-item" onclick="selectSearchSuggestion(${p.id})">
      <div>
        <strong>${p.name}</strong>
        <div style="font-size:0.75rem; color:#64748b;">${p.aisle} • $${p.price.toFixed(2)}</div>
      </div>
      <i class="fa-solid fa-arrow-right text-muted"></i>
    </div>
  `).join('');
  container.classList.remove('hidden');
}

function selectSearchSuggestion(productId) {
  document.getElementById('searchSuggestions').classList.add('hidden');
  openProductDetail(productId);
}

/* ==========================================================================
   CART & WISHLIST OPERATIONS
   ========================================================================== */
function addToCart(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...prod, qty: 1 });
  }

  playBeepSound(600, 100);
  showToast(`Added 1x ${prod.name} to cart!`, "success");
  updateCartBadge();
  renderProducts();
  renderCart();
}

function updateCartQty(productId, delta) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex > -1) {
    cart[itemIndex].qty += delta;
    if (cart[itemIndex].qty <= 0) {
      const removedName = cart[itemIndex].name;
      cart.splice(itemIndex, 1);
      showToast(`Removed ${removedName} from cart`, "info");
    }
  }
  updateCartBadge();
  renderProducts();
  renderCart();
}

function toggleWishlist(productId) {
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    showToast("Removed item from saved wishlist", "info");
  } else {
    wishlist.add(productId);
    showToast("Item saved to wishlist ❤️", "success");
  }
  document.getElementById('wishlistBadge').innerText = wishlist.size;
  renderProducts();
}

function updateCartBadge() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById('cartBadge').innerText = totalCount;
  document.getElementById('cartCountTitle').innerText = totalCount;
  document.getElementById('headerCartTotal').innerText = `$${subtotal.toFixed(2)}`;
}

function renderCart() {
  const listEl = document.getElementById('cartItemsList');
  const cartFooter = document.getElementById('cartFooter');

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center; padding: 40px 10px; color:#64748b;">
        <i class="fa-solid fa-basket-shopping" style="font-size:3rem; margin-bottom:12px; color:#cbd5e1;"></i>
        <p>Your supermarket cart is currently empty.</p>
        <p style="font-size:0.8rem;">Scan barcodes or add fresh items from aisles!</p>
      </div>
    `;
    cartFooter.classList.add('hidden');
    return;
  }
  cartFooter.classList.remove('hidden');

  listEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        <div class="cart-item-aisle"><i class="fa-solid fa-location-dot"></i> ${item.aisle}</div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
          <div class="qty-picker">
            <button onclick="updateCartQty(${item.id}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty(${item.id}, 1)">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percent') discountAmount = subtotal * appliedCoupon.val;
    else if (appliedCoupon.type === 'fixed') discountAmount = Math.min(subtotal, appliedCoupon.val);
  }

  const tax = (subtotal - discountAmount) * 0.08;
  const bagFee = appliedCoupon && appliedCoupon.type === 'freebag' ? 0.00 : BAG_FEES[selectedBagOption];
  const deliveryFee = subtotal > 35 || document.getElementById('fulfillmentSelect').value !== 'delivery' ? 0.00 : 2.99;
  const finalTotal = Math.max(0, subtotal - discountAmount + tax + bagFee + deliveryFee);

  document.getElementById('cartSubtotal').innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById('cartTax').innerText = `$${tax.toFixed(2)}`;
  document.getElementById('cartBagFee').innerText = `$${bagFee.toFixed(2)}`;
  document.getElementById('cartDeliveryFee').innerText = deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`;
  document.getElementById('cartTotalFinal').innerText = `$${finalTotal.toFixed(2)}`;

  const savingsRow = document.getElementById('savingsRow');
  if (discountAmount > 0) {
    savingsRow.classList.remove('hidden');
    document.getElementById('cartSavings').innerText = `-$${discountAmount.toFixed(2)}`;
  } else {
    savingsRow.classList.add('hidden');
  }
}

function applyCouponCode() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const msgEl = document.getElementById('couponMessage');

  if (PROMO_CODES[code]) {
    appliedCoupon = { code, ...PROMO_CODES[code] };
    msgEl.innerText = `✅ Coupon '${code}' Applied: ${appliedCoupon.desc}`;
    msgEl.className = "coupon-msg text-success";
    showToast(`Promo code ${code} applied successfully!`, "success");
    renderCart();
  } else {
    msgEl.innerText = "❌ Invalid Promo Code. Try FRESH20, SUPER10, or ECOFREE";
    msgEl.className = "coupon-msg text-danger";
  }
  msgEl.classList.remove('hidden');
}

/* ==========================================================================
   BARCODE SCANNER SIMULATOR
   ========================================================================== */
function executeBarcodeScan() {
  const inputSKU = document.getElementById('manualBarcodeSKU').value.trim();
  const alertEl = document.getElementById('scanResultAlert');

  const match = products.find(p => p.sku === inputSKU);
  if (match) {
    playBeepSound(800, 150); // Scan sound effect
    addToCart(match.id);
    alertEl.innerText = `🎯 BARCODE SCANNED: Added ${match.name} ($${match.price.toFixed(2)}) from ${match.aisle} to cart!`;
    alertEl.className = "alert alert-success mt-3";
    alertEl.classList.remove('hidden');
  } else {
    alertEl.innerText = `⚠️ SKU '${inputSKU}' not found in supermarket database. Try 8901001 to 8901012.`;
    alertEl.className = "alert alert-danger mt-3";
    alertEl.classList.remove('hidden');
  }
}

// Web Audio API Synthesized Beep for Barcode Scanning
function playBeepSound(freq = 700, duration = 120) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.value = 0.15;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    setTimeout(() => { osc.stop(); ctx.close(); }, duration);
  } catch(e) {}
}

/* ==========================================================================
   PRODUCT DETAIL & FDA NUTRITION FACTS MODAL
   ========================================================================== */
function openProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const content = document.getElementById('productDetailContent');
  content.innerHTML = `
    <div class="detail-img-box">
      <img src="${product.image}" alt="${product.name}" />
    </div>

    <div>
      <span class="card-category">${product.category} • ${product.aisle}</span>
      <h2 style="font-family:var(--font-display); font-size:1.6rem; margin-bottom:8px;">${product.name}</h2>
      <div style="font-size:1.3rem; font-weight:800; color:var(--dark); margin-bottom:12px;">
        $${product.price.toFixed(2)} <small style="font-size:0.8rem; font-weight:500;">${product.unit}</small>
      </div>

      <p style="font-size:0.9rem; color:var(--gray-600); margin-bottom:16px;">${product.description}</p>

      <!-- Standard FDA Nutrition Facts Label -->
      <div class="fda-label">
        <div class="fda-title">Nutrition Facts</div>
        <div>Servings per container: approx 4</div>
        <div class="fda-row thick">
          <strong>Serving size</strong> <strong>1 portion (100g)</strong>
        </div>
        <div class="fda-row thick">
          <div>
            <small>Amount per serving</small>
            <div style="font-size:1.4rem; font-weight:900;">Calories ${product.nutrition.calories}</div>
          </div>
        </div>
        <div class="fda-row medium"><strong>% Daily Value*</strong></div>
        <div class="fda-row"><span><strong>Total Fat</strong> ${product.nutrition.fat}</span><span><strong>3%</strong></span></div>
        <div class="fda-row"><span><strong>Sodium</strong> ${product.nutrition.sodium}</span><span><strong>1%</strong></span></div>
        <div class="fda-row"><span><strong>Total Carbohydrates</strong> ${product.nutrition.carbs}</span><span><strong>9%</strong></span></div>
        <div class="fda-row fda-indent"><span>Dietary Fiber 3g</span><span>12%</span></div>
        <div class="fda-row fda-indent"><span>Total Sugars ${product.nutrition.sugar}</span><span></span></div>
        <div class="fda-row thick"><span><strong>Protein</strong> ${product.nutrition.protein}</span><span></span></div>
        <div style="font-size:0.68rem; margin-top:6px; line-height:1.2;">
          *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
        </div>
      </div>

      <div style="margin-top:14px; font-size:0.82rem; color:var(--gray-600);">
        <strong>Ingredients:</strong> ${product.ingredients}
      </div>

      <button class="btn btn-primary btn-block mt-3" onclick="addToCart(${product.id}); closeModal('productDetailModal');">
        <i class="fa-solid fa-cart-plus"></i> Add to Cart ($${product.price.toFixed(2)})
      </button>
    </div>
  `;

  openModal('productDetailModal');
}

/* ==========================================================================
   EXPRESS CHECKOUT & DIGITAL RECEIPT
   ========================================================================== */
function updateCheckoutTotalDisplay() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percent') discountAmount = subtotal * appliedCoupon.val;
    else if (appliedCoupon.type === 'fixed') discountAmount = Math.min(subtotal, appliedCoupon.val);
  }
  const tax = (subtotal - discountAmount) * 0.08;
  const bagFee = BAG_FEES[selectedBagOption];
  const total = subtotal - discountAmount + tax + bagFee + selectedTipAmount;

  document.getElementById('checkoutTotalVal').innerText = `$${Math.max(0, total).toFixed(2)}`;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const placeBtn = document.getElementById('placeOrderBtn');
  placeBtn.disabled = true;
  placeBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Supermarket Order...`;

  setTimeout(() => {
    placeBtn.disabled = false;
    placeBtn.innerHTML = `<i class="fa-solid fa-check-circle"></i> Place Order Now`;
    closeModal('checkoutModal');
    generateDigitalReceipt();
    openModal('receiptModal');
    showToast("🎉 Order Placed Successfully!", "success");
  }, 1500);
}

function generateDigitalReceipt() {
  const custName = document.getElementById('custName').value || "Supermarket Customer";
  const fulfillmentText = document.getElementById('fulfillmentSelect').options[document.getElementById('fulfillmentSelect').selectedIndex].text;
  const orderId = "FM-" + Math.floor(10000 + Math.random() * 90000);
  const now = new Date().toLocaleString();

  document.getElementById('recOrderId').innerText = orderId;
  document.getElementById('recDate').innerText = now;
  document.getElementById('recCustName').innerText = custName;
  document.getElementById('recMode').innerText = fulfillmentText.split(' ')[1] || "Express";

  const tableBody = document.getElementById('receiptTableBody');
  tableBody.innerHTML = cart.map(item => `
    <tr>
      <td>${item.qty}x</td>
      <td>${item.name}<br/><small style="font-size:0.65rem;">${item.aisle}</small></td>
      <td class="text-right">$${(item.price * item.qty).toFixed(2)}</td>
    </tr>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percent') discountAmount = subtotal * appliedCoupon.val;
    else if (appliedCoupon.type === 'fixed') discountAmount = Math.min(subtotal, appliedCoupon.val);
  }
  const tax = (subtotal - discountAmount) * 0.08;
  const fee = BAG_FEES[selectedBagOption] + selectedTipAmount;
  const total = subtotal - discountAmount + tax + fee;

  document.getElementById('recSubtotal').innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById('recSavings').innerText = `-$${discountAmount.toFixed(2)}`;
  document.getElementById('recTax').innerText = `$${tax.toFixed(2)}`;
  document.getElementById('recFee').innerText = `$${fee.toFixed(2)}`;
  document.getElementById('recTotal').innerText = `$${Math.max(0, total).toFixed(2)}`;
  document.getElementById('recBarcodeSKU').innerText = `89201` + Math.floor(100000 + Math.random() * 900000);
}

function resetAppAfterOrder() {
  cart = [];
  appliedCoupon = null;
  updateCartBadge();
  renderProducts();
}

/* ==========================================================================
   STORE MANAGER / ADMIN MODE
   ========================================================================== */
function toggleManagerMode() {
  isManagerMode = !isManagerMode;
  const btn = document.getElementById('toggleAdminBtn');
  const banner = document.getElementById('adminBanner');

  btn.classList.toggle('active', isManagerMode);
  banner.classList.toggle('hidden', !isManagerMode);

  showToast(isManagerMode ? "Store Manager Admin Mode Activated!" : "Manager Mode Deactivated", "info");
  renderProducts();
}

function updateProductPrice(id, newPrice) {
  const prod = products.find(p => p.id === id);
  if (prod) {
    prod.price = parseFloat(newPrice) || prod.price;
    showToast(`Updated price for ${prod.name} to $${prod.price.toFixed(2)}`, "success");
    renderProducts();
  }
}

function updateProductStock(id, newStock) {
  const prod = products.find(p => p.id === id);
  if (prod) {
    prod.stock = parseInt(newStock) || 0;
    showToast(`Updated stock count for ${prod.name} to ${prod.stock} units`, "success");
    renderProducts();
  }
}

function handleAddNewProduct(e) {
  e.preventDefault();
  const newProd = {
    id: Date.now(),
    name: document.getElementById('newProdName').value,
    category: document.getElementById('newProdCat').value,
    sku: document.getElementById('newProdSKU').value,
    price: parseFloat(document.getElementById('newProdPrice').value),
    originalPrice: parseFloat(document.getElementById('newProdPrice').value) * 1.2,
    unit: document.getElementById('newProdUnit').value,
    aisle: document.getElementById('newProdAisle').value,
    stock: parseInt(document.getElementById('newProdStock').value),
    rating: 5.0,
    reviewsCount: 1,
    dietary: ["organic"],
    isFlashDeal: true,
    image: document.getElementById('newProdImg').value,
    description: "Freshly cataloged supermarket item by store manager.",
    nutrition: { calories: 120, fat: "2g", carbs: "15g", protein: "4g", sugar: "3g", sodium: "40mg" },
    ingredients: "Fresh Quality Supermarket Ingredients."
  };

  products.unshift(newProd);
  closeModal('addProductModal');
  showToast(`Added ${newProd.name} to supermarket catalog!`, "success");
  renderProducts();
}

/* ==========================================================================
   UTILS, MODALS & TOASTS
   ========================================================================== */
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

function openCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('hidden');
  document.getElementById('cartOverlay').classList.remove('hidden');
  renderCart();
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.add('hidden');
  document.getElementById('cartOverlay').classList.add('hidden');
}

function startCountdownTimer() {
  let secondsLeft = 8 * 3600 + 42 * 60 + 15;
  setInterval(() => {
    if (secondsLeft > 0) secondsLeft--;
    const h = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
    const m = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
    const s = String(secondsLeft % 60).padStart(2, '0');

    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
  }, 1000);
}

function showToast(msg, type = "info") {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
