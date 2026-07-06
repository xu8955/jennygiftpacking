filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

dxd9938_product = """  {
    id: 'dxd-038',
    name: 'DXD9938婚礼喜糖盒皮质双层蝴蝶结收纳袋',
    category: 'leather-packaging',
    images: [
      'leather-packaging/DXD9938/01.png',
      'leather-packaging/DXD9938/02.png',
      'leather-packaging/DXD9938/03.png',
      'leather-packaging/DXD9938/04.png',
      'leather-packaging/DXD9938/05.png',
      'leather-packaging/DXD9938/06.png',
      'leather-packaging/DXD9938/07.png',
      'leather-packaging/DXD9938/08.png'
    ],
    desc: '婚礼喜糖盒皮质双层蝴蝶结收纳袋，精致优雅，适合婚礼、回门宴、喜宴等场合使用。可装糖果、巧克力、小礼品等，是婚礼回礼的理想选择。',
    scenes: ['Wedding', 'Party', 'Gift', 'Celebration', 'Bridal Shower'],
    materials: ['PU Leather', 'Satin Ribbon'],
    specs: {
      'Model': 'DXD9938',
      'Material': 'PU Leather + Satin',
      'Style': 'Double-layer Bow Design',
      'Feature': 'Wedding favor bag, elegant design',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'outdoor-001',"""

old_pattern = """  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, dxd9938_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("ERROR: pattern not found")
