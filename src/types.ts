export interface ProductDetails {
  material: string;
  dimensions: string;
  weight: string;
  careInstructions: string;
  technique: string;
  leadTime: string;
}

export interface Product {
  id: string;
  title: string;
  craft: string;
  category: string;
  collection: string;
  categoriesList: string[];
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  stock: number;
  origin: string;
  artisanId: string;
  artisanName: string;
  image: string;
  additionalImages: string[];
  description: string;
  details: ProductDetails;
  features: string[];
  isNew: boolean;
  featured: boolean;
}

export interface Artisan {
  id: string;
  name: string;
  craft: string;
  location: string;
  state: string;
  yearsOfExperience: number;
  image: string;
  heroImage: string;
  bio: string;
  quote: string;
  fullStory: string;
  heritageLineage: string;
  specialty: string;
  awards: string[];
  productCount: number;
}

export interface MainCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
  image: string;
  description: string;
  subtitle: string;
}

export interface CategoryDepartment {
  id: string;
  name: string;
  description: string;
  categories: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface AboutPhoto {
  id: string;
  number: number;
  defaultFilename: string;
  title: string;
  tag: string;
  dateOrVenue: string;
  description: string;
  details: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  subject: string;
  message: string;
}

export type ViewMode = 'home' | 'shop' | 'artisans' | 'impact' | 'about' | 'contact';
