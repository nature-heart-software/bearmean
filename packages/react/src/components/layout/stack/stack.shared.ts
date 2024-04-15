import { HTMLAttributes } from 'react'
import { Spacing } from '@/tokens/spacing.ts'
import { defineProps } from '@/utils/component.ts'
import { Properties } from 'csstype'
import { exclusiveBoxProps } from '@/components/layout'

export const stackJustifyValues = ['left', 'center', 'right', 'stretch', 'between', 'around'] as const
export type StackJustify = (typeof stackJustifyValues)[number]
export const stackAlignValues = ['stretch', 'center', 'top', 'bottom'] as const
export type StackAlign = (typeof stackAlignValues)[number]
export const stackDirectionValues = ['row', 'column'] as const
export type StackDirection = (typeof stackDirectionValues)[number]

export const exclusiveStackProps = defineProps(({ optional }) => ({
    ...exclusiveBoxProps,
    justify: optional<StackJustify | Properties['justifyContent']>(),
    align: optional<StackAlign | Properties['alignItems']>(),
    gap: optional<Spacing | Properties['gap'] | number>(),
}))

export type ExclusiveStackProps = typeof exclusiveStackProps

export type StackProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveStackProps & {
        asChild?: boolean
    }
