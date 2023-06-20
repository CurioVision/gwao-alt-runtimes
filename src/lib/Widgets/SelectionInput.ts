import { Action } from '../Action'

export type SelectionInput = {
  selectionInput: SelectionInputMarkup
}

type SelectionInputMarkup = {
  /**
   * The name that identifies the selection input in a form input event.
   */
  name?: string

  /**
   * The text that appears above the selection input field in the user interface.
   */
  label?: string

  /**
   * The type of items that are displayed to users in a SelectionInput widget.
   */
  type?: SelectionType

  /**
   * An array of selectable items. For example, an array of radio buttons or checkboxes. Supports up to 100 items.
   */
  items?: SelectionItem[]

  /**
   * If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button that submits the form.
   */
  onChangeAction?: Action
}

type SelectionType = 'CHECK_BOX' | 'RADIO_BUTTON' | 'SWITCH' | 'DROPDOWN'

type SelectionItem = {
  /**
   * The text that identifies or describes the item to users.
   */
  text?: string

  /**
   * The value associated with this item. The client should use this as a form input value.
   */
  value?: string

  /**
   * When true, more than one item is selected. If more than one item is selected for radio buttons and dropdown menus, the first selected item is received and the ones after are ignored.
   */
  selected?: boolean
}
