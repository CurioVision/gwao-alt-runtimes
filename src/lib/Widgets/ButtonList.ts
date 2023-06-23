import { Button } from '../Button'

/**
 * A list of buttons layed out horizontally.
 */
export type ButtonList = {
  buttonList: ButtonListMarkup
}

type ButtonListMarkup = {
  /**
   * An array of buttons.
   */
  buttons: Button[]
}
