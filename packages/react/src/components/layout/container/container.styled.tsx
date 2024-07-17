import styled from '@emotion/styled'
import { ContainerPropsDefinition } from './container.shared'
import { StBox } from '@/components/layout/box'
import { Screens, screens as _screens } from '@/tokens/screens'
import { rem } from 'polished'
import { getStyledOptions, StyledProps } from '@/utils'

export const StContainer = styled(
    StBox,
    getStyledOptions()
)<StyledProps<ContainerPropsDefinition>>(({ theme: { screens = _screens }, styled: { fluid, size, breakpoints = screens } }) => [
    Object.values(breakpoints).map(({ value, margin, gutter }) => ({
        [`@media (min-width: ${rem(value + 2 * margin)})`]: {
            width: '100%',
            maxWidth:
                fluid || !value
                    ? '100%'
                    : rem(
                          size && value > (breakpoints[size as keyof typeof breakpoints] as Screens[keyof Screens]).value
                              ? (breakpoints[size as keyof typeof breakpoints] as Screens[keyof Screens]).value
                              : value
                      ),
            margin: `0 auto`,
            padding: `0 ${rem(gutter)}`,
        },
    })),
])
