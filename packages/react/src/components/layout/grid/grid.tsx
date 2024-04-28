import { Context, createContext, forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, useContext } from 'react'
import { StGrid, StGridCol } from './grid.styled'
import { exclusiveGridColProps, exclusiveGridProps, GridColProps, GridProps } from './grid.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

const GridContext = createContext({}) as Context<Pick<GridProps, 'columns'>>

const GridCol = forwardRef<HTMLDivElement, GridColProps>(function GridCol({ children, asChild, ...initialProps }, forwardedRef) {
    const [gridColProps, props] = useExtractProps(initialProps, exclusiveGridColProps)
    const Comp = asChild ? StGridCol.withComponent(Slot) : StGridCol
    const { columns } = useContext(GridContext)
    return (
        <Comp
            data-grid-col
            ref={forwardedRef}
            {...props}
            styled={{
                columns,
                ...gridColProps,
            }}
        >
            {children}
        </Comp>
    )
})

type GridType = ForwardRefExoticComponent<PropsWithoutRef<GridProps> & RefAttributes<HTMLDivElement>>

export const Grid = forwardRef(function Grid({ children, ...initialProps }, forwardedRef) {
    const [gridProps, props] = useExtractProps(initialProps, exclusiveGridProps)
    const { columns } = gridProps
    return (
        <GridContext.Provider
            value={{
                columns,
            }}
        >
            <StGrid
                data-grid
                ref={forwardedRef}
                {...props}
                styled={{
                    ...gridProps,
                }}
            >
                {children}
            </StGrid>
        </GridContext.Provider>
    )
}) as GridType & { Col: typeof GridCol }

Grid.Col = GridCol

export default Grid
