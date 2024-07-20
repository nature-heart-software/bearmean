export const elevation = {
    default: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
} as const

export type Elevation = keyof typeof elevation

declare module '@/tokens' {
    export interface BearmeanTheme {
        elevation: typeof elevation
    }
}
