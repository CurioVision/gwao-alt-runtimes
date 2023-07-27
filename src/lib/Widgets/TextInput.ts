import { Action } from '../Action'
import { Suggestions } from '../Suggestions'

export type TextInput = {
  /**
   * A field in which users can enter text. Supports suggestions and on-change actions.
   *
   * Chat apps receive and can process the value of entered text during form input events.
   * For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
   *
   * When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget.
   */
  textInput: TextInputMarkup
}

type TextInputMarkup = {
  /**
   * The name by which the text input is identified in a form input event.
   */
  name: string

  /**
   * The text that appears above the text input field in the user interface.
   *
   * Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write "surname" instead of "name".
   *
   * Required if hintText is unspecified. Otherwise, optional.
   */
  label?: string

  /**
   * Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible.
   *
   * Required if label is unspecified. Otherwise, optional.
   */
  hintText?: string

  /**
   * The value entered by a user, returned as part of a form input event.
   */
  value?: string

  /**
   * How a text input field appears in the user interface. For example, whether the field is single or multi-line.
   */
  type?: 'SINGLE_LINE' | 'MULTIPLE_LINE'

  /**
   * What to do when a change occurs in the text input field.
   *
   * Examples of changes include a user adding to the field, or deleting text.
   *
   * Examples of actions to take include running a custom function or opening a dialog in Google Chat.
   */
  onChangeAction?: Action

  /**
   * Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed.
   *
   * For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing "Jav", the list of suggestions filters to show just Java and JavaScript.
   *
   * Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter "javascript" and others "java script". Suggesting "JavaScript" can standardize how users interact with your app.
   *
   * When specified, TextInput.type is always SINGLE_LINE, even if it is set to MULTIPLE_LINE.
   */
  initialSuggestions?: Suggestions

  /**
   * Optional. Specify what action to take when the text input field provides suggestions to users who interact with it.
   *
   * If unspecified, the suggestions are set by initialSuggestions and are processed by the client.
   *
   * If specified, the app takes the action specified here, such as running a custom function.
   *
   * Supported by Google Workspace Add-ons, but not Chat apps.
   */
  autoCompleteAction?: Action
}
