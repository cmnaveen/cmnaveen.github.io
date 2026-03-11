import os
import glob

html_files = glob.glob('/home/ubuntu/GitHub_Web/cmnaveen.github.io/*.html')
html_files.append('/home/ubuntu/GitHub_Web/cmnaveen.github.io/README.md')

for f in html_files:
    if not os.path.exists(f): continue
    with open(f, 'r') as file:
        content = file.read()
    
    # Add trademark
    content = content.replace('Svādotsava', 'Svādotsava&trade;')
    
    # For the split stylized name
    content = content.replace('otsava</span></div>', 'otsava&trade;</span></div>')
    
    # Cleanup duplicate trademarks if any occurred
    content = content.replace('&trade;&trade;', '&trade;')
    
    with open(f, 'w') as file:
        file.write(content)

print("TM replacement complete.")
