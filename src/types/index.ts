export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  startingPrice: string;
  features: string[];
  popular?: boolean;
}

export interface HeroSlide {
  id: number;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  ctaText: string;
  serviceId: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  propertyType: string;
  locality: string;
  preferredDate: string;
  preferredTime: string;
  specialInstructions: string;
}
