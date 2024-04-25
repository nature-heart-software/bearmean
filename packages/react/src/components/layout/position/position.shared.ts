import { HTMLAttributes } from 'react'
import { Properties } from 'csstype'
import { defineProps } from '@/utils/component'
import { exclusiveBoxProps } from '@/components/layout'
import { Level } from '@/tokens/level'
import { Spacing } from '@/tokens/spacing'

export const exclusivePositionProps = defineProps(({ optional }) => ({
    ...exclusiveBoxProps,
    value: optional<Properties['position']>(),
    relative: optional<boolean>(),
    absolute: optional<boolean>(),
    fixed: optional<boolean>(),
    sticky: optional<boolean>(),
    static: optional<boolean>(),
    inset: optional<Spacing | Properties['inset'] | boolean | number>(),
    top: optional<Spacing | Properties['top'] | boolean | number>(),
    left: optional<Spacing | Properties['left'] | boolean | number>(),
    right: optional<Spacing | Properties['right'] | boolean | number>(),
    bottom: optional<Spacing | Properties['bottom'] | boolean | number>(),
    transform: optional<Properties['transform']>(),
    transformOrigin: optional<Properties['transformOrigin']>(),
    translate: optional<Properties['translate']>(),
    rotate: optional<Properties['rotate']>(),
    scale: optional<Properties['scale']>(),
    perspective: optional<Properties['perspective']>(),
    z: optional<Level | Properties['zIndex'] | number>(),
}))

export type ExclusivePositionProps = typeof exclusivePositionProps

export type PositionProps = HTMLAttributes<HTMLDivElement> &
    ExclusivePositionProps & {
        asChild?: boolean
    }
