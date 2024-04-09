import { rem } from 'polished'

type Value = number | string
type FontSizeProperty = 'lineHeight' | 'letterSpacing'
type TailwindFontSize = Value | [Value, Record<FontSizeProperty, Value>] | readonly [Value, Record<FontSizeProperty, Value>]

export const getFontSize = (tailwindFontSize: TailwindFontSize) =>
    typeof tailwindFontSize === 'number' || typeof tailwindFontSize === 'string' ? rem(tailwindFontSize) : rem(tailwindFontSize[0])

export const getLineHeight = (tailwindFontSize: TailwindFontSize) =>
    // eslint-disable-next-line no-nested-ternary
    typeof tailwindFontSize === 'number' || typeof tailwindFontSize === 'string' ? tailwindFontSize : rem(tailwindFontSize[1].lineHeight)

export const getLetterSpacing = (tailwindFontSize: TailwindFontSize) =>
    typeof tailwindFontSize === 'number' || typeof tailwindFontSize === 'string' ? 'normal' : rem(tailwindFontSize[1]?.letterSpacing) || 'normal'

export const getFontSizeStyle = (tailwindFontSize: TailwindFontSize) => ({
    fontSize: getFontSize(tailwindFontSize),
    lineHeight: getLineHeight(tailwindFontSize),
    letterSpacing: getLetterSpacing(tailwindFontSize),
})

export const getRemValue = <V extends string | number, R extends Record<string, unknown>>(value: V, from?: R) => {
    if (typeof value === 'number') return rem(value)
    if (from && value in from) return rem(from[value as unknown as keyof R] as string)
    return value
}

export const getRawValue = <V extends string | number, R extends Record<string, unknown>>(value: V, from?: R) => {
    if (from && value in from) return from[value as unknown as keyof R]
    return value
}
