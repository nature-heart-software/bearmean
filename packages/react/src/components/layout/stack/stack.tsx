import { forwardRef } from 'react'
import { StStack } from './stack.styled.tsx'
import { exclusiveStackProps, StackProps } from './stack.shared.ts'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component.ts'

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack({ children, asChild, ...initialProps }, forwardedRef) {
    const [stackProps, props] = useExtractProps(initialProps, exclusiveStackProps)
    const Comp = asChild ? StStack.withComponent(Slot) : StStack
    return (
        <Comp
            data-part={'stack'}
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
