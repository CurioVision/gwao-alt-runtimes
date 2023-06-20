type UnionKeys<T> = T extends T ? keyof T : never
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OneOfHelper<T, TAll> = T extends any
  ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>>
  : never

/**
 * Utility type to create an Exclusive Union of objects.
 *
 * @see https://stackoverflow.com/a/73567803/846735
 */
export type OneOf<T> = OneOfHelper<T, T>
