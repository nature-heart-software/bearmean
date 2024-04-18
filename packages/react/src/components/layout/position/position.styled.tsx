import styled from '@emotion/styled'
import { ExclusivePositionProps } from './position.shared.ts'
import { getRawValue, getRemValue } from '@/utils/css-in-js.ts'
import { StBox } from '@/components/layout'
import { Properties } from 'csstype'
import { level as _level } from '@/tokens/level.ts'

export const StPosition = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: ExclusivePositionProps
}>(
    ({
        theme: { level = _level },
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
            inset: typeof inset === 'boolean' ? 0 : getRemValue(inset),
        },
        top && {
            top: typeof top === 'boolean' ? 0 : getRemValue(top),
        },
        left && {
            left: typeof left === 'boolean' ? 0 : getRemValue(left),
        },
        right && {
            right: typeof right === 'boolean' ? 0 : getRemValue(right),
        },
        bottom && {
            bottom: typeof bottom === 'boolean' ? 0 : getRemValue(bottom),
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
