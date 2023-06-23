import { ImageType } from './ImageType'
import { OneOf } from './type-utils/OneOf'

type IconUrl = {
  /**
   * Display a custom icon hosted at an HTTPS URL.
   *
   * Supported file types include .png and .jpg.
   */
  iconUrl: string
}

type KnownIcon = {
  /**
   * Display one of the built-in icons provided by Google Workspace.
   *
   * @see https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons
   */
  knownIcon:
    | 'AIRPLANE'
    | 'BOOKMARK'
    | 'BUS'
    | 'CAR'
    | 'CLOCK'
    | 'CONFIRMATION_NUMBER_ICON'
    | 'DESCRIPTION'
    | 'DOLLAR'
    | 'EMAIL'
    | 'EVENT_SEAT'
    | 'FLIGHT_ARRIVAL'
    | 'FLIGHT_DEPARTURE'
    | 'HOTEL'
    | 'HOTEL_ROOM_TYPE'
    | 'INVITE'
    | 'MAP_PIN'
    | 'MEMBERSHIP'
    | 'MULTIPLE_PEOPLE'
    | 'PERSON'
    | 'PHONE'
    | 'RESTAURANT_ICON'
    | 'SHOPPING_CART'
    | 'STAR'
    | 'STORE'
    | 'TICKET'
    | 'TRAIN'
    | 'VIDEO_CAMERA'
    | 'VIDEO_PLAY'
}

/**
 * An icon displayed in a widget on a card.
 *
 * Supports built-in and custom icons.
 */
export type Icon = {
  altText?: string
  imageType?: ImageType
} & OneOf<IconUrl | KnownIcon>
