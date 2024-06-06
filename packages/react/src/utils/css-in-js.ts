import { rem } from 'polished'
import { Screen, Screens, screens as _screens } from '@/tokens/screens'
import { InterpolationPrimitive } from '@emotion/serialize'
import get from 'lodash/get'

export const getRemValue = <V extends string | number, R extends Record<string, unknown>>(value: V, from?: R) => {
    if (typeof value === 'number') return rem(value)
    const valueFromRecord = get(from || {}, value)
    if (valueFromRecord !== null) {
        return rem(valueFromRecord)
    }
    return value
}

export const getRawValue = <V extends string | number, R extends Record<string, unknown>>(value: V, from?: R) => {
    const valueFromRecord = get(from || {}, value)
    if (valueFromRecord !== null) {
        return valueFromRecord
    }
    return value
}

export const defineMixins = <
    Context extends {
        theme?: { screens: Screens }
        styled: Record<string, unknown>
    },
>(
    context: Context
) => {
    const getResponsive = <
        Prop extends keyof Context['styled'],
        Callback extends (value: Context['styled'][Prop], screen: Screen | '', prop: Prop) => InterpolationPrimitive,
    >(
        prop: Prop,
        callback: Callback
    ) => {
        const screens = context.theme?.screens || _screens
        const props = context.styled
        return [
            callback(props[prop as keyof typeof props] as Context['styled'][Prop], '', prop),
            ...(Object.entries(screens) as [Screen, Screens[keyof Screens]][]).map(([screen, { value }]) => {
                const responsiveProp = `${screen}${String(prop).charAt(0).toUpperCase() + String(prop).slice(1)}` as Prop
                const responsiveValue = props[responsiveProp as keyof typeof props] as Context['styled'][Prop]
                const result = callback(responsiveValue, screen, responsiveProp)
                return (
                    result && {
                        [`@media (min-width: ${rem(value)})`]: result,
                    }
                )
            }),
        ]
    }
    return {
        getResponsive,
    }
}
