import { ButtonList } from './ButtonList'
import { DecoratedText } from './DecoratedText'
import { Image } from './Image'
import { SelectionInput } from './SelectionInput'
import { TextInput } from './TextInput'
import { TextParagraph } from './TextParagraph'
import { DateTimePicker } from './DateTimePicker'
import { Divider } from './Divider'
import { Grid } from './Grid'

export type Widget = {
  /**
   * Specifies whether widgets align to the left, center, or right of a column.
   */
  horizontalAlignment?: 'START' | 'CENTER' | 'END'
} & WidgetTypes

type WidgetTypes =
  | ButtonList
  // | Columns // TODO: Add columns https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#columns
  | DateTimePicker
  | DecoratedText
  | Divider
  | Grid
  | Image
  | SelectionInput
  | TextInput
  | TextParagraph
