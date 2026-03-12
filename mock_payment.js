function handleCheckout() {
  if (cart.length === 0) return;
  
  let total = 0;
  cart.forEach(item => total += (item.price * item.quantity));
  
  // Create a mock payment modal
  const modalHTML = `
    <div id="mock-payment-overlay" style="position:fixed;inset:0;background:rgba(0,0,0,0.8);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);">
      <div style="background:#fff;padding:40px;border-radius:16px;max-width:400px;width:90%;text-align:center;box-shadow:0 20px 40px rgba(0,0,0,0.2);">
        <h2 style="font-family:'Merriweather',serif;color:#7c3a10;margin-top:0;">Mock Payment Gateway</h2>
        <p style="color:#5a5a5a;margin-bottom:24px;">This is a simulation to test the checkout flow.</p>
        
        <div style="background:#f5f0e8;padding:20px;border-radius:12px;margin-bottom:24px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
            <span>Total Amount:</span>
            <strong style="color:#7c3a10;font-size:1.2rem;">₹${total.toFixed(2)}</strong>
          </div>
        </div>
        
        <button onclick="processMockPayment()" style="width:100%;padding:14px;background:#c8874a;color:#23160c;border:none;border-radius:8px;font-weight:bold;font-size:1.1rem;cursor:pointer;margin-bottom:12px;">
          Simulate Payment Success
        </button>
        <button onclick="document.getElementById('mock-payment-overlay').remove()" style="width:100%;padding:14px;background:transparent;color:#5a5a5a;border:1px solid #ddd;border-radius:8px;font-weight:bold;cursor:pointer;">
          Cancel
        </button>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

window.processMockPayment = function() {
  const overlay = document.getElementById('mock-payment-overlay');
  
  // Show processing state
  overlay.innerHTML = `
    <div style="background:#fff;padding:40px;border-radius:16px;max-width:400px;width:90%;text-align:center;">
      <h2 style="font-family:'Merriweather',serif;color:#7c3a10;margin-top:0;">Processing...</h2>
      <p style="color:#5a5a5a;">Please wait while we secure your payment.</p>
    </div>
  `;
  
  setTimeout(() => {
    overlay.innerHTML = `
      <div style="background:#fff;padding:40px;border-radius:16px;max-width:400px;width:90%;text-align:center;">
        <div style="width:60px;height:60px;background:#4CAF50;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:30px;margin:0 auto 20px;">✓</div>
        <h2 style="font-family:'Merriweather',serif;color:#4CAF50;margin-top:0;">Payment Successful!</h2>
        <p style="color:#5a5a5a;margin-bottom:24px;">Your order has been placed. Thank you for testing the Svādotsava™ shopping cart.</p>
        <button onclick="closeMockPayment()" style="width:100%;padding:14px;background:#4CAF50;color:#fff;border:none;border-radius:8px;font-weight:bold;font-size:1.1rem;cursor:pointer;">
          Back to Website
        </button>
      </div>
    `;
    
    // Clear cart
    cart = [];
    saveCart();
    // Re-render UI
    updateCartUI();
    
  }, 1500);
}

window.closeMockPayment = function() {
  const overlay = document.getElementById('mock-payment-overlay');
  if (overlay) overlay.remove();
  
  const drawer = document.getElementById('cart-drawer');
  if (drawer && drawer.classList.contains('open')) {
    toggleCart(); // Close drawer
  }
}
