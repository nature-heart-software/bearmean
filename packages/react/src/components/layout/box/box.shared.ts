import { HTMLAttributes } from 'react'
import { PositiveSpacing, Spacing } from '@/tokens/spacing.ts'
import { Elevation } from '@/tokens/elevation.ts'
import { BorderRadius, BorderStyle, BorderWidth } from '@/tokens/border.ts'
import { Colors } from '@/tokens/colors.ts'
import { Properties } from 'csstype'
import { defineProps } from '@/utils/component.ts'

export type MarginSpacing = Spacing | Properties['margin'] | number
export type PaddingSpacing = PositiveSpacing | Properties['padding'] | number

export const exclusiveBoxProps = defineProps(({ optional }) => ({
    opacity: optional<Properties['opacity']>(),
    elevation: optional<Elevation | Properties['boxShadow']>(),
    bg: optional<Colors | Properties['background']>(),
    w: optional<'auto' | 'full' | Properties['width'] | number>(),
    h: optional<'auto' | 'full' | Properties['height'] | number>(),
    minH: optional<'auto' | 'full' | Properties['minHeight'] | number>(),
    minW: optional<'auto' | 'full' | Properties['minWidth'] | number>(),
    maxH: optional<'auto' | 'full' | Properties['maxHeight'] | number>(),
    maxW: optional<'auto' | 'full' | Properties['maxWidth'] | number>(),
    p: optional<PaddingSpacing>(),
    px: optional<PaddingSpacing>(),
    py: optional<PaddingSpacing>(),
    pl: optional<PaddingSpacing>(),
    pr: optional<PaddingSpacing>(),
    pt: optional<PaddingSpacing>(),
    pb: optional<PaddingSpacing>(),
    m: optional<MarginSpacing>(),
    mx: optional<MarginSpacing>(),
    my: optional<MarginSpacing>(),
    ml: optional<MarginSpacing>(),
    mr: optional<MarginSpacing>(),
    mt: optional<MarginSpacing>(),
    mb: optional<MarginSpacing>(),
    grow: optional<Properties['flexGrow'] | boolean>(),
    shrink: optional<Properties['flexShrink'] | boolean>(),
    br: optional<BorderRadius | Properties['borderRadius'] | number>(),
    brtl: optional<BorderRadius | Properties['borderTopLeftRadius'] | number>(),
    brtr: optional<BorderRadius | Properties['borderTopRightRadius'] | number>(),
    brbl: optional<BorderRadius | Properties['borderBottomLeftRadius'] | number>(),
    brbr: optional<BorderRadius | Properties['borderBottomRightRadius'] | number>(),
    bs: optional<BorderStyle | Properties['borderStyle']>('solid'),
    bw: optional<BorderWidth | Properties['borderWidth'] | number>(0),
    bc: optional<Colors | Properties['borderColor']>(),
    relative: optional<boolean>(),
    absolute: optional<boolean>(),
    fixed: optional<boolean>(),
    sticky: optional<boolean>(),
    static: optional<boolean>(),
    position: optional<Properties['position']>(),
    inset: optional<Properties['inset'] | boolean | number>(),
    top: optional<Properties['top'] | boolean | number>(),
    left: optional<Properties['left'] | boolean | number>(),
    right: optional<Properties['right'] | boolean | number>(),
    bottom: optional<Properties['bottom'] | boolean | number>(),
    z: optional<Properties['zIndex'] | number>(),
    overflow: optional<Properties['overflow']>(),
    cursor: optional<Properties['cursor']>(),
    pointerEvents: optional<Properties['pointerEvents']>(),
    userSelect: optional<Properties['userSelect']>(),
    transform: optional<Properties['transform']>(),
    transformOrigin: optional<Properties['transformOrigin']>(),
    ratio: optional<Properties['aspectRatio'] | number>(),
}))

export type ExclusiveBoxProps = typeof exclusiveBoxProps

export type BoxProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveBoxProps & {
        asChild?: boolean
    }
