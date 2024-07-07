import { HTMLAttributes } from 'react'
import { defineProps, PropsDefinition } from '@/utils/component'
import { boxPropsDefinition } from '@/components/layout/box'

export const centerPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    inline: optional<boolean>(),
}))

export type CenterPropsDefinition = typeof centerPropsDefinition

export type CenterProps = HTMLAttributes<HTMLDivElement> &
    PropsDefinition<CenterPropsDefinition> & {
        asChild?: boolean
    }
