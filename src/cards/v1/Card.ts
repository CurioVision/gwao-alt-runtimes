import { CardAction } from './CardAction'
import { CardHeader } from './CardHeader'
import { Section } from './Section'

/**
 * Cards support a defined layout, interactive UI elements like buttons, and rich media like images.
 * Use cards to present detailed information, gather information from users, and guide users to take a next step.
 */
export type Card = {
  /**
   * The header of the card. A header usually contains a leading image and a title. Headers always appear at the top of a card.
   */
  header?: CardHeader

  /**
   * Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider.
   */
  sections?: Section[]

  /**
   * The card's actions. Actions are added to the card's toolbar menu.
   *
   * Because Chat app cards have no toolbar, cardActions[] isn't supported by Chat apps.
   */
  cardActions?: CardAction[]

  /**
   * Name of the card. Used as a card identifier in card navigation.
   *
   * Because Chat apps don't support card navigation, they ignore this field.
   */
  name?: string

  /**
   * The fixed footer shown at the bottom of this card.
   *
   * Setting fixedFooter without specifying a primaryButton or a secondaryButton causes an error.
   *
   * Supported by Google Workspace Add-ons and Chat apps. For Chat apps, you can use fixed footers in dialogs, but not card messages.
   */
  fixedFooter?: any //CardFixedFooter //TODO: Add CardFixedFooter type

  /**
   * In Google Workspace add-ons, sets the display properties of the peekCardHeader.
   *
   * Not supported by Chat apps.
   */
  displayStyle?: any //DisplayStyle //TODO: Add DisplayStyle type

  /**
   * When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
   *
   * Not supported by Chat apps.
   */
  peekCardHeader?: any //IonCardHeader //TODO: Add IonCardHeader type
}
