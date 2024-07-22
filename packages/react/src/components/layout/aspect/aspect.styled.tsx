import styled from '@emotion/styled'
import { AspectPropsDefinition } from './aspect.shared'
import { StBox } from '@/components/layout/box'
import { ratio as _ratio } from '@/tokens'
import { getRawValue, getStyledOptions, StyledProps } from '@/utils/css-in-js'
import isUndefined from 'lodash/isUndefined'

export const StAspect = styled(
    StBox,
    getStyledOptions()
)<StyledProps<AspectPropsDefinition>>((context) => {
    const {
        theme: { ratio = _ratio },
        styled: { ratio: ratioProp },
    } = context
    return [
        !isUndefined(ratioProp) && {
            aspectRatio: getRawValue(ratioProp, ratio),
        },
    ]
})
