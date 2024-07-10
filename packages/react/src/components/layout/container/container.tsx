import { forwardRef, useMemo } from 'react'
import { StContainer } from './container.styled'
import { ContainerProps, containerPropsDefinition } from './container.shared'
import { Slot } from '@radix-ui/react-slot'
import { useDefinitionProps } from '@/utils/component'

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(props, forwardedRef) {
    const [containerProps, { children, asChild, ...htmlProps }] = useDefinitionProps(props, containerPropsDefinition)
    const Comp = useMemo(() => (asChild ? StContainer.withComponent(Slot) : StContainer), [asChild])
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
