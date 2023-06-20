import { OnClick } from '../OnClick'

export type Image = {
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
