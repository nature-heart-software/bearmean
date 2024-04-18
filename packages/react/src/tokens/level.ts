export const level = {
    none: 'none',
    background: -10,
    default: 0,
    foreground: 10,
    navigation: 100,
    overlay: 1_000,
    shell: 100_000,
    application: 100_000_000,
} as const

export type Level = keyof typeof level

declare module '@emotion/react' {
    export interface Theme {
        level: typeof level
    }
}
