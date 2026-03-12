import re

with open('menu.html', 'r') as f:
    html = f.read()

# Define variations
variations = [
    ("Plain Podi Dosa", 50),
    ("Podi Karam Dosa", 60),
    ("Podi Masala Dosa", 70),
    ("Ghee Plain Podi Dosa", 55),
    ("Ghee Podi Karam Dosa", 60),
    ("Ghee Podi Masala Dosa", 75)
]

# We are going to find the Podi Dosa menu card and replace it completely with the variations.
start = html.find('<h3>Podi Dosa</h3>')
if start != -1:
    # Go backwards to <div class="menu-card reveal"
    card_start = html.rfind('<div class="menu-card reveal"', 0, start)
    # Go forwards to </div>\n        </div> (end of card)
    card_end = html.find('</div>\n        </div>', start) + len('</div>\n        </div>')
    
    full_card = html[card_start:card_end]
    new_cards_html = ""
    for name, price in variations:
        item_id = name.lower().replace(' ', '_')
        # Create a new card based on the template by replacing specific text
        new_card = re.sub(r'<h3>Podi Dosa<\/h3>', f'<h3>{name}</h3>', full_card)
        new_card = re.sub(r'<span class="card-price">.*?<\/span>', f'<span class="card-price">₹{price}</span>', new_card)
        new_card = re.sub(r'onclick="addToCart\([^)]+\)"', f"onclick=\"addToCart('{item_id}', '{name}', {price}, 'Menu/podiDosa.jpg')\"", new_card)
        
        new_cards_html += new_card + "\n\n        "

    # Replace the single old card with our multiple new cards
    html = html[:card_start] + new_cards_html.strip() + html[card_end:]
    
    with open('menu.html', 'w') as f:
        f.write(html)
    print("SUCCESS: Replaced Podi Dosa with variations.")
else:
    print("ERROR: Could not find Podi Dosa card block")
