import { forwardRef, useMemo } from 'react'
import { StStack } from './stack.styled'
import { StackProps, stackPropsDefinition } from './stack.shared'
import { Slot } from '@radix-ui/react-slot'
import { useDefinitionProps } from '@/utils/component'

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(props, forwardedRef) {
    const [stackProps, { children, asChild, ...htmlProps }] = useDefinitionProps(props, stackPropsDefinition)
    const Comp = useMemo(() => (asChild ? StStack.withComponent(Slot) : StStack), [asChild])
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
