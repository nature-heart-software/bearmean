import { rem } from 'polished'
import { Screen, Screens, screens as _screens } from '@/tokens'
import { InterpolationPrimitive } from '@emotion/serialize'
import get from 'lodash/get'
import isUndefined from 'lodash/isUndefined'
import { CSSObject } from '@emotion/styled'

export type StyledProps<P extends object> = {
    styled: P
}

export const getRemValue = <V extends string | number, R extends Record<string, unknown>>(value: V, from?: R) => {
    if (typeof value === 'number') return rem(value)
    const valueFromRecord = get(from || {}, value)
    if (!isUndefined(valueFromRecord)) {
        return rem(valueFromRecord)
    }
    return value
}

export const getRawValue = <V extends string | number, R extends Record<string, unknown>>(value: V, from?: R) => {
    const valueFromRecord = get(from || {}, value)
    if (!isUndefined(valueFromRecord)) {
        return valueFromRecord
    }
    return value
}

export const defineMixins = <
    Context extends {
        theme?: { screens: Screens }
        styled?: Record<string, unknown>
    },
>(
    context: Context
) => {
    function getScreenBreakpointValue({ value, margin }: Screens[keyof Screens]) {
        return value + 2 * margin
    }

    const getResponsive = <
        Prop extends keyof Context['styled'],
        Callback extends (value: Context['styled'][Prop], screen: Screen | null, prop: Prop) => InterpolationPrimitive,
    >(
        prop: Prop,
        callback: Callback,
        currentScreen?: Screen | null // allows for nested getResponsive()
    ) => {
        const screens = context.theme?.screens || _screens
        const props = context.styled || {}
        return [
            !currentScreen && callback(props[prop as keyof typeof props] as Context['styled'][Prop], null, prop),
            ...(Object.entries(screens) as [Screen, Screens[keyof Screens]][]).map(([screen, screenValue]) => {
                const screenTotalSize = getScreenBreakpointValue(screenValue)
                if (currentScreen && getScreenBreakpointValue(screens[currentScreen]) > screenTotalSize) return null
                const responsiveProp = `${screen}${(prop as string)[0].toUpperCase()}${(prop as string).slice(1)}` as Prop
                if (isUndefined(props[responsiveProp as keyof typeof props])) return null
                const responsiveValue = props[responsiveProp as keyof typeof props] as Context['styled'][Prop]
                const result = callback(responsiveValue, screen, responsiveProp)
                return (
                    result && {
                        [`@media (min-width: ${rem(screenTotalSize)})`]: result,
                    }
                )
            }),
        ].filter(Boolean) as CSSObject[]
    }
    return {
        getResponsive,
        getScreenBreakpointValue,
    }
}
