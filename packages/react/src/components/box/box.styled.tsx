import styled from '@emotion/styled'
import { ExclusiveBoxProps } from './box.shared'
import { spacing } from '@/tokens/spacing'
import { elevation } from '@/tokens/elevation'
import { SoftRequired } from '@/utils/object'
import { borderRadius, borderStyle, borderWidth } from '@/tokens/border.ts'
import { colors } from '@/tokens/colors.ts'
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
        >
    >
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
        bw && {
            borderWidth: getRemValue(bw, borderWidth),
        },
    ]
)
