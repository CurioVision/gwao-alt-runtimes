import { Widget } from './Widgets/Widget'

/**
 * A section contains a collection of widgets that are rendered vertically in the order that they're specified.
 */
export type Section = {
  /**
   * Text that appears at the top of a section. Supports simple HTML formatted text.
   *
   * For more information about formatting text, see:
   *
   *   - [Formatting text in Google Chat apps](https://developers.google.com/chat/api/guides/message-formats/cards#card_text_formatting)
   *   - [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting)
   */
  header?: string

  /**
   * All the widgets in the section. Must contain at least one widget.
   */
  widgets?: Widget[]

  /**
   * Indicates whether this section is collapsible.
   *
   * Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking Show more. Users can hide the widgets again by clicking Show less.
   *
   * To determine which widgets are hidden, specify uncollapsibleWidgetsCount.
   */
  collapsible?: boolean

  /**
   * The number of uncollapsible widgets which remain visible even when a section is collapsed.
   *
   * For example, when a section contains five widgets and the uncollapsibleWidgetsCount is set to 2,
   * the first two widgets are always shown and the last three are collapsed by default.
   * The uncollapsibleWidgetsCount is taken into account only when collapsible is true.
   */
  uncollapsibleWidgetsCount?: number
}
