import { forwardRef, useMemo } from 'react'
import { StAspect } from './aspect.styled'
import { AspectProps, aspectPropsDefinition } from './aspect.shared'
import { Slot } from '@radix-ui/react-slot'
import { useDefinitionProps } from '@/utils/component'

export const Aspect = forwardRef<HTMLDivElement, AspectProps>(function Aspect(props, forwardedRef) {
    const [aspectProps, { children, asChild, ...htmlProps }] = useDefinitionProps(props, aspectPropsDefinition)
    const Comp = useMemo(() => (asChild ? StAspect.withComponent(Slot) : StAspect), [asChild])
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
