import { HTMLAttributes } from 'react'
import { exclusiveBoxProps } from '@/components/layout'
import { createPartial } from '@/utils/object.ts'
import { defineProps } from '@/utils/component.ts'

export const exclusiveDividerProps = defineProps(({ optional }) => ({
    ...exclusiveBoxProps,
    size: optional<number>(),
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
}))

export type ExclusiveDividerProps = typeof exclusiveDividerPropsWithVariants

export type DividerProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveDividerProps & {
        asChild?: boolean
    }
