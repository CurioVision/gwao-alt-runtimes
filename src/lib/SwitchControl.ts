import { Action } from './Action'

export type SwitchControl = {
  /**
   * The name of the switch control.
   */
  name: string

  value?: string

  /**
   * When true, the switch is selected.
   */
  selected?: boolean

  /**
   * The action to perform when the switch state is changed, such as what function to run.
   */
  onChangeAction?: Action

  /**
   * How the switch appears in the user interface.
   *
   * NOTE: CHECKBOX is deprecated. Use CHECK_BOX instead.
   */
  controlType?: 'SWITCH' | 'CHECK_BOX' | 'CHECKBOX'
}
