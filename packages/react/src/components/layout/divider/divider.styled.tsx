import styled from '@emotion/styled'
import { DividerPropsDefinition } from './divider.shared'
import { StBox } from '@/components/layout/box'
import { rem } from 'polished'
import { colors as _colors } from '@/tokens/colors'
import get from 'lodash/get'

export const StDivider = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: DividerPropsDefinition
}>(({ theme: { colors = _colors }, styled: { variant = 'horizontal', size = 1, bs = 'solid', bc = 'slate.100' } }) => ({
    [variant === 'horizontal' ? 'borderTop' : 'borderLeft']: `${rem(size)} ${bs} ${get(colors, bc)}`,
}))
