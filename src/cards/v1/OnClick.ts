import { Action as ActionMarkup } from './Action'
import { Card as CardMarkup } from './Card'
import { OneOf } from '../../type-utils/OneOf'

export type OnClick = OneOf<Action | OpenLink | OpenDynamicLinkAction | Card>

/**
 * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
 */
type Action = {
  action: ActionMarkup
}

/**
 * If specified, this onClick triggers an open link action.
 */
type OpenLink = {
  openLink: OpenLinkMarkup
}

type OpenLinkMarkup = {
  url: string
  openAs?: 'FULL_SIZE' | 'OVERLAY'
  onClose?: 'NOTHING' | 'RELOAD'
}

/**
 * An add-on triggers this action when the action needs to open a link.
 *
 * This differs from the OpenLink above in that this needs to talk to server to get the link.
 * Thus some preparation work is required for web client to do before the open link action response comes back.
 */
type OpenDynamicLinkAction = {
  openDynamicLinkAction: ActionMarkup
}

/**
 * A new card is pushed to the card stack after clicking if specified.
 *
 * Supported by Google Workspace Add-ons, but not Chat apps.
 */
type Card = {
  card: CardMarkup
}
