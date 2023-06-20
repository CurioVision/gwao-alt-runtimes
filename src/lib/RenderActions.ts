import { Navigation } from './Navigation'
import { Notification } from './Notification'

/**
 * A set of render instructions that tells a card to perform an action and/or tells the add-on host app to perform an app-specific action.
 */
export type RenderActions = {
  action?: Action

  /**
   * Actions handled by individual host apps.
   */
  hostAppAction?: any //HostAppActionMarkup //TODO: Add HostAppActionMarkup type

  /**
   * This is a no-op schema field that might be present in the markup for syntax checking.
   */
  schema?: string
}

export type Action = {
  /**
   * Push, pop, or update displayed cards.
   */
  navigations?: Navigation[]

  /**
   * Immediately open the target link in a new tab or a pop-up.
   */
  link?: any //OpenLink // TODO: Add OpenLink type

  /**
   * Display a notification to the end-user.
   */
  notification?: Notification
}
