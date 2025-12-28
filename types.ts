
export interface NavItem {
  label: string;
  href: string;
}

export interface Pastor {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Church {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  banner: string;
  bannerFit?: 'cover' | 'contain' | 'fill';
  whatsapp: string;
  instagram: string;
  facebook?: string;
  tiktok?: string;
  kwai?: string;
  pastors: Pastor[];
  schedule: { day: string; time: string; label: string }[];
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  churchId?: string;
  type: 'Congresso' | 'Culto Especial' | 'Conferência' | 'Reunião Oficial';
}

export interface MediaItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  churchName: string;
  caption: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}
