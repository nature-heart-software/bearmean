import { HTMLAttributes } from 'react'
import { defineProps } from '@/utils/component.ts'
import { exclusiveBoxProps } from '@/components/layout'
import { Screen, screens, Screens } from '@/tokens/screens.ts'
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

export const exclusiveGridColProps = defineProps(({ optional }) => ({
    ...exclusiveBoxProps,
    span: optional<number>(),
    start: optional<Properties['gridColumnStart'] | number>(),
    end: optional<Properties['gridColumnEnd'] | number>(),
    rowSpan: optional<Properties['gridRow'] | number>(),
    rowStart: optional<Properties['gridRowStart'] | number>(),
    rowEnd: optional<Properties['gridRowEnd'] | number>(),
    columns: exclusiveGridProps.columns,
    ...(Object.keys(screens) as Screen[])
        .map((screen) => {
            return {
                [`${screen}Span` as const]: optional<number>(),
                [`${screen}Start` as const]: optional<Properties['gridColumnStart'] | number>(),
                [`${screen}End` as const]: optional<Properties['gridColumnEnd'] | number>(),
                [`${screen}RowSpan` as const]: optional<Properties['gridRow'] | number>(),
                [`${screen}RowStart` as const]: optional<Properties['gridRowStart'] | number>(),
                [`${screen}RowEnd` as const]: optional<Properties['gridRowEnd'] | number>(),
            } as GridColResponsiveProps
        })
        .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
}))

export type ExclusiveGridProps = typeof exclusiveGridProps

export type ExclusiveGridColProps = typeof exclusiveGridColProps

export type GridProps = HTMLAttributes<HTMLDivElement> & ExclusiveGridProps

export type GridColProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveGridColProps & {
        asChild?: boolean
    }
