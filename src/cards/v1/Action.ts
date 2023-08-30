type ActionParameter = {
  key: string
  value: string
}

/**
 * An action that describes the behavior when the form is submitted.
 * For example, you can invoke an Apps Script script to handle the form.
 * If the action is triggered, the form values are sent to the server.
 */
export type Action = {
  /**
   * A custom function to invoke when the containing element is clicked or othrwise activated.
   * For example usage, @see https://developers.google.com/chat/api/guides/message-formats/cards
   */
  function?: string

  /**
   * List of action parameters.
   */
  parameters?: ActionParameter[]

  /**
   * Specifies the loading indicator that the action displays while making the call to the action.
   */
  loadIndicator?: 'NONE' | 'SPINNER'

  /**
   * Indicates whether form values persist after the action. The default value is false.
   *   - If true, form values remain after the action is triggered.
   *     To let the user make changes while the action is being processed, set LoadIndicator to NONE.
   *     For card messages in Chat apps, you must also set the action's ResponseType to UPDATE_MESSAGE and use the same card_id from the card that contained the action.
   *   - If false, the form values are cleared when the action is triggered.
   *     To prevent the user from making changes while the action is being processed, set LoadIndicator to SPINNER.
   */
  persistValues?: boolean

  /**
   * Optional. Required when opening a dialog.
   *
   * What to do in response to an interaction with a user, such as a user clicking button on a card message.
   *
   * If unspecified, the app responds by executing an action - like opening a link or running a function - as normal.
   *
   * By specifying an interaction, the app can respond in special interactive ways. For example, by setting interaction to OPEN_DIALOG, the app can open a dialog.
   *
   * When specified, a loading indicator is not shown.
   *
   * Supported by Chat apps, but not Google Workspace Add-ons. If specified for an add-on, the entire card is stripped and nothing is shown in the client.
   */
  interaction?: 'INTERACTION_UNSPECIFIED' | 'OPEN_DIALOG'
}
