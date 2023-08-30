import { ImageType } from './ImageType'

/**
 * Represents a card header.
 */
export type CardHeader = {
  /**
   * The title of the card header.
   *
   * The header has a fixed height:
   *   - If both a title and subtitle are specified, each takes up one line.
   *   - If only the title is specified, it takes up both lines.
   */
  title: string

  /**
   * The subtitle of the card header. If specified, appears on its own line below the title.
   */
  subtitle?: string

  /**
   * The shape used to crop the image.
   */
  imageType?: ImageType

  /**
   * The HTTPS URL of the image in the card header.
   */
  imageUrl?: string

  /**
   * The alternative text of this image that's used for accessibility.
   */
  imageAltText?: string
}
