import { CardAction } from './CardAction'
import { CardHeader } from './CardHeader'
import { Section } from './Section'

export type Card = {
  header?: CardHeader
  sections?: Section[]
  cardActions?: CardAction[]
  name?: string
  fixedFooter?: any //CardFixedFooter //TODO: Add CardFixedFooter type
  displayStyle?: any //DisplayStyle //TODO: Add DisplayStyle type
  peekCardHeader?: any //IonCardHeader //TODO: Add IonCardHeader type
}
