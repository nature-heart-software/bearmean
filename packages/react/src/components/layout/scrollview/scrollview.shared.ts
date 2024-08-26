import { ElementType, HTMLAttributes } from 'react'
import { defineProps, PropsDefinition } from '@/utils/component'
import { boxPropsDefinition } from '@/components/layout/box'
import { Properties } from 'csstype'

export const scrollviewPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    x: optional<boolean | Properties['overflowX']>(),
    y: optional<boolean | Properties['overflowY']>(),
}))

export type ScrollviewPropsDefinition = typeof scrollviewPropsDefinition

export type ScrollviewProps = HTMLAttributes<HTMLDivElement> &
    PropsDefinition<ScrollviewPropsDefinition> & {
        asChild?: boolean
        as?: ElementType
    }
