import { forwardRef } from 'react'
import { StAspect } from './aspect.styled.tsx'
import { AspectProps, exclusiveAspectProps } from './aspect.shared.ts'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component.ts'

export const Aspect = forwardRef<HTMLDivElement, AspectProps>(function Aspect({ children, asChild, ...initialProps }, forwardedRef) {
    const [aspectProps, { ...props }] = useExtractProps(initialProps, exclusiveAspectProps)

    const Comp = asChild ? StAspect.withComponent(Slot) : StAspect
    return (
        <Comp
            data-part={'aspect'}
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
