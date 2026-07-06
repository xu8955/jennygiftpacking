filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9939_product = """  {
    id: 'dxd-039',
    name: 'DXD9939可爱糖果色小零钱包硬币包钥匙包',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9939/01.png',
      'desktop-supplies/DXD9939/02.png',
      'desktop-supplies/DXD9939/03.png',
      'desktop-supplies/DXD9939/04.png'
    ],
    desc: '可爱糖果色小零钱包硬币包钥匙包，创意马卡龙色系，手感舒适。可用于收纳硬币、纸币、钥匙、小物件等，轻巧便携，适合日常出行。',
    scenes: ['Daily Use', 'Gift', 'Keychain', 'Coin Purse', 'Retail'],
    materials: ['PU Leather', 'Metal Hardware'],
    specs: {
      'Model': 'DXD9939',
      'Material': 'PU Leather + Metal',
      'Style': 'Candy Color, Macaron Style',
      'Feature': 'Compact coin purse and keychain combo',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'outdoor-001',"""

old_pattern = """  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9939_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
