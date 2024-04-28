import { forwardRef } from 'react'
import { StStack } from './stack.styled'
import { exclusiveStackProps, StackProps } from './stack.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack({ children, asChild, ...initialProps }, forwardedRef) {
    const [stackProps, props] = useExtractProps(initialProps, exclusiveStackProps)
    const Comp = asChild ? StStack.withComponent(Slot) : StStack
    return (
        <Comp
            data-stack
            ref={forwardedRef}
            {...props}
            styled={{
                ...stackProps,
            }}
        >
            {children}
        </Comp>
    )
})
