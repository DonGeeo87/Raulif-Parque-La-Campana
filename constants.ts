
import { Region, ConservationStatus } from './types';

// We use the Region interface to represent the whole Park context
// and the 'parks' array to represent the Sectors of La Campana.

export const LA_CAMPANA_DATA: Region = {
  id: "la-campana",
  name: "Parque Nacional La Campana",
  shortName: "La Campana",
  description: "Ubicado en la Cordillera de la Costa de Chile central, el Parque Nacional La Campana es una Reserva de la Biosfera y un tesoro de biodiversidad. Destaca por proteger uno de los últimos bosques naturales de Palma Chilena.",
  // Image: View of La Campana mountain
  coverImage: "https://images.unsplash.com/photo-1549594411-a3f5a044d038?auto=format&fit=crop&w=1920&q=80", 
  parks: [
    {
      id: "granizo",
      name: "Sector Granizo",
      description: "El acceso más popular para los excursionistas que buscan alcanzar la cumbre del Cerro La Campana. Ofrece senderos de alta montaña y vistas panorámicas.",
      location: "Olmué (Acceso por Av. Granizo)",
      area: "Zona de Cumbre",
      foundedYear: 1967,
      // Image: Steep mountain path/rocky terrain characteristic of the ascent
      imageUrl: "https://images.unsplash.com/photo-1558276537-4f654b79c372?auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: "cajon-grande",
      name: "Sector Cajón Grande",
      description: "Ideal para la familia y la observación de naturaleza. Cuenta con pozones naturales (en temporada) y hermosos bosques de robles.",
      location: "Olmué (Acceso por Quebrada Alvarado)",
      area: "Zona Precordillerana",
      foundedYear: 1967,
      // Image: Oak forest/Green stream area
      imageUrl: "https://images.unsplash.com/photo-1596401490226-c1488c009cb9?auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: "ocoa",
      name: "Sector Ocoa",
      description: "Ubicado en Hijuelas, este sector alberga la mayor concentración de Palma Chilena (Jubaea chilensis) y ofrece senderos más planos y extensos.",
      location: "Hijuelas",
      area: "Valle de Ocoa",
      foundedYear: 1967,
      // Image: Specific view of Chilean Palms in the valley
      imageUrl: "https://images.unsplash.com/photo-1599596434857-7977a4597372?auto=format&fit=crop&w=800&q=80" 
    }
  ],
  flora: [
    {
      id: "palma-chilena",
      commonName: "Palma Chilena",
      scientificName: "Jubaea chilensis",
      description: "La palmera más austral del mundo y emblema del parque. Puede vivir más de 1000 años y su tronco gris es inconfundible.",
      status: ConservationStatus.EN,
      // Image: Close up or clear shot of Jubaea chilensis
      imageUrl: "https://images.unsplash.com/photo-1702422776495-2362b5d031e0?auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: "roble",
      commonName: "Roble de Santiago",
      scientificName: "Nothofagus macrocarpa",
      description: "Árbol caducifolio que habita en las zonas altas y húmedas del parque. En otoño sus hojas se tornan rojas y naranjas.",
      status: ConservationStatus.VU,
      // Image: Nothofagus foliage/forest
      imageUrl: "https://images.unsplash.com/photo-1579367468127-1c62a8437012?auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: "quillay",
      commonName: "Quillay",
      scientificName: "Quillaja saponaria",
      description: "Árbol siempreverde endémico, fundamental para el bosque esclerófilo y la producción de miel.",
      status: ConservationStatus.LC,
      // Image: Sclerophyllous tree detail
      imageUrl: "https://images.unsplash.com/photo-1598286980649-145d5a6a6369?auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: "chagual",
      commonName: "Chagual",
      scientificName: "Puya chilensis",
      description: "Planta bromeliácea de grandes espigas con flores amarillas o verdes, hábitat de la mariposa del chagual.",
      status: ConservationStatus.LC,
      // Image: Puya chilensis (Spiky plant with flower stalk)
      imageUrl: "https://images.unsplash.com/photo-1628795992683-9b8893d5006b?auto=format&fit=crop&w=800&q=80" 
    }
  ],
  fauna: [
    {
      id: "zorro-culpeo",
      commonName: "Zorro Culpeo",
      scientificName: "Lycalopex culpaeus",
      type: "Mamífero",
      description: "El cánido más grande de Chile. Es un depredador oportunista frecuente de avistar en los senderos.",
      status: ConservationStatus.LC,
      // Image: Fox
      imageUrl: "https://images.unsplash.com/photo-1563404558501-14c1fa0b51c8?auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: "turca",
      commonName: "Turca",
      scientificName: "Pteroptochos megapodius",
      type: "Ave",
      description: "Ave endémica de Chile, caminadora y de canto potente y característico en las laderas rocosas.",
      status: ConservationStatus.LC,
      // Image: Brown bird on rock/ground (Representative)
      imageUrl: "https://images.unsplash.com/photo-1598448375685-782ae359942d?auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: "tenca",
      commonName: "Tenca",
      scientificName: "Mimus thenca",
      type: "Ave",
      description: "Ave de plumaje gris y larga cola, conocida por su hermoso y variado canto.",
      status: ConservationStatus.LC,
      // Image: Grey mockingbird-like bird
      imageUrl: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: "aguilucho",
      commonName: "Aguilucho",
      scientificName: "Geranoaetus polyosoma",
      type: "Ave",
      description: "Rapaz común en la zona, se le puede ver planeando sobre el valle buscando presas.",
      status: ConservationStatus.LC,
      // Image: Hawk/Bird of prey in flight
      imageUrl: "https://images.unsplash.com/photo-1589781682367-9d7502396105?auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: "degu",
      commonName: "Degú",
      scientificName: "Octodon degus",
      type: "Mamífero",
      description: "Roedor endémico de cola con pincel, diurno y muy social, vive en galerías subterráneas.",
      status: ConservationStatus.LC,
      // Image: Small brown rodent
      imageUrl: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80" 
    }
  ]
};

// Exporting as an array to maintain type compatibility if needed, 
// though the app will mainly use LA_CAMPANA_DATA directly.
export const CHILE_DATA: Region[] = [LA_CAMPANA_DATA];
