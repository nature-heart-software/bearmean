import { forwardRef } from 'react'
import { StStack } from './stack.styled'
import { StackProps, stackPropsDefinition } from './stack.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack({ children, asChild, ...props }, forwardedRef) {
    const [stackProps, htmlProps] = useExtractProps(props, stackPropsDefinition)
    const Comp = asChild ? StStack.withComponent(Slot) : StStack
    return (
        <Comp
            data-stack
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...stackProps,
            }}
        >
            {children}
        </Comp>
    )
})
