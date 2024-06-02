import { Context, createContext, forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, useContext } from 'react'
import { StGrid, StGridCol } from './grid.styled'
import { GridColProps, gridColPropsDefinition, GridProps, gridPropsDefinition } from './grid.shared'
import { Slot } from '@radix-ui/react-slot'
import { useDefinitionProps } from '@/utils/component'

const GridContext = createContext({}) as Context<Pick<GridProps, 'columns'>>

const GridCol = forwardRef<HTMLDivElement, GridColProps>(function GridCol({ children, asChild, ...props }, forwardedRef) {
    const [gridColProps, htmlProps] = useDefinitionProps(props, gridColPropsDefinition)
    const Comp = asChild ? StGridCol.withComponent(Slot) : StGridCol
    const { columns } = useContext(GridContext)
    return (
        <Comp
            data-grid-col
            ref={forwardedRef}
            {...htmlProps}
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

export const Grid = forwardRef(function Grid({ children, ...props }, forwardedRef) {
    const [gridProps, htmlProps] = useDefinitionProps(props, gridPropsDefinition)
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
                {...htmlProps}
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
