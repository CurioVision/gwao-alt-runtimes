import { OnClick } from './OnClick'

export type CardAction = {
  /**
   * The label of the action that is displayed in the card ment
   */
  actionLabel: string
  /**
   * The action performed onClick
   */
  onClick: OnClick
}
