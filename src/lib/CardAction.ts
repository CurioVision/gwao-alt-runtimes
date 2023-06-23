import { OnClick } from './OnClick'

/**\
 * A card action is the action associated with the card.
 * For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser.
 *
 * Not supported by Chat apps.
 */
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
