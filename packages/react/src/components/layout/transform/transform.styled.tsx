import styled from '@emotion/styled'
import { TransformPropsDefinition } from './transform.shared'
import { StBox } from '@/components/layout/box'
import isUndefined from 'lodash/isUndefined'

export const StTransform = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: TransformPropsDefinition
}>(({ styled: { transform, transformOrigin, perspective, translate, rotate, scale } }) => [
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
])
