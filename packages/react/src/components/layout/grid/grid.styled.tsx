import styled from '@emotion/styled'
import { ExclusiveGridColProps, ExclusiveGridProps } from './grid.shared.ts'
import { StBox } from '@/components/layout'
import { spacing as _spacing } from '@/tokens/spacing.ts'
import { Screen, Screens, screens as _screens } from '@/tokens/screens.ts'
import { getRemValue } from '@/utils/css-in-js.ts'
import { rem } from 'polished'

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
}>(({ theme: { screens = _screens }, styled: { start, end, rowStart, rowEnd, rowSpan, columns = 12, span = columns, ...props } }) => [
    {
        minWidth: 0,
        flexShrink: 0,
        gridColumn: `span ${span || columns} / span ${span || columns}`,
        gridRow: rowSpan ? `span ${rowSpan} / span ${rowSpan}` : 'auto',
    },
    start && {
        gridColumnStart: start,
    },
    end && {
        gridColumnEnd: end,
    },
    rowStart && {
        gridRowStart: rowStart,
    },
    rowEnd && {
        gridRowEnd: rowEnd,
    },
    (Object.entries(screens) as [Screen, Screens[keyof Screens]][])
        .map(([screen, { value }]) => ({
            [`@media (min-width: ${rem(value)})`]: [
                typeof props[`${screen}Span`] !== 'undefined' && {
                    gridColumn: `span ${props[`${screen}Span`]} / span ${props[`${screen}Span`]}`,
                },
                typeof props[`${screen}Start`] !== 'undefined' && {
                    gridColumnStart: props[`${screen}Start`],
                },
                typeof props[`${screen}End`] !== 'undefined' && {
                    gridColumnEnd: props[`${screen}End`],
                },
                typeof props[`${screen}RowSpan`] !== 'undefined' && {
                    gridRow: `span ${props[`${screen}RowSpan`]} / span ${props[`${screen}RowSpan`]}`,
                },
                typeof props[`${screen}RowStart`] !== 'undefined' && {
                    gridRowStart: props[`${screen}RowStart`],
                },
                typeof props[`${screen}RowEnd`] !== 'undefined' && {
                    gridRowEnd: props[`${screen}RowEnd`],
                },
            ]
                .filter(Boolean)
                .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
        }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
])
