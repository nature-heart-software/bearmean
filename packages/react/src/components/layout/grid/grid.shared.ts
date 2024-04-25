import { HTMLAttributes } from 'react'
import { defineProps } from '@/utils/component.ts'
import { exclusiveBoxProps } from '@/components/layout'
import { Screen, Screens } from '@/tokens/screens.ts'
import { Spacing } from '@/tokens/spacing.ts'
import { Properties } from 'csstype'

type ColPropName<T extends string> = `${T}Span` | `${T}Start` | `${T}End`
type ColBreakpointProps = ColPropName<Screen>
type RowPropName<T extends string> = `${T}RowSpan` | `${T}RowStart` | `${T}RowEnd`
type RowPreakpointProps = RowPropName<Screen>
export type GridColResponsiveProps = {
    [key in ColBreakpointProps]?: Properties['gridColumnStart'] | number
} & {
    [key in RowPreakpointProps]?: Properties['gridRowStart'] | number
}

export const exclusiveGridProps = defineProps(({ optional }) => ({
    ...exclusiveBoxProps,
    breakpoints: optional<Screens>(),
    gap: optional<Spacing | Properties['gap'] | number>(),
    columns: optional<number>(),
    rows: optional<number>(),
    align: optional<Properties['alignItems']>(),
}))

export const exclusiveGridColProps = defineProps(({ optional, responsive }) => ({
    ...exclusiveBoxProps,
    columns: exclusiveGridProps.columns,
    ...responsive({
        span: optional<number>(),
        start: optional<Properties['gridColumnStart'] | number>(),
        end: optional<Properties['gridColumnEnd'] | number>(),
        rowSpan: optional<Properties['gridRow'] | number>(),
        rowStart: optional<Properties['gridRowStart'] | number>(),
        rowEnd: optional<Properties['gridRowEnd'] | number>(),
    }),
}))

export type ExclusiveGridProps = typeof exclusiveGridProps

export type ExclusiveGridColProps = typeof exclusiveGridColProps

export type GridProps = HTMLAttributes<HTMLDivElement> & ExclusiveGridProps

export type GridColProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveGridColProps & {
        asChild?: boolean
    }
