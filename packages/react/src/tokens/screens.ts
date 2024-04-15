import { spacing } from '@/tokens/spacing'

export const screens = {
    min: {
        value: 0,
        gutter: spacing['3'],
        margin: 0,
    },
    sm: {
        value: 640,
        gutter: spacing['5'],
        margin: spacing['5'],
    },
    md: {
        value: 768,
        gutter: spacing['6'],
        margin: spacing['6'],
    },
    lg: {
        value: 1024,
        gutter: spacing['6'],
        margin: spacing['6'],
    },
    xl: {
        value: 1440,
        gutter: spacing['6'],
        margin: spacing['6'],
    },
} as const

export type Screens = typeof screens

export type Screen = keyof Screens

declare module '@emotion/react' {
    export interface Theme {
        screens: typeof screens
    }
}
