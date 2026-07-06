filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9909_leather = """  {
    id: 'dxd-009b',
    name: 'DXD9909 Mini Favor Bag - Floral Scarf Collection',
    category: 'leather-packaging',
    images: [
      'basket/DXD9909_01.jpg',
      'basket/DXD9909_02.jpg',
      'basket/DXD9909_03.jpg',
      'basket/DXD9909_04.jpg',
      'basket/DXD9909_05.jpg',
      'basket/DXD9909_06.jpg',
      'basket/DXD9909_07.jpg',
      'basket/DXD9909_08.jpg',
      'basket/DXD9909_10.jpg'
    ],
    desc: 'Elegant miniature handbag-style favor bags with decorative silk ribbon. Set of multiple rich colors - blue, orange, yellow, white, and red. Perfect for wedding favors, party gifts, bridal showers, and special events. Each bag features a structured silhouette with curved handle and satin ribbon bow.',
    scenes: ['Wedding Favor', 'Party Gift', 'Bridal Shower', 'Birthday Party', 'Corporate Event'],
    materials: ['PU Leather (Textured)', 'Satin Ribbon'],
    specs: {
      'Model': 'DXD9909',
      'Material': 'PU Leather, textured finish',
      'Colors': 'Blue, Orange, Yellow, White, Red (Set of 5)',
      'Handle': 'Integrated curved handle',
      'Decoration': 'Satin ribbon bow',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'outdoor-001',"""

old_pattern = """  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9909_leather)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
