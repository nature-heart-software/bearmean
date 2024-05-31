import { forwardRef } from 'react'
import { StAspect } from './aspect.styled'
import { AspectProps, aspectPropsDefinition } from './aspect.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Aspect = forwardRef<HTMLDivElement, AspectProps>(function Aspect({ children, asChild, ...props }, forwardedRef) {
    const [aspectProps, htmlProps] = useExtractProps(props, aspectPropsDefinition)

    const Comp = asChild ? StAspect.withComponent(Slot) : StAspect
    return (
        <Comp
            data-aspect
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...aspectProps,
            }}
        >
            {children}
        </Comp>
    )
})
