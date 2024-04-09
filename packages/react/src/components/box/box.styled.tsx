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
            | 'backgroundColor'
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
            | 'borderRadius'
            | 'borderTopLeftRadius'
            | 'borderTopRightRadius'
            | 'borderBottomLeftRadius'
            | 'borderBottomRightRadius'
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
            backgroundColor,
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
            borderRadius: borderRadiusProp,
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,
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
            boxShadow: elevation[elevationProp],
        },
        backgroundColor && {
            backgroundColor: get(colors, backgroundColor) || backgroundColor,
        },
        ['string', 'number'].includes(typeof w) && {
            width: w === 'auto' ? w : w === 'full' ? '100%' : rem(w as number),
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
            paddingTop: typeof p === 'number' ? rem(p) : rem(spacing[p]),
            paddingLeft: typeof p === 'number' ? rem(p) : rem(spacing[p]),
            paddingRight: typeof p === 'number' ? rem(p) : rem(spacing[p]),
            paddingBottom: typeof p === 'number' ? rem(p) : rem(spacing[p]),
        },
        px && {
            paddingLeft: typeof px === 'number' ? rem(px) : rem(spacing[px]),
            paddingRight: typeof px === 'number' ? rem(px) : rem(spacing[px]),
        },
        py && {
            paddingTop: typeof py === 'number' ? rem(py) : rem(spacing[py]),
            paddingBottom: typeof py === 'number' ? rem(py) : rem(spacing[py]),
        },
        pt && {
            paddingTop: typeof pt === 'number' ? rem(pt) : rem(spacing[pt]),
        },
        pl && {
            paddingLeft: typeof pl === 'number' ? rem(pl) : rem(spacing[pl]),
        },
        pr && {
            paddingRight: typeof pr === 'number' ? rem(pr) : rem(spacing[pr]),
        },
        pb && {
            paddingBottom: typeof pb === 'number' ? rem(pb) : rem(spacing[pb]),
        },
        m && {
            marginTop: typeof m === 'number' ? rem(m) : m in spacing ? rem(spacing[m as keyof typeof spacing]) : m,
            marginLeft: typeof m === 'number' ? rem(m) : m in spacing ? rem(spacing[m as keyof typeof spacing]) : m,
            marginRight: typeof m === 'number' ? rem(m) : m in spacing ? rem(spacing[m as keyof typeof spacing]) : m,
            marginBottom: typeof m === 'number' ? rem(m) : m in spacing ? rem(spacing[m as keyof typeof spacing]) : m,
        },
        mx && {
            marginLeft: typeof mx === 'number' ? rem(mx) : mx in spacing ? rem(spacing[mx as keyof typeof spacing]) : mx,
            marginRight: typeof mx === 'number' ? rem(mx) : mx in spacing ? rem(spacing[mx as keyof typeof spacing]) : mx,
        },
        my && {
            marginTop: typeof my === 'number' ? rem(my) : my in spacing ? rem(spacing[my as keyof typeof spacing]) : my,
            marginBottom: typeof my === 'number' ? rem(my) : my in spacing ? rem(spacing[my as keyof typeof spacing]) : my,
        },
        mt && {
            marginTop: typeof mt === 'number' ? rem(mt) : mt in spacing ? rem(spacing[mt as keyof typeof spacing]) : mt,
        },
        ml && {
            marginLeft: typeof ml === 'number' ? rem(ml) : ml in spacing ? rem(spacing[ml as keyof typeof spacing]) : ml,
        },
        mr && {
            marginRight: typeof mr === 'number' ? rem(mr) : mr in spacing ? rem(spacing[mr as keyof typeof spacing]) : mr,
        },
        mb && {
            marginBottom: typeof mb === 'number' ? rem(mb) : mb in spacing ? rem(spacing[mb as keyof typeof spacing]) : mb,
        },
        borderRadiusProp && {
            borderRadius: rem(borderRadius[borderRadiusProp]),
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
