import { ButtonList } from './ButtonList'
import { DecoratedText } from './DecoratedText'
import { Image } from './Image'
import { SelectionInput } from './SelectionInput'
import { TextInput } from './TextInput'
import { TextParagraph } from './TextParagraph'
import { DateTimePicker } from './DateTimePicker'
import { Divider } from './Divider'

export type Widget = {
  /**
   * Specifies whether widgets align to the left, center, or right of a column.
   */
  horizontalAlignment?: 'START' | 'CENTER' | 'END'
} & WidgetTypes

type WidgetTypes =
  | TextParagraph
  | Image
  | DecoratedText
  | ButtonList
  | TextInput
  | SelectionInput
  | DateTimePicker
  | Divider
// | Grid
// | Columns
