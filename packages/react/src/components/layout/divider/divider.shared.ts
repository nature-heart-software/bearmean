import { HTMLAttributes } from 'react'
import { exclusiveBoxProps } from '@/components/layout'
import { createPartial } from '@/utils/object'
import { defineProps } from '@/utils/component'

export const exclusiveDividerProps = defineProps(({ optional }) => ({
    ...exclusiveBoxProps,
    size: optional<number>(),
}))

const definePartialProps = createPartial<typeof exclusiveDividerProps>()

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

export const exclusiveDividerPropsWithVariants = defineProps(({ optional }) => ({
    ...exclusiveDividerProps,
    variant: optional<keyof typeof dividerVariants>(),
}))

export type ExclusiveDividerProps = typeof exclusiveDividerPropsWithVariants

export type DividerProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveDividerProps & {
        asChild?: boolean
    }
