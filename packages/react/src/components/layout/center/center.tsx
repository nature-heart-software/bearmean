import { forwardRef } from 'react'
import { StCenter } from './center.styled'
import { CenterProps, centerPropsDefinition } from './center.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Center = forwardRef<HTMLDivElement, CenterProps>(function Center({ children, asChild, ...props }, forwardedRef) {
    const [centerProps, htmlProps] = useExtractProps(props, centerPropsDefinition)
    const Comp = asChild ? StCenter.withComponent(Slot) : StCenter
    return (
        <Comp
            data-center
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...centerProps,
            }}
        >
            {children}
        </Comp>
    )
})
