filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9934_product = """  {
    id: 'dxd-034',
    name: 'DXD9934皮革置物化妆品皮质托盘',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9934/01.png',
      'desktop-supplies/DXD9934/02.png',
      'desktop-supplies/DXD9934/03.png',
      'desktop-supplies/DXD9934/04.png',
      'desktop-supplies/DXD9934/05.png',
      'desktop-supplies/DXD9934/06.png',
      'desktop-supplies/DXD9934/07.png',
      'desktop-supplies/DXD9934/08.png'
    ],
    desc: '皮革置物化妆品皮质托盘，优雅简约设计，适合收纳化妆品、首饰、文具等桌面小物。优质PU皮革，柔软内衬保护物品，是卧室、梳妆台、办公桌的理想收纳选择。',
    scenes: ['Vanity', 'Office', 'Bedroom', 'Desk Organization', 'Bathroom'],
    materials: ['PU Leather', 'Soft Lining'],
    specs: {
      'Model': 'DXD9934',
      'Material': 'PU Leather',
      'Style': 'Tray / Organizer',
      'Feature': 'Multi-purpose desktop and vanity tray',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'outdoor-001',"""

old_pattern = """  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9934_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
