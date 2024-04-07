export const borderRadius = {
    none: 0,
    default: 4,
    full: 9999,
} as const

export type BorderRadius = keyof typeof borderRadius
