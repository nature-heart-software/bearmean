import { HTMLAttributes } from 'react'
import { defineProps } from '@/utils/component'
import { boxPropsDefinition } from '@/components/layout/box'
import { Screen, Screens } from '@/tokens/screens'
import { Spacing } from '@/tokens/spacing'
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

export const gridPropsDefinition = defineProps(({ optional }) => ({
    ...boxPropsDefinition,
    breakpoints: optional<Screens>(),
    gap: optional<Spacing | Properties['gap'] | number>(),
    columns: optional<number>(),
    rows: optional<number>(),
    align: optional<Properties['alignItems']>(),
}))

export const gridColPropsDefinition = defineProps(({ optional, responsive }) => ({
    ...boxPropsDefinition,
    columns: gridPropsDefinition.columns,
    ...responsive({
        span: optional<number>(),
        start: optional<Properties['gridColumnStart'] | number>(),
        end: optional<Properties['gridColumnEnd'] | number>(),
        rowSpan: optional<Properties['gridRow'] | number>(),
        rowStart: optional<Properties['gridRowStart'] | number>(),
        rowEnd: optional<Properties['gridRowEnd'] | number>(),
        order: optional<Properties['order'] | number>(),
    }),
}))

export type GridPropsDefinition = typeof gridPropsDefinition

export type GridColPropsDefinition = typeof gridColPropsDefinition

export type GridProps = HTMLAttributes<HTMLDivElement> & GridPropsDefinition

export type GridColProps = HTMLAttributes<HTMLDivElement> &
    GridColPropsDefinition & {
        asChild?: boolean
    }
