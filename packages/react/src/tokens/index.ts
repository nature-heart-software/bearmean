export * from './border'
export * from './colors'
export * from './elevation'
export * from './level'
export * from './ratio'
export * from './screens'
export * from './spacing'

export interface Theme {}

export interface ThemeOverride {}

type BearmeanTheme = {
    [Key in keyof Theme]-?: Key extends keyof ThemeOverride ? ThemeOverride[Key] : Theme[Key]
}

declare module '@emotion/react' {
    export interface Theme extends BearmeanTheme {}
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
