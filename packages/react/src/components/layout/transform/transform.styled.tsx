import styled from '@emotion/styled'
import { TransformPropsDefinition } from './transform.shared'
import { StBox } from '@/components/layout/box'
import isUndefined from 'lodash/isUndefined'
import { getRawValue } from '@/utils'
import { spacing as _spacing } from '@/tokens'

export const StTransform = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: TransformPropsDefinition
}>(({
    theme: { spacing = _spacing },
    styled: {
        transform: transformProp,
        transformOrigin,
        perspective,
        translate,
        translateX,
        translateY,
        translateZ,
        translate3d,
        rotate,
        scale,
        scaleX,
        scaleY,
        scaleZ,
        scale3d,
    },
}) => {
    const transform = [
        transformProp && `${getRawValue(transformProp, spacing)}`,
        translate &&
            `translate(${translate
                .map((value) => value && getRawValue(value, spacing))
                .filter(Boolean)
                .join(', ')})`,
        translateX && `translateX(${getRawValue(translateX, spacing)})`,
        translateY && `translateY(${getRawValue(translateY, spacing)})`,
        translateZ && `translateZ(${getRawValue(translateZ, spacing)})`,
        translate3d && `translate3d(${getRawValue(translate3d, spacing)})`,
        scale && `scale(${getRawValue(scale, spacing)})`,
        scaleX && `scaleX(${getRawValue(scaleX, spacing)})`,
        scaleY && `scaleY(${getRawValue(scaleY, spacing)})`,
        scaleZ && `scaleZ(${getRawValue(scaleZ, spacing)})`,
        scale3d && `scale3d(${getRawValue(scale3d, spacing)})`,
    ].join(' ')
    return [
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
})
