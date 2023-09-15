/**
 * The Slides event object is the portion of the overall event object that carries information about a user's Google Slides document. It's only present in an event object if the host application is Google Slides.
 */
export type SlidesEventObject = {
  /**
   * The ID of the document open in the Slides UI
   */
  id?: string

  /**
   * The title of the document open in the Slides UI
   */
  title?: string

  /**
   * Whether or not the add-on has drive.file scope permission for this document.
   */
  addonHasFileScopePermission?: boolean
}
