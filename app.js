// Sample Data Array with All Categories & New Items
const products = [
  // --- MOBILES & ELECTRONICS ---
  { 
    id: 1, 
    name: "Apple iPhone 15 Pro", 
    category: "Mobiles", 
    price: 129900, 
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 2, 
    name: "Samsung Galaxy S24 Ultra", 
    category: "Mobiles", 
    price: 119999, 
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 3, 
    name: "Vivo V30 Pro 5G", 
    category: "Mobiles", 
    price: 41999, 
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 4, 
    name: "OPPO Reno 11 Pro", 
    category: "Mobiles", 
    price: 39999, 
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 5, 
    name: "Gaming Laptop 16GB RAM", 
    category: "Electronics", 
    price: 68990, 
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 6, 
    name: "Smart LED TV 55 inch", 
    category: "Electronics", 
    price: 42990, 
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 7, 
    name: "Fast USB-C Power Adapter", 
    category: "Electronics", 
    price: 1499, 
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 8, 
    name: "DSLR Professional Camera", 
    category: "Electronics", 
    price: 54990, 
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 9, 
    name: "Framed Wall Photo Art", 
    category: "Electronics", 
    price: 799, 
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80" 
  },

  // --- HOME APPLIANCES & FURNITURE ---
  { 
    id: 10, 
    name: "Front Load Washing Machine", 
    category: "Appliances", 
    price: 28990, 
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 11, 
    name: "High-Speed Ceiling Fan", 
    category: "Appliances", 
    price: 2499, 
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 12, 
    name: "Comfortable Living Room Sofa", 
    category: "Furniture", 
    price: 22990, 
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 13, 
    name: "Wooden Dining Table", 
    category: "Furniture", 
    price: 14500, 
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=400&q=80" 
  },

  // --- KITCHEN ITEMS ---
  { 
    id: 14, 
    name: "Kitchen Gas Lighter", 
    category: "Kitchen", 
    price: 249, 
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 15, 
    name: "LPG Gas Cylinder Set", 
    category: "Kitchen", 
    price: 950, 
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 16, 
    name: "Stainless Steel Cookware Kit", 
    category: "Kitchen", 
    price: 3499, 
    image: "https://images.unsplash.com/photo-1584990347426-c585c645d254?auto=format&fit=crop&w=400&q=80" 
  },

  // --- FOOD & BEVERAGES ---
  { 
    id: 17, 
    name: "Special Chicken Biryani", 
    category: "Food", 
    price: 250, 
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 18, 
    name: "South Indian Tomato Rice", 
    category: "Food", 
    price: 120, 
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 19, 
    name: "Frooti Mango Drink (1L)", 
    category: "Food", 
    price: 90, 
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 20, 
    name: "Mirinda Cold Drink (600ml)", 
    category: "Food", 
    price: 45, 
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 21, 
    name: "Thums Up Cold Drink (600ml)", 
    category: "Food", 
    price: 45, 
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 22, 
    name: "Refreshing Club Soda (750ml)", 
    category: "Food", 
    price: 30, 
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=400&q=80" 
  },

  // --- BOOKS & STATIONERY ---
  { 
    id: 23, 
    name: "Bestseller Fiction Novel", 
    category: "Books", 
    price: 499, 
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 24, 
    name: "Smooth Ballpoint Pen Set (Pack of 5)", 
    category: "Books", 
    price: 150, 
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=80" 
  },

  // --- CLOTHING & ACCESSORIES ---
  { 
    id: 25, 
    name: "Casual Denim Shirt", 
    category: "Clothing", 
    price: 1499, 
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 26, 
    name: "Floral Summer Dress", 
    category: "Clothing", 
    price: 2199, 
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 27, 
    name: "Running Sneakers", 
    category: "Footwear", 
    price: 3499, 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 28, 
    name: "Travel Laptop Backpack", 
    category: "Bags", 
    price: 1899, 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 29, 
    name: "Adjustable Dumbbell Set (20KG)", 
    category: "Gym", 
    price: 4999, 
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=400&q=80" 
  }
];

// State Management
let cart = JSON.parse(localStorage.getItem('leo_store_cart')) || [];

// DOM Element References
const productGrid = document.getElementById('productGrid');
const categoryTitle = document.getElementById('categoryTitle');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartBtn = document.getElementById('cartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

// 1. Render Products Grid with Images
function renderProducts(category = "All") {
  categoryTitle.textContent = category === "All" ? "All Products" : category;
  
  const filtered = category === "All" 
    ? products 
    : products.filter(p => p.category === category);

  productGrid.innerHTML = filtered.map(product => `
    <div class="card">
      <div>
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p class="category-tag">${product.category}</p>
        <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
      </div>
      <button class="add-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `).join('');
}

// 2. Add Item to Cart
function addToCart(productId) {
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }
  saveAndRenderCart();
}

// 3. Remove Item from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveAndRenderCart();
}

// 4. Update Quantity
function changeQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
  }
  saveAndRenderCart();
}

// 5. Render Cart Sidebar with Thumbnails & Totals
function saveAndRenderCart() {
  localStorage.setItem('leo_store_cart', JSON.stringify(cart));
  
  // Total quantity count
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalCount;

  // Render items list inside cart
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="text-align:center; color:#64748b;">Your cart is empty.</p>';
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div>
            <h4>${item.name}</h4>
            <p>₹${item.price.toLocaleString('en-IN')} × ${item.quantity}</p>
          </div>
        </div>
        <div>
          <button onclick="changeQuantity(${item.id}, -1)">-</button>
          <span style="margin: 0 5px;">${item.quantity}</span>
          <button onclick="changeQuantity(${item.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})" style="margin-left: 8px;">✕</button>
        </div>
      </div>
    `).join('');
  }

  // Calculate total price
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = totalAmount.toLocaleString('en-IN');
}

// 6. Checkout Action & Options Handlers
function processCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty! Please add items before checking out.");
    return;
  }

  const itemList = cart
    .map(item => `- ${item.name} (${item.quantity}x) : ₹${(item.price * item.quantity).toLocaleString('en-IN')}`)
    .join('\n');
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const confirmChoice = confirm(
    `--- ORDER SUMMARY ---\n\n${itemList}\n\nTotal: ₹${totalAmount.toLocaleString('en-IN')}\n\nClick 'OK' to complete your order or 'Cancel' to continue shopping.`
  );

  if (confirmChoice) {
    alert("Thank you for shopping with us! Please visit again. 🛍️");
    cart = [];
    saveAndRenderCart();
    cartModal.style.display = 'none';
  } else {
    // Continue Shopping option
    cartModal.style.display = 'none';
  }
}

// Bind Checkout Event Handler
const checkoutBtn = document.querySelector('.checkout-btn');
if (checkoutBtn) {
  checkoutBtn.onclick = processCheckout;
}

// 7. Category Filter Listeners
filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    const selectedCategory = e.target.getAttribute('data-category');
    renderProducts(selectedCategory);
  });
});

// 8. Cart Drawer Modal Toggle
cartBtn.addEventListener('click', () => cartModal.style.display = 'flex');
closeCartBtn.addEventListener('click', () => cartModal.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target === cartModal) cartModal.style.display = 'none';
});

// Initial Setup Call
renderProducts();
saveAndRenderCart();