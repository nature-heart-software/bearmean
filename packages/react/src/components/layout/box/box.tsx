import { forwardRef } from 'react'
import { StBox } from './box.styled'
import { BoxProps, boxPropsDefinition } from './box.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box({ children, asChild, ...props }, forwardedRef) {
    const [boxProps, htmlProps] = useExtractProps(props, boxPropsDefinition)
    const Comp = asChild ? StBox.withComponent(Slot) : StBox
    return (
        <Comp
            data-box
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...boxProps,
            }}
        >
            {children}
        </Comp>
    )
})
