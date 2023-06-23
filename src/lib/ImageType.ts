/**
 * The shape used to crop the image.
 *
 *   - 'SQUARE': Default value. Applies a square mask to the image. For example, a 4x3 image becomes 3x3.
 *   - 'CIRCLE': Applies a circular mask to the image. For example, a 4x3 image becomes a circle with a diameter of 3.
 */
export type ImageType = 'SQUARE' | 'CIRCLE'
