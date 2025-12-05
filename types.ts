export enum ConservationStatus {
  LC = "Preocupación Menor",
  NT = "Casi Amenazada",
  VU = "Vulnerable",
  EN = "En Peligro",
  CR = "En Peligro Crítico",
  EW = "Extinto en Estado Silvestre",
  EX = "Extinto"
}

export interface Park {
  id: string;
  name: string;
  description: string;
  location: string;
  area: string; // e.g., "24.000 ha"
  foundedYear: number;
  imageUrl: string;
}

export interface Flora {
  id: string;
  commonName: string;
  scientificName: string;
  description: string;
  status: ConservationStatus;
  imageUrl: string;
}

export interface Fauna {
  id: string;
  commonName: string;
  scientificName: string;
  type: string; // Mammal, Bird, Reptile, etc.
  description: string; // Distribution/Observation
  status: ConservationStatus;
  imageUrl: string;
}

export interface Region {
  id: string;
  name: string;
  shortName: string; // For the card
  description: string;
  parks: Park[];
  flora: Flora[];
  fauna: Fauna[];
  coverImage: string;
}

export enum ViewState {
  HOME,
  REGION_DETAIL
}

export enum TabState {
  PARKS,
  FLORA,
  FAUNA
}