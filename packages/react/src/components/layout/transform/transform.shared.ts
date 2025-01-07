import { ElementType, HTMLAttributes } from 'react'
import { Properties } from 'csstype'
import { defineProps, PropsDefinition, PropsDefinitionWithDefaults } from '@/utils/component'
import { boxPropsDefinition } from '@/components/layout/box'
import { Spacing } from '@/tokens'

export const transformPropsDefinition = defineProps(({ responsive, optional }) => ({
    ...boxPropsDefinition,
    ...responsive({
        transform: optional<Properties['transform']>(),
        transformOrigin: optional<(Properties['transformOrigin'] | number)[]>(),
        translate: optional<Spacing | string | number | (Spacing | string | number)[]>(),
        translateX: optional<Spacing | string | number>(),
        translateY: optional<Spacing | string | number>(),
        scale: optional<string | number | (string | number)[]>(),
        scaleX: optional<string | number>(),
        scaleY: optional<string | number>(),
        skew: optional<string | number | (string | number)[]>(),
        skewX: optional<string | number>(),
        skewY: optional<string | number>(),
        rotate: optional<string>(),
        perspective: optional<Properties['perspective'] | number>(),
    }),
}))

export type TransformPropsDefinition = typeof transformPropsDefinition

export interface TransformProps extends Omit<HTMLAttributes<HTMLDivElement>, 'translate'>, PropsDefinition<TransformPropsDefinition> {
    asChild?: boolean
    as?: ElementType
}

export type TransformPropsWithDefaults = PropsDefinitionWithDefaults<TransformPropsDefinition>
