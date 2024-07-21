import { MergedTheme } from '@/tokens'

export const elevation = {
    default: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
} as const

declare module '@/tokens' {
    export interface Theme {
        elevation: typeof elevation
    }
}

export type Elevation = keyof MergedTheme
