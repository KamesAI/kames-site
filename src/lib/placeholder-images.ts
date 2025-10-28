import data from './placeholder-images.json' assert { type: 'json' }

export type PlaceholderImage = {
  id: string
  description: string
  imageUrl: string
  imageHint?: string
}

export const placeholderImages =
  (data as { placeholderImages: PlaceholderImage[] }).placeholderImages
