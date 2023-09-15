import { AuthorizationEventObject } from './AuthorizationEventObject'
import { CalendarEventObject } from './CalendarEventObject'
import { CommonEventObject } from './CommonEventObject'
import { DocsEventObject } from './DocsEventObject'
import { DriveEventObject } from './DriveEventObject'
import { GmailEventObject } from './GmailEventObject'
import { SheetsEventObject } from './SheetsEventObject'
import { SlidesEventObject } from './SlidesEventObject'

/**
 * Event objects are JSON structures that are automatically constructed and passed as parameters to trigger or callback functions when a user interacts with an add-on (https://developers.google.com/workspace/add-ons/concepts/event-objects)
 */
export type EventObject = {
  /**
   * An object containing information common to all event objects, regardless of the host application.
   */
  commonEventObject: CommonEventObject

  /**
   * Set for requests to HTTP endpoints
   */
  authorizationEventObject?: AuthorizationEventObject

  /**
   * An object containing Gmail information.
   */
  gmail?: GmailEventObject

  /**
   * An object containing Drive information.
   */
  drive?: DriveEventObject

  /**
   * An object containing Docs information.
   */
  docs?: DocsEventObject

  /**
   * An object containing Sheets information.
   */
  sheets?: SheetsEventObject

  /**
   * An object containing Slides information.
   */
  slides?: SlidesEventObject

  /**
   * An object containing calendar and event information.
   */
  calendar?: CalendarEventObject
}
