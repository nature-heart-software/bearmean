import { HTMLAttributes } from 'react'
import { defineProps } from '@/utils/component'
import { boxPropsDefinition } from '@/components/layout/box'

export const centerPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    inline: optional<boolean>(),
}))

export type CenterPropsDefinition = typeof centerPropsDefinition

export type CenterProps = HTMLAttributes<HTMLDivElement> &
    CenterPropsDefinition & {
        asChild?: boolean
    }
