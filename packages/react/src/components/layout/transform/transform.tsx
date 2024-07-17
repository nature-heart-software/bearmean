import { forwardRef, useMemo } from 'react'
import { StTransform } from './transform.styled'
import { TransformProps, transformPropsDefinition } from './transform.shared'
import { Slot } from '@radix-ui/react-slot'
import { useDefinitionProps } from '@/utils/component'

export const Transform = forwardRef<HTMLDivElement, TransformProps>(function Transform(props, forwardedRef) {
    const [transformProps, { children, asChild, ...htmlProps }] = useDefinitionProps(props, transformPropsDefinition)
    const Comp = useMemo(() => (asChild ? StTransform.withComponent(Slot) : StTransform), [asChild])
    return (
        <Comp
            data-transform
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...transformProps,
            }}
        >
            {children}
        </Comp>
    )
})
