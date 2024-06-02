import { HTMLAttributes } from 'react'
import { Properties } from 'csstype'
import { defineProps } from '@/utils/component'
import { boxPropsDefinition } from '@/components/layout/box'

export const transformPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    transform: optional<Properties['transform']>(),
    transformOrigin: optional<Properties['transformOrigin']>(),
    translate: optional<Properties['translate']>(),
    rotate: optional<Properties['rotate']>(),
    scale: optional<Properties['scale']>(),
    perspective: optional<Properties['perspective']>(),
}))

export type TransformPropsDefinition = typeof transformPropsDefinition

export type TransformProps = HTMLAttributes<HTMLDivElement> &
    TransformPropsDefinition & {
        asChild?: boolean
    }
