import { forwardRef } from 'react'
import { StPosition } from './position.styled'
import { exclusivePositionProps, PositionProps } from './position.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Position = forwardRef<HTMLDivElement, PositionProps>(function Position({ children, asChild, ...initialProps }, forwardedRef) {
    const [positionProps, { translate, ...props }] = useExtractProps(initialProps, exclusivePositionProps)
    const Comp = asChild ? StPosition.withComponent(Slot) : StPosition
    return (
        <Comp
            data-part={'position'}
            ref={forwardedRef}
            {...props}
            styled={{
                ...positionProps,
            }}
        >
            {children}
        </Comp>
    )
})
