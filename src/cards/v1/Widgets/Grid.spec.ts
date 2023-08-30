import { Grid } from './Grid'

const test: Grid = {
  grid: {
    title: 'A fine collection of items',
    columnCount: 2,
    borderStyle: {
      type: 'STROKE',
      cornerRadius: 4
    },
    items: [
      {
        image: {
          imageUri: 'https://www.example.com/image.png',
          cropStyle: {
            type: 'SQUARE'
          },
          borderStyle: {
            type: 'STROKE'
          }
        },
        title: 'An item',
        textAlignment: 'CENTER'
      }
    ],
    onClick: {
      openLink: {
        url: 'https://www.example.com'
      }
    }
  }
}
