// data.js — DoWin Real Products with Actual Images
const ASSET_BASE = 'assets';

const products = [
  // ═══════════════════════════════════════
  //  GIFT BASKETS / LEATHER TOTE BAGS
  // ═══════════════════════════════════════
  {
    id: 'gb-001',
    name: 'Woven Leather Storage Tote — Classic',
    category: 'gift-baskets',
    images: [
      'basket/DX11032.jpg',
      'basket/85A~H[I`26DCT8A419D)`20.jpg',
      'basket/DX11033.jpg'
    ],
    desc: 'Handcrafted woven leather tote with antique metal studs. Spacious interior ideal for magazines, linens, or gift baskets. Available in black, brown, and tan.',
    scenes: ['Living Room Storage', 'Magazine Organizer', 'Gift Basket Base', 'Retail Display'],
    materials: ['PU Leather (Woven)', 'Metal Studs', 'Polyester Lining'],
    specs: {
      'Material': 'PU Leather, woven texture',
      'Size': '38 × 28 × 30 cm',
      'Colors': 'Black, Brown, Tan',
      'Handle': 'Leather strap w/ buckle',
      'Interior': 'Polyester lining',
      'Logo': 'Deboss / Silk-print',
      'MOQ': '50 pcs'
    }
  },
  {
    id: 'gb-002',
    name: 'Three-Piece Woven Basket Set',
    category: 'gift-baskets',
    images: [
      'basket/7020R.jpg',
      'basket/DX12148 (2).JPG'
    ],
    desc: 'Set of three matching woven leather baskets in graduated sizes. Herringbone and suede-textured fronts with leather trim. Perfect for living room organization or gift sets.',
    scenes: ['Living Room', 'Bathroom Organization', 'Gift Set', 'Retail Display'],
    materials: ['PU Leather', 'Suede', 'Herringbone Fabric'],
    specs: {
      'Material': 'PU Leather + Suede combination',
      'Sizes': 'S: 20×15×18cm / M: 28×22×24cm / L: 36×28×30cm',
      'Colors': 'Tan/Brown, Brown/Black, Black/Gray',
      'Handle': 'Leather strap with buckle',
      'Set': '3 pieces (S+M+L)',
      'Logo': 'Deboss on leather trim',
      'MOQ': '30 sets'
    }
  },

  // ═══════════════════════════════════════
  //  LEATHER PACKAGING — Wine & Spirits
  // ═══════════════════════════════════════
  {
    id: 'lp-001',
    name: 'DX9901单瓶红酒袋',
    category: 'wine-baskets',
    images: [
      'red-wine-packaging/DX9901/02.jpg',
      'red-wine-packaging/DX9901/03.jpg',
      'red-wine-packaging/DX9901/04.jpg',
      'red-wine-packaging/DX9901/05.jpg',
      'red-wine-packaging/DX9901/O1CN01YREobL1U7JI4yWfrq.jpg'
    ],
    desc: 'Elegant single-bottle wine carrier with rose and filigree embossing. Features a handle loop with brass rivets and white contrast stitching. Available in 5 colors — olive green, orange, sage green, yellow, and mahogany brown. Holds one 750ml bottle securely.',
    scenes: ['Wine Gift', 'Restaurant', 'Birthday', 'Wedding Favor', 'Corporate Gifting'],
    materials: ['PU Leather (Smooth)', 'Brass Rivets', 'Contrast Stitching'],
    specs: {
      'Model': 'DX9901',
      'Material': 'PU Leather, smooth semi-glossy',
      'Size': '15 × 48 cm',
      'Capacity': '1 × 750ml bottle',
      'Colors': 'Olive Green, Orange, Sage Green, Yellow, Mahogany Brown',
      'Handle': 'Leather strap with brass rivets',
      'Logo': 'Deboss / Hot-stamp',
      'MOQ': '50 pcs'
    }
  },
  {
    id: 'lp-002',
    name: 'Single Bottle Wine Case — Grid Pattern',
    category: 'leather-packaging',
    images: [
      'red-wine-packaging/DX30515.jpg',
      'red-wine-packaging/DX10301.jpg'
    ],
    desc: 'Sleek vertical wine bottle case with micro-grid texture and gold accent strip. Features adjustable shoulder strap and interior bottle securing strap.',
    scenes: ['Wine Gift', 'Corporate Gift', 'Restaurant', 'Travel'],
    materials: ['PU Leather (Grid Texture)', 'Gold Hardware', 'Adjustable Strap'],
    specs: {
      'Material': 'PU Leather, micro-grid texture',
      'Size': '14 × 14 × 40 cm',
      'Capacity': '1 × 750ml bottle',
      'Colors': 'Black, Dark Brown',
      'Strap': 'Adjustable shoulder strap',
      'Logo': 'Deboss / Metal plate',
      'MOQ': '50 pcs'
    }
  },
  {
    id: 'lp-003',
    name: 'Leather Wine Gift Box — Branded',
    category: 'leather-packaging',
    images: [
      'red-wine-packaging/DX10304.jpg',
      'red-wine-packaging/DX11035.jpg',
      'red-wine-packaging/DX30518.jpg'
    ],
    desc: 'Premium leather wine gift box with croc texture and gold latch. Interior features custom foam or fabric insert to secure bottle. Logo plate available for brand customization.',
    scenes: ['Corporate Gift', 'Luxury Retail', 'Holiday Gift Set', 'Wedding'],
    materials: ['Genuine Leather / PU', 'Gold Latch', 'Foam Insert'],
    specs: {
      'Material': 'PU Leather or Genuine Leather',
      'Size': '14 × 14 × 38 cm',
      'Capacity': '1 × 750ml bottle',
      'Colors': 'Brown, Black, Wine Red',
      'Logo': 'Gold foil plate / Deboss',
      'MOQ': '30 pcs'
    }
  },
  {
    id: 'lp-004',
    name: 'Wine & Snack Carrier — Multi-Compartment',
    category: 'leather-packaging',
    images: [
      'red-wine-packaging/65CQIJ)A8Y_]1DBQJG@}[A5.jpg'
    ],
    desc: 'Flexible faux leather basket carrier pre-filled with wine, spirits, snacks and treats. Great B2B gifting solution for holidays and corporate events.',
    scenes: ['Corporate Gifting', 'Christmas Gift', 'VIP Client', 'Trade Show'],
    materials: ['PU Leather (Faux)', 'Metal Buckle', 'Custom Fill'],
    specs: {
      'Material': 'PU Leather',
      'Size': '40 × 30 × 25 cm',
      'Colors': 'Green, Red, Navy (assorted)',
      'Fill': 'Custom per client requirement',
      'Logo': 'Hot-stamp on basket or ribbon',
      'MOQ': '50 pcs'
    }
  },

  // ═══════════════════════════════════════
  //  CROC TOTE BAGS — Multiple Colors
  // ═══════════════════════════════════════
  {
    id: 'cb-001',
    name: 'Croc Embossed Tote Bag — Dark Brown',
    category: 'leather-packaging',
    images: [
      'basket/DX11044.jpg',
      'basket/DX11045.JPG',
      'basket/DX11046.jpg',
      'basket/DX11047.JPG',
      'basket/DX11048.JPG'
    ],
    desc: 'Croc embossed leather tote bag in rich dark brown. Features heart-shaped metal accents at handle base and contrast white stitching. Spacious open-top design with black interior lining.',
    scenes: ['Daily Use', 'Beach / Pool', 'Shopping', 'Fashion Retail'],
    materials: ['PU Leather (Croc Embossed)', 'Metal Heart Accents', 'Black Polyester Lining'],
    specs: {
      'Material': 'PU Leather, croc embossed',
      'Size': '38 × 32 × 28 cm',
      'Colors': 'Dark Brown (shown), Tan, Tan/Gold',
      'Handle': 'Two arched handles w/ heart patches',
      'Interior': 'Black polyester lining',
      'Logo': 'Deboss on front or handles',
      'MOQ': '50 pcs'
    }
  },
  {
    id: 'cb-002',
    name: 'Croc Embossed Tote Bag — Green & Multicolor',
    category: 'leather-packaging',
    images: [
      'basket/69B(]%F9G2}Q{TBN(_1H6P3.jpg',
      'basket/1157-1588-S2-AX4186.JPG',
      'flowerpot/IMG_20170119_114707.jpg',
      'flowerpot/IMG_20170119_115200.jpg',
      'flowerpot/IMG_20170119_115415.jpg'
    ],
    desc: 'Vibrant croc embossed tote bags in green, maroon, tan and taupe. Each features matching heart-shaped metal accents and contrast stitching. Popular for retail and fashion gifting.',
    scenes: ['Fashion Retail', 'Beach Outing', 'Gift Set', 'Resort Wear'],
    materials: ['PU Leather (Croc Embossed)', 'Heart-shaped Metal', 'Black Lining'],
    specs: {
      'Material': 'PU Leather, croc embossed',
      'Size': '36 × 30 × 26 cm',
      'Colors': 'Light Green, Maroon, Tan, Taupe',
      'Handle': 'Arched handles w/ heart patches',
      'Interior': 'Black fabric lining',
      'Logo': 'Deboss / Hot-stamp',
      'MOQ': '50 pcs (mixed colors available)'
    }
  },

  // ═══════════════════════════════════════
  //  STORAGE BASKETS — T-Shape Profile
  // ═══════════════════════════════════════
  {
    id: 'sb-001',
    name: 'Woven Storage Basket — T-Profile with Lid',
    category: 'accessories',
    images: [
      't-shaped bucket/DX30350 (2).jpg',
      't-shaped bucket/DX30350.jpg',
      't-shaped bucket/DX30350A.jpg',
      't-shaped bucket/DX30350B.jpg',
      't-shaped bucket/DX30350C.jpg',
      't-shaped bucket/DX30350D.jpg'
    ],
    desc: 'Elegant woven texture storage basket with T-profile rounded corners. Features leather trim on top and bottom edges with contrast white stitching. Includes matching lid. Ideal for living room, bathroom, or bedroom organization.',
    scenes: ['Living Room', 'Bathroom', 'Bedroom', 'Office', 'Retail Display'],
    materials: ['PU Leather (Woven)', 'Leather Trim', 'Contrast Stitching'],
    specs: {
      'Material': 'PU Leather, woven texture',
      'Size': '28 × 22 × 26 cm',
      'Colors': 'Gray/White, Tan/White, Brown/White',
      'Profile': 'T-profile with rounded corners',
      'Lid': 'Included (leather + woven)',
      'Logo': 'Deboss on lid or front',
      'MOQ': '50 pcs'
    }
  },
  {
    id: 'sb-002',
    name: 'Woven Storage Basket — Open Top',
    category: 'accessories',
    images: [
      't-shaped bucket/20150112_210359(1).jpg',
      't-shaped bucket/20150112_210457.jpg',
      't-shaped bucket/49930-7 brown.jpg',
      't-shaped bucket/9717R DX30530.jpg',
      't-shaped bucket/9717R.jpg',
      't-shaped bucket/47264-5 DX10994 10995 10996.jpg',
      't-shaped bucket/47265-5 DX10994.jpg'
    ],
    desc: 'Open-top woven leather storage basket with leather handles and buckle closure. Cross-hatch woven pattern with leather border and stitching. Great for magazines, towels, or daily essentials.',
    scenes: ['Living Room', 'Magazine Rack', 'Bathroom', 'Kitchen', 'Kids Room'],
    materials: ['PU Leather (Cross-hatch Woven)', 'Leather Handles', 'Metal Buckle'],
    specs: {
      'Material': 'PU Leather, cross-hatch woven',
      'Size': '32 × 25 × 28 cm',
      'Colors': 'Black, Brown, Tan, Gray',
      'Handle': 'Two leather handles w/ buckle',
      'Profile': 'T-profile, open top',
      'Logo': 'Deboss / Silk-print',
      'MOQ': '50 pcs'
    }
  }
];

const company = {
  name: 'Xiamen DoWin Industrial & Trade Co., Ltd.',
  established: 2008,
  address: {
    en: 'No. 128, Haicang District, Xiamen, Fujian Province, China 361026',
    zh: '中国福建省厦门市海沧区，邮编 361026'
  },
  phone: '+86 592 1234 5678',
  whatsapp: '+86 592 1234 5678',
  wechat: 'dowin-leather',
  email: 'sales@dowin-leather.com',
  website: 'www.dowin-leather.com'
};
