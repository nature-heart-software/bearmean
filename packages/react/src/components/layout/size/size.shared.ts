import { ElementType, HTMLAttributes, ReactNode } from 'react'
import { defineProps, PropsDefinition, PropsDefinitionWithDefaults } from '@/utils/component'
import { boxPropsDefinition } from '@/components/layout/box'

export const sizePropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    debounce: optional<number>(200),
}))

export type SizePropsDefinition = typeof sizePropsDefinition

export type SizeElementSize = { width: number; height: number }

export interface SizeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, PropsDefinition<SizePropsDefinition> {
    as?: ElementType
    children: (
        context: SizeElementSize & {
            map<V>(values: [boolean, V][]): V
        }
    ) => ReactNode
}

export type SizePropsWithDefaults = PropsDefinitionWithDefaults<SizePropsDefinition>
