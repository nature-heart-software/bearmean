import styled from '@emotion/styled'
import { DividerPropsDefinition } from './divider.shared'
import { StBox } from '@/components/layout/box'
import { rem } from 'polished'
import { colors as _colors } from '@/tokens'
import get from 'lodash/get'
import { getStyledOptions, StyledProps } from '@/utils'

export const StDivider = styled(
    StBox,
    getStyledOptions()
)<StyledProps<DividerPropsDefinition>>(({ theme: { colors = _colors }, styled: { variant = 'horizontal', size, bs = 'solid', bc = 'slate.100' } }) => ({
    [variant === 'horizontal' ? 'borderTop' : 'borderLeft']: `${rem(size)} ${bs} ${get(colors, bc)}`,
}))
