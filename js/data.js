// data.js — DoWin Real Products with Actual Images
const ASSET_BASE = 'assets';

const products = [
  // ═══════════════════════════════════════
  //  GIFT BASKETS / LEATHER TOTE BAGS
  // ═══════════════════════════════════════

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
  //  MINI FAVOR BAGS — DXD8801 Series
  // ═══════════════════════════════════════
  {
    id: 'dxd-001',
    name: 'DXD8801 Mini Favor Bag — 5-Colors Set',
    category: 'gift-baskets',
    images: [
      'basket/DXD8801_02.png',
      'basket/DXD8801_03.png',
      'basket/DXD8801_04.png',
      'basket/DXD8801_05.png',
      'basket/DXD8801_06.png',
      'basket/DXD8801_07.png',
      'basket/DXD8801_08.png',
      'basket/DXD8801_09.png',
      'basket/DXD8801_10.png',
      'basket/DXD8801_11.png',
      'basket/DXD8801_12.png',
      'basket/DXD8801_13.png'
    ],
    desc: 'Elegant miniature handbag-style favor bags with decorative ribbon. Set of 5 vibrant colors — burgundy, orange, blue, purple, and pink. Perfect for wedding favors, party gifts, and special events. Each bag features a structured silhouette with curved handle and satin ribbon bow.',
    scenes: ['Wedding Favor', 'Party Gift', 'Bridal Shower', 'Birthday Party', 'Corporate Event'],
    materials: ['PU Leather (Textured)', 'Satin Ribbon', 'Plate Display'],
    specs: {
      'Model': 'DXD8801',
      'Material': 'PU Leather, textured finish',
      'Size': '10 × 5 × 10.5 cm (Small)',
      'Colors': 'Burgundy, Orange, Blue, Purple, Pink (Set of 5)',
      'Handle': 'Integrated curved handle',
      'Decoration': 'Satin ribbon bow',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-002',
    name: 'DXD8802 Mini Favor Bag — Medium',
    category: 'gift-baskets',
    images: [
      'basket/DXD8801_03.png',
      'basket/DXD8801_03.png',
      'basket/DXD8801_04.png',
      'basket/DXD8801_05.png',
      'basket/DXD8801_06.png',
      'basket/DXD8801_07.png',
      'basket/DXD8801_08.png',
      'basket/DXD8801_09.png',
      'basket/DXD8801_10.png',
      'basket/DXD8801_11.png',
      'basket/DXD8801_12.png',
      'basket/DXD8801_13.png'
    ],
    desc: 'Medium-sized miniature handbag-style favor bag with decorative ribbon. Features structured silhouette, curved handle, and elegant satin ribbon bow. Ideal for wedding favors and party gifts.',
    scenes: ['Wedding Favor', 'Party Gift', 'Bridal Shower', 'Birthday Party'],
    materials: ['PU Leather (Textured)', 'Satin Ribbon'],
    specs: {
      'Model': 'DXD8802',
      'Material': 'PU Leather, textured finish',
      'Size': '12 × 13 × 5.5 cm (Medium)',
      'Colors': 'Multiple colors available',
      'Handle': 'Integrated curved handle',
      'Decoration': 'Satin ribbon bow',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-003',
    name: 'DXD8803 Mini Favor Bag — Large',
    category: 'gift-baskets',
    images: [
      'basket/DXD8801_05.png',
      'basket/DXD8801_03.png',
      'basket/DXD8801_04.png',
      'basket/DXD8801_05.png',
      'basket/DXD8801_06.png',
      'basket/DXD8801_07.png',
      'basket/DXD8801_08.png',
      'basket/DXD8801_09.png',
      'basket/DXD8801_10.png',
      'basket/DXD8801_11.png',
      'basket/DXD8801_12.png',
      'basket/DXD8801_13.png'
    ],
    desc: 'Large-sized miniature handbag-style favor bag with decorative ribbon. Features structured silhouette, curved handle, and elegant satin ribbon bow. Perfect for gift packaging and event favors.',
    scenes: ['Wedding Favor', 'Gift Packaging', 'Event Giveaway', 'Party Gift'],
    materials: ['PU Leather (Textured)', 'Satin Ribbon'],
    specs: {
      'Model': 'DXD8803',
      'Material': 'PU Leather, textured finish',
      'Size': '14 × 6 × 15 cm (Large)',
      'Colors': 'Multiple colors available',
      'Handle': 'Integrated curved handle',
      'Decoration': 'Satin ribbon bow',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-004',
    name: 'DXD8804 Mini Favor Bag — Extra Large',
    category: 'gift-baskets',
    images: [
      'basket/DXD8801_08.png',
      'basket/DXD8801_03.png',
      'basket/DXD8801_04.png',
      'basket/DXD8801_05.png',
      'basket/DXD8801_06.png',
      'basket/DXD8801_07.png',
      'basket/DXD8801_08.png',
      'basket/DXD8801_09.png',
      'basket/DXD8801_10.png',
      'basket/DXD8801_11.png',
      'basket/DXD8801_12.png',
      'basket/DXD8801_13.png'
    ],
    desc: 'Extra-large miniature handbag-style favor bag with decorative ribbon. Features structured silhouette, curved handle, and elegant satin ribbon bow. Great for larger gift sets and premium event favors.',
    scenes: ['Wedding Favor', 'Gift Packaging', 'VIP Event', 'Corporate Gift'],
    materials: ['PU Leather (Textured)', 'Satin Ribbon'],
    specs: {
      'Model': 'DXD8804',
      'Material': 'PU Leather, textured finish',
      'Size': '16 × 7 × 17 cm (Extra Large)',
      'Colors': 'Multiple colors available',
      'Handle': 'Integrated curved handle',
      'Decoration': 'Satin ribbon bow',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-005',
    name: 'DXD8805 Mini Favor Bag — Double Extra Large',
    category: 'gift-baskets',
    images: [
      'basket/DXD8801_11.png',
      'basket/DXD8801_03.png',
      'basket/DXD8801_04.png',
      'basket/DXD8801_05.png',
      'basket/DXD8801_06.png',
      'basket/DXD8801_07.png',
      'basket/DXD8801_08.png',
      'basket/DXD8801_09.png',
      'basket/DXD8801_10.png',
      'basket/DXD8801_11.png',
      'basket/DXD8801_12.png',
      'basket/DXD8801_13.png'
    ],
    desc: 'Double extra-large miniature handbag-style favor bag with decorative ribbon. Features structured silhouette, curved handle, and elegant satin ribbon bow. Our largest size in the series, perfect for premium gift packaging and luxury event favors.',
    scenes: ['Luxury Wedding', 'Premium Gift Packaging', 'VIP Event', 'Corporate Gifting'],
    materials: ['PU Leather (Textured)', 'Satin Ribbon'],
    specs: {
      'Model': 'DXD8805',
      'Material': 'PU Leather, textured finish',
      'Size': '20 × 8 × 21 cm (Double Extra Large)',
      'Colors': 'Multiple colors available',
      'Handle': 'Integrated curved handle',
      'Decoration': 'Satin ribbon bow',
      'MOQ': '3000 pcs'
    }
  },
  // (removed duplicate DXD9905 entries)

  // ═══════════════════════════════════════
  //  LEATHER PACKAGING — Wine & Spirits
  // ═══════════════════════════════════════
  {
    id: 'lp-001',
    name: 'DX9901 Single Bottle Wine Carrier',
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
      'MOQ': '3000 pcs'
    }
  },



  {
    id: 'lp-005',
    name: 'DX9902 Single Bottle Wine Carrier',
    category: 'wine-baskets',
    images: [
      'red-wine-packaging/DX9902/01.jpg',
      'red-wine-packaging/DX9902/02.jpg',
      'red-wine-packaging/DX9902/O1CN01tKzImV1U7JGZ17eNi_!!2203365632470.jpg',
      'red-wine-packaging/DX9902/O1CN01Zcm9wG1U7JN56CWZk_!!2203365632470.jpg',
      'red-wine-packaging/DX9902/O1CN012UWPsx1U7JGai5oSw_!!2203365632470.jpg',
      'red-wine-packaging/DX9902/O1CN01lx90Ts1U7J8TjRO3R_!!2203365632470.jpg.jpg'
    ],
    desc: 'Elegant leather wine carrier with bottle display cutout and gold button closure. Features a handle strap with snap. Holds one 750ml bottle securely. Ideal for gifting and retail packaging.',
    scenes: ['Wine Gift', 'Restaurant', 'Birthday', 'Wedding Favor', 'Corporate Gifting'],
    materials: ['PU Leather', 'Gold Hardware', 'Metal Snap'],
    specs: {
      'Model': 'DX9902',
      'Material': 'PU Leather',
      'Size': '9 × 10 × 41 cm',
      'Capacity': '1 × 750ml bottle',
      'Colors': 'Black, Brown',
      'Closure': 'Gold button + snap strap',
      'Logo': 'Deboss / Hot-stamp',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'lp-006',
    name: 'DXD9903 Double Bottle Window Wine Carrier',
    category: 'wine-baskets',
    images: [
      'red-wine-packaging/DXD9903/O1.jpg',
      'red-wine-packaging/DXD9903/O1CN01Ok9ZGh1U7JN5xWlY4.jpg',
      'red-wine-packaging/DXD9903/O1CN01ozeqhn1U7JN5c8KO7.jpg',
      'red-wine-packaging/DXD9903/O1CN01RvT04y1U7JGai5XqC.jpg',
      'red-wine-packaging/DXD9903/O1CN01xMfQ381U7JGaKo1Ai.jpg'
    ],
    desc: 'Double-bottle wine carrier with dual window display. Features crocodile-embossed leather exterior with neat stitching and a snap closure. Holds two 750ml bottles securely. Perfect for corporate gifting and retail packaging.',
    scenes: ['Wine Gift', 'Corporate Gift', 'Restaurant', 'Wedding', 'Holiday Gift Set'],
    materials: ['PU Leather (Croc Embossed)', 'Metal Snap', 'Contrast Stitching'],
    specs: {
      'Model': 'DXD9903',
      'Material': 'PU Leather, croc embossed',
      'Size': '16.5 × 9 × 41 cm',
      'Capacity': '2 × 750ml bottles',
      'Colors': 'Black',
      'Closure': 'Snap fastener',
      'Logo': 'Deboss / Hot-stamp',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'lp-007',
    name: 'DXD9904 Double Bottle Wine Carrier',
    category: 'wine-baskets',
    images: [
      'red-wine-packaging/DXD9904/01.jpg',
      'red-wine-packaging/DXD9904/02.jpg',
      'red-wine-packaging/DXD9904/03.jpg',
      'red-wine-packaging/DXD9904/04.jpg'
    ],
    desc: 'Double-bottle wine carrier. Features crocodile-embossed leather exterior with neat stitching and snap closure. Holds two 750ml bottles securely. Perfect for corporate gifting and retail packaging.',
    scenes: ['Wine Gift', 'Corporate Gift', 'Restaurant', 'Wedding', 'Holiday Gift Set'],
    materials: ['PU Leather (Croc Embossed)', 'Metal Snap', 'Contrast Stitching'],
    specs: {
      'Model': 'DXD9904',
      'Material': 'PU Leather, croc embossed',
      'Size': '22 × 10 × 36/46 cm',
      'Capacity': '2 × 750ml bottles',
      'Colors': 'Black',
      'Closure': 'Snap fastener',
      'Logo': 'Deboss / Hot-stamp',
      'MOQ': '3000 pcs'
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
      'MOQ': '3000 pcs'
    }
  },

  // ═══════════════════════════════════════
  //  MINI FAVOR BAGS — DXD9906 Series
  // ═══════════════════════════════════════
  {
    id: 'dxd-006',
    name: 'DXD9906 Mini Favor Bag — Checkered Pattern',
    category: 'gift-baskets',
    images: [
      'basket/DXD9906/DXD9906_01.png',
      'basket/DXD9906/DXD9906_02.png',
      'basket/DXD9906/DXD9906_03.png',
      'basket/DXD9906/DXD9906_04.png',
      'basket/DXD9906/DXD9906_05.png',
      'basket/DXD9906/DXD9906_06.png',
      'basket/DXD9906/DXD9906_07.png',
      'basket/DXD9906/DXD9906_08.png',
      'basket/DXD9906/DXD9906_09.png',
      'basket/DXD9906/DXD9906_10.png'
    ],
    desc: 'Elegant miniature handbag-style favor bags with distinctive checkered texture — alternating smooth and pebbled leather squares. Decorated with colorful printed scarves tied into bows. Gold metal studs on sides. Perfect for wedding favors, party gifts, and special events.',
    scenes: ['Wedding Favor', 'Party Gift', 'Bridal Shower', 'Birthday Party', 'Corporate Event'],
    materials: ['PU Leather (Checkered Texture)', 'Satin Printed Scarf', 'Gold Metal Studs'],
    specs: {
      'Model': 'DXD9906',
      'Material': 'PU Leather, checkered texture',
      'Colors': 'Dark Red, Medium Red (shown with scarves)',
      'Handle': 'Integrated curved handle',
      'Decoration': 'Printed satin scarf bow + gold studs',
      'MOQ': '3000 pcs'
    }
  },

  // ═══════════════════════════════════════
  //  MINI FAVOR BAGS — DXD9907 Series
  // ═══════════════════════════════════════
  {
    id: 'dxd-007',
    name: 'DXD9907 Mini Favor Bag — Heart Handle',
    category: 'gift-baskets',
    images: [
      'basket/DXD9907/DXD9907_01.png',
      'basket/DXD9907/DXD9907_02.png',
      'basket/DXD9907/DXD9907_03.png',
      'basket/DXD9907/DXD9907_04.png',
      'basket/DXD9907/DXD9907_05.png',
      'basket/DXD9907/DXD9907_06.png',
      'basket/DXD9907/DXD9907_07.png',
      'basket/DXD9907/DXD9907_08.png',
      'basket/DXD9907/DXD9907_09.png'
    ],
    desc: 'Charming miniature favor bag with signature heart-shaped handle cutout at the top. Soft feminine silhouette with a pale pink decorative bow and gold stud accents. Made from fine pebbled faux leather. Ideal for wedding favors, bridal showers, and romantic occasions.',
    scenes: ['Wedding Favor', 'Bridal Shower', 'Romantic Event', 'Birthday Party', 'Valentine\'s Day'],
    materials: ['PU Leather (Fine Pebbled)', 'Satin Ribbon Bow', 'Gold Metal Studs'],
    specs: {
      'Model': 'DXD9907',
      'Material': 'PU Leather, fine pebbled texture',
      'Colors': 'Lilac, Light Blue (shown with bows)',
      'Handle': 'Heart-shaped cutout handle',
      'Decoration': 'Pale pink satin bow + gold studs',
      'MOQ': '3000 pcs'
    }
  },

  // ═══════════════════════════════════════
  //  GIFT BASKETS — DXD9908 Series
  // ═══════════════════════════════════════
  {
    id: 'dxd-008',
    name: 'DXD9908 Gift Basket — Studded Square',
    category: 'gift-baskets',
    images: [
      'basket/DXD9908/DXD9908_01.png',
      'basket/DXD9908/DXD9908_02.png',
      'basket/DXD9908/DXD9908_03.png',
      'basket/DXD9908/DXD9908_04.png',
      'basket/DXD9908/DXD9908_05.png',
      'basket/DXD9908/DXD9908_06.png',
      'basket/DXD9908/DXD9908_07.png'
    ],
    desc: 'Stylish square-base gift basket with rounded corners and four decorative petal-like top extensions that form an integrated handle. Adorned with three gold-toned metal studs along each side seam. Tied with a colorful eclectic-patterned scarf bow. Bright cheerful presence — perfect as a gift container or decorative piece.',
    scenes: ['Gift Container', 'Home Decor', 'Retail Display', 'Easter Gift', 'Spring Event'],
    materials: ['PU Leather (Matte)', 'Silk Scarf (Eclectic Pattern)', 'Gold Metal Studs'],
    specs: {
      'Model': 'DXD9908',
      'Material': 'PU Leather, matte finish',
      'Colors': 'Yellow (shown), available in multiple colors',
      'Handle': 'Four petal extensions forming integrated handle',
      'Decoration': 'Colorful printed scarf bow + gold stud rows',
      'MOQ': '3000 pcs'
    }
  },

  // ═══════════════════════════════════════
  //  MINI FAVOR BAGS — DXD9909 Series
  // ═══════════════════════════════════════
  {
    id: 'dxd-009',
    name: 'DXD9909 Mini Favor Bag — Floral Scarf Collection',
    category: 'gift-baskets',
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
    desc: 'Elegant miniature handbag-style favor bags with decorative silk ribbon. Set of multiple rich colors — blue, orange, yellow, white, and red. Perfect for wedding favors, party gifts, bridal showers, and special events. Each bag features a structured silhouette with curved handle and satin ribbon bow.',
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

  // ═══════════════════════════════════════
  //  DESKTOP SUPPLIES — DXD9910 Series
  // ═══════════════════════════════════════
  {
    id: 'dxd-010',
    name: 'DXD9910便携带钥匙扣小巧皮革笔架',
    category: 'desktop-supplies',
    images: [
      'accessories/DXD9910/DXD9910_01.png',
      'accessories/DXD9910/DXD9910_02.png',
      'accessories/DXD9910/DXD9910_03.png',
      'accessories/DXD9910/DXD9910_04.png',
      'accessories/DXD9910/DXD9910_06.png',
      'accessories/DXD9910/DXD9910_07.png',
      'accessories/DXD9910/DXD9910_08.png',
      'accessories/DXD9910/DXD9910_09.png',
      'accessories/DXD9910/DXD9910_10.png',
      'accessories/DXD9910/DXD9910_11.png',
      'accessories/DXD9910/DXD9910_12.png',
      'accessories/DXD9910/DXD9910_13.png',
      'accessories/DXD9910/DXD9910_14.png',
      'accessories/DXD9910/DXD9910_15.png',
      'accessories/DXD9910/DXD9910_16.png',
      'accessories/DXD9910/DXD9910_17.png',
      'accessories/DXD9910/DXD9910_18.png',
      'accessories/DXD9910/DXD9910_19.png',
      'accessories/DXD9910/DXD9910_20.png',
      'accessories/DXD9910/DXD9910_21.png',
      'accessories/DXD9910/DXD9910_22.png'
    ],
    desc: '便携式钥匙扣设计，小巧轻便，可挂在包或钥匙上随身携带。既是钥匙扣也是小巧的皮革笔架，方便收纳钢笔、圆珠笔等书写工具。优质PU皮革，耐用且手感舒适。既是实用的办公文具，也是精致的皮具配饰，适合送礼或自用。',
    scenes: ['Office', 'Desk Organization', 'Home Office', 'Study Room', 'Gift'],
    materials: ['PU Leather', 'Metal Hardware'],
    specs: {
      'Model': 'DXD9910',
      'Material': 'PU Leather + Metal',
      'Feature': '钥匙扣 + 笔架两用设计',
      'MOQ': '3000 pcs'
    }
  },

  // ═══════════════════════════════════════
  //  DESKTOP SUPPLIES — DXD9911 Series
  // ═══════════════════════════════════════
  {
    id: 'dxd-011',
    name: 'DXD9911双层折叠皮革收纳盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9911/DXD9911_01.png',
      'desktop-supplies/DXD9911/DXD9911_02.png',
      'desktop-supplies/DXD9911/DXD9911_03.png',
      'desktop-supplies/DXD9911/DXD9911_04.png',
      'desktop-supplies/DXD9911/DXD9911_05.png',
      'desktop-supplies/DXD9911/DXD9911_06.png',
      'desktop-supplies/DXD9911/DXD9911_07.png',
      'desktop-supplies/DXD9911/DXD9911_08.png',
      'desktop-supplies/DXD9911/DXD9911_09.png',
      'desktop-supplies/DXD9911/DXD9911_10.png',
      'desktop-supplies/DXD9911/DXD9911_11.png',
      'desktop-supplies/DXD9911/DXD9911_12.png',
      'desktop-supplies/DXD9911/DXD9911_13.png'
    ],
    desc: 'Elegant desktop organizer with compact design. Perfect for office desk organization and accessories storage.',
    scenes: ['Office', 'Desk Organization', 'Home Office'],
    materials: ['PU Leather', 'Metal Accessories'],
    specs: {
      'Model': 'DXD9911',
      'Material': 'PU Leather',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-011',
    name: 'DXD9912皮革灯罩',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9912/DXD9912_01.png',
      'desktop-supplies/DXD9912/DXD9912_02.png',
      'desktop-supplies/DXD9912/DXD9912_03.png',
      'desktop-supplies/DXD9912/DXD9912_04.png',
      'desktop-supplies/DXD9912/DXD9912_05.png',
      'desktop-supplies/DXD9912/DXD9912_06.png',
      'desktop-supplies/DXD9912/DXD9912_07.png',
      'desktop-supplies/DXD9912/DXD9912_08.png'
    ],
    desc: 'Elegant leather lampshade with sophisticated design. Creates warm ambient lighting while adding a touch of luxury to any room. Perfect for living room, bedroom, or study.',
    scenes: ['Living Room', 'Bedroom', 'Study', 'Hotel', 'Restaurant Decor'],
    materials: ['PU Leather', 'Metal Frame'],
    specs: {
      'Model': 'DXD9912',
      'Material': 'PU Leather + Metal Frame',
      'Style': 'Modern Minimalist',
      'Light Source': 'E27 Bulb (not included)',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-012',
    name: 'DXD9913皮革彩旗三角旗装饰',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9913/DXD9913_01.png',
      'desktop-supplies/DXD9913/DXD9913_02.png',
      'desktop-supplies/DXD9913/DXD9913_03.png',
      'desktop-supplies/DXD9913/DXD9913_04.png',
      'desktop-supplies/DXD9913/DXD9913_05.png',
      'desktop-supplies/DXD9913/DXD9913_06.png',
      'desktop-supplies/DXD9913/DXD9913_07.png',
      'desktop-supplies/DXD9913/DXD9913_08.png',
      'desktop-supplies/DXD9913/DXD9913_09.png',
      'desktop-supplies/DXD9913/DXD9913_10.png',
      'desktop-supplies/DXD9913/DXD9913_11.png',
      'desktop-supplies/DXD9913/DXD9913_12.png',
      'desktop-supplies/DXD9913/DXD9913_13.png',
      'desktop-supplies/DXD9913/DXD9913_14.png',
      'desktop-supplies/DXD9913/DXD9913_15.png',
      'desktop-supplies/DXD9913/DXD9913_16.png',
      'desktop-supplies/DXD9913/DXD9913_17.png'
    ],
    desc: 'Decorative leather bunting with triangle flags strung on cord. Perfect for party decoration, wedding ambiance, or festive events. Adds an elegant touch to any celebration.',
    scenes: ['Party Decoration', 'Wedding', 'Birthday Party', 'Festival', 'Restaurant Decor'],
    materials: ['PU Leather', 'Cotton Cord'],
    specs: {
      'Model': 'DXD9913',
      'Material': 'PU Leather',
      'Style': 'Bunting / Banner',
      'MOQ': '50 sets'
    }
  },
  {
    id: 'dxd-013',
    name: 'DXD9914简约皮革抽纸盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9914/DXD9914_01.png',
      'desktop-supplies/DXD9914/DXD9914_02.png',
      'desktop-supplies/DXD9914/DXD9914_03.png',
      'desktop-supplies/DXD9914/DXD9914_04.png',
      'desktop-supplies/DXD9914/DXD9914_05.png',
      'desktop-supplies/DXD9914/DXD9914_06.png',
      'desktop-supplies/DXD9914/DXD9914_07.png',
      'desktop-supplies/DXD9914/DXD9914_08.png',
      'desktop-supplies/DXD9914/DXD9914_09.png'
    ],
    desc: 'Minimalist leather tissue box cover with elegant design. Complements any living room, bathroom, or office space. Keeps tissues clean and adds a touch of sophistication to your decor.',
    scenes: ['Living Room', 'Bathroom', 'Office', 'Bedroom', 'Hotel'],
    materials: ['PU Leather', 'Metal Clasp'],
    specs: {
      'Model': 'DXD9914',
      'Material': 'PU Leather',
      'Style': 'Minimalist Modern',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-014',
    name: 'DXD9915皮革收纳盒桌面收纳托盘',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9915/DXD9915_01.png',
      'desktop-supplies/DXD9915/DXD9915_02.png',
      'desktop-supplies/DXD9915/DXD9915_03.png',
      'desktop-supplies/DXD9915/DXD9915_04.png',
      'desktop-supplies/DXD9915/DXD9915_05.png',
      'desktop-supplies/DXD9915/DXD9915_06.png',
      'desktop-supplies/DXD9915/DXD9915_07.png'
    ],
    desc: 'Leather desktop organizer and storage tray with multiple compartments for pens, cards, phone, and daily essentials. Keeps your desk tidy and professional. Perfect for office and home office use.',
    scenes: ['Office', 'Desk Organization', 'Home Office', 'Study Room'],
    materials: ['PU Leather', 'Non-slip Base'],
    specs: {
      'Model': 'DXD9915',
      'Material': 'PU Leather',
      'Compartments': 'Multiple slots for organization',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-015',
    name: 'DXD9916双面皮革鼠标垫桌垫键盘垫',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9916/DXD9916_01.png',
      'desktop-supplies/DXD9916/DXD9916_02.png',
      'desktop-supplies/DXD9916/DXD9916_03.png',
      'desktop-supplies/DXD9916/DXD9916_04.png',
      'desktop-supplies/DXD9916/DXD9916_05.png',
      'desktop-supplies/DXD9916/DXD9916_06.png',
      'desktop-supplies/DXD9916/DXD9916_07.png',
      'desktop-supplies/DXD9916/DXD9916_08.png',
      'desktop-supplies/DXD9916/DXD9916_09.png',
      'desktop-supplies/DXD9916/DXD9916_10.png',
      'desktop-supplies/DXD9916/DXD9916_11.png',
      'desktop-supplies/DXD9916/DXD9916_12.png',
      'desktop-supplies/DXD9916/DXD9916_13.png'
    ],
    desc: 'Double-sided leather mouse pad, desk mat, and keyboard pad. One side smooth for mouse, other side textured for keyboard. Protects your desk while providing a luxurious writing and working surface.',
    scenes: ['Office', 'Home Office', 'Gaming Desk', 'Study Room'],
    materials: ['PU Leather (Double-sided)', 'Non-slip Base'],
    specs: {
      'Model': 'DXD9916',
      'Material': 'PU Leather (Double-sided)',
      'Feature': 'Smooth side for mouse, textured side for keyboard',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-016',
    name: 'DXD9917骑行挂脖耳机收纳包',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9917/DXD9917_01.png',
      'desktop-supplies/DXD9917/DXD9917_02.png',
      'desktop-supplies/DXD9917/DXD9917_03.png',
      'desktop-supplies/DXD9917/DXD9917_04.png',
      'desktop-supplies/DXD9917/DXD9917_05.png',
      'desktop-supplies/DXD9917/DXD9917_06.png',
      'desktop-supplies/DXD9917/DXD9917_07.png',
      'desktop-supplies/DXD9917/DXD9917_08.png',
      'desktop-supplies/DXD9917/DXD9917_09.png',
      'desktop-supplies/DXD9917/DXD9917_10.png',
      'desktop-supplies/DXD9917/DXD9917_11.png',
      'desktop-supplies/DXD9917/DXD9917_12.png',
      'desktop-supplies/DXD9917/DXD9917_13.png',
      'desktop-supplies/DXD9917/DXD9917_14.png',
      'desktop-supplies/DXD9917/DXD9917_15.png'
    ],
    desc: 'Leather neckband earphone storage case designed for cyclists. Features adjustable neck strap and compact compartment to safely store and protect your earphones during rides. Lightweight and portable.',
    scenes: ['Cycling', 'Outdoor Sports', 'Travel', 'Daily Commute'],
    materials: ['PU Leather', 'Adjustable Strap'],
    specs: {
      'Model': 'DXD9917',
      'Material': 'PU Leather',
      'Feature': 'Adjustable neck strap, compact earphone compartment',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-017',
    name: 'DXD9918皮革手柄咖啡杯套水杯保护套',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9918/DXD9918_01.png',
      'desktop-supplies/DXD9918/DXD9918_02.png',
      'desktop-supplies/DXD9918/DXD9918_03.png',
      'desktop-supplies/DXD9918/DXD9918_04.png',
      'desktop-supplies/DXD9918/DXD9918_05.png',
      'desktop-supplies/DXD9918/DXD9918_06.png',
      'desktop-supplies/DXD9918/DXD9918_07.png',
      'desktop-supplies/DXD9918/DXD9918_08.png',
      'desktop-supplies/DXD9918/DXD9918_09.png',
      'desktop-supplies/DXD9918/DXD9918_10.png',
      'desktop-supplies/DXD9918/DXD9918_11.png',
      'desktop-supplies/DXD9918/DXD9918_12.png',
      'desktop-supplies/DXD9918/DXD9918_13.png',
      'desktop-supplies/DXD9918/DXD9918_14.png'
    ],
    desc: 'Leather handle cover for coffee cups and water bottles. Protects hands from hot beverages while adding a stylish look. Compatible with most standard-sized cups and bottles. Anti-slip grip design.',
    scenes: ['Office', 'Home', 'Outdoors', 'Travel', 'Café'],
    materials: ['PU Leather', 'Heat-resistant Liner'],
    specs: {
      'Model': 'DXD9918',
      'Material': 'PU Leather',
      'Feature': 'Heat-resistant, anti-slip grip',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-018',
    name: 'DXD9919皮革文具收纳袋',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9919/DXD9919_01.png',
      'desktop-supplies/DXD9919/DXD9919_02.png',
      'desktop-supplies/DXD9919/DXD9919_03.png',
      'desktop-supplies/DXD9919/DXD9919_04.png',
      'desktop-supplies/DXD9919/DXD9919_05.png',
      'desktop-supplies/DXD9919/DXD9919_06.png',
      'desktop-supplies/DXD9919/DXD9919_07.png',
      'desktop-supplies/DXD9919/DXD9919_08.png',
      'desktop-supplies/DXD9919/DXD9919_09.png',
      'desktop-supplies/DXD9919/DXD9919_10.png',
      'desktop-supplies/DXD9919/DXD9919_11.png',
      'desktop-supplies/DXD9919/DXD9919_12.png',
      'desktop-supplies/DXD9919/DXD9919_13.png',
      'desktop-supplies/DXD9919/DXD9919_14.png'
    ],
    desc: 'Leather stationery organizer bag for pens, pencils, erasers, and small office supplies. Zipper closure keeps items secure. Slim profile fits easily in bags and pencil cases. Perfect for students and professionals.',
    scenes: ['Office', 'School', 'Study', 'Travel'],
    materials: ['PU Leather', 'Metal Zipper'],
    specs: {
      'Model': 'DXD9919',
      'Material': 'PU Leather',
      'Feature': 'Zipper closure, slim profile',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-019',
    name: 'DXD9920素面长方形皮革餐垫',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9920/DXD9920_01.png',
      'desktop-supplies/DXD9920/DXD9920_02.png',
      'desktop-supplies/DXD9920/DXD9920_03.png',
      'desktop-supplies/DXD9920/DXD9920_04.png',
      'desktop-supplies/DXD9920/DXD9920_05.png',
      'desktop-supplies/DXD9920/DXD9920_06.png',
      'desktop-supplies/DXD9920/DXD9920_07.png',
      'desktop-supplies/DXD9920/DXD9920_08.png',
      'desktop-supplies/DXD9920/DXD9920_09.png'
    ],
    desc: 'Smooth rectangular leather placemat for dining table. Protects your table surface from heat, spills, and scratches. Simple elegant design suitable for home, restaurant, or hotel use. Easy to clean and maintain.',
    scenes: ['Dining Table', 'Restaurant', 'Hotel', 'Home Kitchen'],
    materials: ['PU Leather', 'Water-resistant Surface'],
    specs: {
      'Model': 'DXD9920',
      'Material': 'PU Leather',
      'Style': 'Smooth, Plain Rectangle',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-020',
    name: 'DXD9921皮革帽子夹挂钩',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9921/DXD9921_01.png',
      'desktop-supplies/DXD9921/DXD9921_02.png',
      'desktop-supplies/DXD9921/DXD9921_03.png'
    ],
    desc: 'Leather hat clip and hook for convenient storage of caps and hats. Clips securely onto bags, belts, or hooks. Keeps your hats in shape and easily accessible. Ideal for travel and daily use.',
    scenes: ['Travel', 'Outdoor', 'Wardrobe', 'Bag Accessory'],
    materials: ['PU Leather', 'Metal Clip'],
    specs: {
      'Model': 'DXD9921',
      'Material': 'PU Leather + Metal Clip',
      'Feature': 'Secure clip attachment',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-021',
    name: 'DXD9922时尚简约皮革杯垫',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9922/DXD9922_01.png',
      'desktop-supplies/DXD9922/DXD9922_02.png',
      'desktop-supplies/DXD9922/DXD9922_03.png',
      'desktop-supplies/DXD9922/DXD9922_04.png'
    ],
    desc: 'Fashionable minimalist leather cup coaster. Protects surfaces from heat and water marks. Sleek design complements any table setting. Set of multiple pieces available. Perfect for home, office, or restaurant.',
    scenes: ['Dining Table', 'Office Desk', 'Restaurant', 'Hotel'],
    materials: ['PU Leather', 'Water-resistant Base'],
    specs: {
      'Model': 'DXD9922',
      'Material': 'PU Leather',
      'Style': 'Minimalist Modern',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-022',
    name: 'DXD9923卡通猫咪款玄关钥匙托盘',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9923/DXD9923_01.png',
      'desktop-supplies/DXD9923/DXD9923_02.png',
      'desktop-supplies/DXD9923/DXD9923_03.png',
      'desktop-supplies/DXD9923/DXD9923_04.png',
      'desktop-supplies/DXD9923/DXD9923_05.png',
      'desktop-supplies/DXD9923/DXD9923_06.png',
      'desktop-supplies/DXD9923/DXD9923_07.png',
      'desktop-supplies/DXD9923/DXD9923_08.png'
    ],
    desc: 'Cute cartoon cat design leather key tray for entryway. Keeps keys, coins, and small items organized at the door. Adds a touch of personality to your hallway or entrance. Makes finding keys easy and fun.',
    scenes: ['Entryway', 'Hallway', 'Foyer', 'Home Decoration'],
    materials: ['PU Leather', 'Non-slip Base'],
    specs: {
      'Model': 'DXD9923',
      'Material': 'PU Leather',
      'Style': 'Cartoon Cat Design',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-023',
    name: 'DXD9924皮革爱心餐巾环',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9924/DXD9924_01.png',
      'desktop-supplies/DXD9924/DXD9924_02.png',
      'desktop-supplies/DXD9924/DXD9924_03.png',
      'desktop-supplies/DXD9924/DXD9924_04.png',
      'desktop-supplies/DXD9924/DXD9924_05.png',
      'desktop-supplies/DXD9924/DXD9924_06.png',
      'desktop-supplies/DXD9924/DXD9924_07.png',
      'desktop-supplies/DXD9924/DXD9924_08.png'
    ],
    desc: 'Leather heart-shaped napkin ring for elegant table settings. Adds a romantic touch to dining occasions. Perfect for weddings, anniversaries, Valentine\'s Day, or everyday table decoration. Holds napkins securely in place.',
    scenes: ['Dining Table', 'Wedding', 'Restaurant', 'Party'],
    materials: ['PU Leather', 'Heart-shaped Design'],
    specs: {
      'Model': 'DXD9924',
      'Material': 'PU Leather',
      'Style': 'Heart-shaped',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-024',
    name: 'DXD9925原色软木皮革杯套皮纹冰咖啡杯套',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9925/DXD9925_01.png',
      'desktop-supplies/DXD9925/DXD9925_02.png',
      'desktop-supplies/DXD9925/DXD9925_03.png',
      'desktop-supplies/DXD9925/DXD9925_04.png',
      'desktop-supplies/DXD9925/DXD9925_05.png',
      'desktop-supplies/DXD9925/DXD9925_06.png'
    ],
    desc: 'Natural cork and leather texture杯套 for iced coffee and cold beverages. Combines cork and leather aesthetics for a unique rustic look. Keeps drinks cool while providing a comfortable grip. Eco-friendly and stylish.',
    scenes: ['Café', 'Office', 'Outdoor', 'Travel'],
    materials: ['Cork', 'PU Leather'],
    specs: {
      'Model': 'DXD9925',
      'Material': 'Cork + PU Leather',
      'Style': 'Natural Cork Texture',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-025',
    name: 'DXD9926收纳笔袋皮革办公笔套',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9926/DXD9926_01.png',
      'desktop-supplies/DXD9926/DXD9926_02.png',
      'desktop-supplies/DXD9926/DXD9926_03.png',
      'desktop-supplies/DXD9926/DXD9926_04.png',
      'desktop-supplies/DXD9926/DXD9926_05.png',
      'desktop-supplies/DXD9926/DXD9926_06.png',
      'desktop-supplies/DXD9926/DXD9926_07.png',
      'desktop-supplies/DXD9926/DXD9926_08.png'
    ],
    desc: 'Leather pen case and office pen holder for organized storage of pens, pencils, and small office supplies. Zipper design keeps items secure. Slim and portable, perfect for professionals on the go.',
    scenes: ['Office', 'School', 'Business Travel', 'Daily Use'],
    materials: ['PU Leather', 'Metal Zipper'],
    specs: {
      'Model': 'DXD9926',
      'Material': 'PU Leather',
      'Feature': 'Zipper closure, portable size',
      'MOQ': '3000 pcs'
    }
  },

  // ═══════════════════════════════════════
  //  OUTDOOR & SPORTS
  // ═══════════════════════════════════════

  {
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
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-029',
    name: 'DXD9929编织皮绳钥匙扣',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9929/01.png',
      'desktop-supplies/DXD9929/02.png',
      'desktop-supplies/DXD9929/03.png',
      'desktop-supplies/DXD9929/04.png',
      'desktop-supplies/DXD9929/05.png'
    ],
    desc: '编织皮绳钥匙扣，简约时尚风格，优质PU皮革绳编织而成，耐用且手感舒适。适用于钥匙、钥匙圈或小物件的悬挂收纳。',
    scenes: ['Daily Use', 'Gifts', 'Keychain', 'Retail'],
    materials: ['PU Leather', 'Metal Hardware'],
    specs: {
      'Model': 'DXD9929',
      'Material': 'PU Leather + Metal',
      'Size': '12 x 2 x 1 cm',
      'Feature': 'Braided leather rope, lightweight',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-030',
    name: 'DXD9930皮革三角形储物盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9930/01.png',
      'desktop-supplies/DXD9930/02.png',
      'desktop-supplies/DXD9930/03.png',
      'desktop-supplies/DXD9930/04.png',
      'desktop-supplies/DXD9930/05.png',
      'desktop-supplies/DXD9930/06.png',
      'desktop-supplies/DXD9930/07.png',
      'desktop-supplies/DXD9930/08.png'
    ],
    desc: '皮革三角形储物盒，设计独特，造型时尚。可用于桌面收纳、钥匙、饰品、文具等小物件的整理收纳。优质PU皮革，耐用且美观。',
    scenes: ['Office', 'Desk Organization', 'Home', 'Study Room', 'Bedroom'],
    materials: ['PU Leather', 'Metal Hardware'],
    specs: {
      'Model': 'DXD9930',
      'Material': 'PU Leather',
      'Style': 'Triangular Shape',
      'Feature': 'Unique design, desktop organizer',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-031',
    name: 'DXD9931花朵形状皮革折叠收纳盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9931/01.png',
      'desktop-supplies/DXD9931/02.png',
      'desktop-supplies/DXD9931/03.png',
      'desktop-supplies/DXD9931/04.png',
      'desktop-supplies/DXD9931/05.png',
      'desktop-supplies/DXD9931/06.png',
      'desktop-supplies/DXD9931/07.png'
    ],
    desc: '花朵形状皮革折叠收纳盒，设计新颖时尚，可折叠收纳节省空间。适用于桌面收纳、化妆品、文具、小饰品等的整理。优质PU皮革，耐用美观。',
    scenes: ['Office', 'Desk Organization', 'Bedroom', 'Bathroom', 'Gift'],
    materials: ['PU Leather', 'Metal Hardware'],
    specs: {
      'Model': 'DXD9931',
      'Material': 'PU Leather',
      'Style': 'Flower Shape, Foldable',
      'Feature': 'Collapsible, space-saving design',
      'MOQ': '3000 pcs'
    }
  },
  {
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
      'Material': 'PU 皮革',
      'Style': 'Cylindrical organizer',
      'Feature': 'Pen holder and cosmetics brush organizer',
      'MOQ': '3000 pcs'
    }
  },
  {
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
    id: 'dxd-036',
    name: 'DXD9936皮革折叠桌面收纳盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9936/01.png',
      'desktop-supplies/DXD9936/02.png',
      'desktop-supplies/DXD9936/03.png',
      'desktop-supplies/DXD9936/04.png',
      'desktop-supplies/DXD9936/05.png',
      'desktop-supplies/DXD9936/06.png'
    ],
    desc: '皮革折叠桌面收纳盒，简约时尚，可折叠设计便于收纳和携带。适合办公桌面、梳妆台、卧室使用，分类存放文具、饰品、化妆品等小物件。',
    scenes: ['Office', 'Bedroom', 'Vanity', 'Desk Organization', 'Home Decoration'],
    materials: ['PU Leather'],
    specs: {
      'Model': 'DXD9936',
      'Material': 'PU Leather',
      'Style': 'Foldable Desktop Organizer',
      'Feature': 'Foldable, space-saving',
      'MOQ': '3000 pcs'
    }
  },
  {
    id: 'dxd-037',
    name: 'DXD9937皮革名片盒',
    category: 'desktop-supplies',
    images: [
      'desktop-supplies/DXD9937/01.png',
      'desktop-supplies/DXD9937/02.png',
      'desktop-supplies/DXD9937/03.png'
    ],
    desc: '皮革名片盒，简约商务风格，优质PU皮革材质，小巧便携。适合商务人士收纳和携带名片，保护名片不受折损。',
    scenes: ['Business', 'Office', 'Gift', 'Professional'],
    materials: ['PU Leather'],
    specs: {
      'Model': 'DXD9937',
      'Material': 'PU Leather',
      'Style': 'Business Card Holder',
      'Feature': 'Compact, portable',
      'MOQ': '3000 pcs'
    }
  },
  {
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
      'MOQ': '3000 pcs'
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
  email: 'jenny-fisc@163.com',
  website: 'www.dowin-leather.com'
};
