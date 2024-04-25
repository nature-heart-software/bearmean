import { forwardRef } from 'react'
import { StBox } from './box.styled'
import { BoxProps, exclusiveBoxProps } from './box.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box({ children, asChild, ...initialProps }, forwardedRef) {
    const [boxProps, props] = useExtractProps(initialProps, exclusiveBoxProps)
    const Comp = asChild ? StBox.withComponent(Slot) : StBox
    return (
        <Comp
            data-part={'box'}
            ref={forwardedRef}
            {...props}
            styled={{
                ...boxProps,
            }}
        >
            {children}
        </Comp>
    )
})
