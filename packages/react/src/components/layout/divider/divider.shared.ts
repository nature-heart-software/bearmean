import { HTMLAttributes } from 'react'
import { exclusiveBoxProps } from '@/components/layout'
import { createPartial } from '@/utils/object'
import { defineProps } from '@/utils/component'

export const exclusiveDividerProps = defineProps(() => ({
    ...exclusiveBoxProps,
}))

const definePartialProps = createPartial<typeof exclusiveDividerProps>()

export const dividerVariants = {
    horizontal: definePartialProps({
        pt: 3,
        pb: 3,
    }),
    vertical: definePartialProps({
        pl: 3,
        pr: 3,
    }),
} as const

export const exclusiveDividerPropsWithVariants = defineProps(({ optional }) => ({
    ...exclusiveDividerProps,
    variant: optional<keyof typeof dividerVariants>(),
    size: optional<number>(),
}))

export type ExclusiveDividerProps = typeof exclusiveDividerPropsWithVariants

export type DividerProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveDividerProps & {
        asChild?: boolean
    }
