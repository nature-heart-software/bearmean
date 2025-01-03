import styled from '@emotion/styled'
import { StackPropsWithDefaults } from './stack.shared'
import { defineMixins, getRemValue, StyledProps } from '@/utils/css-in-js'
import { spacing as _spacing } from '@/tokens'
import { StBox } from '@/components/layout/box'
import isUndefined from 'lodash/isUndefined'

const POSITIONS = {
    top: 'flex-start',
    left: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
    right: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    stretch: 'stretch',
    apart: 'space-between',
} as const

export const StStack = styled(StBox)<StyledProps<StackPropsWithDefaults>>((context) => {
    const {
        theme: { spacing = _spacing },
    } = context
    const { getResponsive } = defineMixins(context)
    return [
        {
            display: 'flex',
            flexDirection: 'column',
        },
        getResponsive(
            'align',
            (align) =>
                !isUndefined(align) && {
                    justifyContent: align in POSITIONS ? POSITIONS[align as keyof typeof POSITIONS] : align,
                    '& > *': {
                        flexGrow: align === 'stretch' ? 1 : undefined,
                    },
                }
        ),
        getResponsive(
            'justify',
            (justify) =>
                !isUndefined(justify) && {
                    alignItems: justify in POSITIONS ? POSITIONS[justify as keyof typeof POSITIONS] : justify,
                }
        ),
        getResponsive(
            'gap',
            (gap) =>
                !isUndefined(gap) && {
                    gap: getRemValue(gap, spacing),
                }
        ),
        {
            '& > *': {
                minWidth: 0,
                minHeight: 0,
            },
        },
    ]
})
