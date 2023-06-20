import { ButtonList } from './ButtonList'

const test: ButtonList = {
  buttonList: {
    buttons: [
      {
        text: 'Edit',
        color: {
          red: 0,
          green: 0,
          blue: 1,
          alpha: 1
        },
        disabled: true
      },
      {
        icon: {
          knownIcon: 'INVITE',
          altText: 'check calendar'
        },
        onClick: {
          openLink: {
            url: 'https://example.com/calendar'
          }
        }
      }
    ]
  }
}
