import styled from '@emotion/styled'
import { BoxPropsWithDefaults } from './box.shared'
import {
    borderRadius as _borderRadius,
    borderStyle as _borderStyle,
    borderWidth as _borderWidth,
    colors as _colors,
    elevation,
    spacing as _spacing,
} from '@/tokens'
import get from 'lodash/get'
import { defineMixins, getRawValue, getRemValue, StyledProps } from '@/utils/css-in-js'
import isUndefined from 'lodash/isUndefined'

export const StBox = styled('div')<StyledProps<BoxPropsWithDefaults>>((context) => {
    const {
        theme: { spacing = _spacing, colors = _colors, borderRadius = _borderRadius, borderStyle = _borderStyle, borderWidth = _borderWidth },
    } = context
    const { getResponsive } = defineMixins(context)
    return [
        {
            minWidth: 0,
            minHeight: 0,
        },
        getResponsive(
            'display',
            (display) =>
                !isUndefined(display) && {
                    display,
                }
        ),
        getResponsive(
            'placeItems',
            (placeItems) =>
                !isUndefined(placeItems) && {
                    placeItems,
                }
        ),
        getResponsive(
            'basis',
            (basis) =>
                !isUndefined(basis) && {
                    flexBasis: basis === 'full' ? '100%' : getRemValue(basis),
                }
        ),
        getResponsive(
            'grow',
            (grow) =>
                !isUndefined(grow) && {
                    flexGrow: Number(grow),
                }
        ),
        getResponsive(
            'shrink',
            (shrink) =>
                !isUndefined(shrink) && {
                    flexShrink: Number(shrink),
                }
        ),
        getResponsive(
            'opacity',
            (opacity) =>
                !isUndefined(opacity) && {
                    opacity,
                }
        ),
        getResponsive(
            'elevation',
            (elevationProp) =>
                elevationProp && {
                    boxShadow: getRawValue(elevationProp, elevation),
                }
        ),
        getResponsive(
            'bg',
            (bg) =>
                !isUndefined(bg) && {
                    background: get(colors, bg) || bg,
                }
        ),
        getResponsive(
            'w',
            (w) =>
                !isUndefined(w) && {
                    width: w === 'full' ? '100%' : getRemValue(w),
                }
        ),
        getResponsive(
            'h',
            (h) =>
                !isUndefined(h) && {
                    height: h === 'full' ? '100%' : getRemValue(h),
                }
        ),
        getResponsive(
            'miw',
            (miw) =>
                !isUndefined(miw) && {
                    minWidth: miw === 'full' ? '100%' : getRemValue(miw),
                }
        ),
        getResponsive(
            'mih',
            (mih) =>
                !isUndefined(mih) && {
                    minHeight: mih === 'full' ? '100%' : getRemValue(mih),
                }
        ),
        getResponsive(
            'maw',
            (maw) =>
                !isUndefined(maw) && {
                    maxWidth: maw === 'full' ? '100%' : getRemValue(maw),
                }
        ),
        getResponsive(
            'mah',
            (mah) =>
                !isUndefined(mah) && {
                    maxHeight: mah === 'full' ? '100%' : getRemValue(mah),
                }
        ),
        getResponsive(
            'p',
            (p) =>
                !isUndefined(p) && {
                    paddingTop: getRemValue(p, spacing),
                    paddingLeft: getRemValue(p, spacing),
                    paddingRight: getRemValue(p, spacing),
                    paddingBottom: getRemValue(p, spacing),
                }
        ),
        getResponsive(
            'px',
            (px) =>
                !isUndefined(px) && {
                    paddingLeft: getRemValue(px, spacing),
                    paddingRight: getRemValue(px, spacing),
                }
        ),
        getResponsive(
            'py',
            (py) =>
                !isUndefined(py) && {
                    paddingTop: getRemValue(py, spacing),
                    paddingBottom: getRemValue(py, spacing),
                }
        ),
        getResponsive(
            'pt',
            (pt) =>
                !isUndefined(pt) && {
                    paddingTop: getRemValue(pt, spacing),
                }
        ),
        getResponsive(
            'pl',
            (pl) =>
                !isUndefined(pl) && {
                    paddingLeft: getRemValue(pl, spacing),
                }
        ),
        getResponsive(
            'pr',
            (pr) =>
                !isUndefined(pr) && {
                    paddingRight: getRemValue(pr, spacing),
                }
        ),
        getResponsive(
            'pb',
            (pb) =>
                !isUndefined(pb) && {
                    paddingBottom: getRemValue(pb, spacing),
                }
        ),
        getResponsive(
            'm',
            (m) =>
                !isUndefined(m) && {
                    marginTop: getRemValue(m, spacing),
                    marginLeft: getRemValue(m, spacing),
                    marginRight: getRemValue(m, spacing),
                    marginBottom: getRemValue(m, spacing),
                }
        ),
        getResponsive(
            'mx',
            (mx) =>
                !isUndefined(mx) && {
                    marginLeft: getRemValue(mx, spacing),
                    marginRight: getRemValue(mx, spacing),
                }
        ),
        getResponsive(
            'my',
            (my) =>
                !isUndefined(my) && {
                    marginTop: getRemValue(my, spacing),
                    marginBottom: getRemValue(my, spacing),
                }
        ),
        getResponsive(
            'mt',
            (mt) =>
                !isUndefined(mt) && {
                    marginTop: getRemValue(mt, spacing),
                }
        ),
        getResponsive(
            'ml',
            (ml) =>
                !isUndefined(ml) && {
                    marginLeft: getRemValue(ml, spacing),
                }
        ),
        getResponsive(
            'mr',
            (mr) =>
                !isUndefined(mr) && {
                    marginRight: getRemValue(mr, spacing),
                }
        ),
        getResponsive(
            'mb',
            (mb) =>
                !isUndefined(mb) && {
                    marginBottom: getRemValue(mb, spacing),
                }
        ),
        getResponsive(
            'br',
            (br) =>
                !isUndefined(br) && {
                    borderRadius: getRemValue(br, borderRadius),
                }
        ),
        getResponsive(
            'btlr',
            (btlr) =>
                !isUndefined(btlr) && {
                    borderTopLeftRadius: getRemValue(btlr, borderRadius),
                }
        ),
        getResponsive(
            'btrr',
            (btrr) =>
                !isUndefined(btrr) && {
                    borderTopRightRadius: getRemValue(btrr, borderRadius),
                }
        ),
        getResponsive(
            'bblr',
            (bblr) =>
                !isUndefined(bblr) && {
                    borderBottomLeftRadius: getRemValue(bblr, borderRadius),
                }
        ),
        getResponsive(
            'bbrr',
            (bbrr) =>
                !isUndefined(bbrr) && {
                    borderBottomRightRadius: getRemValue(bbrr, borderRadius),
                }
        ),
        getResponsive(
            'bs',
            (bs) =>
                !isUndefined(bs) && {
                    borderStyle: getRawValue(bs, borderStyle),
                }
        ),
        getResponsive(
            'bw',
            (bw) =>
                !isUndefined(bw) && {
                    borderWidth: getRemValue(bw, borderWidth),
                }
        ),
        getResponsive(
            'btw',
            (btw) =>
                !isUndefined(btw) && {
                    borderBottomWidth: getRemValue(btw, borderWidth),
                }
        ),
        getResponsive(
            'brw',
            (brw) =>
                !isUndefined(brw) && {
                    borderRightWidth: getRemValue(brw, borderWidth),
                }
        ),
        getResponsive(
            'blw',
            (blw) =>
                !isUndefined(blw) && {
                    borderLeftWidth: getRemValue(blw, borderWidth),
                }
        ),
        getResponsive(
            'bbw',
            (bbw) =>
                !isUndefined(bbw) && {
                    borderBottomWidth: getRemValue(bbw, borderWidth),
                }
        ),
        getResponsive(
            'bc',
            (bc) =>
                !isUndefined(bc) && {
                    borderColor: get(colors, bc) || bc,
                }
        ),
        getResponsive(
            'overflow',
            (overflow) =>
                !isUndefined(overflow) && {
                    overflow,
                }
        ),
        getResponsive(
            'overflowX',
            (overflowX) =>
                !isUndefined(overflowX) && {
                    overflowX,
                }
        ),
        getResponsive(
            'overflowY',
            (overflowY) =>
                !isUndefined(overflowY) && {
                    overflowY,
                }
        ),
        getResponsive(
            'cursor',
            (cursor) =>
                !isUndefined(cursor) && {
                    cursor,
                }
        ),
        getResponsive(
            'pointerEvents',
            (pointerEvents) =>
                !isUndefined(pointerEvents) && {
                    pointerEvents,
                }
        ),
        getResponsive(
            'userSelect',
            (userSelect) =>
                !isUndefined(userSelect) && {
                    userSelect,
                }
        ),
    ]
})
