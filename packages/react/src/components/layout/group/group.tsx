import { forwardRef, useMemo } from 'react'
import { StGroup } from './group.styled'
import { GroupProps, groupPropsDefinition } from './group.shared'
import { Slot } from '@radix-ui/react-slot'
import { useDefinitionProps } from '@/utils/component'

export const Group = forwardRef<HTMLDivElement, GroupProps>(function Group(props, forwardedRef) {
    const [groupProps, { children, asChild, ...htmlProps }] = useDefinitionProps(props, groupPropsDefinition)
    const Comp = useMemo(() => (asChild ? StGroup.withComponent(Slot) : StGroup), [asChild])
    return (
        <Comp
            data-group
            ref={forwardedRef}
            {...htmlProps}
            styled={{
                ...groupProps,
            }}
        >
            {children}
        </Comp>
    )
})
