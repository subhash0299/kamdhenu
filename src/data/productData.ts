export interface Color {
  name: string;
  code: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  baseImage: string;
  description: string;
  fullDescription: string;
  rating: number;
  reviews: number;
  dimensions: string;
  weight: string;
  material: string;
  warranty: string;
  price: string;
  colors: Color[];
  features: string[];
}

export const productData: Product[] = [
  // Steel Pillers (1-20)
  {
    id: 1,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/BigAcrylic/BigAcrylic-1.jpeg',
    description: 'Premium steel construction with elegant finish for modern interiors',
    fullDescription: 'Our Classic Steel Piller combines strength with sophistication. Crafted from high-grade steel with precision engineering, this piller offers exceptional durability while maintaining an elegant aesthetic. Perfect for contemporary homes and commercial spaces.',
    rating: 4.8,
    reviews: 124,
    dimensions: '120cm x 8cm x 8cm',
    weight: '12kg',
    material: 'High-grade steel with powder coating',
    warranty: '5 years',
    price: '₹3,500',
    colors: [
    ],
    features: [
      'Corrosion-resistant coating',
      'Easy installation system',
      'Weather-resistant finish',
      'Precision-engineered design',
      'Low maintenance required'
    ]
  },
  {
    id: 2,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/BigAcrylic/BigAcrylic-2.jpeg',
    description: 'Luxury steel piller with ornate design for premium applications',
    fullDescription: 'The Royal Steel Piller features intricate detailing and premium finishes that elevate any space. Designed for luxury homes and high-end commercial projects, this piller combines traditional craftsmanship with modern engineering.',
    rating: 4.9,
    reviews: 89,
    dimensions: '150cm x 10cm x 10cm',
    weight: '18kg',
    material: 'Premium steel with decorative coating',
    warranty: '5 years',
    price: '₹5,200',
    colors: [
    ],
    features: [
      'Ornate decorative elements',
      'Premium finish options',
      'Heavy-duty construction',
      'Customizable height',
      'Professional installation'
    ]
  },
  {
    id: 3,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/BigAcrylic/BigAcrylic-3.jpeg',
    description: 'Sleek contemporary design perfect for minimalist interiors',
    fullDescription: 'Our Modern Steel Piller embodies contemporary design principles with clean lines and minimalist aesthetics. Ideal for modern homes, offices, and commercial spaces that value simplicity and functionality.',
    rating: 4.7,
    reviews: 156,
    dimensions: '100cm x 6cm x 6cm',
    weight: '8kg',
    material: 'Brushed steel with matte finish',
    warranty: '5 years',
    price: '₹2,800',
    colors: [
    ],
    features: [
      'Minimalist design',
      'Lightweight yet strong',
      'Easy maintenance',
      'Versatile application',
      'Quick installation'
    ]
  },
  {
    id: 4,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/BigAcrylic/BigAcrylic-4.jpeg',
    description: 'Heavy-duty steel piller for industrial and commercial use',
    fullDescription: 'Built for demanding environments, the Industrial Steel Piller offers maximum strength and durability. Perfect for warehouses, factories, and commercial buildings requiring robust structural support.',
    rating: 4.8,
    reviews: 203,
    dimensions: '200cm x 12cm x 12cm',
    weight: '25kg',
    material: 'Heavy-gauge steel with industrial coating',
    warranty: '7 years',
    price: '₹6,800',
    colors: [
    ],
    features: [
      'Extra heavy-duty construction',
      'Industrial-grade coating',
      'High load capacity',
      'Corrosion resistant',
      'Extended warranty'
    ]
  },
  {
    id: 5,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/BigAcrylic/BigAcrylic-5.jpeg',
    description: 'Artistic steel piller with decorative patterns and finishes',
    fullDescription: 'The Decorative Steel Piller combines functionality with artistic flair. Featuring beautiful patterns and premium finishes, this piller serves as both structural support and decorative element.',
    rating: 4.6,
    reviews: 78,
    dimensions: '130cm x 9cm x 9cm',
    weight: '14kg',
    material: 'Steel with decorative pattern coating',
    warranty: '5 years',
    price: '₹4,200',
    colors: [
    ],
    features: [
      'Artistic pattern design',
      'Multiple finish options',
      'Handcrafted details',
      'Unique aesthetic appeal',
      'Custom patterns available'
    ]
  },
  {
    id: 6,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/BigAcrylic/BigAcrylic-6.jpeg',
    description: 'Space-saving slim profile steel piller for compact areas',
    fullDescription: 'Perfect for spaces where every inch matters, the Slim Steel Piller provides excellent support while maintaining a minimal footprint. Ideal for apartments, small offices, and tight spaces.',
    rating: 4.5,
    reviews: 92,
    dimensions: '110cm x 5cm x 5cm',
    weight: '6kg',
    material: 'High-strength steel with compact design',
    warranty: '5 years',
    price: '₹2,200',
    colors: [
    ],
    features: [
      'Space-efficient design',
      'High strength-to-weight ratio',
      'Compact installation',
      'Versatile placement',
      'Cost-effective solution'
    ]
  },
  {
    id: 7,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/BigAcrylic/BigAcrylic-7.jpeg',
    description: 'Maximum strength steel piller for heavy load applications',
    fullDescription: 'Engineered for extreme loads and demanding conditions, the Heavy Duty Steel Piller provides unmatched strength and reliability. Perfect for large commercial projects and industrial applications.',
    rating: 4.9,
    reviews: 145,
    dimensions: '180cm x 15cm x 15cm',
    weight: '32kg',
    material: 'Reinforced steel with heavy-duty coating',
    warranty: '10 years',
    price: '₹8,500',
    colors: [
    ],
    features: [
      'Maximum load capacity',
      'Reinforced construction',
      'Extended warranty',
      'Industrial-grade materials',
      'Professional installation required'
    ]
  },
  {
    id: 8,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/BigAcrylic/BigAcrylic-8.jpeg',
    description: 'Sophisticated steel piller with refined finishing touches',
    fullDescription: 'The Elegant Steel Piller brings sophistication to any space with its refined design and premium finishes. Perfect for upscale residential and commercial environments.',
    rating: 4.7,
    reviews: 67,
    dimensions: '140cm x 8cm x 8cm',
    weight: '13kg',
    material: 'Premium steel with elegant finish',
    warranty: '5 years',
    price: '₹4,800',
    colors: [
    ],
    features: [
      'Sophisticated design',
      'Premium finish quality',
      'Elegant proportions',
      'Luxury appearance',
      'High-end materials'
    ]
  },
  {
    id: 9,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/BigAcrylic/BigAcrylic-9.jpeg',
    description: 'Steel piller with unique textured surface for visual interest',
    fullDescription: 'Featuring a distinctive textured surface, this steel piller adds visual depth and tactile interest to any space. The unique finish provides both aesthetic appeal and practical benefits.',
    rating: 4.6,
    reviews: 83,
    dimensions: '125cm x 9cm x 9cm',
    weight: '15kg',
    material: 'Textured steel with protective coating',
    warranty: '5 years',
    price: '₹3,900',
    colors: [
    ],
    features: [
      'Unique textured surface',
      'Enhanced grip properties',
      'Visual depth and interest',
      'Durable finish',
      'Easy to clean'
    ]
  },
  {
    id: 10,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/BigAcrylic/BigAcrylic-10.jpeg',
    description: 'Top-tier steel piller with luxury finishes and superior quality',
    fullDescription: 'Our Premium Steel Piller represents the pinnacle of quality and craftsmanship. Using the finest materials and advanced manufacturing techniques, this piller delivers exceptional performance and luxury aesthetics.',
    rating: 4.9,
    reviews: 156,
    dimensions: '160cm x 10cm x 10cm',
    weight: '20kg',
    material: 'Premium grade steel with luxury coating',
    warranty: '7 years',
    price: '₹7,200',
    colors: [
    ],
    features: [
      'Premium grade materials',
      'Luxury finish options',
      'Superior craftsmanship',
      'Extended warranty',
      'Exclusive design'
    ]
  },
  {
    id: 11,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/BlackWood/BlackWood-1.jpeg',
    description: 'Small-scale steel piller perfect for residential applications',
    fullDescription: 'Designed specifically for residential use, the Compact Steel Piller offers reliable support in a size that fits perfectly in home environments. Ideal for staircases, balconies, and interior partitions.',
    rating: 4.4,
    reviews: 94,
    dimensions: '90cm x 6cm x 6cm',
    weight: '7kg',
    material: 'Residential-grade steel with home-friendly finish',
    warranty: '5 years',
    price: '₹1,800',
    colors: [
    ],
    features: [
      'Residential-friendly size',
      'Easy DIY installation',
      'Home-appropriate finishes',
      'Affordable pricing',
      'Versatile applications'
    ]
  },
  {
    id: 12,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/BlackWood/BlackWood-2.jpeg',
    description: 'Architecturally designed steel piller for statement installations',
    fullDescription: 'Created in collaboration with architects, this steel piller serves as both structural element and design feature. Perfect for creating architectural statements in modern buildings.',
    rating: 4.8,
    reviews: 72,
    dimensions: '170cm x 11cm x 11cm',
    weight: '22kg',
    material: 'Architectural steel with designer finish',
    warranty: '6 years',
    price: '₹6,500',
    colors: [
    ],
    features: [
      'Architectural design',
      'Statement piece quality',
      'Designer collaboration',
      'Premium aesthetics',
      'Professional installation'
    ]
  },
  {
    id: 13,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/BlackWood/BlackWood-3.jpeg',
    description: 'Outdoor-rated steel piller with superior weather protection',
    fullDescription: 'Specially treated for outdoor use, this steel piller withstands harsh weather conditions while maintaining its appearance and structural integrity. Perfect for patios, gardens, and exterior applications.',
    rating: 4.7,
    reviews: 118,
    dimensions: '135cm x 8cm x 8cm',
    weight: '16kg',
    material: 'Weather-resistant steel with protective coating',
    warranty: '8 years',
    price: '₹4,500',
    colors: [
    ],
    features: [
      'Weather-resistant coating',
      'UV protection',
      'Corrosion resistance',
      'Outdoor durability',
      'Extended warranty'
    ]
  },
  {
    id: 14,
    name: 'Wooden Steel Piller',
    category: 'Wooden Pillers',
    baseImage: '/BlackWood/BlackWood-4.jpeg',
    description: 'Fully customizable steel piller made to your specifications',
    fullDescription: 'Our Custom Steel Piller service allows you to create the perfect piller for your specific needs. Choose dimensions, finishes, and features to match your exact requirements.',
    rating: 5.0,
    reviews: 45,
    dimensions: 'Custom dimensions available',
    weight: 'Varies by specification',
    material: 'Steel with custom finish options',
    warranty: '5 years',
    price: 'Quote on Request',
    colors: [
    ],
    features: [
      'Fully customizable',
      'Made to order',
      'Unlimited color options',
      'Custom dimensions',
      'Personalized service'
    ]
  },
  {
    id: 15,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/BlackWood/BlackWood-5.jpeg',
    description: 'Extra-strong steel piller with reinforced construction',
    fullDescription: 'Built with additional reinforcement for maximum strength, this steel piller is perfect for applications requiring exceptional load-bearing capacity and structural integrity.',
    rating: 4.8,
    reviews: 167,
    dimensions: '155cm x 12cm x 12cm',
    weight: '28kg',
    material: 'Reinforced steel with strength coating',
    warranty: '8 years',
    price: '₹7,800',
    colors: [
    ],
    features: [
      'Reinforced construction',
      'Maximum load capacity',
      'Enhanced durability',
      'Professional grade',
      'Extended warranty'
    ]
  },
  {
    id: 16,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/BlackWood/BlackWood-6.jpeg',
    description: 'Mirror-finish steel piller with high-gloss polished surface',
    fullDescription: 'Featuring a stunning mirror-like finish, the Polished Steel Piller adds elegance and light reflection to any space. Perfect for luxury interiors and high-end commercial applications.',
    rating: 4.6,
    reviews: 89,
    dimensions: '145cm x 9cm x 9cm',
    weight: '17kg',
    material: 'Polished steel with mirror finish',
    warranty: '5 years',
    price: '₹5,500',
    colors: [
    ],
    features: [
      'Mirror-like finish',
      'Light reflection properties',
      'Luxury appearance',
      'Easy to clean',
      'Fingerprint resistant'
    ]
  },
  {
    id: 17,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/BlackWood/BlackWood-7.jpeg',
    description: 'Contemporary matte finish steel piller for modern aesthetics',
    fullDescription: 'The Matte Steel Piller offers a sophisticated, non-reflective finish that complements modern interior design. Perfect for contemporary homes and offices seeking understated elegance.',
    rating: 4.5,
    reviews: 103,
    dimensions: '120cm x 7cm x 7cm',
    weight: '11kg',
    material: 'Steel with matte protective coating',
    warranty: '5 years',
    price: '₹3,200',
    colors: [
    ],
    features: [
      'Non-reflective finish',
      'Contemporary design',
      'Fingerprint resistant',
      'Easy maintenance',
      'Modern aesthetics'
    ]
  },
  {
    id: 18,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/BlackWood/BlackWood-8.jpeg',
    description: 'Antique-style steel piller with vintage finishing touches',
    fullDescription: 'Inspired by classic designs, the Vintage Steel Piller brings old-world charm to modern spaces. Features authentic vintage finishes and traditional proportions.',
    rating: 4.4,
    reviews: 76,
    dimensions: '130cm x 10cm x 10cm',
    weight: '19kg',
    material: 'Steel with vintage-style finish',
    warranty: '5 years',
    price: '₹4,600',
    colors: [
    ],
    features: [
      'Vintage-inspired design',
      'Authentic aging effects',
      'Classic proportions',
      'Timeless appeal',
      'Heritage styling'
    ]
  },
  {
    id: 19,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/BlackWood/BlackWood-9.jpeg',
    description: 'Unique spiral-designed steel piller for artistic installations',
    fullDescription: 'The Spiral Steel Piller features a distinctive twisted design that creates visual movement and artistic interest. Perfect for spaces that demand unique architectural elements.',
    rating: 4.7,
    reviews: 62,
    dimensions: '140cm x 8cm x 8cm',
    weight: '16kg',
    material: 'Spiral-formed steel with artistic finish',
    warranty: '5 years',
    price: '₹5,800',
    colors: [
    ],
    features: [
      'Unique spiral design',
      'Artistic visual appeal',
      'Handcrafted formation',
      'Conversation piece',
      'Custom twist patterns'
    ]
  },
  {
    id: 20,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/BlackWood/BlackWood-10.jpeg',
    description: 'Classical fluted design steel piller with elegant vertical grooves',
    fullDescription: 'Inspired by classical architecture, the Fluted Steel Piller features elegant vertical grooves that create depth and sophistication. Perfect for traditional and transitional interiors.',
    rating: 4.6,
    reviews: 91,
    dimensions: '150cm x 9cm x 9cm',
    weight: '18kg',
    material: 'Fluted steel with classical finish',
    warranty: '5 years',
    price: '₹4,900',
    colors: [
    ],
    features: [
      'Classical fluted design',
      'Vertical groove pattern',
      'Traditional elegance',
      'Architectural detail',
      'Timeless styling'
    ]
  },

  // Wooden Pillers (21-35)
  {
    id: 21,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-1.jpeg',
    description: 'Traditional wooden piller with natural wood grain and finish',
    fullDescription: 'Crafted from premium hardwood, our Classic Wooden Piller showcases the natural beauty of wood grain. Each piece is carefully selected and finished to highlight the unique characteristics of the wood.',
    rating: 4.8,
    reviews: 134,
    dimensions: '120cm x 10cm x 10cm',
    weight: '8kg',
    material: 'Premium hardwood with natural finish',
    warranty: '3 years',
    price: '₹2,800',
    colors: [
    ],
    features: [
      'Natural wood grain',
      'Eco-friendly material',
      'Traditional craftsmanship',
      'Renewable resource',
      'Warm natural appearance'
    ]
  },
  {
    id: 22,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-2.jpeg',
    description: 'Intricately carved wooden piller with traditional motifs',
    fullDescription: 'Our master craftsmen hand-carve each Carved Wooden Piller with traditional motifs and patterns. This artistic piece combines structural function with decorative beauty.',
    rating: 4.9,
    reviews: 87,
    dimensions: '140cm x 12cm x 12cm',
    weight: '12kg',
    material: 'Hand-carved hardwood with protective finish',
    warranty: '3 years',
    price: '₹4,500',
    colors: [
    ],
    features: [
      'Hand-carved details',
      'Traditional motifs',
      'Artisan craftsmanship',
      'Unique patterns',
      'Cultural heritage'
    ]
  },
  {
    id: 23,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-3.jpeg',
    description: 'Contemporary wooden piller with clean lines and modern finish',
    fullDescription: 'The Modern Wooden Piller combines the warmth of wood with contemporary design principles. Features clean lines and modern finishing techniques for today\'s interiors.',
    rating: 4.6,
    reviews: 112,
    dimensions: '110cm x 8cm x 8cm',
    weight: '7kg',
    material: 'Engineered wood with modern finish',
    warranty: '3 years',
    price: '₹2,200',
    colors: [
    ],
    features: [
      'Contemporary design',
      'Clean modern lines',
      'Sustainable materials',
      'Versatile styling',
      'Easy maintenance'
    ]
  },
  {
    id: 24,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-4.jpeg',
    description: 'Weathered wooden piller with rustic charm and character',
    fullDescription: 'Embrace the beauty of imperfection with our Rustic Wooden Piller. Features weathered textures and natural imperfections that add character and charm to any space.',
    rating: 4.5,
    reviews: 98,
    dimensions: '130cm x 11cm x 11cm',
    weight: '10kg',
    material: 'Reclaimed wood with rustic finish',
    warranty: '3 years',
    price: '₹3,200',
    colors: [
    ],
    features: [
      'Rustic character',
      'Weathered appearance',
      'Reclaimed materials',
      'Unique textures',
      'Eco-friendly choice'
    ]
  },
  {
    id: 25,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-5.jpeg',
    description: 'High-gloss polished wooden piller with luxury finish',
    fullDescription: 'Our Polished Wooden Piller features a stunning high-gloss finish that enhances the natural beauty of the wood grain. Perfect for luxury interiors and formal spaces.',
    rating: 4.7,
    reviews: 76,
    dimensions: '135cm x 9cm x 9cm',
    weight: '9kg',
    material: 'Premium wood with high-gloss polyurethane finish',
    warranty: '4 years',
    price: '₹3,800',
    colors: [
    ],
    features: [
      'High-gloss finish',
      'Enhanced wood grain',
      'Luxury appearance',
      'Durable coating',
      'Easy to clean'
    ]
  },
  {
    id: 26,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-6.jpeg',
    description: 'Eco-friendly bamboo piller with sustainable natural beauty',
    fullDescription: 'Made from rapidly renewable bamboo, this eco-friendly piller offers strength comparable to traditional hardwood while supporting environmental sustainability.',
    rating: 4.4,
    reviews: 89,
    dimensions: '125cm x 8cm x 8cm',
    weight: '5kg',
    material: 'Laminated bamboo with natural finish',
    warranty: '3 years',
    price: '₹2,000',
    colors: [
    ],
    features: [
      'Eco-friendly material',
      'Rapidly renewable',
      'Lightweight yet strong',
      'Natural antibacterial',
      'Sustainable choice'
    ]
  },
  {
    id: 27,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-7.jpeg',
    description: 'Beautifully stained wooden piller with rich color variations',
    fullDescription: 'Our Stained Wooden Piller showcases the art of wood staining, creating rich, deep colors while preserving the natural wood texture and grain patterns.',
    rating: 4.6,
    reviews: 103,
    dimensions: '115cm x 9cm x 9cm',
    weight: '8kg',
    material: 'Hardwood with premium stain finish',
    warranty: '3 years',
    price: '₹2,600',
    colors: [
    ],
    features: [
      'Rich stain colors',
      'Enhanced wood grain',
      'Color consistency',
      'Fade resistant',
      'Professional finish'
    ]
  },
  {
    id: 28,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-8.jpeg',
    description: 'Lathe-turned wooden piller with elegant curved profiles',
    fullDescription: 'Crafted on a lathe by skilled artisans, the Turned Wooden Piller features elegant curves and profiles that add classical beauty to any architectural setting.',
    rating: 4.8,
    reviews: 67,
    dimensions: '145cm x 10cm x 10cm',
    weight: '11kg',
    material: 'Lathe-turned hardwood with smooth finish',
    warranty: '3 years',
    price: '₹3,600',
    colors: [
    ],
    features: [
      'Lathe-turned precision',
      'Elegant curved profiles',
      'Classical design',
      'Smooth finish',
      'Artisan craftsmanship'
    ]
  },
  {
    id: 29,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-9.jpeg',
    description: 'Environmentally conscious piller made from reclaimed wood',
    fullDescription: 'Each Reclaimed Wooden Piller tells a story, made from salvaged wood that carries history and character. An environmentally responsible choice with unique patina.',
    rating: 4.5,
    reviews: 84,
    dimensions: '120cm x 10cm x 10cm',
    weight: '9kg',
    material: 'Reclaimed hardwood with restored finish',
    warranty: '3 years',
    price: '₹3,000',
    colors: [
    ],
    features: [
      'Reclaimed materials',
      'Environmental responsibility',
      'Unique character',
      'Historical patina',
      'Sustainable choice'
    ]
  },
  {
    id: 30,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-10.jpeg',
    description: 'Wooden piller with premium paint finish in various colors',
    fullDescription: 'Our Painted Wooden Piller combines the warmth of wood with the versatility of paint finishes. Available in a wide range of colors to match any design scheme.',
    rating: 4.3,
    reviews: 96,
    dimensions: '110cm x 8cm x 8cm',
    weight: '7kg',
    material: 'Wood with premium paint finish',
    warranty: '3 years',
    price: '₹2,400',
    colors: [
    ],
    features: [
      'Versatile color options',
      'Premium paint finish',
      'Easy to customize',
      'Smooth surface',
      'Color matching available'
    ]
  },
  {
    id: 31,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-11.jpeg',
    description: 'Advanced composite wooden piller with enhanced durability',
    fullDescription: 'Using advanced composite technology, this wooden piller offers enhanced durability and weather resistance while maintaining the natural appearance of wood.',
    rating: 4.6,
    reviews: 78,
    dimensions: '125cm x 9cm x 9cm',
    weight: '6kg',
    material: 'Wood composite with protective coating',
    warranty: '5 years',
    price: '₹2,800',
    colors: [
    ],
    features: [
      'Enhanced durability',
      'Weather resistant',
      'Low maintenance',
      'Consistent quality',
      'Extended warranty'
    ]
  },
  {
    id: 32,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-12.jpeg',
    description: 'Rare exotic wood piller with unique grain patterns',
    fullDescription: 'Crafted from rare exotic woods, this piller showcases unique grain patterns and colors found nowhere else. Each piece is a one-of-a-kind work of natural art.',
    rating: 4.9,
    reviews: 45,
    dimensions: '140cm x 10cm x 10cm',
    weight: '13kg',
    material: 'Exotic hardwood with natural finish',
    warranty: '4 years',
    price: '₹6,500',
    colors: [
    ],
    features: [
      'Rare exotic woods',
      'Unique grain patterns',
      'One-of-a-kind pieces',
      'Premium quality',
      'Collector\'s item'
    ]
  },
  {
    id: 33,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-13.jpeg',
    description: 'Engineered laminated wooden piller with superior strength',
    fullDescription: 'Using advanced lamination techniques, this wooden piller offers superior strength and stability compared to solid wood, while maintaining natural wood aesthetics.',
    rating: 4.4,
    reviews: 92,
    dimensions: '130cm x 9cm x 9cm',
    weight: '8kg',
    material: 'Laminated wood with engineered construction',
    warranty: '4 years',
    price: '₹2,900',
    colors: [
    ],
    features: [
      'Superior strength',
      'Dimensional stability',
      'Engineered construction',
      'Consistent quality',
      'Warp resistant'
    ]
  },
  {
    id: 34,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-14.jpeg',
    description: 'Wooden piller with unique textured surface treatments',
    fullDescription: 'Featuring specially created surface textures, this wooden piller adds tactile interest and visual depth to any space while maintaining the natural beauty of wood.',
    rating: 4.5,
    reviews: 71,
    dimensions: '120cm x 8cm x 8cm',
    weight: '8kg',
    material: 'Textured wood with protective finish',
    warranty: '3 years',
    price: '₹3,100',
    colors: [
    ],
    features: [
      'Unique surface textures',
      'Tactile interest',
      'Visual depth',
      'Handcrafted feel',
      'Natural wood beauty'
    ]
  },
  {
    id: 35,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-15.jpeg',
    description: 'Top-quality wooden piller with luxury finishes and materials',
    fullDescription: 'Our Premium Wooden Piller represents the finest in wooden craftsmanship, using only the highest quality materials and finishing techniques for discerning customers.',
    rating: 4.8,
    reviews: 58,
    dimensions: '150cm x 11cm x 11cm',
    weight: '14kg',
    material: 'Premium hardwood with luxury finish',
    warranty: '5 years',
    price: '₹5,200',
    colors: [
    ],
    features: [
      'Premium materials',
      'Luxury finishes',
      'Superior craftsmanship',
      'Extended warranty',
      'Exclusive quality'
    ]
  },

  // Acrylic Pillers (36-50)
  {
    id: 36,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-16.jpeg',
    description: 'Crystal clear acrylic piller with transparent modern appeal',
    fullDescription: 'Our Clear Acrylic Piller offers a modern, minimalist aesthetic with crystal-clear transparency that creates an illusion of floating elements. Perfect for contemporary spaces.',
    rating: 4.7,
    reviews: 145,
    dimensions: '120cm x 8cm x 8cm',
    weight: '3kg',
    material: 'High-grade clear acrylic with UV protection',
    warranty: '3 years',
    price: '₹4,200',
    colors: [
    ],
    features: [
      'Crystal clear transparency',
      'UV resistant',
      'Lightweight design',
      'Easy to clean',
      'Modern aesthetic'
    ]
  },
  {
    id: 37,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-17.jpeg',
    description: 'Elegant frosted acrylic piller with subtle translucent finish',
    fullDescription: 'The Frosted Acrylic Piller provides privacy while maintaining light transmission. Its elegant frosted finish adds sophistication to any modern interior design.',
    rating: 4.6,
    reviews: 98,
    dimensions: '115cm x 8cm x 8cm',
    weight: '3kg',
    material: 'Frosted acrylic with matte finish',
    warranty: '3 years',
    price: '₹3,800',
    colors: [
    ],
    features: [
      'Frosted finish',
      'Light diffusion',
      'Privacy enhancement',
      'Elegant appearance',
      'Easy maintenance'
    ]
  },
  {
    id: 38,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-18.jpeg',
    description: 'Vibrant colored acrylic piller available in multiple hues',
    fullDescription: 'Add a pop of color to your space with our Colored Acrylic Piller. Available in a wide range of vibrant colors that maintain their brilliance over time.',
    rating: 4.5,
    reviews: 112,
    dimensions: '110cm x 8cm x 8cm',
    weight: '3kg',
    material: 'Colored acrylic with fade-resistant pigments',
    warranty: '3 years',
    price: '₹3,600',
    colors: [
    ],
    features: [
      'Vibrant colors',
      'Fade resistant',
      'Color consistency',
      'Modern appeal',
      'Easy to match'
    ]
  },
  {
    id: 39,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-19.jpeg',
    description: 'Acrylic piller with unique textured surface patterns',
    fullDescription: 'Our Textured Acrylic Piller features specially created surface patterns that add visual interest and tactile appeal while maintaining the benefits of acrylic material.',
    rating: 4.4,
    reviews: 87,
    dimensions: '125cm x 9cm x 9cm',
    weight: '4kg',
    material: 'Textured acrylic with pattern finish',
    warranty: '3 years',
    price: '₹4,000',
    colors: [
    ],
    features: [
      'Unique surface textures',
      'Visual interest',
      'Light refraction effects',
      'Modern design',
      'Easy to clean'
    ]
  },
  {
    id: 40,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-20.jpeg',
    description: 'Acrylic piller designed for LED lighting integration',
    fullDescription: 'Specially designed for LED integration, this acrylic piller can be illuminated from within, creating stunning lighting effects and ambiance for modern spaces.',
    rating: 4.8,
    reviews: 76,
    dimensions: '130cm x 10cm x 10cm',
    weight: '4kg',
    material: 'LED-compatible acrylic with light diffusion',
    warranty: '4 years',
    price: '₹5,500',
    colors: [
    ],
    features: [
      'LED integration ready',
      'Light diffusion properties',
      'Color changing capability',
      'Energy efficient',
      'Modern lighting effects'
    ]
  },
  {
    id: 41,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-21.jpeg',
    description: 'Acrylic piller with beautiful gradient color transitions',
    fullDescription: 'Featuring smooth color transitions, the Gradient Acrylic Piller creates a stunning visual effect that changes appearance from different viewing angles.',
    rating: 4.6,
    reviews: 63,
    dimensions: '120cm x 8cm x 8cm',
    weight: '3kg',
    material: 'Gradient-colored acrylic with smooth transitions',
    warranty: '3 years',
    price: '₹4,800',
    colors: [
    ],
    features: [
      'Gradient color effects',
      'Smooth transitions',
      'Visual depth',
      'Unique appearance',
      'Modern aesthetic'
    ]
  },
  {
    id: 42,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-22.jpeg',
    description: 'Reflective mirror acrylic piller for space enhancement',
    fullDescription: 'Our Mirror Acrylic Piller features a highly reflective surface that enhances light and creates the illusion of larger spaces while providing structural support.',
    rating: 4.5,
    reviews: 89,
    dimensions: '115cm x 8cm x 8cm',
    weight: '3kg',
    material: 'Mirror-finish acrylic with reflective coating',
    warranty: '3 years',
    price: '₹4,400',
    colors: [
    ],
    features: [
      'Highly reflective surface',
      'Space enhancement',
      'Light amplification',
      'Luxury appearance',
      'Easy to clean'
    ]
  },
  {
    id: 43,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-23.jpeg',
    description: 'Artistically etched acrylic piller with decorative patterns',
    fullDescription: 'Featuring precision-etched decorative patterns, this acrylic piller combines functionality with artistic beauty, creating unique light and shadow effects.',
    rating: 4.7,
    reviews: 54,
    dimensions: '135cm x 9cm x 9cm',
    weight: '4kg',
    material: 'Etched acrylic with precision patterns',
    warranty: '3 years',
    price: '₹5,200',
    colors: [
    ],
    features: [
      'Precision etched patterns',
      'Artistic design',
      'Light diffusion effects',
      'Decorative appeal',
      'Custom patterns available'
    ]
  },
  {
    id: 44,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-24.jpeg',
    description: 'Heavy-duty thick acrylic piller for maximum strength',
    fullDescription: 'Built with extra thickness for enhanced strength and durability, this acrylic piller is perfect for applications requiring maximum load-bearing capacity.',
    rating: 4.8,
    reviews: 67,
    dimensions: '140cm x 12cm x 12cm',
    weight: '8kg',
    material: 'Extra-thick acrylic with reinforced construction',
    warranty: '5 years',
    price: '₹6,800',
    colors: [
    ],
    features: [
      'Extra thickness',
      'Maximum strength',
      'Heavy-duty construction',
      'Enhanced durability',
      'Extended warranty'
    ]
  },
  {
    id: 45,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-25.jpeg',
    description: 'Bendable acrylic piller for curved and creative installations',
    fullDescription: 'Made from specially formulated flexible acrylic, this piller can be bent and shaped for creative installations and curved applications while maintaining strength.',
    rating: 4.3,
    reviews: 78,
    dimensions: '120cm x 8cm x 8cm (bendable)',
    weight: '3kg',
    material: 'Flexible acrylic with shape-retention properties',
    warranty: '3 years',
    price: '₹4,600',
    colors: [
    ],
    features: [
      'Bendable material',
      'Creative shaping',
      'Curved installations',
      'Shape retention',
      'Innovative design'
    ]
  },
  {
    id: 46,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-26.jpeg',
    description: 'Specialized acrylic piller with anti-static properties',
    fullDescription: 'Treated with anti-static additives, this acrylic piller resists dust accumulation and static electricity, making it perfect for clean environments and electronic applications.',
    rating: 4.4,
    reviews: 45,
    dimensions: '125cm x 8cm x 8cm',
    weight: '3kg',
    material: 'Anti-static treated acrylic',
    warranty: '4 years',
    price: '₹5,000',
    colors: [
    ],
    features: [
      'Anti-static properties',
      'Dust resistant',
      'Clean environment suitable',
      'Electronic compatibility',
      'Easy maintenance'
    ]
  },
  {
    id: 47,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-27.jpeg',
    description: 'Outdoor-rated acrylic piller with superior UV protection',
    fullDescription: 'Specially formulated for outdoor use, this acrylic piller features enhanced UV resistance to prevent yellowing and degradation from sun exposure.',
    rating: 4.6,
    reviews: 92,
    dimensions: '130cm x 9cm x 9cm',
    weight: '4kg',
    material: 'UV-resistant acrylic with protective additives',
    warranty: '5 years',
    price: '₹4,800',
    colors: [
    ],
    features: [
      'UV protection',
      'Outdoor durability',
      'Color stability',
      'Weather resistance',
      'Extended warranty'
    ]
  },
  {
    id: 48,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-28.jpeg',
    description: 'Light-refracting acrylic piller with prismatic effects',
    fullDescription: 'Featuring specially designed prismatic surfaces, this acrylic piller creates beautiful rainbow light effects and optical illusions that change throughout the day.',
    rating: 4.7,
    reviews: 38,
    dimensions: '120cm x 8cm x 8cm',
    weight: '3kg',
    material: 'Prismatic acrylic with light-refracting properties',
    warranty: '3 years',
    price: '₹5,800',
    colors: [
    ],
    features: [
      'Prismatic light effects',
      'Rainbow reflections',
      'Optical illusions',
      'Dynamic appearance',
      'Artistic lighting'
    ]
  },
  {
    id: 49,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-29.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [
    ],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 50,
    name: 'Wooden Master Piller',
    category: 'Wooden Pillers',
    baseImage: '/wooden/wood-30.jpeg',
    description: 'Top-tier acrylic piller with luxury finishes and features',
    fullDescription: 'Our Premium Acrylic Piller represents the finest in acrylic craftsmanship, combining superior materials, advanced manufacturing techniques, and luxury finishes for discerning customers.',
    rating: 4.9,
    reviews: 67,
    dimensions: '150cm x 10cm x 10cm',
    weight: '5kg',
    material: 'Premium acrylic with luxury treatments',
    warranty: '5 years',
    price: '₹7,500',
    colors: [
    ],
    features: [
      'Premium materials',
      'Luxury finishes',
      'Superior clarity',
      'Extended warranty',
      'Exclusive quality'
    ]
  }
  ,
  {
    id: 51,
    name: 'SS Master Piller',
    category: 'Steel Pillers',
    baseImage: '/Steel/Steel-1.jpeg',
    description: 'Light-refracting acrylic piller with prismatic effects',
    fullDescription: 'Featuring specially designed prismatic surfaces, this acrylic piller creates beautiful rainbow light effects and optical illusions that change throughout the day.',
    rating: 4.7,
    reviews: 38,
    dimensions: '120cm x 8cm x 8cm',
    weight: '3kg',
    material: 'Prismatic acrylic with light-refracting properties',
    warranty: '3 years',
    price: '₹5,800',
    colors: [
    ],
    features: [
      'Prismatic light effects',
      'Rainbow reflections',
      'Optical illusions',
      'Dynamic appearance',
      'Artistic lighting'
    ]
  },
  {
    id: 52,
    name: 'SS Master Piller',
    category: 'Steel Pillers',
    baseImage: '/Steel/Steel-2.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [
    ],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 53,
    name: 'SS Master Piller',
    category: 'Steel Pillers',
    baseImage: '/Steel/Steel-3.jpeg',
    description: 'Top-tier acrylic piller with luxury finishes and features',
    fullDescription: 'Our Premium Acrylic Piller represents the finest in acrylic craftsmanship, combining superior materials, advanced manufacturing techniques, and luxury finishes for discerning customers.',
    rating: 4.9,
    reviews: 67,
    dimensions: '150cm x 10cm x 10cm',
    weight: '5kg',
    material: 'Premium acrylic with luxury treatments',
    warranty: '5 years',
    price: '₹7,500',
    colors: [
    ],
    features: [
      'Premium materials',
      'Luxury finishes',
      'Superior clarity',
      'Extended warranty',
      'Exclusive quality'
    ]
  }
  ,
  {
    id: 54,
    name: 'SS Master Piller',
    category: 'Steel Pillers',
    baseImage: '/Steel/Steel-4.jpeg',
    description: 'Light-refracting acrylic piller with prismatic effects',
    fullDescription: 'Featuring specially designed prismatic surfaces, this acrylic piller creates beautiful rainbow light effects and optical illusions that change throughout the day.',
    rating: 4.7,
    reviews: 38,
    dimensions: '120cm x 8cm x 8cm',
    weight: '3kg',
    material: 'Prismatic acrylic with light-refracting properties',
    warranty: '3 years',
    price: '₹5,800',
    colors: [
    ],
    features: [
      'Prismatic light effects',
      'Rainbow reflections',
      'Optical illusions',
      'Dynamic appearance',
      'Artistic lighting'
    ]
  },
  {
    id: 55,
    name: 'SS Master Piller',
    category: 'Steel Pillers',
    baseImage: '/Steel/Steel-5.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [
    ],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 56,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/SmallAcrylic/blue.jpeg',
    description: 'Top-tier acrylic piller with luxury finishes and features',
    fullDescription: 'Our Premium Acrylic Piller represents the finest in acrylic craftsmanship, combining superior materials, advanced manufacturing techniques, and luxury finishes for discerning customers.',
    rating: 4.9,
    reviews: 67,
    dimensions: '150cm x 10cm x 10cm',
    weight: '5kg',
    material: 'Premium acrylic with luxury treatments',
    warranty: '5 years',
    price: '₹7,500',
    colors: [
    ],
    features: [
      'Premium materials',
      'Luxury finishes',
      'Superior clarity',
      'Extended warranty',
      'Exclusive quality'
    ]
  },
  {
    id: 89,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/SmallAcrylic/brown.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 90,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/SmallAcrylic/dark-wood.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 91,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage:'/SmallAcrylic/green.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 92,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/SmallAcrylic/orange.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 93,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/SmallAcrylic/pink.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 94,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/SmallAcrylic/white.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 95,
    name: 'Acrylic Master Piller',
    category: 'Acrylic Pillers',
    baseImage: '/SmallAcrylic/yellow.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },

    
  {
    id: 57,
    name: 'Acrylic Piller',
    category: 'SmallPillers',
    baseImage: '/MiddleAcrylic/blue.jpeg',
    description: 'Top-tier acrylic piller with luxury finishes and features',
    fullDescription: 'Our Premium Acrylic Piller represents the finest in acrylic craftsmanship, combining superior materials, advanced manufacturing techniques, and luxury finishes for discerning customers.',
    rating: 4.9,
    reviews: 67,
    dimensions: '150cm x 10cm x 10cm',
    weight: '5kg',
    material: 'Premium acrylic with luxury treatments',
    warranty: '5 years',
    price: '₹7,500',
    colors: [

    ],
    features: [
      'Premium materials',
      'Luxury finishes',
      'Superior clarity',
      'Extended warranty',
      'Exclusive quality'
    ]
  },
      {
    id: 82,
    name: 'Acrylic Piller',
    category: 'Acrylic Pillers',
    baseImage: '/MiddleAcrylic/black.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
    {
    id: 83,
    name: 'Acrylic Piller',
    category: 'Acrylic Pillers',
    baseImage: '/MiddleAcrylic/dark-purple.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
    {
    id: 84,
    name: 'Acrylic Piller',
    category: 'Acrylic Pillers',
    baseImage: '/MiddleAcrylic/dark-wood.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
    {
    id: 85,
    name: 'Acrylic Piller',
    category: 'Acrylic Pillers',
    baseImage: '/MiddleAcrylic/light-orange.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
    {
    id: 86,
    name: 'Acrylic Piller',
    category: 'Acrylic Pillers',
    baseImage: '/MiddleAcrylic/orange.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
    {
    id: 87,
    name: 'Acrylic Piller',
    category: 'Acrylic Pillers',
    baseImage: '/MiddleAcrylic/white.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
    {
    id: 88,
    name: 'Acrylic Piller',
    category: 'Acrylic Pillers',
    baseImage: '/MiddleAcrylic/yellow.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },


  {
    id: 81,
    name: 'Wooden Piller',
    category: 'SmallPillers',
    baseImage: '/SmallAcrylic/Untitled-1.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [
    ],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 58,
    name: 'Wooden Piller',
    category: 'SmallPillers',
    baseImage: '/SmallAcrylic/Untitled-2.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 59,
    name: 'Acrylic Piller',
    category: 'SmallPillers',
    baseImage: '/SmallAcrylic/Untitled-3.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 60,
    name: 'Acrylic Piller',
    category: 'SmallPillers',
    baseImage: '/SmallAcrylic/Untitled-4.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 61,
    name: 'Acrylic Piller',
    category: 'SmallPillers',
    baseImage: '/SmallAcrylic/Untitled-5.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 62,
    name: 'Acrylic Piller',
    category: 'SmallPillers',
    baseImage: '/SmallAcrylic/Untitled-6.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 63,
    name: 'Acrylic Piller',
    category: 'SmallPillers',
    baseImage: '/SmallAcrylic/Untitled-7.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 64,
    name: 'Acrylic Piller',
    category: 'SmallPillers',
    baseImage: '/SmallAcrylic/Untitled-8.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 65,
    name: 'Acrylic Piller',
    category: 'SmallPillers',
    baseImage: '/SmallAcrylic/Untitled-9.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 66,
    name: 'Acrylic Piller',
    category: 'SmallPillers',
    baseImage: '/SmallAcrylic/Untitled-10.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 67,
    name: 'Steel Piller',
    category: 'Steel Pillers',
    baseImage: '/SmallAcrylic/Untitled-11.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 68,
    name: 'Steel Piller',
    category: 'Steel Pillers',
    baseImage: '/SmallAcrylic/Untitled-12.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 69,
    name: 'Steel Piller',
    category: 'Steel Pillers',
    baseImage: '/SmallAcrylic/Untitled-13.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 70,
    name: 'Steel Piller',
    category: 'Steel Pillers',
    baseImage: '/SmallAcrylic/Untitled-14.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 71,
    name: 'Steel Piller',
    category: 'Steel Pillers',
    baseImage: '/SmallAcrylic/Untitled-15.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 72,
    name: 'Wooden Piller',
    category: 'Wooden Pillers',
    baseImage: '/SmallWood/SmallWood-2.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 73,
    name: 'Wooden Piller',
    category: 'Wooden Pillers',
    baseImage: '/SmallWood/SmallWood-3.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 74,
    name: 'Wooden Piller',
    category: 'Wooden Pillers',
    baseImage: '/SmallWood/SmallWood-4.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 75,
    name: 'Wooden Piller',
    category: 'Wooden Pillers',
    baseImage: '/SmallWood/SmallWood-5.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 76,
    name: 'Wooden Piller',
    category: 'Wooden Pillers',
    baseImage: '/SmallWood/SmallWood-6.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 77,
    name: 'Wooden Piller',
    category: 'Wooden Pillers',
    baseImage: '/SmallWood/SmallWood-7.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 78,
    name: 'Wooden Piller',
    category: 'Wooden Pillers',
    baseImage: '/SmallWood/SmallWood-8.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  {
    id: 79,
    name: 'Wooden Piller',
    category: 'Wooden Pillers',
    baseImage: '/SmallWood/SmallWood-9.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },
  ,
  {
    id: 80,
    name: 'Wooden Piller',
    category: 'Wooden Pillers',
    baseImage: '/SmallWood/SmallWood-1.jpeg',
    description: 'Innovative acrylic piller with magnetic attachment system',
    fullDescription: 'Featuring an integrated magnetic system, this acrylic piller allows for easy attachment of accessories and decorative elements without drilling or permanent modifications.',
    rating: 4.5,
    reviews: 56,
    dimensions: '115cm x 8cm x 8cm',
    weight: '4kg',
    material: 'Acrylic with embedded magnetic system',
    warranty: '3 years',
    price: '₹5,400',
    colors: [],
    features: [
      'Magnetic attachment system',
      'Accessory compatibility',
      'No drilling required',
      'Modular design',
      'Easy customization'
    ]
  },




  
];