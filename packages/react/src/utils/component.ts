import pick from 'lodash/pick'
import { omit } from 'lodash'

export type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

export type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

type NonUndefined<T> = T extends undefined ? never : T
const optional = <T>(defaultValue?: T) => defaultValue as T | undefined
const required = <T>(defaultValue?: T) => defaultValue as NonUndefined<T>

type Props = Record<string, unknown>
type DefinitionUtils = {
    optional: <T>(defaultValue?: T) => T | undefined
    required: <T>(defaultValue?: T) => NonUndefined<T>
}
type Definition<P extends Props> = (DefinitionUtils: DefinitionUtils) => P
export const defineProps = <P extends Props>(definition: Definition<P>) =>
    definition({
        optional,
        required,
    }) as ToOptional<P>

export const useExtractProps = <D extends Record<any, any>, P extends Record<any, any>>(props: P, defaultProps: D) => {
    const extractedProps = { ...defaultProps, ...pick(props, Object.keys(defaultProps)) } as D
    const rest = omit(props, Object.keys(defaultProps)) as Exclude<P, keyof D>
    return [extractedProps, rest]
}
