import styled from '@emotion/styled'
import { TransformPropsWithDefaults } from './transform.shared'
import { StBox } from '@/components/layout/box'
import isUndefined from 'lodash/isUndefined'
import { defineMixins, getRemValue, StyledProps } from '@/utils'
import { spacing as _spacing } from '@/tokens'

export const StTransform = styled(StBox)<StyledProps<TransformPropsWithDefaults>>((context) => {
    const {
        theme: { spacing = _spacing },
    } = context
    const { getResponsive } = defineMixins(context)
    return [
        {
            '--bm-translate-x': 0,
            '--bm-translate-y': 0,
            '--bm-scale-x': 1,
            '--bm-scale-y': 1,
            '--bm-skew-x': 0,
            '--bm-skew-y': 0,
            '--bm-rotate': 0,
        },
        getResponsive(
            'translate',
            (translate) =>
                translate && {
                    '--bm-translate-x': getRemValue(typeof translate === 'object' ? translate[0] : translate, spacing),
                    '--bm-translate-y': getRemValue(typeof translate === 'object' ? translate[1] : translate, spacing),
                }
        ),
        getResponsive(
            'translateX',
            (translateX) =>
                !isUndefined(translateX) && {
                    '--bm-translate-x': getRemValue(translateX, spacing),
                }
        ),
        getResponsive(
            'translateY',
            (translateY) =>
                !isUndefined(translateY) && {
                    '--bm-translate-y': getRemValue(translateY, spacing),
                }
        ),
        getResponsive(
            'scale',
            (scale) =>
                !isUndefined(scale) && {
                    '--bm-scale-x': typeof scale === 'object' ? scale[0] : scale,
                    '--bm-scale-y': typeof scale === 'object' ? scale[1] : scale,
                }
        ),
        getResponsive(
            'scaleX',
            (scaleX) =>
                !isUndefined(scaleX) && {
                    '--bm-scale-x': getRemValue(scaleX, spacing),
                }
        ),
        getResponsive(
            'scaleY',
            (scaleY) =>
                !isUndefined(scaleY) && {
                    '--bm-scale-y': getRemValue(scaleY, spacing),
                }
        ),
        getResponsive(
            'skewX',
            (skewX) =>
                !isUndefined(skewX) && {
                    '--bm-skew-x': getRemValue(skewX, spacing),
                }
        ),
        getResponsive(
            'skewY',
            (skewY) =>
                !isUndefined(skewY) && {
                    '--bm-skew-y': getRemValue(skewY, spacing),
                }
        ),
        getResponsive(
            'rotate',
            (rotate) =>
                !isUndefined(rotate) && {
                    '--bm-rotate': getRemValue(rotate, spacing),
                }
        ),
        {
            transform: [
                'translate(var(--bm-translate-x), var(--bm-translate-y))',
                'scaleX(var(--bm-scale-x))',
                'scaleY(var(--bm-scale-y))',
                'rotate(var(--bm-rotate))',
                'skewX(var(--bm-skew-x))',
                'skewY(var(--bm-skew-y))',
            ].join(' '),
        },
        getResponsive(
            'transform',
            (transform) =>
                !isUndefined(transform) && {
                    transform,
                }
        ),
        getResponsive(
            'transformOrigin',
            (transformOrigin) =>
                !isUndefined(transformOrigin) && {
                    perspective: transformOrigin.join(' '),
                }
        ),
        getResponsive(
            'perspective',
            (perspective) =>
                !isUndefined(perspective) && {
                    perspective: getRemValue(perspective, spacing),
                }
        ),
    ]
})
