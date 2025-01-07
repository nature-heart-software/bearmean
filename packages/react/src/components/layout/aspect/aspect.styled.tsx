import styled from '@emotion/styled'
import { AspectPropsWithDefaults } from './aspect.shared'
import { StBox } from '@/components/layout/box'
import { ratio as _ratio } from '@/tokens'
import { defineMixins, getRawValue, StyledProps } from '@/utils/css-in-js'
import isUndefined from 'lodash/isUndefined'

export const StAspect = styled(StBox)<StyledProps<AspectPropsWithDefaults>>((context) => {
    const {
        theme: { ratio = _ratio },
    } = context
    const { getResponsive } = defineMixins(context)
    return [
        getResponsive(
            'ratio',
            (ratioProp) =>
                !isUndefined(ratioProp) && {
                    aspectRatio: getRawValue(ratioProp, ratio),
                }
        ),
    ]
})
