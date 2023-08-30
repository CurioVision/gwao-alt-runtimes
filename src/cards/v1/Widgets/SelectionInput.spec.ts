import { SelectionInput } from './SelectionInput'

const test: SelectionInput = {
  selectionInput: {
    name: 'size',
    label: 'Size',
    type: 'DROPDOWN',
    items: [
      {
        text: 'S',
        value: 'small',
        selected: false
      },
      {
        text: 'M',
        value: 'medium',
        selected: true
      },
      {
        text: 'L',
        value: 'large',
        selected: false
      },
      {
        text: 'XL',
        value: 'extra_large',
        selected: false
      }
    ]
  }
}
