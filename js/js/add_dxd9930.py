filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9930_product = """  {
    id: 'dxd-030',
    name: 'DXD9930皮革三角形储物盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9930/01.png',
      'desktop-supplies/DXD9930/02.png',
      'desktop-supplies/DXD9930/03.png',
      'desktop-supplies/DXD9930/04.png',
      'desktop-supplies/DXD9930/05.png',
      'desktop-supplies/DXD9930/06.png',
      'desktop-supplies/DXD9930/07.png',
      'desktop-supplies/DXD9930/08.png'
    ],
    desc: '皮革三角形储物盒，设计独特，造型时尚。可用于桌面收纳、钥匙、饰品、文具等小物件的整理收纳。优质PU皮革，耐用且美观。',
    scenes: ['Office', 'Desk Organization', 'Home', 'Study Room', 'Bedroom'],
    materials: ['PU Leather', 'Metal Hardware'],
    specs: {
      'Model': 'DXD9930',
      'Material': 'PU Leather',
      'Style': 'Triangular Shape',
      'Feature': 'Unique design, desktop organizer',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'outdoor-001',"""

# Insert dxd9930 between dxd-029 (desktop-supplies) and outdoor-001 (outdoor)
old_pattern = """  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9930_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
