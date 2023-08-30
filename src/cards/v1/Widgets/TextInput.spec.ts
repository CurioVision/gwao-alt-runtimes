import { TextInput } from './TextInput'

const test: TextInput = {
  textInput: {
    name: 'preferred_programing_language',
    label: 'Preferred Language',
    initialSuggestions: {
      items: [
        {
          text: 'C++'
        },
        {
          text: 'Java'
        },
        {
          text: 'JavaScript'
        },
        {
          text: 'Python'
        }
      ]
    }
  }
}

const anotherTest: TextInput = {
  textInput: {
    name: 'mailing_address',
    label: 'Mailing Address'
  }
}
