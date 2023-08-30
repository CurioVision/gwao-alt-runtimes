export type TextParagraph = {
  /**
   * Displays a text paragraph. Supports simple HTML formatted text.
   *
   * For more information about formatting text:
   *
   * @see https://developers.google.com/chat/api/guides/message-formats/cards#card_text_formatting Formatting text in Google Chat apps
   * @see https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting Formatting text in Google Workspace Add-ons.
   */
  textParagraph: TextParagraphMarkup
}

export type TextParagraphMarkup = {
  text: string
}
