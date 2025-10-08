// Sanity Portable Text types
export interface PortableTextBlock {
  _type: 'block';
  _key: string;
  style?: string;
  children?: PortableTextChild[];
  markDefs?: MarkDef[];
}

export interface PortableTextChild {
  _type: string;
  _key: string;
  text: string;
  marks?: string[];
}

export interface MarkDef {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

export type PortableTextContent = PortableTextBlock[];

// Sanity Image types
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

// Homepage Section types
export interface Hero {
  title: string;
  subtitle: string;
  backgroundImage?: SanityImage;
}

export interface Stats {
  years: number;
  projects: number;
  clients: number;
  team: number;
}

export interface TeamMember {
  _key: string;
  name: string;
  role: string;
  image?: SanityImage;
  bio?: PortableTextContent;
}

export interface Sector {
  _key: string;
  title: string;
  description: string;
  icon?: string;
  image?: SanityImage;
}

export interface Step {
  _key: string;
  number: number;
  title: string;
  description: string;
  steps?: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  whatsapp?: string;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export interface FooterData {
  companyDescription: string;
  contact: ContactInfo;
  socialMedia: SocialMedia;
  copyrightText: string;
}

// Page data types
export interface QuemSomosData {
  hero: Hero;
  purposeTitle: string;
  purposeDescription: PortableTextContent;
  purposeImages: SanityImage[];
  stats: Stats;
  valuesTitle: string;
  values: Array<{
    _key: string;
    title: string;
    description: string;
  }>;
}

export interface AreaAtuacao {
  _key: string;
  title: string;
  description: PortableTextContent;
  images: SanityImage[];
}

export interface MetodologiaData {
  hero: Hero;
  processTitle: string;
  processDescription: string;
  phases: Step[];
  benefitsTitle: string;
  benefits: Array<{
    _key: string;
    title: string;
    description: string;
  }>;
}

export interface Project {
  _key: string;
  title?: string;
  clientName?: string;
  clientDescription?: string;
  location?: string;
  area?: string;
  duration?: string;
  description?: PortableTextContent;
  images: SanityImage[];
  architect?: string;
  category?: string;
  year?: number;
}

export interface TrabalheConoscoData {
  hero: Hero;
  description: PortableTextContent;
  formTitle: string;
}

export interface ContatoData {
  hero: Hero;
  description: PortableTextContent;
  contact: ContactInfo;
  socialMedia: SocialMedia;
}
