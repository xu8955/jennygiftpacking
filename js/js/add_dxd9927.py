filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9927_product = """  {
    id: 'dxd-027',
    name: 'DXD9927杂物零食首饰收纳盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9927/01.png',
      'desktop-supplies/DXD9927/02.png',
      'desktop-supplies/DXD9927/03.png',
      'desktop-supplies/DXD9927/04.png'
    ],
    desc: '杂物零食首饰收纳盒，多格分区设计，可分类存放零食、首饰、文具等小物件。优质PU皮革外壳，内衬柔软，保护物品不受刮擦。',
    scenes: ['Office', 'Home', 'Bedroom', 'Study Room', 'Storage'],
    materials: ['PU Leather', 'Soft Lining'],
    specs: {
      'Model': 'DXD9927',
      'Material': 'PU Leather + Soft Lining',
      'Size': '25 x 14 x 13 cm',
      'Feature': 'Multi-compartment, multi-purpose organizer',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-028',"""

old_pattern = """  {
    id: 'dxd-028',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9927_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
