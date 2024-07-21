import { HTMLAttributes } from 'react'
import { Properties } from 'csstype'
import { defineProps, PropsDefinition } from '@/utils/component'
import { Level } from '@/tokens/level'
import { Spacing } from '@/tokens/spacing'
import { transformPropsDefinition } from '@/components/layout/transform'

export const positionPropsDefinition = defineProps(({ optional }) => ({
    ...transformPropsDefinition,
    position: optional<Properties['position']>('relative'),
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
    z: optional<Level | Properties['zIndex'] | number>(),
}))

export type PositionPropsDefinition = typeof positionPropsDefinition

export type PositionProps = Omit<HTMLAttributes<HTMLDivElement>, 'translate'> &
    PropsDefinition<PositionPropsDefinition> & {
        asChild?: boolean
    }
