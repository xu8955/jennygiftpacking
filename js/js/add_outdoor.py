filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

outdoor_product = """
  // ═══════════════════════════════════════
  //  OUTDOOR & SPORTS
  // ═══════════════════════════════════════
  {
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
];
"""

# Find last ]; and replace it with outdoor product + ];
last_close = content.rfind('];')
if last_close != -1:
    new_content = content[:last_close] + '\n' + outdoor_product + '\n' + content[last_close+3:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Done - replaced at position", last_close)
else:
    print("ERROR: ]; not found")
