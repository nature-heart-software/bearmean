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
                    inset: typeof inset === 'boolean' ? 0 : getRemValue(inset, spacing),
                }
        ),
        getResponsive(
            'top',
            (top) =>
                !isUndefined(top) && {
                    top: typeof top === 'boolean' ? 0 : getRemValue(top, spacing),
                }
        ),
        getResponsive(
            'left',
            (left) =>
                !isUndefined(left) && {
                    left: typeof left === 'boolean' ? 0 : getRemValue(left, spacing),
                }
        ),
        getResponsive(
            'right',
            (right) =>
                !isUndefined(right) && {
                    right: typeof right === 'boolean' ? 0 : getRemValue(right, spacing),
                }
        ),
        getResponsive(
            'bottom',
            (bottom) =>
                !isUndefined(bottom) && {
                    bottom: typeof bottom === 'boolean' ? 0 : getRemValue(bottom, spacing),
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
