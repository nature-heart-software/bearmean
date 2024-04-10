import { forwardRef } from 'react'
import { StBox } from './box.styled.tsx'
import { BoxProps, defaultBoxProps, useExtractBoxProps } from './box.shared.ts'
import { defaultProps } from '@/utils/component.ts'

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(initialProps, forwardedRef) {
    const { children, ...defaultedProps } = defaultProps(initialProps, defaultBoxProps)
    const { props, boxProps } = useExtractBoxProps(defaultedProps)
    return (
        <StBox
            ref={forwardedRef}
            {...props}
            props={{
                ...boxProps,
            }}
        >
            {children}
        </StBox>
    )
})
