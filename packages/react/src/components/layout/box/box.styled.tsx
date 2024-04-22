import styled from '@emotion/styled'
import { ExclusiveBoxProps } from './box.shared'
import { spacing as _spacing } from '@/tokens/spacing'
import { elevation } from '@/tokens/elevation'
import { borderRadius as _borderRadius, borderStyle as _borderStyle, borderWidth as _borderWidth } from '@/tokens/border'
import { colors as _colors } from '@/tokens/colors'
import get from 'lodash/get'
import { getRawValue, getRemValue } from '@/utils/css-in-js'

export const StBox = styled('div', {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: ExclusiveBoxProps
}>(
    ({
        theme: { spacing = _spacing, colors = _colors, borderRadius = _borderRadius, borderStyle = _borderStyle, borderWidth = _borderWidth },
        styled: {
            grow,
            shrink,
            opacity,
            elevation: elevationProp,
            bg,
            w,
            h,
            mih,
            miw,
            mah,
            maw,
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
            btlr,
            btrr,
            bblr,
            bbrr,
            bs = 'solid',
            bw = 0,
            bc,
            overflow,
            cursor,
            pointerEvents,
            userSelect,
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
        miw && {
            minWidth: miw === 'full' ? '100%' : getRemValue(miw),
        },
        mih && {
            minHeight: mih === 'full' ? '100%' : getRemValue(mih),
        },
        maw && {
            maxWidth: maw === 'full' ? '100%' : getRemValue(maw),
        },
        mah && {
            maxHeight: mah === 'full' ? '100%' : getRemValue(mah),
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
        btlr && {
            borderTopLeftRadius: getRemValue(btlr, borderRadius),
        },
        btrr && {
            borderTopRightRadius: getRemValue(btrr, borderRadius),
        },
        bblr && {
            borderBottomLeftRadius: getRemValue(bblr, borderRadius),
        },
        bbrr && {
            borderBottomRightRadius: getRemValue(bbrr, borderRadius),
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
    ]
)
