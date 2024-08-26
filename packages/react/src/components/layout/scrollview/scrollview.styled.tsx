import styled from '@emotion/styled'
import { ScrollviewPropsDefinition } from './scrollview.shared'
import { StBox } from '@/components/layout/box'
import { PropsDefinitionWithDefaults, StyledProps } from '@/utils'

export const StScrollview = styled(StBox)<StyledProps<PropsDefinitionWithDefaults<ScrollviewPropsDefinition>>>((context) => {
    const {} = context
    return {}
})
