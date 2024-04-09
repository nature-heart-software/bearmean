import styled from '@emotion/styled'
import { ExclusiveBoxProps } from './box.shared'
import { rem } from 'polished'
import { spacing } from '@/tokens/spacing'
import { elevation } from '@/tokens/elevation'
import { SoftRequired } from '@/utils/object'
import { borderRadius, borderStyle } from '@/tokens/border.ts'
import { colors } from '@/tokens/colors.ts'
import get from 'lodash/get'

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
        >
    >
}

const getValue = <V extends string | number, R extends Record<string, unknown>>(value: V, from?: R) => {
    if (typeof value === 'number') return rem(value)
    if (from && value in from) return rem(from[value as unknown as keyof R] as string)
    return value
}

export const StBox = styled('div', {
    shouldForwardProp: (prop) => !['props', 'as'].includes(prop),
})<StBoxProps>(
    ({
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
            boxShadow: elevationProp in elevation ? elevation[elevationProp as keyof typeof elevation] : elevationProp,
        },
        bg && {
            background: get(colors, bg) || bg,
        },
        w && {
            width: w === 'full' ? '100%' : getValue(w),
        },
        h && {
            height: h === 'full' ? '100%' : getValue(h),
        },
        minW && {
            minWidth: minW === 'full' ? '100%' : getValue(minW),
        },
        minH && {
            minHeight: minH === 'full' ? '100%' : getValue(minH),
        },
        maxW && {
            maxWidth: maxW === 'full' ? '100%' : getValue(maxW),
        },
        maxH && {
            maxHeight: maxH === 'full' ? '100%' : getValue(maxH),
        },
        p && {
            paddingTop: getValue(p, spacing),
            paddingLeft: getValue(p, spacing),
            paddingRight: getValue(p, spacing),
            paddingBottom: getValue(p, spacing),
        },
        px && {
            paddingLeft: getValue(px, spacing),
            paddingRight: getValue(px, spacing),
        },
        py && {
            paddingTop: getValue(py, spacing),
            paddingBottom: getValue(py, spacing),
        },
        pt && {
            paddingTop: getValue(pt, spacing),
        },
        pl && {
            paddingLeft: getValue(pl, spacing),
        },
        pr && {
            paddingRight: getValue(pr, spacing),
        },
        pb && {
            paddingBottom: getValue(pb, spacing),
        },
        m && {
            marginTop: getValue(m, spacing),
            marginLeft: getValue(m, spacing),
            marginRight: getValue(m, spacing),
            marginBottom: getValue(m, spacing),
        },
        mx && {
            marginLeft: getValue(mx, spacing),
            marginRight: getValue(mx, spacing),
        },
        my && {
            marginTop: getValue(my, spacing),
            marginBottom: getValue(my, spacing),
        },
        mt && {
            marginTop: getValue(mt, spacing),
        },
        ml && {
            marginLeft: getValue(ml, spacing),
        },
        mr && {
            marginRight: getValue(mr, spacing),
        },
        mb && {
            marginBottom: getValue(mb, spacing),
        },
        br && {
            borderRadius: getValue(br, borderRadius),
        },
        brtl && {
            borderTopLeftRadius: getValue(brtl, borderRadius),
        },
        brtr && {
            borderTopRightRadius: getValue(brtr, borderRadius),
        },
        brbl && {
            borderBottomLeftRadius: getValue(brbl, borderRadius),
        },
        brbr && {
            borderBottomRightRadius: getValue(brbr, borderRadius),
        },
        bs && {
            borderStyle: getValue(bs, borderStyle),
        },
        bw && {
            borderWidth: bw,
        },
    ]
)
