import { HTMLAttributes } from 'react'
import { Properties } from 'csstype'
import { defineProps } from '@/utils/component'
import { exclusiveBoxProps } from '@/components/layout/box'

export const exclusiveAspectProps = defineProps(({ optional }) => ({
    ...exclusiveBoxProps,
    ratio: optional<Properties['aspectRatio'] | number>(),
}))

export type ExclusiveAspectProps = typeof exclusiveAspectProps

export type AspectProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveAspectProps & {
        asChild?: boolean
    }
