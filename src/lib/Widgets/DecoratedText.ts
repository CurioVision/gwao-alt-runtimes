import { Action } from '../Action'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { OnClick } from '../OnClick'
import { SwitchControl } from '../SwitchControl'
import { OneOf } from '../type-utils/OneOf'

export type DecoratedText = {
  /**
   * A widget that displays text with optional decorations such as a label above or below the text,
   * an icon in front of the text, a selection widget, or a button after the text.
   */
  decoratedText: DecoratedTextMarkup
}

type DecoratedTextMarkup = {
  /**
   * @deprecated Deprecated in favor of startIcon.
   */
  icon?: Icon

  /**
   * The icon displayed in front of the text.
   */
  startIcon?: Icon

  /**
   * The text that appears above text. Always truncates.
   */
  topLabel?: string

  /**
   * Required. The primary text.
   *
   * Supports simple formatting.
   *
   * @see https://developers.google.com/chat/api/guides/message-formats/cards#card_text_formatting for Chat
   * @see https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting for Google Workspace Add-ons
   */
  text: string

  /**
   * The wrap text setting. If true, the text wraps and displays on multiple lines. Otherwise, the text is truncated.
   *
   * Only applies to text, not topLabel and bottomLabel.
   */
  wrapText?: boolean

  /**
   * The text that appears below text. Always truncates.
   */
  bottomLabel?: string

  /**
   * When users click on topLabel or bottomLabel, this action triggers.
   */
  onClick?: OnClick
} & OneOf<
  | {
      /**
       * A button that appears to the right-hand side of text in the decoratedText widget.
       *
       * NOTE: Cannot be used with switchControl or endIcon.
       */
      button?: Button
    }
  | {
      /**
       * A switch or checkbox that appears to the right-hand side of text in the decoratedText widget.
       *
       * NOTE: Cannot be used with button or endIcon.
       */
      switchControl?: SwitchControl
    }
  | {
      /**
       * An image that appears to the right-hand side of text in the decoratedText widget.
       *
       * NOTE: Cannot be used with button or switchControl.
       */
      endIcon?: Icon
    }
  | {
      /**
       * An action that executes when the object is clicked.
       */
      action: Action
    }
>
