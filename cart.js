/**
 * cart.js - Handles the shopping cart logic for Svādotsava™
 */

let cart = JSON.parse(localStorage.getItem('svad_cart')) || [];

function saveCart() {
  localStorage.setItem('svad_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(id, name, price, image) {
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, image, quantity: 1 });
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

function formatPrice(price) {
  return '₹' + parseFloat(price).toFixed(2);
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  let totalItems = 0;
  let subtotal = 0;

  cart.forEach(item => {
    totalItems += item.quantity;
    subtotal += (item.price * item.quantity);
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
    if(cartSubtotalEl) cartSubtotalEl.textContent = '₹0.00';
  } else {
    if(cartEmptyState) cartEmptyState.style.display = 'none';
    if(checkoutBtn) checkoutBtn.disabled = false;
    if(cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(subtotal);
    
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
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

// Mock Payment Gateway Integration
function handleCheckout() {
  if (cart.length === 0) return;
  
  let total = 0;
  cart.forEach(item => total += (item.price * item.quantity));
  
  // Create a mock payment modal directly in the body
  const modalHTML = `
    <div id="mock-payment-overlay" style="position:fixed;inset:0;background:rgba(10,13,20,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);">
      <div style="background:#fff;padding:40px;border-radius:24px;max-width:420px;width:90%;text-align:center;box-shadow:0 30px 60px rgba(0,0,0,0.3);">
        <h2 style="font-family:'Merriweather',serif;color:#7c3a10;margin-top:0;font-size:1.6rem;margin-bottom:8px;">Svādotsava™ Checkout</h2>
        <p style="color:#5a5a5a;margin-bottom:28px;font-size:0.95rem;">Test Environment: Secure Mock Payment</p>
        
        <div style="background:#f5f0e8;padding:22px;border-radius:16px;margin-bottom:30px;border:1px solid #ddd0bc;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-weight:600;color:#5a5a5a;">Total Amount</span>
            <strong style="color:#7c3a10;font-size:1.6rem;font-family:'Merriweather',serif;">₹${total.toFixed(2)}</strong>
          </div>
        </div>
        
        <button onclick="processMockPayment()" style="width:100%;padding:16px;background:#c8874a;color:#23160c;border:none;border-radius:12px;font-weight:700;font-size:1.1rem;cursor:pointer;margin-bottom:14px;box-shadow:0 8px 16px rgba(200,135,74,0.25);transition:transform 0.2s, filter 0.2s;">
          Pay ₹${total.toFixed(2)} Now
        </button>
        <button onclick="document.getElementById('mock-payment-overlay').remove()" style="width:100%;padding:14px;background:transparent;color:#888;border:none;font-weight:600;cursor:pointer;font-size:0.95rem;transition:color 0.2s;">
          Cancel & Return to Cart
        </button>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Ensure the button hover works
document.head.insertAdjacentHTML('beforeend', `<style>
  button[onclick="processMockPayment()"]:hover { transform: translateY(-2px); filter: brightness(1.05); }
  button[onclick="document.getElementById('mock-payment-overlay').remove()"]:hover { color:#1a1a1a !important; }
</style>`);

window.processMockPayment = function() {
  const overlay = document.getElementById('mock-payment-overlay');
  if(!overlay) return;
  
  // Show processing state
  overlay.innerHTML = `
    <div style="background:#fff;padding:50px 40px;border-radius:24px;max-width:420px;width:90%;text-align:center;">
      <div style="width:50px;height:50px;border:4px solid #f3f3f3;border-top:4px solid #c8874a;border-radius:50%;margin:0 auto 24px;animation:spin 1s linear infinite;"></div>
      <h2 style="font-family:'Merriweather',serif;color:#7c3a10;margin-top:0;margin-bottom:10px;">Processing...</h2>
      <p style="color:#5a5a5a;margin:0;">Securely authorizing your payment.</p>
      <style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
    </div>
  `;
  
  setTimeout(() => {
    overlay.innerHTML = `
      <div style="background:#fff;padding:50px 40px;border-radius:24px;max-width:420px;width:90%;text-align:center;">
        <div style="width:70px;height:70px;background:#4CAF50;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 24px;box-shadow:0 10px 20px rgba(76,175,80,0.3);">✓</div>
        <h2 style="font-family:'Merriweather',serif;color:#4CAF50;margin-top:0;margin-bottom:12px;font-size:1.8rem;">Payment Successful!</h2>
        <p style="color:#5a5a5a;margin-bottom:34px;line-height:1.6;">Your order has been confirmed. Thank you for dining with Svādotsava™.</p>
        <button onclick="closeMockPayment()" style="width:100%;padding:16px;background:#f5f0e8;color:#7c3a10;border:1px solid #ddd0bc;border-radius:12px;font-weight:700;font-size:1.05rem;cursor:pointer;transition:background 0.2s;">
          Return to Menu
        </button>
      </div>
    `;
    
    // Clear cart on success
    cart = [];
    saveCart();
    
    // Attempt to update the UI specifically behind the modal if possible
    if(typeof updateCartUI === 'function') updateCartUI();
    
  }, 1800);
}

window.closeMockPayment = function() {
  const overlay = document.getElementById('mock-payment-overlay');
  if (overlay) overlay.remove();
  
  // Also close the cart drawer if it's open, since checkout is done
  const drawer = document.getElementById('cart-drawer');
  if (drawer && drawer.classList.contains('open')) {
    if(typeof toggleCart === 'function') toggleCart();
  }
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
