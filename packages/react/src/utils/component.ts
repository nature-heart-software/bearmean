import pick from 'lodash/pick'
import { omit } from 'lodash'
import { Screen, screens } from '@/tokens/screens'
import { useMemo } from 'react'
import mapValues from 'lodash/mapValues'

export type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

export type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

type NonUndefined<T> = T extends undefined ? never : T

type IsOptional = { _IS_OPTIONAL: true }
type IsRequired = { _IS_REQUIRED: true }
type HasDefaultValue = { _HAS_DEFAULT_VALUE: boolean }

type OfType<T = unknown> = { value: T }

type Definitions = {
    [key: string]: OfType
}

type DefineOptional = {
    <T>(): OfType<T | undefined> & IsOptional
    <T>(defaultValue: T): OfType<T | undefined> & IsOptional & HasDefaultValue
}

type DefineRequired = {
    <T>(): OfType<NonUndefined<T>> & IsRequired
    <T>(defaultValue: T): OfType<NonUndefined<T>> & IsRequired & HasDefaultValue
}

const optional: DefineOptional = (defaultValue?) => {
    return { value: defaultValue, _IS_OPTIONAL: true, _HAS_DEFAULT_VALUE: defaultValue !== undefined }
}

const required: DefineRequired = (defaultValue?) => {
    return { value: defaultValue, _IS_REQUIRED: true, _HAS_DEFAULT_VALUE: defaultValue !== undefined }
}

const responsive = <P extends Definitions>(props: P) => {
    return {
        ...props,
        ...(Object.keys(screens) as Screen[])
            .map((screen) => {
                return (Object.keys(props) as (keyof P)[])
                    .map((prop) => {
                        const capitalizedProp = String(prop).charAt(0).toUpperCase() + String(prop).slice(1)

                        return {
                            [`${screen}${capitalizedProp}`]: undefined,
                        }
                    })
                    .reduce((acc, curr) => ({ ...acc, ...curr }), {})
            })
            .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
    } as P & { [key in `${Screen}${Capitalize<Extract<keyof P, string>>}`]: P[key] | undefined }
}

type DefinitionsUtils = {
    optional: DefineOptional
    required: DefineRequired
    responsive: <P extends Definitions>(props: P) => P & { [key in `${Screen}${Capitalize<Extract<keyof P, string>>}`]: P[keyof P] | undefined }
}

type DefinitionsFn<P> = (DefinitionsUtils: DefinitionsUtils) => P

export const defineProps = <P>(definition: DefinitionsFn<P>) =>
    definition({
        optional,
        required,
        responsive,
    })

export const useDefinitionProps = <P extends object, D extends Definitions>(
    props: P,
    propsDefinition: D,
    overrideProps?: D
): [PropsDefinitionWithDefaults<D>, Omit<P, keyof D>] => {
    const propsDefinitionWithVariants = { ...mapValues(propsDefinition, (definition) => definition.value), ...overrideProps } as PropsDefinitionWithDefaults<D>
    const extractedProps = { ...propsDefinitionWithVariants, ...pick(props, Object.keys(propsDefinitionWithVariants)) } as PropsDefinitionWithDefaults<D>
    const rest = omit(props, Object.keys(propsDefinitionWithVariants)) as Omit<P, keyof D>
    return [extractedProps, rest]
}

export const useVariantProps = <V extends object, CV extends keyof V>(variants: V, currentVariant?: CV) => {
    return useMemo(() => (currentVariant ? variants[currentVariant] : {}), [currentVariant, variants])
}

export type PropsDefinition<P extends Definitions> = ToOptional<{
    [K in keyof P]: P[K]['value']
}>

export type PropsDefinitionWithDefaults<P extends Definitions> = {
    [K in keyof P]: P[K] extends HasDefaultValue ? NonUndefined<P[K]['value']> : P[K]['value']
}
