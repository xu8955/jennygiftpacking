filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9937_product = """  {
    id: 'dxd-037',
    name: 'DXD9937皮革名片盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9937/01.png',
      'desktop-supplies/DXD9937/02.png',
      'desktop-supplies/DXD9937/03.png'
    ],
    desc: '皮革名片盒，简约商务风格，优质PU皮革材质，小巧便携。适合商务人士收纳和携带名片，保护名片不受折损。',
    scenes: ['Business', 'Office', 'Gift', 'Professional'],
    materials: ['PU Leather'],
    specs: {
      'Model': 'DXD9937',
      'Material': 'PU Leather',
      'Style': 'Business Card Holder',
      'Feature': 'Compact, portable',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'outdoor-001',"""

old_pattern = """  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9937_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
