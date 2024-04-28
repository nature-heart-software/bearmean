import { forwardRef } from 'react'
import { StGroup } from './group.styled'
import { exclusiveGroupProps, GroupProps } from './group.shared'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component'

export const Group = forwardRef<HTMLDivElement, GroupProps>(function Group({ children, asChild, ...initialProps }, forwardedRef) {
    const [groupProps, props] = useExtractProps(initialProps, exclusiveGroupProps)
    const Comp = asChild ? StGroup.withComponent(Slot) : StGroup
    return (
        <Comp
            data-group
            ref={forwardedRef}
            {...props}
            styled={{
                ...groupProps,
            }}
        >
            {children}
        </Comp>
    )
})
