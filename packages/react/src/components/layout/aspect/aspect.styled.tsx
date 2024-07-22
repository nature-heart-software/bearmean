import styled from '@emotion/styled'
import { AspectPropsDefinition } from './aspect.shared'
import { StBox } from '@/components/layout/box'
import { ratio as _ratio } from '@/tokens'
import { getRawValue, StyledProps } from '@/utils/css-in-js'
import isUndefined from 'lodash/isUndefined'
import { PropsDefinitionWithDefaults } from '@/utils'

export const StAspect = styled(StBox)<StyledProps<PropsDefinitionWithDefaults<AspectPropsDefinition>>>((context) => {
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
