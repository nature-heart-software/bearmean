import { HTMLAttributes } from 'react'
import { defineProps } from '@/utils/component.ts'
import { exclusiveBoxProps } from '@/components/layout'
import { Screen, Screens } from '@/tokens/screens.ts'

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
