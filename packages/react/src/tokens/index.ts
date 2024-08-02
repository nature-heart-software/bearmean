export * from './border'
export * from './colors'
export * from './elevation'
export * from './level'
export * from './ratio'
export * from './screens'
export * from './spacing'

export interface DefaultTheme {}

export interface ThemeOverride {}

export type Theme = {
    [Key in keyof DefaultTheme]-?: Key extends keyof ThemeOverride ? ThemeOverride[Key] : DefaultTheme[Key]
}

type EmotionTheme = Theme

declare module '@emotion/react' {
    export interface Theme extends EmotionTheme {}
}

/* Override default theme like this: */
// declare module '@/tokens' {
//     export interface ThemeOverride {
//         screens: {
//             min: {
//                 value: number
//                 gutter: number
//                 margin: number
//             }
//             mobile: {
//                 value: number
//                 gutter: number
//                 margin: number
//             }
//             tablet: {
//                 value: number
//                 gutter: number
//                 margin: number
//             }
//             desktop: {
//                 value: number
//                 gutter: number
//                 margin: number
//             }
//         }
//     }
// }
