import { HTMLAttributes } from 'react'
import { boxPropsDefinition } from '@/components/layout/box'
import { createPartial } from '@/utils/object'
import { defineProps } from '@/utils/component'

export const dividerPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    size: optional<number>(),
}))

const definePartialProps = createPartial<typeof dividerPropsDefinition>()

export const dividerVariants = {
    horizontal: definePartialProps({
        mt: '3',
        mb: '3',
    }),
    vertical: definePartialProps({
        ml: '3',
        mr: '3',
    }),
} as const

export const dividerPropsDefinitionWithVariants = defineProps(({ optional }) => ({
    ...dividerPropsDefinition,
    variant: optional<keyof typeof dividerVariants>(),
}))

export type DividerPropsDefinition = typeof dividerPropsDefinitionWithVariants

export type DividerProps = HTMLAttributes<HTMLDivElement> &
    DividerPropsDefinition
