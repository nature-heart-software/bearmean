import styled from '@emotion/styled'
import { ExclusiveBoxProps } from './box.shared.ts'
import { spacing as _spacing } from '@/tokens/spacing.ts'
import { elevation } from '@/tokens/elevation.ts'
import { SoftRequired } from '@/utils/object.ts'
import { borderRadius as _borderRadius, borderStyle as _borderStyle, borderWidth as _borderWidth } from '@/tokens/border.ts'
import { colors as _colors } from '@/tokens/colors.ts'
import get from 'lodash/get'
import { getRawValue, getRemValue } from '@/utils/css-in-js.ts'

type StBoxProps = {
    props: SoftRequired<
        Pick<
            ExclusiveBoxProps,
            | 'opacity'
            | 'elevation'
            | 'bg'
            | 'w'
            | 'h'
            | 'minH'
            | 'minW'
            | 'maxH'
            | 'maxW'
            | 'p'
            | 'px'
            | 'py'
            | 'pl'
            | 'pr'
            | 'pt'
            | 'pb'
            | 'm'
            | 'mx'
            | 'my'
            | 'ml'
            | 'mr'
            | 'mt'
            | 'mb'
            | 'grow'
            | 'shrink'
            | 'br'
            | 'brtl'
            | 'brtr'
            | 'brbl'
            | 'brbr'
            | 'bs'
            | 'bw'
            | 'bc'
            | 'relative'
            | 'absolute'
            | 'fixed'
            | 'sticky'
            | 'static'
            | 'position'
            | 'inset'
            | 'top'
            | 'left'
            | 'right'
            | 'bottom'
            | 'z'
            | 'overflow'
            | 'cursor'
            | 'pointerEvents'
            | 'userSelect'
            | 'transform'
            | 'transformOrigin'
            | 'ratio'
        >
    >
}

export const StBox = styled('div', {
    shouldForwardProp: (prop) => !['props', 'as'].includes(prop),
})<StBoxProps>(
    ({
        theme: { spacing = _spacing, colors = _colors, borderRadius = _borderRadius, borderStyle = _borderStyle, borderWidth = _borderWidth },
        props: {
            grow,
            shrink,
            opacity,
            elevation: elevationProp,
            bg,
            w,
            h,
            minW,
            minH,
            maxW,
            maxH,
            p,
            px,
            py,
            pt,
            pl,
            pb,
            pr,
            m,
            mx,
            my,
            mt,
            ml,
            mb,
            mr,
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
        },
    }) => [
        {
            minWidth: 0,
            minHeight: 0,
        },
        typeof grow !== 'undefined' && {
            flexGrow: Number(grow),
        },
        typeof shrink !== 'undefined' && {
            flexGrow: Number(grow),
        },
        typeof opacity === 'number' && {
            opacity,
        },
        elevationProp && {
            boxShadow: getRawValue(elevationProp, elevation),
        },
        bg && {
            background: get(colors, bg) || bg,
        },
        w && {
            width: w === 'full' ? '100%' : getRemValue(w),
        },
        h && {
            height: h === 'full' ? '100%' : getRemValue(h),
        },
        minW && {
            minWidth: minW === 'full' ? '100%' : getRemValue(minW),
        },
        minH && {
            minHeight: minH === 'full' ? '100%' : getRemValue(minH),
        },
        maxW && {
            maxWidth: maxW === 'full' ? '100%' : getRemValue(maxW),
        },
        maxH && {
            maxHeight: maxH === 'full' ? '100%' : getRemValue(maxH),
        },
        p && {
            paddingTop: getRemValue(p, spacing),
            paddingLeft: getRemValue(p, spacing),
            paddingRight: getRemValue(p, spacing),
            paddingBottom: getRemValue(p, spacing),
        },
        px && {
            paddingLeft: getRemValue(px, spacing),
            paddingRight: getRemValue(px, spacing),
        },
        py && {
            paddingTop: getRemValue(py, spacing),
            paddingBottom: getRemValue(py, spacing),
        },
        pt && {
            paddingTop: getRemValue(pt, spacing),
        },
        pl && {
            paddingLeft: getRemValue(pl, spacing),
        },
        pr && {
            paddingRight: getRemValue(pr, spacing),
        },
        pb && {
            paddingBottom: getRemValue(pb, spacing),
        },
        m && {
            marginTop: getRemValue(m, spacing),
            marginLeft: getRemValue(m, spacing),
            marginRight: getRemValue(m, spacing),
            marginBottom: getRemValue(m, spacing),
        },
        mx && {
            marginLeft: getRemValue(mx, spacing),
            marginRight: getRemValue(mx, spacing),
        },
        my && {
            marginTop: getRemValue(my, spacing),
            marginBottom: getRemValue(my, spacing),
        },
        mt && {
            marginTop: getRemValue(mt, spacing),
        },
        ml && {
            marginLeft: getRemValue(ml, spacing),
        },
        mr && {
            marginRight: getRemValue(mr, spacing),
        },
        mb && {
            marginBottom: getRemValue(mb, spacing),
        },
        br && {
            borderRadius: getRemValue(br, borderRadius),
        },
        brtl && {
            borderTopLeftRadius: getRemValue(brtl, borderRadius),
        },
        brtr && {
            borderTopRightRadius: getRemValue(brtr, borderRadius),
        },
        brbl && {
            borderBottomLeftRadius: getRemValue(brbl, borderRadius),
        },
        brbr && {
            borderBottomRightRadius: getRemValue(brbr, borderRadius),
        },
        bs && {
            borderStyle: getRawValue(bs, borderStyle),
        },
        typeof bw !== 'undefined' &&
            bw !== null && {
                borderWidth: getRemValue(bw, borderWidth),
            },
        bc && {
            borderColor: get(colors, bc) || bc,
        },
        position && {
            position,
        },
        relative && {
            position: 'relative',
        },
        absolute && {
            position: 'absolute',
        },
        fixed && {
            position: 'fixed',
        },
        sticky && {
            position: 'sticky',
        },
        staticProp && {
            position: 'static',
        },
        inset && {
            inset: typeof inset === 'boolean' ? 0 : getRemValue(inset),
        },
        top && {
            top: typeof top === 'boolean' ? 0 : getRemValue(top),
        },
        left && {
            left: typeof left === 'boolean' ? 0 : getRemValue(left),
        },
        right && {
            right: typeof right === 'boolean' ? 0 : getRemValue(right),
        },
        bottom && {
            bottom: typeof bottom === 'boolean' ? 0 : getRemValue(bottom),
        },
        z && {
            zIndex: z,
        },
        overflow && {
            overflow,
        },
        cursor && {
            cursor,
        },
        pointerEvents && {
            pointerEvents,
        },
        userSelect && {
            userSelect,
        },
        transform && {
            transform,
        },
        transformOrigin && {
            transformOrigin,
        },
        ratio && {
            aspectRatio: ratio,
        },
    ]
)
