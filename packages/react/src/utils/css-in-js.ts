import { rem } from 'polished'

export const getRemValue = <V extends string | number, R extends Record<string, unknown>>(value: V, from?: R) => {
    if (typeof value === 'number') return rem(value)
    if (from && value in from) return rem(from[value as unknown as keyof R] as string)
    return value
}

export const getRawValue = <V extends string | number, R extends Record<string, unknown>>(value: V, from?: R) => {
    if (from && value in from) return from[value as unknown as keyof R]
    return value
}
