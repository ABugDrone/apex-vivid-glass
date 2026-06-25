export interface Property {
  id: string;
  title: string;
  category: 'investment' | 'valuation' | 'land' | 'office' | 'house' | 'room';
  price: string;
  location: string;
  description: string;
  image: string;
  features?: string[];
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
}

export const CATEGORY_NAMES: Record<Property['category'], string> = {
  investment: 'Investment',
  valuation: 'Valuation',
  land: 'Land Plot',
  office: 'Office Space',
  house: 'House/Building',
  room: 'Room for Rent',
};

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'investment', name: 'Investments' },
  { id: 'valuation', name: 'Valuation' },
  { id: 'land', name: 'Land Plots' },
  { id: 'office', name: 'Offices' },
  { id: 'house', name: 'Houses' },
  { id: 'room', name: 'Rooms' },
];

export const properties: Property[] = [
  {
    id: '1',
    title: 'Real Estate Investment Fund',
    category: 'investment',
    price: '₦5,000,000',
    location: 'Bekaji, Jimeta',
    description: 'High-yield investment opportunity in the heart of Jimeta. Guaranteed returns and secure asset management.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/investment-opportunities-867c21e0-1782389180037.webp',
    features: ['15% Annual ROI', 'Asset Liquidity', 'Professional Management'],
  },
  {
    id: '2',
    title: 'Property Valuation Service',
    category: 'valuation',
    price: 'Contact for Quote',
    location: 'Bekaji, Jimeta',
    description: 'Expert appraisal and valuation services for residential and commercial properties in Adamawa State.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/apex-realty-hero-5288e600-1782389180033.webp',
    features: ['Legal Compliance', 'Accurate Market Analysis', 'Certified Appraisers'],
  },
  {
    id: '3',
    title: '10 Plots of Land',
    category: 'land',
    price: '₦2,500,000 per plot',
    location: 'Bekaji Extension, Jimeta',
    description: 'Prime land plots suitable for residential development. Fully fenced with accessible roads.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/land-plots-b407a0a9-1782389179328.webp',
    size: '100ft x 100ft',
    features: ['C of O available', 'Level ground', 'Developed neighborhood'],
  },
  {
    id: '4',
    title: 'Modern Office Complex',
    category: 'office',
    price: '₦1,200,000 / year',
    location: 'Main St, Bekaji, Jimeta',
    description: 'Fully furnished office space with high-speed internet and backup power. Perfect for startups and established firms.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/office-spaces-e7d4cce7-1782389179552.webp',
    size: '250 sqm',
    features: ['AC installed', 'Parking space', '24/7 Security'],
  },
  {
    id: '5',
    title: '4 Bedroom Luxury Villa',
    category: 'house',
    price: '₦85,000,000',
    location: 'Bekaji G.R.A, Jimeta',
    description: 'Spacious 4 bedroom building with modern architecture, luxury finishes, and a sprawling garden.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/houses-and-buildings-49bdb2e1-1782389180136.webp',
    bedrooms: 4,
    bathrooms: 5,
    size: '1200 sqm',
    features: ['Swimming pool', 'CCTV', 'Solar Power'],
  },
  {
    id: '6',
    title: 'Self-Contained Studio',
    category: 'room',
    price: '₦350,000 / year',
    location: 'Bekaji, Jimeta',
    description: 'Cozy and affordable room for rent. Quiet neighborhood with steady water supply.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/rooms-for-rent-33986175-1782389180028.webp',
    bedrooms: 1,
    bathrooms: 1,
    features: ['Borehole water', 'Close to market', 'Gated compound'],
  },
  {
    id: '7',
    title: 'Commercial Investment Portfolio',
    category: 'investment',
    price: '\u20a615,000,000',
    location: 'Bekaji, Jimeta',
    description: 'Diversified commercial real estate portfolio with steady rental income from multiple tenants.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/investment-opportunities-867c21e0-1782389180037.webp',
    features: ['12% Annual ROI', 'Multiple Tenants', 'Managed Portfolio'],
  },
  {
    id: '8',
    title: '5 Plots Corner Piece',
    category: 'land',
    price: '\u20a63,000,000 per plot',
    location: 'Bekaji Extension, Jimeta',
    description: 'Corner piece land plots ideal for commercial development. High traffic area with excellent visibility.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/land-plots-b407a0a9-1782389179328.webp',
    size: '120ft x 100ft',
    features: ['Corner piece', 'Tarred road access', 'Survey available'],
  },
  {
    id: '9',
    title: 'Executive Office Suite',
    category: 'office',
    price: '\u20a6800,000 / year',
    location: 'Lamingo Road, Bekaji, Jimeta',
    description: 'Premium executive office suite with reception area, conference room, and private offices.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/office-spaces-e7d4cce7-1782389179552.webp',
    size: '150 sqm',
    features: ['Furnished', 'Internet included', 'Ample parking'],
  },
  {
    id: '10',
    title: '3 Bedroom Bungalow',
    category: 'house',
    price: '\u20a645,000,000',
    location: 'Bekaji, Jimeta',
    description: 'Well-built 3 bedroom bungalow with modern finishes, spacious compound, and boys quarter.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/houses-and-buildings-49bdb2e1-1782389180136.webp',
    bedrooms: 3,
    bathrooms: 3,
    size: '800 sqm',
    features: ['Boys quarter', 'Tiled compound', 'Prepaid meter'],
  },
  {
    id: '11',
    title: 'Mini Flat (2 Rooms)',
    category: 'room',
    price: '\u20a6500,000 / year',
    location: 'Bekaji, Jimeta',
    description: 'Spacious mini flat with separate living room and bedroom. Ideal for small families or professionals.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/rooms-for-rent-33986175-1782389180028.webp',
    bedrooms: 2,
    bathrooms: 1,
    features: ['Separate entrance', 'Water included', 'Secure neighborhood'],
  },
  {
    id: '12',
    title: '3 Bedroom Flat for Rent',
    category: 'house',
    price: '\u20a61,500,000 / year',
    location: 'Bekaji G.R.A, Jimeta',
    description: 'Luxurious 3 bedroom flat with all rooms en-suite, modern kitchen, and spacious living area.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fa850f4b-28c7-44e3-b90f-9526d15b28f7/houses-and-buildings-49bdb2e1-1782389180136.webp',
    bedrooms: 3,
    bathrooms: 3,
    size: '500 sqm',
    features: ['All rooms en-suite', 'POP ceiling', 'Ample parking'],
  },
];
