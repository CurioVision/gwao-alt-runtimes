/**
 * The Drive event object is the portion of the overall event object that carries information about a user's Google Drive and its contents. It's only present in an event object if the host application is Google Drive.
 */
export type DriveEventObject = {
  /**
   * The Drive item currently active.
   */
  activeCursorItem?: DriveItemMetaData

  /**
   * A list of items (files or folders) selected in Drive.
   */
  selectedItems?: DriveItemMetaData[]
}

type DriveItemMetaData = {
  /**
   * The ID of the selected item.
   */
  id?: string

  /**
   * The URL of the icon that represents the selected item.
   */
  iconUrl?: string

  /**
   * The MIME type of the selected item.
   */
  mimeType?: string

  /**
   * The title of the selected item.
   */
  title?: string

  /**
   * If true, the add-on has requested and received https://www.googleapis.com/auth/drive.file scope authorization for this item; otherwise this field is false.
   */
  addonHasFileScopePermission?: boolean
}
