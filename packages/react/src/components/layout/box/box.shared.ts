import { ObjectDotNotation, RequireField, setNullIfUndefined, SoftRequired } from '@/utils/object.ts'
import { CSSProperties, HTMLAttributes } from 'react'
import { PositiveSpacing, Spacing } from '@/tokens/spacing.ts'
import { Elevation } from '@/tokens/elevation.ts'
import { BorderRadius, BorderStyle, BorderWidth } from '@/tokens/border.ts'
import { Colors } from '@/tokens/colors.ts'

export type MarginSpacing = Spacing | (CSSProperties['margin'] & {})
export type PaddingSpacing = PositiveSpacing | (CSSProperties['padding'] & {})

export type ExclusiveBoxProps = {
    opacity?: CSSProperties['opacity']
    elevation?: Elevation | (CSSProperties['boxShadow'] & {})
    bg?: ObjectDotNotation<Colors> | (CSSProperties['background'] & {})
    w?: 'auto' | 'full' | (CSSProperties['width'] & {})
    h?: 'auto' | 'full' | (CSSProperties['height'] & {})
    minH?: 'auto' | 'full' | (CSSProperties['minHeight'] & {})
    minW?: 'auto' | 'full' | (CSSProperties['minWidth'] & {})
    maxH?: 'auto' | 'full' | (CSSProperties['maxHeight'] & {})
    maxW?: 'auto' | 'full' | (CSSProperties['maxWidth'] & {})
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
    grow?: CSSProperties['flexGrow'] | boolean
    shrink?: CSSProperties['flexShrink'] | boolean
    br?: BorderRadius | (CSSProperties['borderRadius'] & {})
    brtl?: BorderRadius | (CSSProperties['borderTopLeftRadius'] & {})
    brtr?: BorderRadius | (CSSProperties['borderTopRightRadius'] & {})
    brbl?: BorderRadius | (CSSProperties['borderBottomLeftRadius'] & {})
    brbr?: BorderRadius | (CSSProperties['borderBottomRightRadius'] & {})
    bs?: BorderStyle | (CSSProperties['borderStyle'] & {})
    bw?: BorderWidth | (CSSProperties['borderWidth'] & {})
    relative?: boolean
    absolute?: boolean
    fixed?: boolean
    sticky?: boolean
    static?: boolean
    position?: CSSProperties['position']
    inset?: CSSProperties['inset'] | boolean
    top?: CSSProperties['top'] | boolean
    left?: CSSProperties['left'] | boolean
    right?: CSSProperties['right'] | boolean
    bottom?: CSSProperties['bottom'] | boolean
    z?: CSSProperties['zIndex']
    overflow?: CSSProperties['overflow']
    cursor?: CSSProperties['cursor']
    pointerEvents?: CSSProperties['pointerEvents']
    userSelect?: CSSProperties['userSelect']
    transform?: CSSProperties['transform']
    transformOrigin?: CSSProperties['transformOrigin']
    ratio?: CSSProperties['aspectRatio'] | number
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
    bw: 1,
} as const

export type BoxPropsWithDefaults = RequireField<BoxProps, keyof typeof defaultBoxProps>
