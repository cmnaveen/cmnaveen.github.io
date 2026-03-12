import re

with open('menu.html', 'r') as f:
    html = f.read()

prices = {
    'Ghee Podi Idly': 120,
    'Mini Ghee Podi Idly': 100,
    'Masala Dosa': 110,
    'Podi Dosa': 90,
    'Masala Vada': 50,
    'Podi Onion Uttapam': 130,
    'Onion Uttapam': 110,
    'Filter Coffee': 40,
    'Tea': 30,
    'Masala Tea': 35
}

def replace_card(match):
    full_card = match.group(0)
    
    name_match = re.search(r'<h3>(.*?)</h3>', full_card)
    img_match = re.search(r'<img src="(.*?)"', full_card)
    
    if not name_match or not img_match:
        return full_card
        
    name = name_match.group(1)
    img = img_match.group(1)
    
    # Avoid double inserting
    if 'card-price-row' in full_card:
        return full_card

    price = prices.get(name, 100)
    item_id = name.lower().replace(' ', '_')
    
    insertion = f'''
            <div class="card-price-row">
              <span class="card-price">₹{price}</span>
              <button class="add-to-cart-btn" onclick="addToCart('{item_id}', '{name}', {price}, '{img}')">
                Add +
              </button>
            </div>'''
            
    if '<span class="card-tag">' in full_card:
        return full_card.replace('<span class="card-tag">', insertion + '\n            <span class="card-tag">')
    else:
        return full_card.replace('</div>\n        </div>', insertion + '\n          </div>\n        </div>')

# Use regex to find all menu-card divs
html = re.sub(r'<div class="menu-card reveal".*?</div>\s*</div>', replace_card, html, flags=re.DOTALL)

with open('menu.html', 'w') as f:
    f.write(html)

