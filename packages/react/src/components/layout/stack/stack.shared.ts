import { HTMLAttributes } from 'react'
import { Spacing } from '@/tokens/spacing'
import { defineProps } from '@/utils/component'
import { Properties } from 'csstype'
import { boxPropsDefinition } from '@/components/layout/box'

export const stackJustifyValues = ['left', 'center', 'right', 'stretch', 'between', 'around'] as const
export type StackJustify = (typeof stackJustifyValues)[number]
export const stackAlignValues = ['stretch', 'center', 'top', 'bottom'] as const
export type StackAlign = (typeof stackAlignValues)[number]
export const stackDirectionValues = ['row', 'column'] as const
export type StackDirection = (typeof stackDirectionValues)[number]

export const stackPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    justify: optional<StackJustify | Properties['justifyContent']>(),
    align: optional<StackAlign | Properties['alignItems']>(),
    gap: optional<Spacing | Properties['gap'] | number>(),
}))

export type StackPropsDefinition = typeof stackPropsDefinition

export type StackProps = HTMLAttributes<HTMLDivElement> &
    StackPropsDefinition & {
        asChild?: boolean
    }
