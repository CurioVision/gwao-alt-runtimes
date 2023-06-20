import { Action as ActionMarkup } from './Action'
import { Card } from './Card'
import { OneOf } from './type-utils/OneOf'

export type OnClick = OneOf<Action | OpenLink | OpenDynamicLinkAction | Card>

/**
 * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
 */
export type Action = {
  action: ActionMarkup
}

/**
 * If specified, this onClick triggers an open link action.
 */
export type OpenLink = {
  openLink: OpenLinkMarkup
}

export type OpenLinkMarkup = {
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
export type OpenDynamicLinkAction = {
  openDynamicLinkAction: ActionMarkup
}
