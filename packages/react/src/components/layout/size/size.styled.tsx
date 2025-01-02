import styled from '@emotion/styled'
import { SizePropsWithDefaults } from './size.shared'
import { StBox } from '@/components/layout/box'
import { StyledProps } from '@/utils'

export const StSize = styled(StBox)<StyledProps<SizePropsWithDefaults>>(() => {
    return {}
})
