import { forwardRef, useMemo } from 'react'
import { StDivider } from './divider.styled'
import { DividerProps, dividerPropsDefinition, dividerVariants } from './divider.shared'
import { useDefinitionProps } from '@/utils/component'

export const Divider = forwardRef<HTMLDivElement, DividerProps>(function Divider({ children, variant = 'horizontal', ...props }, forwardedRef) {
    const variantProps = useMemo(() => (variant ? dividerVariants[variant] : {}), [variant])
    const [dividerProps, htmlProps] = useDefinitionProps(props, {
        ...dividerPropsDefinition,
        ...variantProps,
    })
    return (
        <StDivider
            data-divider
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...dividerProps,
            }}
        >
            {children}
        </StDivider>
    )
})
