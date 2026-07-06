filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9935_product = """  {
    id: 'dxd-035',
    name: 'DXD9935皮革折叠桌面摆件收纳盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9935/01.png',
      'desktop-supplies/DXD9935/02.png',
      'desktop-supplies/DXD9935/03.png',
      'desktop-supplies/DXD9935/04.png',
      'desktop-supplies/DXD9935/05.png',
      'desktop-supplies/DXD9935/06.png',
      'desktop-supplies/DXD9935/07.png',
      'desktop-supplies/DXD9935/08.png',
      'desktop-supplies/DXD9935/09.png'
    ],
    desc: '皮革折叠桌面摆件收纳盒，可折叠设计便于收纳和携带。适用于桌面收纳、装饰品摆放、文具整理等。优质PU皮革，简约时尚。',
    scenes: ['Office', 'Home Decoration', 'Desk Organization', 'Bedroom', 'Study Room'],
    materials: ['PU Leather'],
    specs: {
      'Model': 'DXD9935',
      'Material': 'PU Leather',
      'Style': 'Foldable Desktop Organizer',
      'Feature': 'Foldable, space-saving design',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'outdoor-001',"""

old_pattern = """  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9935_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
