import { OneOf } from './type-utils/OneOf'
import { Card } from './Card'

/**
 * Card action that manipulates the card stack.
 */
export type Navigation = OneOf<
  | {
      /**
       * Card stack pops all cards off except the root card.
       */
      popToRoot: boolean
    }
  | {
      /**
       * Card stack pops one card off.
       */
      pop: boolean
    }
  | {
      /**
       * Card stack pops all cards above the specified card with given card name.
       */
      popToCard: string
    }
  | {
      /**
       * Card stack pushes a card onto the stack.
       */
      pushCard: Card
    }
  | {
      /**
       * Card stack updates the top card with a new card and preserves filled form fields values. For a non-equivalent field, the value is dropped.
       */
      updateCard: Card
    }
>
