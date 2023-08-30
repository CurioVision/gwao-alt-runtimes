import { OnClick } from '../OnClick'

export type Image = {
  /**
   * An image that is specified by a URL and can have an onClick action.
   */
  image: ImageMarkup
}

type ImageMarkup = {
  /**
   * The https URL that hosts the image.
   */
  imageUrl: string

  /**
   * When a user clicks on the image, the click triggers this action.
   */
  onClick?: OnClick

  /**
   * The alternative text of this image, used for accessibility.
   */
  altText: string
}
