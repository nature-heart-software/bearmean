import { HTMLAttributes } from 'react'
import { defineProps, PropsDefinition } from '@/utils/component'
import { boxPropsDefinition } from '@/components/layout/box'
import { MergedTheme } from '@/tokens'

export const containerPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    fluid: optional<boolean>(),
    size: optional<keyof MergedTheme['screens']>(),
    breakpoints: optional<(keyof MergedTheme['screens'])[]>(),
}))

export type ContainerPropsDefinition = typeof containerPropsDefinition

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
    PropsDefinition<ContainerPropsDefinition> & {
        asChild?: boolean
    }
