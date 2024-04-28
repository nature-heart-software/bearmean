import { forwardRef, useMemo } from 'react'
import { StDivider } from './divider.styled'
import { DividerProps, dividerVariants, exclusiveDividerProps } from './divider.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Divider = forwardRef<HTMLDivElement, DividerProps>(function Divider({ children, asChild, variant = 'horizontal', ...initialProps }, forwardedRef) {
    const variantProps = useMemo(() => (variant ? dividerVariants[variant] : {}), [variant])
    const [dividerProps, props] = useExtractProps(initialProps, {
        ...exclusiveDividerProps,
        ...variantProps,
    })
    const Comp = asChild ? StDivider.withComponent(Slot) : StDivider
    return (
        <Comp
            data-divider
            ref={forwardedRef}
            {...props}
            styled={{
                ...dividerProps,
            }}
        >
            {children}
        </Comp>
    )
})
