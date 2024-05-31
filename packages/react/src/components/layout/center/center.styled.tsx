import styled from '@emotion/styled'
import { ExclusiveCenterProps } from './center.shared'
import { StBox } from '@/components/layout/box'

export const StCenter = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: ExclusiveCenterProps
}>(({ styled: { inline } }) => ({
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))
