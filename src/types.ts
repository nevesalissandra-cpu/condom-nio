export interface ApartmentTypology {
  id: string;
  name: string;
  location: string;
  cityZone: string;
  addressHighlight: string;
  tag: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  parkingSpots: string;
  priceStartingFrom: string;
  formUrl: string;
  imageUrl: string;
  features: string[];
  description: string;
  locationHighlights: string[];
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface NearbyPoint {
  id: string;
  place: string;
  neighborhood: string;
  distance: string;
  time: string;
  category: 'transporte' | 'lazer' | 'educacao' | 'compras';
}
