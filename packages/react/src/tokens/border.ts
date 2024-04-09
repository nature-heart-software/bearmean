export const borderRadius = {
    none: 0,
    default: 4,
    full: 9999,
} as const

export type BorderRadius = keyof typeof borderRadius

export const borderStyle = {
    none: 'none',
    solid: 'solid',
} as const

export type BorderStyle = keyof typeof borderStyle

export const borderWidth = {
    none: 0,
    default: 1,
} as const

export type BorderWidth = keyof typeof borderWidth
