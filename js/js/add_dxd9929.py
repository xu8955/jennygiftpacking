filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9929_product = """  {
    id: 'dxd-029',
    name: 'DXD9929编织皮绳钥匙扣',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9929/01.png',
      'desktop-supplies/DXD9929/02.png',
      'desktop-supplies/DXD9929/03.png',
      'desktop-supplies/DXD9929/04.png',
      'desktop-supplies/DXD9929/05.png'
    ],
    desc: '编织皮绳钥匙扣，简约时尚风格，优质PU皮革绳编织而成，耐用且手感舒适。适用于钥匙、钥匙圈或小物件的悬挂收纳。',
    scenes: ['Daily Use', 'Gifts', 'Keychain', 'Retail'],
    materials: ['PU Leather', 'Metal Hardware'],
    specs: {
      'Model': 'DXD9929',
      'Material': 'PU Leather + Metal',
      'Size': '12 x 2 x 1 cm',
      'Feature': 'Braided leather rope, lightweight',
      'MOQ': '50 pcs'
    }
  },
  {
    id: 'outdoor-001',"""

# Find the transition from dxd-028 to outdoor-001 and insert dxd-029 between them
old_pattern = """  },
  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9929_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
    idx = content.find("id: 'outdoor-001'")
    if idx > 0:
        print("Found outdoor at", idx)
        print("Before:", repr(content[idx-100:idx]))
