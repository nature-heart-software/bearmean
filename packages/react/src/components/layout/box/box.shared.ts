import { HTMLAttributes } from 'react'
import { PositiveSpacing, Spacing } from '@/tokens/spacing'
import { Elevation } from '@/tokens/elevation'
import { BorderRadius, BorderStyle, BorderWidth } from '@/tokens/border'
import { Color } from '@/tokens/colors'
import { Properties } from 'csstype'
import { defineProps } from '@/utils/component'

export type MarginSpacing = Spacing | Properties['margin'] | number
export type PaddingSpacing = PositiveSpacing | Properties['padding'] | number

export const exclusiveBoxProps = defineProps(({ optional }) => ({
    opacity: optional<Properties['opacity']>(),
    elevation: optional<Elevation | Properties['boxShadow']>(),
    bg: optional<Color | Properties['background']>(),
    w: optional<'full' | Properties['width'] | number>(),
    h: optional<'full' | Properties['height'] | number>(),
    mih: optional<'full' | Properties['minHeight'] | number>(),
    miw: optional<'full' | Properties['minWidth'] | number>(),
    mah: optional<'full' | Properties['maxHeight'] | number>(),
    maw: optional<'full' | Properties['maxWidth'] | number>(),
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
    btw: optional<BorderWidth | Properties['borderTopWidth'] | number>(),
    brw: optional<BorderWidth | Properties['borderRightWidth'] | number>(),
    blw: optional<BorderWidth | Properties['borderLeftWidth'] | number>(),
    bbw: optional<BorderWidth | Properties['borderBottomWidth'] | number>(),
    bc: optional<Color | Properties['borderColor']>(),
    overflow: optional<Properties['overflow']>(),
    cursor: optional<Properties['cursor']>(),
    pointerEvents: optional<Properties['pointerEvents']>(),
    userSelect: optional<Properties['userSelect']>(),
}))

export type ExclusiveBoxProps = typeof exclusiveBoxProps

export type BoxProps = HTMLAttributes<HTMLDivElement> &
    ExclusiveBoxProps & {
        asChild?: boolean
    }
