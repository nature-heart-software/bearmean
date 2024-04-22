import { HTMLAttributes } from 'react'
import { defineProps } from '@/utils/component'
import { exclusiveBoxProps } from '@/components/layout'

export const exclusiveCenterProps = defineProps(({ optional }) => ({
    ...exclusiveBoxProps,
    inline: optional<boolean>(),
}))

export type ExclusiveCenterProps = typeof exclusiveCenterProps

export type CenterProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveCenterProps & {
        asChild?: boolean
    }
