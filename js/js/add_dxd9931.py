filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9931_product = """  {
    id: 'dxd-031',
    name: 'DXD9931花朵形状皮革折叠收纳盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9931/01.png',
      'desktop-supplies/DXD9931/02.png',
      'desktop-supplies/DXD9931/03.png',
      'desktop-supplies/DXD9931/04.png',
      'desktop-supplies/DXD9931/05.png',
      'desktop-supplies/DXD9931/06.png',
      'desktop-supplies/DXD9931/07.png'
    ],
    desc: '花朵形状皮革折叠收纳盒，设计新颖时尚，可折叠收纳节省空间。适用于桌面收纳、化妆品、文具、小饰品等的整理。优质PU皮革，耐用美观。',
    scenes: ['Office', 'Desk Organization', 'Bedroom', 'Bathroom', 'Gift'],
    materials: ['PU Leather', 'Metal Hardware'],
    specs: {
      'Model': 'DXD9931',
      'Material': 'PU Leather',
      'Style': 'Flower Shape, Foldable',
      'Feature': 'Collapsible, space-saving design',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'outdoor-001',"""

old_pattern = """  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9931_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
