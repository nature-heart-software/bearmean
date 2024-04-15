import styled from '@emotion/styled'
import { ExclusiveDividerProps } from './divider.shared.ts'
import { StBox } from '@/components/layout'
import { rem } from 'polished'
import { colors as _colors } from '@/tokens/colors.ts'
import get from 'lodash/get'

export const StDivider = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: ExclusiveDividerProps
}>(({ theme: { colors = _colors }, styled: { variant = 'horizontal', size = 1, bs = 'solid', bc = 'slate.100' } }) => ({
    [variant === 'horizontal' ? 'borderTop' : 'borderLeft']: `${rem(size)} ${bs} ${get(colors, bc)}`,
}))
