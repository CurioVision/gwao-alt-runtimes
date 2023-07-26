import { Color } from './Color'

/**
 * The style options for the border of a card or widget, including the border type and color.
 */
export type BorderStyle = {
  /**
   * The border type.
   */
  type: BorderType

  /**
   * The colors to use when the type is BORDER_TYPE_STROKE.
   */
  strokeColor?: Color

  /**
   * The corner radius for the border.
   */
  cornerRadius?: number
}

/**
 * Represents the border types applied to widgets.
 *
 *  - BORDER_TYPE_UNSPECIFIED: Don't use. Unspecified.
 *  - NO_BORDER: Default value. No border.
 *  - STROKE: Outline.
 */
export type BorderType =
  // Don't use. Unspecified.
  | 'BORDER_TYPE_UNSPECIFIED'
  // Default value. No border.
  | 'NO_BORDER'
  // Outline.
  | 'STROKE'
