import { forwardRef } from 'react'
import { StGrid } from './grid.styled.tsx'
import { exclusiveGridProps, GridProps } from './grid.shared.ts'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component.ts'

export const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid({ children, asChild, ...initialProps }, forwardedRef) {
    const [centerProps, props] = useExtractProps(initialProps, exclusiveGridProps)
    const Comp = asChild ? StGrid.withComponent(Slot) : StGrid
    return (
        <Comp
            data-part={'center'}
            ref={forwardedRef}
            {...props}
            styled={{
                ...centerProps,
            }}
        >
            {children}
        </Comp>
    )
})
