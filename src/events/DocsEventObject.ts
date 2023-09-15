/**
 * The Docs event object is the portion of the overall event object that carries information about a user's Google Docs document. It's only present in an event object if the host application is Google Docs.
 */
export type DocsEventObject = {
  /**
   * The ID of the document open in the Docs UI
   */
  id?: string

  /**
   * The title of the document open in the Docs UI
   */
  title?: string

  /**
   * Object that contains the URL that matches the pattern set in the link preview trigger.
   */
  matchedUrl?: {
    /**
     * URL that matches the pattern set in the link preview trigger.
     */
    url: string
  }

  /**
   * Whether or not the add-on has drive.file scope permission for this document.
   */
  addonHasFileScopePermission?: boolean
}
