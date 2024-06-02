import { forwardRef } from 'react'
import { StContainer } from './container.styled'
import { ContainerProps, containerPropsDefinition } from './container.shared'
import { Slot } from '@radix-ui/react-slot'
import { useDefinitionProps } from '@/utils/component'

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container({ children, asChild, ...props }, forwardedRef) {
    const [containerProps, htmlProps] = useDefinitionProps(props, containerPropsDefinition)
    const Comp = asChild ? StContainer.withComponent(Slot) : StContainer
    return (
        <Comp
            data-container
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...containerProps,
            }}
        >
            {children}
        </Comp>
    )
})
