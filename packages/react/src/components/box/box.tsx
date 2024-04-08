import { forwardRef } from 'react'
import { StBox } from './box.styled'
import { BoxProps, defaultBoxProps, useExtractBoxProps } from './box.shared'
import { defaultProps } from '@/utils/component'

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(props, forwardedRef) {
    const { children, ...allProps } = defaultProps(props, defaultBoxProps)
    const { props: rest, boxProps } = useExtractBoxProps(allProps)
    return (
        <StBox
            ref={forwardedRef}
            {...rest}
            props={{
                ...boxProps,
            }}
        >
            {children}
        </StBox>
    )
})
