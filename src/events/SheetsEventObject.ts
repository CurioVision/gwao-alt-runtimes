/**
 * The Sheets event object is the portion of the overall event object that carries information about a user's Google Sheet and its contents. It's only present in an event object if the host application is Google Sheets.
 */
export type SheetsEventObject = {
  /**
   * The ID of the document open in the Sheets UI
   */
  id?: string

  /**
   * The title of the document open in the Sheets UI
   */
  title?: string

  /**
   * Whether or not the add-on has drive.file scope permission for this document.
   */
  addonHasFileScopePermission?: boolean
}
