import { HTMLAttributes } from 'react'
import { Properties } from 'csstype'
import { defineProps } from '@/utils/component'
import { boxPropsDefinition } from '@/components/layout/box'
import { Spacing } from '@/tokens'

export const transformPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    transform: optional<Properties['transform']>(),
    transformOrigin: optional<Properties['transformOrigin']>(),
    translate: optional<(Spacing | Properties['translate'])[]>(),
    translateX: optional<Spacing | Properties['translate']>(),
    translateY: optional<Spacing | Properties['translate']>(),
    translateZ: optional<Spacing | Properties['translate']>(),
    translate3d: optional<(Spacing | Properties['translate'])[]>(),
    scale: optional<(Spacing | Properties['scale'])[]>(),
    scaleX: optional<Properties['scale']>(),
    scaleY: optional<Properties['scale']>(),
    scaleZ: optional<Properties['scale']>(),
    scale3d: optional<(Spacing | Properties['scale'])[]>(),
    skew: optional<string[]>(),
    skewX: optional<string>(),
    skewY: optional<string>(),
    rotate: optional<(Spacing | Properties['rotate'])[]>(),
    rotateX: optional<Properties['rotate']>(),
    rotateY: optional<Properties['rotate']>(),
    rotateZ: optional<Properties['rotate']>(),
    rotate3d: optional<(Spacing | Properties['rotate'])[]>(),
    perspective: optional<Properties['perspective']>(),
}))

export type TransformPropsDefinition = typeof transformPropsDefinition

export type TransformProps = Omit<HTMLAttributes<HTMLDivElement>, 'translate'> &
    TransformPropsDefinition & {
        asChild?: boolean
    }
