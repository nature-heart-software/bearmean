import styled from '@emotion/styled'
import { GroupPropsWithDefaults } from './group.shared'
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

export const StGroup = styled(StBox)<StyledProps<GroupPropsWithDefaults>>((context) => {
    const {
        theme: { spacing = _spacing },
    } = context
    const { getResponsive } = defineMixins(context)
    return [
        {
            display: 'flex',
        },
        getResponsive(
            'justify',
            (justify) =>
                !isUndefined(justify) && {
                    justifyContent: justify in POSITIONS ? POSITIONS[justify as keyof typeof POSITIONS] : justify,
                }
        ),
        getResponsive(
            'align',
            (align) =>
                !isUndefined(align) && {
                    alignItems: align in POSITIONS ? POSITIONS[align as keyof typeof POSITIONS] : align,
                }
        ),
        getResponsive(
            'gap',
            (gap) =>
                !isUndefined(gap) && {
                    gap: getRemValue(gap, spacing),
                }
        ),
        getResponsive(
            'direction',
            (direction) =>
                !isUndefined(direction) && {
                    flexDirection: direction,
                }
        ),
        getResponsive(
            'wrap',
            (wrap) =>
                !isUndefined(wrap) && {
                    flexWrap: wrap ? 'wrap' : 'nowrap',
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
