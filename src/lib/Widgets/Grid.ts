import { BorderStyle } from '../BorderStyle'
import { OnClick } from '../OnClick'

/**
 * Displays a grid with a collection of items.
 *
 * A grid supports any number of columns and items.
 * The number of rows is determined by the upper bounds of the number items divided by the number of columns.
 * A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows.
 *
 * For responsive columns, or to include more than text or images, use Columns.
 */
export type Grid = {
  grid: GridMarkup
}

export type GridMarkup = {
  /**
   * The text that displays in the grid header.
   */
  title?: string

  /**
   * The items to display in the grid.
   */
  items?: GridItem[]

  /**
   * The style options for the border of a card or widget, including the border type and color.
   */
  borderStyle?: BorderStyle

  /**
   * The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).
   */
  columnCount?: number

  /**
   * This callback is reused by each individual grid item, but with the item's identifier and index in the items list added to the callback's parameters.
   */
  onClick?: OnClick
}

/**
 * Represents an item in a grid layout. Items can contain text, an image, or both text and an image.
 */
export type GridItem = {
  /**
   * A user-specified identifier for this grid item. This identifier is returned in the parent grid's onClick callback parameters.
   */
  id?: string

  /**
   * The image that displays in the grid item.
   */
  image?: ImageComponent

  /**
   * The grid item's title.
   */
  title?: string

  /**
   * The grid item's subtitle.
   */
  subtitle?: string

  /**
   * The layout to use for the grid item.
   *
   * NOTE: 'GRID_ITEM_LAYOUT_UNSPECIFIED' is deprecated. Don't use. Unspecified.
   */
  layout?: 'GRID_ITEM_LAYOUT_UNSPECIFIED' | 'TEXT_BELOW' | 'TEXT_ABOVE'

  /**
   * Not in the official docs, but it's in the example. I'm not sure of the available options aside from 'CENTER'.
   *
   * @see https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#grid
   */
  textAlignment?: 'CENTER'
}

/**
 * Represents an image.
 */
export type ImageComponent = {
  /**
   * The image URL.
   */
  imageUri: string

  /**
   * The accessibility label for the image.
   */
  altText?: string

  /**
   * The crop style to apply to the image.
   */
  cropStyle?: ImageCropStyle

  /**
   * The border style to apply to the image.
   */
  borderStyle?: BorderStyle
}

export type ImageCropStyle =
  | {
      /**
       * Represents the crop style applied to an image.
       *
       * NOTE: 'IMAGE_CROP_TYPE_UNSPECIFIED' is deprecated. Don't use. Unspecified.
       *
       * - SQUARE: Default value. Applies a square crop.
       * - CIRCLE: Applies a circular crop.
       * - RECTANGLE_4_3: Applies a rectangular crop with a 4:3 aspect ratio.
       */
      type:
        | 'IMAGE_CROP_TYPE_UNSPECIFIED'
        | 'SQUARE'
        | 'CIRCLE'
        | 'RECTANGLE_4_3'
    }
  | {
      /**
       * Represents the crop style applied to an image.
       *
       * - RECTANGLE_CUSTOM: Applies a rectangular crop with a custom aspect ratio. Set the custom aspect ratio with aspectRatio.
       */
      type: 'RECTANGLE_CUSTOM'

      /**
       * The aspect ratio to use if the crop type is RECTANGLE_CUSTOM.
       * For example, here's how to apply a 16:9 aspect ratio:
       * @example
       * cropStyle {
       *   "type": "RECTANGLE_CUSTOM",
       *   "aspectRatio": 16/9
       * }
       */
      aspectRatio: number
    }
