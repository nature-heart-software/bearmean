import styled from '@emotion/styled'
import { ExclusiveGridColProps, ExclusiveGridProps } from './grid.shared.ts'
import { StBox } from '@/components/layout'
import { spacing as _spacing } from '@/tokens/spacing.ts'
import { defineMixins, getRemValue } from '@/utils/css-in-js.ts'

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

export const StGridCol = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: ExclusiveGridColProps
}>((context) => {
    const { getResponsive } = defineMixins({
        ...context,
        styled: {
            ...context.styled,
            span: context.styled.span || 12,
            rowSpan: context.styled.span || null,
        },
    })
    return [
        {
            minWidth: 0,
            flexShrink: 0,
        },
        getResponsive(
            'span',
            (value) =>
                typeof value !== 'undefined' && {
                    gridColumn: `span ${value} / span ${value}`,
                }
        ),
        getResponsive(
            'start',
            (value) =>
                typeof value !== 'undefined' && {
                    gridColumnStart: value,
                }
        ),
        getResponsive(
            'end',
            (value) =>
                typeof value !== 'undefined' && {
                    gridColumnEnd: value,
                }
        ),
        getResponsive(
            'rowSpan',
            (value) =>
                typeof value !== 'undefined' && {
                    gridRow: value ? `span ${value} / span ${value}` : 'auto',
                }
        ),
        getResponsive(
            'rowStart',
            (value) =>
                typeof value !== 'undefined' && {
                    gridRowStart: value,
                }
        ),
        getResponsive(
            'rowEnd',
            (value) =>
                typeof value !== 'undefined' && {
                    gridRowEnd: value,
                }
        ),
    ]
})
