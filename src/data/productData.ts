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
  colors: Color[];
  features: string[];
}

export const productData: Product[] = [
  {
    id: 1,
    name: 'Industrial Dining Table',
    category: 'Tables',
    baseImage: '/white.png?auto=compress&cs=tinysrgb&w=800',
    description: 'Sturdy steel frame with wood top, perfect for modern dining spaces',
    fullDescription: 'Our Industrial Dining Table features a robust steel frame construction that ensures longevity and stability. The table top is crafted from premium quality wood that complements the industrial aesthetic while providing a warm, inviting surface for dining. Perfect for both residential and commercial spaces, this table can accommodate 6-8 people comfortably.',
    rating: 4.8,
    reviews: 124,
    dimensions: '180cm x 90cm x 75cm',
    weight: '45kg',
    material: 'Steel frame with solid wood top',
    warranty: '5 years',
    colors: [
      { name: 'Natural Steel', code: '#8B9DC3', image: '/yellow1.png' },
      { name: 'Black Steel', code: '#2C3E50', image: '/pink.png' },
      { name: 'Bronze Steel', code: '#CD7F32', image: '/blue.png' },
      { name: 'White Steel', code: '#F8F9FA', image: '/orange.png' }
    ],
    features: [
      'Heavy-duty steel construction',
      'Scratch-resistant surface',
      'Easy to clean and maintain',
      'Suitable for indoor and outdoor use',
      'Assembly required'
    ]
  },
  {
    id: 2,
    name: 'Modern Steel Chair',
    category: 'Chairs',
    baseImage: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ergonomic design with cushioned seat for maximum comfort',
    fullDescription: 'Experience ultimate comfort with our Modern Steel Chair. Designed with ergonomics in mind, this chair features a contoured seat and backrest that provide excellent support for extended sitting periods.',
    rating: 4.9,
    reviews: 89,
    dimensions: '45cm x 50cm x 85cm',
    weight: '8kg',
    material: 'Steel frame with cushioned upholstery',
    warranty: '3 years',
    colors: [
      { name: 'Charcoal', code: '#36454F', image: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Silver', code: '#C0C0C0', image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Copper', code: '#B87333', image: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Matte Black', code: '#28282B', image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800' }
    ],
    features: [
      'Ergonomic design',
      'Cushioned seat and backrest',
      'Stackable for easy storage',
      'Non-slip feet',
      'Easy assembly'
    ]
  },
  {
    id: 3,
    name: 'Display Rack Unit',
    category: 'Racks',
    baseImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Multi-tier storage solution for organized display',
    fullDescription: 'Maximize your storage and display capabilities with our versatile Display Rack Unit. Perfect for retail spaces, offices, or home organization.',
    rating: 4.7,
    reviews: 156,
    dimensions: '120cm x 40cm x 180cm',
    weight: '25kg',
    material: 'Powder-coated steel',
    warranty: '5 years',
    colors: [
      { name: 'Industrial Gray', code: '#71797E', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Pure White', code: '#FFFFFF', image: 'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Deep Black', code: '#000000', image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Navy Blue', code: '#1B2951', image: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800' }
    ],
    features: [
      'Adjustable shelves',
      'High load capacity',
      'Powder-coated finish',
      'Modular design',
      'Tool-free assembly'
    ]
  }
];