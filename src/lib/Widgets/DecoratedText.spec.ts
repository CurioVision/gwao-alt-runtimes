import { DecoratedText } from './DecoratedText'

const test: DecoratedText = {
  decoratedText: {
    icon: {
      knownIcon: 'EMAIL'
    },
    topLabel: 'Email Address',
    text: 'sasha@example.com',
    bottomLabel: 'This is a new Email address!',
    switchControl: {
      name: 'has_send_welcome_email_to_sasha',
      selected: false,
      controlType: 'CHECKBOX'
    }
  }
}
