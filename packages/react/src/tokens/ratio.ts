import { MergedTheme } from '@/tokens'

export const ratio = {
    auto: 'auto',
    square: 1,
    '4:3': 4 / 3,
    '16:9': 16 / 9,
    '21:9': 21 / 9,
    '2:1': 2,
    '9:16': 9 / 16,
    A4: 210 / 297,
    A3: 297 / 420,
    A2: 420 / 594,
    A1: 594 / 841,
} as const

declare module '@/tokens' {
    export interface Theme {
        ratio: typeof ratio
    }
}

export type Ratio = keyof MergedTheme['ratio']
