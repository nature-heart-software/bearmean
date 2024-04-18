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
    btlr: optional<BorderRadius | Properties['borderTopLeftRadius'] | number>(),
    btrr: optional<BorderRadius | Properties['borderTopRightRadius'] | number>(),
    bblr: optional<BorderRadius | Properties['borderBottomLeftRadius'] | number>(),
    bbrr: optional<BorderRadius | Properties['borderBottomRightRadius'] | number>(),
    bs: optional<BorderStyle | Properties['borderStyle']>(),
    bw: optional<BorderWidth | Properties['borderWidth'] | number>(),
    bc: optional<Colors | Properties['borderColor']>(),
    overflow: optional<Properties['overflow']>(),
    cursor: optional<Properties['cursor']>(),
    pointerEvents: optional<Properties['pointerEvents']>(),
    userSelect: optional<Properties['userSelect']>(),
    ratio: optional<Properties['aspectRatio'] | number>(),
}))

export type ExclusiveBoxProps = typeof exclusiveBoxProps

export type BoxProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveBoxProps & {
        asChild?: boolean
    }
