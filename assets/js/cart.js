/**
 * cart.js - Handles the shopping cart logic for Svādotsava™
 */

let cart = JSON.parse(localStorage.getItem('svad_cart')) || [];

function saveCart() {
  localStorage.setItem('svad_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(id, name, price, image, currency) {
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    if (id === 'svadotsava-podi' && existingItem.quantity >= 4) {
      alert("Only 4 packets of Svadotsava PODI left in stock!");
      return;
    }
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, image, quantity: 1, currency: currency || 'INR' });
  }
  
  // Show drawer on add
  const drawer = document.getElementById('cart-drawer');
  if(drawer && !drawer.classList.contains('open')) {
    toggleCart();
  }
  
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

function updateQuantity(id, change) {
  const item = cart.find(item => item.id === id);
  if (item) {
    if (id === 'svadotsava-podi' && change > 0 && item.quantity >= 4) {
      alert("Only 4 packets of Svadotsava PODI left in stock!");
      return;
    }
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      saveCart();
    }
  }
}

function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) {
    drawer.classList.toggle('open');
  }
  if (overlay) {
    overlay.classList.toggle('open');
  }
  // Prevent body scrolling when cart is open
  if (drawer && drawer.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function formatPrice(price, currency) {
  if (currency === 'SGD') {
    return 'S$' + parseFloat(price).toFixed(2);
  }
  return '₹' + parseFloat(price).toFixed(2);
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  let totalItems = 0;
  let inrSubtotal = 0;
  let sgdSubtotal = 0;

  cart.forEach(item => {
    totalItems += item.quantity;
    if (item.currency === 'SGD') {
      sgdSubtotal += (item.price * item.quantity);
    } else {
      inrSubtotal += (item.price * item.quantity);
    }
  });

  // Update badges
  cartCountBadges.forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
  });

  if (!cartItemsContainer) return;

  // Render items
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '';
    if(cartEmptyState) cartEmptyState.style.display = 'flex';
    if(checkoutBtn) checkoutBtn.disabled = true;
    if(cartSubtotalEl) cartSubtotalEl.textContent = 'S$0.00';
  } else {
    if(cartEmptyState) cartEmptyState.style.display = 'none';
    if(checkoutBtn) checkoutBtn.disabled = false;
    
    let subtotalText = '';
    if (inrSubtotal > 0 && sgdSubtotal > 0) {
      subtotalText = `₹${inrSubtotal.toFixed(2)} + S$${sgdSubtotal.toFixed(2)}`;
    } else if (sgdSubtotal > 0) {
      subtotalText = `S$${sgdSubtotal.toFixed(2)}`;
    } else {
      subtotalText = `₹${inrSubtotal.toFixed(2)}`;
    }
    
    if(cartSubtotalEl) cartSubtotalEl.textContent = subtotalText;
    
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">
          ${item.image.endsWith('.mp4') ? 
            `<video src="${item.image}" autoplay muted loop playsinline></video>` : 
            `<img src="${item.image}" alt="${item.name}">`
          }
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-price">${formatPrice(item.price, item.currency)}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove item">×</button>
      </div>
    `).join('');
  }
}

// Instagram Chat Order Redirection
function handleCheckout() {
  if (cart.length === 0) return;
  
  let inrTotal = 0;
  let sgdTotal = 0;
  cart.forEach(item => {
    if (item.currency === 'SGD') {
      sgdTotal += (item.price * item.quantity);
    } else {
      inrTotal += (item.price * item.quantity);
    }
  });
  
  let totalText = '';
  if (inrTotal > 0 && sgdTotal > 0) {
    totalText = `₹${inrTotal.toFixed(2)} + S$${sgdTotal.toFixed(2)}`;
  } else if (sgdTotal > 0) {
    totalText = `S$${sgdTotal.toFixed(2)}`;
  } else {
    totalText = `₹${inrTotal.toFixed(2)}`;
  }

  // Create a redirection overlay directly in the body
  const modalHTML = `
    <div id="mock-payment-overlay" style="position:fixed;inset:0;background:rgba(10,13,20,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);">
      <div style="background:#fff;padding:40px;border-radius:24px;max-width:420px;width:90%;text-align:center;box-shadow:0 30px 60px rgba(0,0,0,0.3);">
        <div style="width:60px;height:60px;background:linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 20px;box-shadow:0 10px 20px rgba(204,35,102,0.25);">💬</div>
        <h2 style="font-family:'Merriweather',serif;color:#7c3a10;margin-top:0;font-size:1.5rem;margin-bottom:12px;">Place Order via Instagram</h2>
        <p style="color:#5a5a5a;margin-bottom:24px;font-size:0.95rem;line-height:1.6;">We are opening a direct chat with <strong>@svadotsava.cafe</strong> on Instagram so you can finalize and place your order of <strong>${totalText}</strong>!</p>
        
        <button onclick="confirmInstagramRedirect()" style="width:100%;padding:16px;background:#c8874a;color:#23160c;border:none;border-radius:12px;font-weight:700;font-size:1.1rem;cursor:pointer;margin-bottom:14px;box-shadow:0 8px 16px rgba(200,135,74,0.25);transition:transform 0.2s, filter 0.2s;">
          Chat & Order Now
        </button>
        <button onclick="document.getElementById('mock-payment-overlay').remove()" style="width:100%;padding:14px;background:transparent;color:#888;border:none;font-weight:600;cursor:pointer;font-size:0.95rem;transition:color 0.2s;">
          Cancel & Return
        </button>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Ensure the button hover works
document.head.insertAdjacentHTML('beforeend', `<style>
  button[onclick="confirmInstagramRedirect()"]:hover { transform: translateY(-2px); filter: brightness(1.05); }
  button[onclick="document.getElementById('mock-payment-overlay').remove()"]:hover { color:#1a1a1a !important; }
</style>`);

window.confirmInstagramRedirect = function() {
  const overlay = document.getElementById('mock-payment-overlay');
  if (overlay) overlay.remove();
  
  // Clear cart on redirect so checkout is finalized
  cart = [];
  saveCart();
  
  // Close drawer
  const drawer = document.getElementById('cart-drawer');
  if (drawer && drawer.classList.contains('open')) {
    toggleCart();
  }
  
  // Open Instagram direct chat
  window.open('https://ig.me/m/svadotsava.cafe', '_blank');
}

// Initialize UI on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    
    // Setup outside click to close drawer
    const overlay = document.getElementById('cart-overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleCart);
    }
});
