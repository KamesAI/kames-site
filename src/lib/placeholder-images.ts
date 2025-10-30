type PlaceholderImage = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
};

const data: PlaceholderImage[] = [
  {
    id: "hero-background",
    description: "Sombre, paysage de montagne élégant pour l'arrière-plan du héros",
    imageUrl: "https://picsum.photos/seed/epic-dark-mountain/1920/1080",
    imageHint: "dark mountain"
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
