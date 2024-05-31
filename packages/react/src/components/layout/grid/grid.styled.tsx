import styled from '@emotion/styled'
import { GridColPropsDefinition, GridPropsDefinition } from './grid.shared'
import { StBox } from '@/components/layout/box'
import { spacing as _spacing } from '@/tokens/spacing'
import { defineMixins, getRemValue } from '@/utils/css-in-js'
import isUndefined from 'lodash/isUndefined'

export const StGrid = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: GridPropsDefinition
}>(({ theme: { spacing = _spacing }, styled: { align, columns = 12, rows, gap = '3' } }) => [
    {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: getRemValue(gap, spacing),
    },
    !isUndefined(rows) && {
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
    },
    align && {
        alignItems: align,
    },
])

export const StGridCol = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: GridColPropsDefinition
}>((context) => {
    const { getResponsive } = defineMixins({
        ...context,
        styled: {
            ...context.styled,
            span: context.styled.span || 12,
            rowSpan: context.styled.rowSpan || null,
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
                !isUndefined(value) && {
                    gridColumn: `span ${value} / span ${value}`,
                }
        ),
        getResponsive(
            'start',
            (value) =>
                !isUndefined(value) && {
                    gridColumnStart: value,
                }
        ),
        getResponsive(
            'end',
            (value) =>
                !isUndefined(value) && {
                    gridColumnEnd: value,
                }
        ),
        getResponsive(
            'rowSpan',
            (value) =>
                !isUndefined(value) && {
                    gridRow: value ? `span ${value} / span ${value}` : 'auto',
                }
        ),
        getResponsive(
            'rowStart',
            (value) =>
                !isUndefined(value) && {
                    gridRowStart: value,
                }
        ),
        getResponsive(
            'rowEnd',
            (value) =>
                !isUndefined(value) && {
                    gridRowEnd: value,
                }
        ),
    ]
})
