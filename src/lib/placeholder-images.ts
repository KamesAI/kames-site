type PlaceholderImage = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
};

const data: PlaceholderImage[] = [
  {
    id: "hero-background",
    description: "Panorama urbain vibrant au coucher du soleil avec des tons chauds et une ambiance futuriste",
    imageUrl: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1920&q=80",
    imageHint: "sunset city skyline"
  },
  {
    id: "about-background",
    description: "Réseau complexe de données et de signaux lumineux se déplaçant dans un espace sombre.",
    imageUrl: "https://picsum.photos/seed/data-network/1920/1080",
    imageHint: "data network"
  }
];

export default data;
export const PlaceHolderImages = data;
