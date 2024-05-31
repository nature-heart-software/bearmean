import styled from '@emotion/styled'
import { ExclusivePositionProps } from './position.shared'
import { getRawValue, getRemValue } from '@/utils/css-in-js'
import { StBox } from '@/components/layout/box'
import { Properties } from 'csstype'
import { level as _level } from '@/tokens/level'
import { spacing as _spacing } from '@/tokens/spacing'
import isUndefined from 'lodash/isUndefined'

export const StPosition = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: ExclusivePositionProps
}>(
    ({
        theme: { level = _level, spacing = _spacing },
        styled: {
            relative,
            absolute,
            fixed,
            sticky,
            static: staticProp,
            value = 'relative',
            inset,
            top,
            left,
            right,
            bottom,
            z,
            transform,
            transformOrigin,
            perspective,
            translate,
            rotate,
            scale,
        },
    }) => [
        {
            position:
                ([relative && 'relative', absolute && 'absolute', fixed && 'fixed', sticky && 'sticky', staticProp && 'static'].filter(
                    Boolean
                )[0] as Properties['position']) || value,
        },
        !isUndefined(inset) && {
            inset: typeof inset === 'boolean' ? 0 : getRemValue(inset, spacing),
        },
        !isUndefined(top) && {
            top: typeof top === 'boolean' ? 0 : getRemValue(top, spacing),
        },
        !isUndefined(left) && {
            left: typeof left === 'boolean' ? 0 : getRemValue(left, spacing),
        },
        !isUndefined(right) && {
            right: typeof right === 'boolean' ? 0 : getRemValue(right, spacing),
        },
        !isUndefined(bottom) && {
            bottom: typeof bottom === 'boolean' ? 0 : getRemValue(bottom, spacing),
        },
        !isUndefined(z) && {
            zIndex: getRawValue(z, level),
        },
        transform && {
            transform,
        },
        transformOrigin && {
            transformOrigin,
        },
        perspective && {
            perspective,
        },
        translate && {
            translate,
        },
        rotate && {
            rotate,
        },
        !isUndefined(scale) && {
            scale,
        },
    ]
)
