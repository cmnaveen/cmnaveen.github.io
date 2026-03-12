import re

with open('cart.js', 'r') as f:
    js = f.read()

# Make sure we don't have multiple handleCheckout functions
js = re.sub(r'function handleCheckout\(\) \{[\s\S]*?window\.processMockPayment', 'window.processMockPayment', js)


# The appending script added it to the end. Let's make sure it's clean by writing cart.js from scratch just in case.
