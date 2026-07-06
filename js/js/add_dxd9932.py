filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9932_product = """  {
    id: 'dxd-032',
    name: 'DXD9932皮革笔筒化妆刷收纳筒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9932/01.png',
      'desktop-supplies/DXD9932/02.png',
      'desktop-supplies/DXD9932/03.png',
      'desktop-supplies/DXD9932/04.png',
      'desktop-supplies/DXD9932/05.png',
      'desktop-supplies/DXD9932/06.png',
      'desktop-supplies/DXD9932/07.png',
      'desktop-supplies/DXD9932/08.png'
    ],
    desc: '皮革笔筒化妆刷收纳筒，精致时尚，可收纳钢笔、化妆刷、画笔等。优质PU皮革，耐用且美观，适合办公桌或梳妆台使用。',
    scenes: ['Office', 'Vanity', 'Art', 'Desk Organization', 'Beauty'],
    materials: ['PU Leather', 'Metal Base'],
    specs: {
      'Model': 'DXD9932',
      'Material': 'PU Leather + Metal Base',
      'Style': 'Cylindrical organizer',
      'Feature': 'Pen holder and cosmetics brush organizer',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'outdoor-001',"""

old_pattern = """  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9932_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
