import { HTMLAttributes } from 'react'
import { Spacing } from '@/tokens/spacing'
import { defineProps } from '@/utils/component'
import { Properties } from 'csstype'
import { boxPropsDefinition } from '@/components/layout/box'

export const groupJustifyValues = ['left', 'center', 'right', 'stretch', 'between', 'around'] as const
export type GroupJustify = (typeof groupJustifyValues)[number]
export const groupAlignValues = ['stretch', 'center', 'top', 'bottom'] as const
export type GroupAlign = (typeof groupAlignValues)[number]
export const groupDirectionValues = ['row', 'column'] as const
export type GroupDirection = (typeof groupDirectionValues)[number]

export const groupPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    direction: optional<GroupDirection | Properties['flexDirection']>(),
    justify: optional<GroupJustify | Properties['justifyContent']>(),
    align: optional<GroupAlign | Properties['alignItems']>(),
    gap: optional<Spacing | Properties['gap'] | number>(),
    wrap: optional<boolean>(),
}))

export type GroupPropsDefinition = typeof groupPropsDefinition

export type GroupProps = HTMLAttributes<HTMLDivElement> &
    GroupPropsDefinition & {
        asChild?: boolean
    }
