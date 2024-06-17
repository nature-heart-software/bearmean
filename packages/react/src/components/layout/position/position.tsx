import { forwardRef } from 'react'
import { StPosition } from './position.styled'
import { PositionProps, positionPropsDefinition } from './position.shared'
import { Slot } from '@radix-ui/react-slot'
import { useDefinitionProps } from '@/utils/component'

export const Position = forwardRef<HTMLDivElement, PositionProps>(function Position(props, forwardedRef) {
    const [positionProps, { children, asChild, ...htmlProps }] = useDefinitionProps(props, positionPropsDefinition)
    const Comp = asChild ? StPosition.withComponent(Slot) : StPosition
    return (
        <Comp
            data-position
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...positionProps,
            }}
        >
            {children}
        </Comp>
    )
})
