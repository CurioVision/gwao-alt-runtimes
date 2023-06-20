import { ImageType } from './ImageType'

export type CardHeader = {
  title: string
  subtitle?: string
  imageType?: ImageType
  imageUrl?: string
  imageAltText?: string
}
