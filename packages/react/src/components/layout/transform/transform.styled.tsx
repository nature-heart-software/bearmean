import styled from '@emotion/styled'
import { TransformPropsDefinition } from './transform.shared'
import { StBox } from '@/components/layout/box'
import isUndefined from 'lodash/isUndefined'
import { getRemValue, getStyledOptions, StyledProps } from '@/utils'
import { spacing as _spacing } from '@/tokens'

export const StTransform = styled(
    StBox,
    getStyledOptions()
)<StyledProps<TransformPropsDefinition>>(({
    theme: { spacing = _spacing },
    styled: {
        transform: transformProp,
        transformOrigin,
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
        skew,
        skewX,
        skewY,
        rotateX,
        rotateY,
        rotateZ,
        rotate3d,
        perspective,
    },
}) => {
    const transform = [
        transformProp,
        translate &&
            `translate(${
                typeof translate === 'object'
                    ? translate
                          .map((value) => getRemValue(value, spacing))
                          .filter(Boolean)
                          .join(', ')
                    : translate
            })`,
        translateX && `translateX(${getRemValue(translateX, spacing)})`,
        translateY && `translateY(${getRemValue(translateY, spacing)})`,
        translateZ && `translateZ(${getRemValue(translateZ, spacing)})`,
        translate3d && `translate3d(${translate3d.map((value) => getRemValue(value, spacing)).join(', ')})`,
        scale && `scale(${typeof scale === 'object' ? scale.join(', ') : scale})`,
        scaleX && `scaleX(${scaleX})`,
        scaleY && `scaleY(${scaleY})`,
        scaleZ && `scaleZ(${scaleZ})`,
        scale3d && `scale3d(${typeof scale3d === 'object' ? scale3d.join(', ') : scale3d})`,
        skew && `skew(${typeof skew === 'object' ? skew.join(', ') : skew})`,
        skewX && `skewX(${skewX})`,
        skewY && `skewY(${skewY})`,
        rotate && `rotate(${typeof rotate === 'object' ? rotate.join(', ') : rotate})`,
        rotateX && `rotateX(${rotateX})`,
        rotateY && `rotateY(${rotateY})`,
        rotateZ && `rotateZ(${rotateZ})`,
        rotate3d && `rotate3d(${typeof rotate3d === 'object' ? rotate3d.join(', ') : rotate3d})`,
    ].join(' ')
    return [
        transform && {
            transform,
        },
        transformOrigin && {
            transformOrigin: typeof transformOrigin === 'object' ? transformOrigin.join(' ') : transformOrigin,
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
