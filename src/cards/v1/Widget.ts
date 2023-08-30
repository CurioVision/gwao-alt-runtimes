import { ButtonList } from './Widgets/ButtonList'
import { DecoratedText } from './Widgets/DecoratedText'
import { Image } from './Widgets/Image'
import { SelectionInput } from './Widgets/SelectionInput'
import { TextInput } from './Widgets/TextInput'
import { TextParagraph } from './Widgets/TextParagraph'
import { DateTimePicker } from './Widgets/DateTimePicker'
import { Divider } from './Widgets/Divider'
import { Grid } from './Widgets/Grid'

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
