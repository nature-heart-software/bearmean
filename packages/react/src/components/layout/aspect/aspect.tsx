import { forwardRef } from 'react'
import { StAspect } from './aspect.styled'
import { AspectProps, exclusiveAspectProps } from './aspect.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Aspect = forwardRef<HTMLDivElement, AspectProps>(function Aspect({ children, asChild, ...initialProps }, forwardedRef) {
    const [aspectProps, { ...props }] = useExtractProps(initialProps, exclusiveAspectProps)

    const Comp = asChild ? StAspect.withComponent(Slot) : StAspect
    return (
        <Comp
            data-aspect
            ref={forwardedRef}
            {...props}
            styled={{
                ...aspectProps,
            }}
        >
            {children}
        </Comp>
    )
})
