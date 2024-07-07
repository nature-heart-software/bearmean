import pick from 'lodash/pick'
import { omit } from 'lodash'
import { Screen, screens } from '@/tokens/screens'
import { useMemo } from 'react'

export type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

export type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

type NonUndefined<T> = T extends undefined ? never : T

type OptionalType = { _OPTIONAL: true }
type RequiredType = { _REQUIRED: true }
type HasDefaultValueType = { _HAS_DEFAULT_VALUE: true }
type AllTypes = OptionalType | RequiredType | HasDefaultValueType

type DefineOptional = {
    <T>(): T | undefined | OptionalType
    <T>(defaultValue: T): T | undefined | OptionalType | HasDefaultValueType
}

type DefineRequired = {
    <T>(): NonUndefined<T> | RequiredType
    <T>(defaultValue: T): NonUndefined<T> | RequiredType | HasDefaultValueType
}

const optional: DefineOptional = (defaultValue?) => {
    return defaultValue
}

const required: DefineRequired = (defaultValue?) => {
    return defaultValue
}

// const optional = <T>(defaultValue?: T) => defaultValue as T | undefined
// const required = <T>(defaultValue?: T) => defaultValue as NonUndefined<T>
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

type Props = {
    [name: string]: unknown
}

type DefinitionUtils = {
    optional: DefineOptional
    required: DefineRequired
    responsive: <P extends Record<string, unknown>>(props: P) => P & { [key in `${Screen}${Capitalize<Extract<keyof P, string>>}`]: P[keyof P] }
}
type Definition<P extends Props> = (DefinitionUtils: DefinitionUtils) => P
export const defineProps = <P extends Props>(definition: Definition<P>) =>
    definition({
        optional,
        required,
        responsive,
    })

export const useDefinitionProps = <P extends object, D extends object>(
    props: P,
    propsDefinition: D,
    overrideProps?: D
): [PropsDefinitionWithDefaults<D>, Omit<P, keyof D>] => {
    const propsDefinitionWithVariants = { ...propsDefinition, ...overrideProps } as PropsDefinitionWithDefaults<D>
    const extractedProps = { ...propsDefinitionWithVariants, ...pick(props, Object.keys(propsDefinitionWithVariants)) } as PropsDefinitionWithDefaults<D>
    const rest = omit(props, Object.keys(propsDefinitionWithVariants)) as Omit<P, keyof D>
    return [extractedProps, rest]
}

export const useVariantProps = <V extends Record<string, unknown>, CV extends keyof V>(variants: V, currentVariant?: CV) => {
    return useMemo(() => (currentVariant ? variants[currentVariant] : {}), [currentVariant, variants])
}

type RemoveUnionItem<T, U> = T extends U ? never : T

type RemoveItemFromAllKeys<T, U> = {
    [K in keyof T]: RemoveUnionItem<T[K], U>
}

type RemoveUndefinedIfHasDefaultValue<T> = HasDefaultValueType extends T ? NonNullable<T> : T

type RemoveUndefinedFromAllKeys<T> = {
    [K in keyof T]: RemoveUndefinedIfHasDefaultValue<T[K]>
}

export type PropsDefinition<P> = RemoveItemFromAllKeys<ToOptional<P>, AllTypes>
export type PropsDefinitionWithDefaults<P> = RemoveItemFromAllKeys<RemoveUndefinedFromAllKeys<P>, AllTypes>

// TODO: doesn't work with string, wrap everything with new methods or types, check if it works well with responsive
// type Vals = 'a' | 'b'

// const someProps = defineProps(({ optional, required }) => ({
//     optionalValue: optional<Vals>('a'),
//     requiredValue: required<Vals>(),
// }))

// const { optionalValue, requiredValue } = someProps as ToOptional<typeof someProps>
// const { optionalValue, requiredValue } = someProps as PropsDefinition<typeof someProps>
// const { optionalValue, requiredValue } = someProps as PropsDefinitionWithDefaults<typeof someProps>
//
// function zea(props: PropsDefinitionWithDefaults<typeof someProps>) {}
//
// zea({ requiredValue: 'a', optionalValue: 'a' })
