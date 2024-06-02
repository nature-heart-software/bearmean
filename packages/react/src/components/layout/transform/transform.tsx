import { forwardRef } from 'react'
import { StTransform } from './transform.styled'
import { TransformProps, transformPropsDefinition } from './transform.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Transform = forwardRef<HTMLDivElement, TransformProps>(function Transform({ children, asChild, ...props }, forwardedRef) {
    const [transformProps, { translate, ...htmlProps }] = useExtractProps(props, transformPropsDefinition)
    const Comp = asChild ? StTransform.withComponent(Slot) : StTransform
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
