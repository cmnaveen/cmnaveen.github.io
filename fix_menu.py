import re

with open('menu.html', 'r') as f:
    html = f.read()

# We need to remove the duplicate card-price-row entries.
# Let's find all text between <div class="card-price-row"> and </div> matching it.
# Actually, since the price row has a nested div or button, regex can be tricky.
# Let's just use string replacement to remove ALL price rows. 

# A price row block looks like:
#            <div class="card-price-row">
#              <span class="card-price">₹120</span>
#              <button class="add-to-cart-btn" onclick="addToCart('ghee_podi_idly', 'Ghee Podi Idly', 120, 'Menu/GheePodiIdly.jpg')">
#                Add +
#              </button>
#            </div>

# Let's use a regex that matches from <div class="card-price-row"> to the next </div> that closes it (which is after </button>\n            </div>)
html = re.sub(r'\s*<div class="card-price-row">.*?</div>\s*', '\n', html, flags=re.DOTALL)

with open('menu.html', 'w') as f:
    f.write(html)
