export type StringInputs = {
  stringInputs?: {
    value: string[]
  }
}

export type DateInput = {
  dateInput?: {
    msSinceEpoch: number
  }
}

export type DateTimeInput = {
  dateTimeInput?: {
    msSinceEpoch: number
    hasDate: boolean
    hasTime: boolean
  }
}

export type TimeInput = {
  timeInput?: {
    hours: number
    minutes: number
  }
}

export type CommonEventObject = {
  hostApp: 'GMAIL' | 'DRIVE' | 'CALENDAR'
  platform: 'WEB' | 'IOS' | 'ANDROID'

  formInputs?: Record<
    string,
    StringInputs | DateInput | DateTimeInput | TimeInput
  >
}
