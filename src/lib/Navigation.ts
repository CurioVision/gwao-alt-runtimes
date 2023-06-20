import { OneOf } from './type-utils/OneOf'
import { Card } from './Card'

export type Navigation = OneOf<
  | { popToRoot: boolean }
  | { pop: boolean }
  | { popToCard: string }
  | { pushCard: Card }
  | { updateCard: Card }
>
