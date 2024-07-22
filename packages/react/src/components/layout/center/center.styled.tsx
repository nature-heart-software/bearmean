import styled from '@emotion/styled'
import { CenterPropsDefinition } from './center.shared'
import { StBox } from '@/components/layout/box'
import { StyledProps } from '@/utils'

export const StCenter = styled(StBox)<StyledProps<CenterPropsDefinition>>((context) => {
    const {
        styled: { inline },
    } = context
    return {
        display: inline ? 'inline-flex' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
