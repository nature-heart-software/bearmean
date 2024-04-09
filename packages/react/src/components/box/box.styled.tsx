import styled from '@emotion/styled'
import { ExclusiveBoxProps } from './box.shared'
import { rem } from 'polished'
import { spacing } from '@/tokens/spacing'
import { elevation } from '@/tokens/elevation'
import { SoftRequired } from '@/utils/object'
import { borderRadius } from '@/tokens/border-radius'
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

const getSpacingValue = <S extends string | number>(value: S) => {
    if (typeof value === 'number') return rem(value)
    if (value in spacing) return rem(spacing[value as keyof typeof spacing])
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
            width: w === 'full' ? '100%' : typeof w === 'number' ? rem(w) : w,
        },
        ['string', 'number'].includes(typeof h) && {
            height: h === 'auto' ? h : h === 'full' ? '100%' : rem(h as number),
        },
        ['string', 'number'].includes(typeof minW) && {
            minWidth: minW === 'auto' ? minW : minW === 'full' ? '100%' : rem(minW as number),
        },
        ['string', 'number'].includes(typeof minH) && {
            minHeight: minH === 'auto' ? minH : minH === 'full' ? '100%' : rem(minH as number),
        },
        ['string', 'number'].includes(typeof maxW) && {
            maxWidth: maxW === 'auto' ? maxW : maxW === 'full' ? '100%' : rem(maxW as number),
        },
        ['string', 'number'].includes(typeof maxH) && {
            maxHeight: maxH === 'auto' ? maxH : maxH === 'full' ? '100%' : rem(maxH as number),
        },
        p && {
            paddingTop: getSpacingValue(p),
            paddingLeft: getSpacingValue(p),
            paddingRight: getSpacingValue(p),
            paddingBottom: getSpacingValue(p),
        },
        px && {
            paddingLeft: getSpacingValue(px),
            paddingRight: getSpacingValue(px),
        },
        py && {
            paddingTop: getSpacingValue(py),
            paddingBottom: getSpacingValue(py),
        },
        pt && {
            paddingTop: getSpacingValue(pt),
        },
        pl && {
            paddingLeft: getSpacingValue(pl),
        },
        pr && {
            paddingRight: getSpacingValue(pr),
        },
        pb && {
            paddingBottom: getSpacingValue(pb),
        },
        m && {
            marginTop: getSpacingValue(m),
            marginLeft: getSpacingValue(m),
            marginRight: getSpacingValue(m),
            marginBottom: getSpacingValue(m),
        },
        mx && {
            marginLeft: getSpacingValue(mx),
            marginRight: getSpacingValue(mx),
        },
        my && {
            marginTop: getSpacingValue(my),
            marginBottom: getSpacingValue(my),
        },
        mt && {
            marginTop: getSpacingValue(mt),
        },
        ml && {
            marginLeft: getSpacingValue(ml),
        },
        mr && {
            marginRight: getSpacingValue(mr),
        },
        mb && {
            marginBottom: getSpacingValue(mb),
        },
        br && {
            borderRadius: rem(borderRadius[br]),
        },
        borderTopLeftRadius && {
            borderTopLeftRadius: rem(borderRadius[borderTopLeftRadius]),
        },
        borderTopRightRadius && {
            borderTopRightRadius: rem(borderRadius[borderTopRightRadius]),
        },
        borderBottomLeftRadius && {
            borderBottomLeftRadius: rem(borderRadius[borderBottomLeftRadius]),
        },
        borderBottomRightRadius && {
            borderBottomRightRadius: rem(borderRadius[borderBottomRightRadius]),
        },
    ]
)
