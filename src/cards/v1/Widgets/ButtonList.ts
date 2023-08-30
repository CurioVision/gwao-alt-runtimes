import { Button } from '../Button'

export type ButtonList = {
  /**
   * A list of buttons layed out horizontally.
   */
  buttonList: ButtonListMarkup
}

type ButtonListMarkup = {
  /**
   * An array of buttons.
   */
  buttons: Button[]
}
