filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9936_product = """  {
    id: 'dxd-036',
    name: 'DXD9936皮革折叠桌面收纳盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9936/01.png',
      'desktop-supplies/DXD9936/02.png',
      'desktop-supplies/DXD9936/03.png',
      'desktop-supplies/DXD9936/04.png',
      'desktop-supplies/DXD9936/05.png',
      'desktop-supplies/DXD9936/06.png'
    ],
    desc: '皮革折叠桌面收纳盒，简约时尚，可折叠设计便于收纳和携带。适合办公桌面、梳妆台、卧室使用，分类存放文具、饰品、化妆品等小物件。',
    scenes: ['Office', 'Bedroom', 'Vanity', 'Desk Organization', 'Home Decoration'],
    materials: ['PU Leather'],
    specs: {
      'Model': 'DXD9936',
      'Material': 'PU Leather',
      'Style': 'Foldable Desktop Organizer',
      'Feature': 'Foldable, space-saving',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'outdoor-001',"""

old_pattern = """  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9936_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
