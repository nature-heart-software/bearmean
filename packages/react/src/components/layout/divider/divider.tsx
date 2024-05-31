import { forwardRef, useMemo } from 'react'
import { StDivider } from './divider.styled'
import { DividerProps, dividerPropsDefinition, dividerVariants } from './divider.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Divider = forwardRef<HTMLDivElement, DividerProps>(function Divider({ children, asChild, variant = 'horizontal', ...props }, forwardedRef) {
    const variantProps = useMemo(() => (variant ? dividerVariants[variant] : {}), [variant])
    const [dividerProps, htmlProps] = useExtractProps(props, {
        ...dividerPropsDefinition,
        ...variantProps,
    })
    const Comp = asChild ? StDivider.withComponent(Slot) : StDivider
    return (
        <Comp
            data-divider
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...dividerProps,
            }}
        >
            {children}
        </Comp>
    )
})
