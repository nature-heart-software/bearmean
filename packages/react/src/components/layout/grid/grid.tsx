import { forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, useMemo } from 'react'
import { StGrid, StGridCol } from './grid.styled'
import { GridColProps, gridColPropsDefinition, GridProps, gridPropsDefinition } from './grid.shared'
import { Slot } from '@radix-ui/react-slot'
import { useDefinitionProps } from '@/utils/component'

const GridCol = forwardRef<HTMLDivElement, GridColProps>(function GridCol(props, forwardedRef) {
    const [gridColProps, { children, asChild, ...htmlProps }] = useDefinitionProps(props, gridColPropsDefinition)
    const Comp = useMemo(() => (asChild ? StGridCol.withComponent(Slot) : StGridCol), [asChild])
    return (
        <Comp
            data-grid-col
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...gridColProps,
            }}
        >
            {children}
        </Comp>
    )
})

type GridType = ForwardRefExoticComponent<PropsWithoutRef<GridProps> & RefAttributes<HTMLDivElement>>

export const Grid = forwardRef(function Grid({ children, ...props }, forwardedRef) {
    const [gridProps, htmlProps] = useDefinitionProps(props, gridPropsDefinition)
    return (
        <StGrid
            data-grid
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...gridProps,
            }}
        >
            {children}
        </StGrid>
    )
}) as GridType & { Col: typeof GridCol }

Grid.Col = GridCol

export default Grid
