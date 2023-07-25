import { Action } from '../Action'

/**
 * Lets users input a date, a time, or both a date and a time.
 *
 * Users can input text or use the picker to select dates and times.
 * If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly.
 */
export type DateTimePicker = {
  /**
   * The name by which the DateTimePicker is identified in a form input event.
   */
  name: string

  /**
   * The text that prompts users to input a date, a time, or a date and time.
   *
   * For example, if users are scheduling an appointment, use a label such as Appointment date or Appointment date and time.
   */
  label: string

  /**
   * Whether the widget supports inputting a date, a time, or the date and time.
   */
  type: 'DATE' | 'TIME' | 'DATE_AND_TIME'

  /**
   * The default value displayed in the widget, in milliseconds since Unix epoch time.
   *
   * Specify the value based on the type of picker:
   *
   * DATE_AND_TIME: a calendar date and time in UTC. For example, to represent January 1, 2023 at 12:00 PM UTC, use 1672574400000.
   * DATE_ONLY: a calendar date at 00:00:00 UTC. For example, to represent January 1, 2023, use 1672531200000.
   * TIME_ONLY: a time in UTC. For example, to represent 12:00 PM, use 43200000 (or 12 * 60 * 60 * 1000).
   */
  valueMsEpoch?: number

  /**
   * The number representing the time zone offset from UTC, in minutes. If set, the value_ms_epoch is displayed in the specified time zone. If unset, the value defaults to the user's time zone setting.
   */
  timezoneOffsetDate?: number

  /**
   * Triggered when the user clicks Save or Clear from the DateTimePicker interface.
   */
  onChangeAction?: Action
}
