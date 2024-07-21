import { MergedTheme } from '@/tokens'

export const borderRadius = {
    none: 0,
    default: 4,
    full: 9999,
} as const

export const borderStyle = {
    none: 'none',
    solid: 'solid',
} as const

export const borderWidth = {
    none: 0,
    default: 1,
} as const

declare module '@/tokens' {
    export interface Theme {
        borderRadius: typeof borderRadius
        borderStyle: typeof borderStyle
        borderWidth: typeof borderWidth
    }
}

export type BorderRadius = keyof MergedTheme['borderRadius']
export type BorderStyle = keyof MergedTheme['borderStyle']
export type BorderWidth = keyof MergedTheme['borderWidth']
