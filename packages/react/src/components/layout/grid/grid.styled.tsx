import styled from '@emotion/styled'
import { ExclusiveGridProps } from './grid.shared.ts'
import { StBox } from '@/components/layout'
import { spacing as _spacing } from '@/tokens/spacing.ts'
import { getRemValue } from '@/utils/css-in-js.ts'

export const StGrid = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: ExclusiveGridProps
}>(({ theme: { spacing = _spacing }, styled: { align, columns = 12, rows, gap = '3' } }) => [
    {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: getRemValue(gap, spacing),
    },
    rows && {
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
    },
    align && {
        alignItems: align,
    },
])
