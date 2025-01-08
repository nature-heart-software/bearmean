import styled from '@emotion/styled'
import { PositionPropsWithDefaults } from './position.shared'
import { defineMixins, getRawValue, getRemValue, StyledProps } from '@/utils/css-in-js'
import { level as _level, spacing as _spacing } from '@/tokens'
import isUndefined from 'lodash/isUndefined'
import { StTransform } from '@/components/layout/transform'

export const StPosition = styled(StTransform)<StyledProps<PositionPropsWithDefaults>>((context) => {
    const {
        theme: { level = _level, spacing = _spacing },
    } = context
    const { getResponsive } = defineMixins(context)
    return [
        getResponsive(
            'position',
            (position) =>
                !isUndefined(position) && {
                    position,
                }
        ),
        getResponsive(
            'relative',
            (relative) =>
                relative && {
                    position: 'relative',
                }
        ),
        getResponsive(
            'absolute',
            (absolute) =>
                absolute && {
                    position: 'absolute',
                }
        ),
        getResponsive(
            'fixed',
            (fixed) =>
                fixed && {
                    position: 'fixed',
                }
        ),
        getResponsive(
            'sticky',
            (sticky) =>
                sticky && {
                    position: 'sticky',
                }
        ),
        getResponsive(
            'static',
            (staticProp) =>
                staticProp && {
                    position: 'static',
                }
        ),
        getResponsive(
            'inset',
            (inset) =>
                !isUndefined(inset) && {
                    inset: typeof inset === 'boolean' && inset ? 0 : inset ? getRemValue(inset, spacing) : undefined,
                }
        ),
        getResponsive(
            'top',
            (top) =>
                !isUndefined(top) && {
                    top: typeof top === 'boolean' && top ? 0 : top ? getRemValue(top, spacing) : undefined,
                }
        ),
        getResponsive(
            'left',
            (left) =>
                !isUndefined(left) && {
                    left: typeof left === 'boolean' && left ? 0 : left ? getRemValue(left, spacing) : undefined,
                }
        ),
        getResponsive(
            'right',
            (right) =>
                !isUndefined(right) && {
                    right: typeof right === 'boolean' && right ? 0 : right ? getRemValue(right, spacing) : undefined,
                }
        ),
        getResponsive(
            'bottom',
            (bottom) =>
                !isUndefined(bottom) && {
                    bottom: typeof bottom === 'boolean' && bottom ? 0 : bottom ? getRemValue(bottom, spacing) : undefined,
                }
        ),
        getResponsive(
            'z',
            (z) =>
                !isUndefined(z) && {
                    zIndex: getRawValue(z, level),
                }
        ),
    ]
})
