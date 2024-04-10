import { RequireField, setNullIfUndefined, SoftRequired } from '@/utils/object.ts'
import { HTMLAttributes } from 'react'
import { PositiveSpacing, Spacing } from '@/tokens/spacing.ts'
import { Elevation } from '@/tokens/elevation.ts'
import { BorderRadius, BorderStyle, BorderWidth } from '@/tokens/border.ts'
import { Colors } from '@/tokens/colors.ts'
import { Properties } from 'csstype'

export type MarginSpacing = Spacing | Properties['margin'] | number
export type PaddingSpacing = PositiveSpacing | Properties['padding'] | number

export type ExclusiveBoxProps = {
    opacity?: Properties['opacity']
    elevation?: Elevation | Properties['boxShadow']
    bg?: Colors | Properties['background']
    w?: 'auto' | 'full' | Properties['width'] | number
    h?: 'auto' | 'full' | Properties['height'] | number
    minH?: 'auto' | 'full' | Properties['minHeight'] | number
    minW?: 'auto' | 'full' | Properties['minWidth'] | number
    maxH?: 'auto' | 'full' | Properties['maxHeight'] | number
    maxW?: 'auto' | 'full' | Properties['maxWidth'] | number
    p?: PaddingSpacing
    px?: PaddingSpacing
    py?: PaddingSpacing
    pl?: PaddingSpacing
    pr?: PaddingSpacing
    pt?: PaddingSpacing
    pb?: PaddingSpacing
    m?: MarginSpacing
    mx?: MarginSpacing
    my?: MarginSpacing
    ml?: MarginSpacing
    mr?: MarginSpacing
    mt?: MarginSpacing
    mb?: MarginSpacing
    grow?: Properties['flexGrow'] | boolean
    shrink?: Properties['flexShrink'] | boolean
    br?: BorderRadius | Properties['borderRadius'] | number
    brtl?: BorderRadius | Properties['borderTopLeftRadius'] | number
    brtr?: BorderRadius | Properties['borderTopRightRadius'] | number
    brbl?: BorderRadius | Properties['borderBottomLeftRadius'] | number
    brbr?: BorderRadius | Properties['borderBottomRightRadius'] | number
    bs?: BorderStyle | Properties['borderStyle']
    bw?: BorderWidth | Properties['borderWidth'] | number
    bc?: Colors | Properties['borderColor']
    relative?: boolean
    absolute?: boolean
    fixed?: boolean
    sticky?: boolean
    static?: boolean
    position?: Properties['position']
    inset?: Properties['inset'] | boolean | number
    top?: Properties['top'] | boolean | number
    left?: Properties['left'] | boolean | number
    right?: Properties['right'] | boolean | number
    bottom?: Properties['bottom'] | boolean | number
    z?: Properties['zIndex'] | number
    overflow?: Properties['overflow']
    cursor?: Properties['cursor']
    pointerEvents?: Properties['pointerEvents']
    userSelect?: Properties['userSelect']
    transform?: Properties['transform']
    transformOrigin?: Properties['transformOrigin']
    ratio?: Properties['aspectRatio'] | number
}

export const useExtractBoxProps = <P>(allProps: ExclusiveBoxProps & P) => {
    const {
        opacity,
        elevation,
        bg,
        w,
        h,
        minH,
        minW,
        maxH,
        maxW,
        p,
        px,
        py,
        pl,
        pr,
        pt,
        pb,
        m,
        mx,
        my,
        ml,
        mr,
        mt,
        mb,
        grow,
        shrink,
        br,
        brtl,
        brtr,
        brbl,
        brbr,
        bs,
        bw,
        bc,
        relative,
        absolute,
        fixed,
        sticky,
        static: staticProp,
        position,
        inset,
        top,
        left,
        right,
        bottom,
        z,
        overflow,
        cursor,
        pointerEvents,
        userSelect,
        transform,
        transformOrigin,
        ratio,
        ...props
    } = allProps

    const boxProps: SoftRequired<ExclusiveBoxProps> = {
        opacity: setNullIfUndefined(opacity),
        elevation: setNullIfUndefined(elevation),
        bg: setNullIfUndefined(bg),
        w: setNullIfUndefined(w),
        h: setNullIfUndefined(h),
        minH: setNullIfUndefined(minH),
        minW: setNullIfUndefined(minW),
        maxH: setNullIfUndefined(maxH),
        maxW: setNullIfUndefined(maxW),
        p: setNullIfUndefined(p),
        px: setNullIfUndefined(px),
        py: setNullIfUndefined(py),
        pl: setNullIfUndefined(pl),
        pr: setNullIfUndefined(pr),
        pt: setNullIfUndefined(pt),
        pb: setNullIfUndefined(pb),
        m: setNullIfUndefined(m),
        mx: setNullIfUndefined(mx),
        my: setNullIfUndefined(my),
        ml: setNullIfUndefined(ml),
        mr: setNullIfUndefined(mr),
        mt: setNullIfUndefined(mt),
        mb: setNullIfUndefined(mb),
        grow: setNullIfUndefined(grow),
        shrink: setNullIfUndefined(shrink),
        br: setNullIfUndefined(br),
        brtl: setNullIfUndefined(brtl),
        brtr: setNullIfUndefined(brtr),
        brbl: setNullIfUndefined(brbl),
        brbr: setNullIfUndefined(brbr),
        bs: setNullIfUndefined(bs),
        bw: setNullIfUndefined(bw),
        bc: setNullIfUndefined(bc),
        relative: setNullIfUndefined(relative),
        absolute: setNullIfUndefined(absolute),
        fixed: setNullIfUndefined(fixed),
        sticky: setNullIfUndefined(sticky),
        static: setNullIfUndefined(staticProp),
        position: setNullIfUndefined(position),
        inset: setNullIfUndefined(inset),
        top: setNullIfUndefined(top),
        left: setNullIfUndefined(left),
        right: setNullIfUndefined(right),
        bottom: setNullIfUndefined(bottom),
        z: setNullIfUndefined(z),
        overflow: setNullIfUndefined(overflow),
        cursor: setNullIfUndefined(cursor),
        pointerEvents: setNullIfUndefined(pointerEvents),
        userSelect: setNullIfUndefined(userSelect),
        transform: setNullIfUndefined(transform),
        transformOrigin: setNullIfUndefined(transformOrigin),
        ratio: setNullIfUndefined(ratio),
    }
    return {
        boxProps,
        props,
    }
}

export type BoxProps = HTMLAttributes<HTMLDivElement> & ExclusiveBoxProps

export const defaultBoxProps = {
    bs: 'solid',
    bw: 0,
} as const

export type BoxPropsWithDefaults = RequireField<BoxProps, keyof typeof defaultBoxProps>
