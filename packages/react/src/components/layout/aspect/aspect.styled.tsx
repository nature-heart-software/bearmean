import styled from '@emotion/styled'
import { AspectPropsDefinition } from './aspect.shared'
import { StBox } from '@/components/layout/box'
import { ratio as _ratio } from '@/tokens/ratio'
import { getRawValue, getStyledOptions, StyledProps } from '@/utils/css-in-js'
import isUndefined from 'lodash/isUndefined'

export const StAspect = styled(
    StBox,
    getStyledOptions()
)<StyledProps<AspectPropsDefinition>>(({ theme: { ratio = _ratio }, styled: { ratio: ratioProp } }) => [
    !isUndefined(ratioProp) && {
        aspectRatio: getRawValue(ratioProp, ratio),
    },
])
