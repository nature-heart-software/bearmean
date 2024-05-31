import { HTMLAttributes } from 'react'
import { defineProps } from '@/utils/component'
import { exclusiveBoxProps } from '@/components/layout/box'
import { Screen, Screens } from '@/tokens/screens'

export const exclusiveContainerProps = defineProps(({ optional }) => ({
    ...exclusiveBoxProps,
    fluid: optional<boolean>(),
    size: optional<Screen>(),
    breakpoints: optional<Screens[]>(),
}))

export type ExclusiveContainerProps = typeof exclusiveContainerProps

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveContainerProps & {
        asChild?: boolean
    }
