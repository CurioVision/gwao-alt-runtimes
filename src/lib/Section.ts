import { Widget } from './Widgets'

export type Section = {
  header?: string
  widgets?: Widget[]
  collapsible?: boolean
  uncollapsibleWidgetsCount?: number
}
