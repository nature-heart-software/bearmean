import { HTMLAttributes } from 'react'
import { defineProps, PropsDefinition } from '@/utils/component'
import { boxPropsDefinition } from '@/components/layout/box'
import { Screen, Screens } from '@/tokens/screens'

export const containerPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    fluid: optional<boolean>(),
    size: optional<Screen>(),
    breakpoints: optional<Screens[]>(),
}))

export type ContainerPropsDefinition = typeof containerPropsDefinition

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
    PropsDefinition<ContainerPropsDefinition> & {
        asChild?: boolean
    }
