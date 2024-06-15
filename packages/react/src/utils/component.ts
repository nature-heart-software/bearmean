import pick from 'lodash/pick'
import { omit } from 'lodash'
import { Screen, screens } from '@/tokens/screens'
import { useMemo } from 'react'

export type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

export type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

type NonUndefined<T> = T extends undefined ? never : T
const optional = <T>(defaultValue?: T) => defaultValue as T | undefined
const required = <T>(defaultValue?: T) => defaultValue as NonUndefined<T>
const responsive = <P extends Record<string, unknown>>(props: P) => {
    return {
        ...props,
        ...(Object.keys(screens) as Screen[])
            .map((screen) => {
                return (Object.entries(props) as [keyof P, P[keyof P]][])
                    .map(([prop, value]) => {
                        const capitalizedProp = String(prop).charAt(0).toUpperCase() + String(prop).slice(1)

                        return {
                            [`${screen}${capitalizedProp}`]: value,
                        }
                    })
                    .reduce((acc, curr) => ({ ...acc, ...curr }), {})
            })
            .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
    } as P & { [key in `${Screen}${Capitalize<Extract<keyof P, string>>}`]: P[keyof P] }
}

type Props = Record<string, unknown>

type DefinitionUtils = {
    optional: <T>(defaultValue?: T) => T | undefined
    required: <T>(defaultValue?: T) => NonUndefined<T>
    responsive: <P extends Record<string, unknown>>(props: P) => P & { [key in `${Screen}${Capitalize<Extract<keyof P, string>>}`]: P[keyof P] }
}
type Definition<P extends Props> = (DefinitionUtils: DefinitionUtils) => P
export const defineProps = <P extends Props>(definition: Definition<P>) =>
    definition({
        optional,
        required,
        responsive,
    }) as ToOptional<P>

export const useDefinitionProps = <P extends Record<string, unknown>, D extends Record<string, unknown>>(props: P, propsDefinition: D, variantProps?: D) => {
    const propsDefinitionWithVariants = { ...propsDefinition, ...variantProps } as D
    const extractedProps = { ...propsDefinitionWithVariants, ...pick(props, Object.keys(propsDefinitionWithVariants)) } as D
    const rest = omit(props, Object.keys(propsDefinitionWithVariants)) as Omit<P, keyof D>
    return [extractedProps, rest]
}

export const useVariantProps = <V extends Record<string, unknown>, CV extends keyof V>(variants: V, currentVariant?: CV) => {
    return useMemo(() => (currentVariant ? variants[currentVariant] : {}), [currentVariant, variants])
}
