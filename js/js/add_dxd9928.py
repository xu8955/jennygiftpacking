filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

outdoor_product = """
  {
    id: 'dxd-028',
    name: 'DXD9928皮革园艺垫防水换土皮垫',
    category: 'outdoor',
    images: [
      'outdoor/01.png',
      'outdoor/02.png',
      'outdoor/03.png',
      'outdoor/04.png',
      'outdoor/05.png',
      'outdoor/06.png'
    ],
    desc: '防水皮革园艺垫，适用于户外种植、换土、园艺操作。三个尺寸可选，折叠收纳方便携带，耐用且易于清洁。',
    scenes: ['Gardening', 'Outdoor', 'Plant Care', 'Backyard', 'Nursery'],
    materials: ['PU Leather', 'Water-resistant Coating'],
    specs: {
      'Model': 'DXD9928',
      'Material': 'PU Leather + Water-resistant Coating',
      'Sizes': 'S: 60x30cm / M: 76x45cm / L: 120x60cm',
      'Weight': 'S: 225g / M: 400-410g / L: 830g',
      'Feature': 'Waterproof, foldable, easy to clean',
      'MOQ': '50 pcs'
    }
  },
  {
    id: 'outdoor-001',
    name: 'Outdoor Collection - More Coming Soon',
    category: 'outdoor',
    images: [
      'outdoor/placeholder.jpg'
    ],
    desc: '更多户外产品即将上线，敬请期待！',
    scenes: ['Cycling', 'Hiking', 'Camping', 'Travel', 'Outdoor Sports'],
    materials: ['PU Leather', 'Water-resistant Fabric'],
    specs: {
      'Category': 'Outdoor & Sports',
      'Status': 'Coming Soon',
      'MOQ': '50 pcs'
    }
  }
];
"""

# Replace the outdoor-001 placeholder + ]; with real product + placeholder + ];
old_end = """  {
    id: 'outdoor-001',
    name: 'Outdoor Collection - Coming Soon',
    category: 'outdoor',
    images: [
      'outdoor/placeholder.jpg'
    ],
    desc: 'Leather sports accessories and outdoor gear - cycling bags, travel cases, and adventure essentials. Stay tuned for our new outdoor collection.',
    scenes: ['Cycling', 'Hiking', 'Camping', 'Travel', 'Outdoor Sports'],
    materials: ['PU Leather', 'Water-resistant Fabric'],
    specs: {
      'Category': 'Outdoor & Sports',
      'Status': 'Coming Soon',
      'MOQ': '50 pcs'
    }
  }
];"""

if old_end in content:
    content = content.replace(old_end, outdoor_product)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done - replaced outdoor-001 with DXD9928 + placeholder")
else:
    print("ERROR: pattern not found")
    idx = content.find("id: 'outdoor-001'")
    if idx > 0:
        print("Found at", idx)
        print("Context:", repr(content[idx-100:idx+300]))
