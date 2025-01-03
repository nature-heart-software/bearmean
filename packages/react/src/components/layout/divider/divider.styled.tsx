import styled from '@emotion/styled'
import { DividerPropsWithDefaults } from './divider.shared'
import { StBox } from '@/components/layout/box'
import { colors as _colors } from '@/tokens'
import get from 'lodash/get'
import { getRemValue, StyledProps } from '@/utils'

export const StDivider = styled(StBox)<StyledProps<DividerPropsWithDefaults>>((context) => {
    const {
        theme: { colors = _colors },
        styled: { variant = 'horizontal', bw = 1, bs = 'solid', bc = 'slate.100' },
    } = context
    return {
        [variant === 'horizontal' ? 'borderTop' : 'borderLeft']: `${getRemValue(bw)} ${bs} ${get(colors, bc)}`,
    }
})
