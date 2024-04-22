import styled from '@emotion/styled'
import { ExclusivePositionProps } from './position.shared'
import { getRawValue, getRemValue } from '@/utils/css-in-js'
import { StBox } from '@/components/layout'
import { Properties } from 'csstype'
import { level as _level } from '@/tokens/level'
import { spacing as _spacing } from '@/tokens/spacing'

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
        inset && {
            inset: typeof inset === 'boolean' ? 0 : getRemValue(inset, spacing),
        },
        top && {
            top: typeof top === 'boolean' ? 0 : getRemValue(top, spacing),
        },
        left && {
            left: typeof left === 'boolean' ? 0 : getRemValue(left, spacing),
        },
        right && {
            right: typeof right === 'boolean' ? 0 : getRemValue(right, spacing),
        },
        bottom && {
            bottom: typeof bottom === 'boolean' ? 0 : getRemValue(bottom, spacing),
        },
        z && {
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
        scale && {
            scale,
        },
    ]
)
