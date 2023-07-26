import { Color } from './Color'
import { Icon } from './Icon'
import { OnClick } from './OnClick'

/**
 * A text, icon, or text and icon button that users can click.
 *
 * To make an image a clickable button, specify an Image (not an ImageComponent) and set an onClick action.
 */
export type Button = {
  /**
   * The text displayed inside the button.
   */
  text?: string

  /**
   * The icon image. If both icon and text are set, then the icon appears before the text.
   */
  icon?: Icon

  /**
   * If set, the button is filled with a solid background color and the font color changes to maintain contrast with the background color. For example, setting a blue background will likely result in white text.
   *
   * If unset, the image background is white and the font color is blue.
   */
  color?: Color

  /**
   * The action to perform when the button is clicked, such as opening a hyperlink or running a custom function.
   */
  onClick?: OnClick

  /**
   * If true, the button is displayed in an inactive state and doesn't respond to user actions.
   */
  disabled?: boolean

  /**
   * The alternative text used for accessibility.
   *
   * Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat".
   */
  altText?: string
}
