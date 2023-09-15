/**
 * The Gmail event object is the portion of the overall event object that carries information about a user's Gmail messages. It's only present in an event object if the host application is Gmail.
 */
export type GmailEventObject = {
  /**
   * The ID of the currently open Gmail message.
   */
  messageId?: string

  /**
   * The currently open Gmail thread ID.
   */
  threadId?: string

  /**
   * The Gmail-specific access token. You can use this token with the "X-Goog-Gmail-Access-Token" HTTP header to grant your add-on temporary access to a user's currently open Gmail message or let your add-on compose new drafts.
   */
  accessToken?: string

  /**
   * The list of "To:" recipient email addresses currently included in a draft the add-on is composing.
   */
  toRecipients?: string[]

  /**
   * The list of "CC:" recipient email addresses currently included in a draft the add-on is composing.
   */
  ccRecipients?: string[]

  /**
   * The list of "BCC:" recipient email addresses currently included in a draft the add-on is composing.
   */
  bccRecipients?: string[]
}
