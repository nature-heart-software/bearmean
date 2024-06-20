import styled from '@emotion/styled'
import { CenterPropsDefinition } from './center.shared'
import { StBox } from '@/components/layout/box'
import { getStyledOptions, StyledProps } from '@/utils'

export const StCenter = styled(
    StBox,
    getStyledOptions()
)<StyledProps<CenterPropsDefinition>>(({ styled: { inline } }) => ({
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))
