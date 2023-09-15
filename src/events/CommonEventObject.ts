/**
 * An object containing information common to all event objects, regardless of the host application.
 */
export type CommonEventObject = {
  /**
   * The user's language and country/region identifier in the format of ISO 639 language code-ISO 3166 country/region code. For example, en-US.
   */
  userLocale?: string

  /**
   * Indicates the host app the add-on is active in when the event object is generated. Possible values include the following:
   * GMAIL
   * CALENDAR
   * DRIVE
   */
  hostApp: 'GMAIL' | 'DRIVE' | 'CALENDAR'

  /**
   * Indicates where the event originates (`WEB`, `IOS`, or `ANDROID`)
   */
  platform: 'WEB' | 'IOS' | 'ANDROID'

  /**
   * The timezone ID and offset. To enable this field, you must set `addOns.common.useLocaleFromApp` to `true` in your add-on's manifest. Your add-on's scope list must also include `https://www.googleapis.com/auth/script.locale`
   * See https://developers.google.com/workspace/add-ons/how-tos/access-user-locale for more details
   */
  timeZone?: TimeZone

  /**
   * A map containing the current values of the widgets in the displayed card. The map keys are the string IDs assigned with each widget, and each value is another wrapper object with a single "" key.
   */
  formInputs?: Record<
    string,
    StringInputs | DateInput | DateTimeInput | TimeInput
  >

  /**
   * A map containing the current values of the parameters in the URL query string.
   */
  parameters?: Record<string, string>
}

/**
 * Input parameter for regular widgets.
 * For single-valued widgets, it will be a single value list; for
 * multi-valued widgets, such as checkbox, all the values are presented.
 */
export type StringInputs = {
  stringInputs?: {
    value: string[]
  }
}

/**
 * Input Parameter for Date Picker widget.
 */
export type DateInput = {
  dateInput?: {
    /**
     * The time selected by the user, in milliseconds since epoch (00:00:00 UTC on 1 January 1970).
     */
    msSinceEpoch: number
  }
}

/**
 * Input Parameter for Date and Time Picker widget.
 */
export type DateTimeInput = {
  dateTimeInput?: {
    /**
     * The time selected by the user, in milliseconds since epoch (00:00:00 UTC on 1 January 1970).
     */
    msSinceEpoch: number
    /**
     * true if the input date time includes a date; if false only a time is included.
     */
    hasDate: boolean
    /**
     * true if the input date time includes a time; if false only a date is included.
     */
    hasTime: boolean
  }
}

/**
 * Input Parameter for Time Picker widget.
 */
export type TimeInput = {
  timeInput?: {
    /**
     * The hour number selected by the user.
     */
    hours: number
    /**
     * The minute number selected by the user.
     */
    minutes: number
  }
}

/**
 * The timezone ID and offset. To enable this field, you must set `addOns.common.useLocaleFromApp` to `true` in your add-on's manifest. Your add-on's scope list must also include `https://www.googleapis.com/auth/script.locale`
 * See https://developers.google.com/workspace/add-ons/how-tos/access-user-locale for more details
 */
export type TimeZone = {
  /**
   * The timezone identifier of the user's timezone. Examples include: America/New_York, Europe/Vienna, and Asia/Seoul.
   */
  id?: string
  /**
   * The time offset from Coordinated Universal Time (UTC) of the user's timezone, measured in milliseconds.
   * See https://developers.google.com/workspace/add-ons/how-tos/access-user-locale for more details
   */
  offset?: number
}
