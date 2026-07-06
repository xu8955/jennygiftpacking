import re

filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all MOQ values
moqs = re.findall(r"'MOQ': '(\d+) pcs'", content)
print('Found MOQs:', moqs[:30])
print('Total products with MOQ:', len(moqs))

# Replace all MOQ values to 3000 pcs
new_content = re.sub(r"'MOQ': '\d+ pcs'", "'MOQ': '3000 pcs'", content)
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated all MOQs to 3000 pcs')
