/**
 * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness.
 *
 * @see https://developers.google.com/workspace/add-ons/reference/rpc/google.type#color
 */
export type Color = {
  red: number
  green: number
  blue: number
  alpha?: number
}
