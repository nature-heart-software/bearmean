import { ElementType, HTMLAttributes } from 'react'
import { Properties } from 'csstype'
import { defineProps, PropsDefinition } from '@/utils/component'
import { boxPropsDefinition } from '@/components/layout/box'
import { Ratio } from '@/tokens'

export const aspectPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    ratio: optional<Ratio | Properties['aspectRatio'] | number>(),
}))

export type AspectPropsDefinition = typeof aspectPropsDefinition

export type AspectProps = HTMLAttributes<HTMLDivElement> &
    PropsDefinition<AspectPropsDefinition> & {
        asChild?: boolean
        as?: ElementType
    }
