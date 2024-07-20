export * from './border'
export * from './colors'
export * from './elevation'
export * from './level'
export * from './ratio'
export * from './screens'
export * from './spacing'

export interface BearmeanTheme {}

export interface BearmeanThemeOverride {}

type BearmeanMergedTheme = {
    [Key in keyof BearmeanTheme]-?: Key extends keyof BearmeanThemeOverride ? BearmeanThemeOverride[Key] : BearmeanTheme[Key]
}

declare module '@emotion/react' {
    export interface Theme extends BearmeanMergedTheme {}
}

/* Override default theme like this: */
// declare module '@/tokens' {
//     export interface BearmeanThemeOverride {
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
