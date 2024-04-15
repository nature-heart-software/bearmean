import { forwardRef } from 'react'
import { StGroup } from './group.styled.tsx'
import { exclusiveGroupProps, GroupProps } from './group.shared.ts'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component.ts'

export const Group = forwardRef<HTMLDivElement, GroupProps>(function Group({ children, asChild, ...initialProps }, forwardedRef) {
    const [groupProps, props] = useExtractProps(initialProps, exclusiveGroupProps)
    const Comp = asChild ? StGroup.withComponent(Slot) : StGroup
    return (
        <Comp
            data-part={'group'}
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
