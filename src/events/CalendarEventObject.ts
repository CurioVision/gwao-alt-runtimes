/**
 * The Calendar event object is the portion of the overall event object that carries information about a user's calendar and calendar events. It's only present in an event object if the host application is Google Calendar.
 */
export type CalendarEventObject = {
  /**
   * The event ID.
   */
  id?: string

  /**
   * The ID of a recurring event.
   */
  recurringEventId?: string

  /**
   * The calendar ID.
   */
  calendarId?: string

  /**
   * An object representing the organizer of the event.
   */
  organizer?: {
    /**
     * The event organizer's email address.
     */
    email?: string
  }

  /**
   * A list of the attendees of the calendar event.
   */
  attendees?: Attendee[]

  /**
   * An object representing any conference data associated with this event, such as Google Meet conference details.
   */
  conferenceData?: ConferenceData

  /**
   * An object describing the capabilities of the add-on to view or update event information.
   */
  capabilities?: {
    /**
     * true if the add-on can read the event attendee list; false otherwise.
     */
    canSeeAttendees?: boolean

    /**
     * true if the add-on can add new attendees to the event attendee list; false otherwise.
     */
    canAddAttendees?: boolean

    /**
     * true if the add-on can read the event conference data; false otherwise.
     */
    canSeeConferenceData?: boolean

    /**
     * true if the add-on can update the event conference data; false otherwise.
     */
    canSetConferenceData?: boolean
  }
}

/**
 * An object representing an attendee of a calendar event.
 */
type Attendee = {
  /**
   * The attendee email address.
   */
  email?: string

  /**
   * true if the attendance for this attendee is marked as optional; false otherwise.
   */
  optional?: boolean

  /**
   * The attendee displayed name.
   */
  displayName?: string

  /**
   * true if the attendee is an organizer for this event.
   */
  organizer?: boolean

  /**
   * true if this attendee represents the calendar in which this event appears; false otherwise.
   */
  self?: boolean

  /**
   * true if the attendee represents a resource, such as room or piece of equipment; false otherwise.
   */
  resource?: boolean

  /**
   * The attendee's response status. Possible values include the following:
   * accepted: The attendee has accepted the event invitation.
   * declined: The attendee has declined the event invitation.
   * needsAction: The attendee has not responded to the event invitation.
   * tentative: The attendee has tentatively accepted the event invitation.
   */
  responseStatus?: string

  /**
   * The attendee's response comment, if any.
   */
  comment?: string

  /**
   * The number of additional guests the attendee had indicated they are bringing. Defaults to zero.
   */
  additionalGuests?: number
}

/**
 * An object representing any conference data associated with a calendar event, such as Google Meet conference details.
 */
type ConferenceData = {
  /**
   * The ID of the conference. This ID is meant to allow applications to keep track of conferences; you shouldn't display this ID to users.
   */
  conferenceId?: string

  /**
   * An object representing the conference solution, such as Hangouts or Google Meet.
   */
  conferenceSolution?: {
    /**
     * The URI for the user-visible icon representing this conference solution.
     */
    iconUri?: string

    /**
     * The key which uniquely identifies the conference solution for this event.
     */
    key?: {
      /**
       * The conference solution type. Possible values include the following:
       * eventHangout for Hangouts for consumers (http://hangouts.google.com).
       * eventNamedHangout for classic Hangouts for Google Workspace users (http://hangouts.google.com).
       * hangoutsMeet for Google Meet (http://meet.google.com).
       */
      type?: string
    }

    /**
     * The user-visible name of this conference solution (not localized).
     */
    name?: string
  }

  /**
   * The list of conference entry points, such as URLs or phone numbers.
   */
  entryPoints?: EntryPoint[]

  /**
   * Additional notes (such as instructions from the domain administrator or legal notices) about the conference to display to the user. Can contain HTML. The maximum length is 2048 characters.
   */
  notes?: string

  /**
   * An object containing a map of defined parameter data for use by the add-on.
   */
  parameters?: {
    /**
     * A map of parameter string keys and values. These keys and values are defined by the add-on developer to attach information to a specific conference for the add-on's use.
     */
    addOnParameters?: {
      parameters?: {
        [key: string]: string
      }
    }
  }
}

/**
 * Entry point objects carry information about the established means of accessing a given conference, such as by phone or video. This information is present in the event object if and only if the data is present in the Calendar event and the add-on sets its addOns.calendar.currentEventAccess manifest (https://developers.google.com/workspace/add-ons/concepts/manifests#calendar_fields) field to READ or READ_WRITE.
 */
type EntryPoint = {
  /**
   * The access code used to access the conference. The maximum length is 128 characters. Conference providers typically only use a subset of {accessCode, meetingCode, passcode, password, pin} to provide access to conferences. Match and only ever display the fields the conference provider uses.
   */
  accessCode?: string

  /**
   * Features of the entry point. Currently these features only apply to phone entry points:
   * toll: The entry point is a toll phone call.
   * toll_free: The entry point is a toll-free phone call.
   */
  entryPointFeatures?: string[]

  /**
   * The type of entry point. Possible values are the following:
   * more: Additional conference joining instructions, such as alternate phone numbers. A conference can only have one more entry point; if present at least one other type of entry point is also required.
   * phone: Join the conference via a phone number. A conference can have zero or more phone entry points. Google Calendar only displays the first two phone entry points, after formatting and sorting alphabetically.
   * sip: Join the conference over SIP. A conference can have at most one sip entry point.
   * video: Join the conference over HTTP. A conference can have at most one video entry point.
   */
  entryPointType?: string

  /**
   * The user-visible label for the entry point URI (not localized).
   */
  label?: string

  /**
   * The meeting code used to access the conference. The maximum length is 128 characters. Conference providers typically only use a subset of {accessCode, meetingCode, passcode, password, pin} to provide access to conferences. Match and only ever display the fields the conference provider uses.
   */
  meetingCode?: string

  /**
   * The passcode used to access the conference. The maximum length is 128 characters. Conference providers typically only use a subset of {accessCode, meetingCode, passcode, password, pin} to provide access to conferences. Match and only ever display the fields the conference provider uses.
   */
  passcode?: string

  /**
   * The password used to access the conference. The maximum length is 128 characters. Conference providers typically only use a subset of {accessCode, meetingCode, passcode, password, pin} to provide access to conferences. Match and only ever display the fields the conference provider uses.
   */
  password?: string

  /**
   * The PIN used to access the conference. The maximum length is 128 characters. Conference providers typically only use a subset of {accessCode, meetingCode, passcode, password, pin} to provide access to conferences. Match and only ever display the fields the conference provider uses.
   */
  pin?: string

  /**
   * Region code of the phone number. Needed by users if the URI doesn't include a country code. Values are based on the public CLDR list of region codes (http://cldr.unicode.org/translation/country-names).
   */
  regionCode?: string

  /**
   * The URI of the entry point. The maximum length is 1300 characters. The formatting depends on the entry point type:
   * more: A http: or https: schema is required.
   * phone: A tel: schema is required. The URI should include the entire dial sequence (for example, "tel:+12345678900,,,12345678;1234").
   * sip: A sip: or sips: schema is required. For example "sip:12345678@myprovider.com".
   * video: A http: or https: schema is required.
   */
  uri?: string
}
