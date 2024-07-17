import { defineProps, PropsDefinition, useDefinitionProps } from '@/utils'
import { Color } from '@/tokens'
import { Properties } from 'csstype'
import { HTMLAttributes } from 'react'

type SimpleString = 'left' | 'right'
type ComplexString = Color | Properties['color']

const typedComponentPropsDefinition = defineProps(({ optional, required, responsive }) => ({
    optionalString: optional<SimpleString>(),
    requiredString: required<SimpleString>(),
    optionalWithDefaultString: optional<SimpleString>('slate.100'),
    requiredWithDefaultString: required<SimpleString>('slate.100'),
    optionalComplexString: optional<ComplexString>(),
    requiredComplexString: required<ComplexString>(),
    optionalWithDefaultComplexString: optional<ComplexString>('slate.100'),
    requiredWithDefaultComplexString: required<ComplexString>('slate.100'),
    ...responsive({
        responsiveString: optional<SimpleString>(),
        responsiveComplexeString: required<SimpleString>(),
    }),
}))

type TypedComponentProps = HTMLAttributes<HTMLDivElement> & PropsDefinition<typeof typedComponentPropsDefinition>

export function TypedComponent(props: TypedComponentProps) {
    const [definedProps, htmlProps] = useDefinitionProps(props, typedComponentPropsDefinition)
    definedProps.optionalString = undefined
    definedProps.requiredString = undefined
    definedProps.optionalWithDefaultString = undefined
    definedProps.requiredWithDefaultString = undefined
    definedProps.optionalComplexString = undefined
    definedProps.requiredComplexString = undefined
    definedProps.optionalWithDefaultComplexString = undefined
    definedProps.requiredWithDefaultComplexString = undefined
    definedProps.smResponsiveString = undefined
    definedProps.responsiveComplexeString = undefined
    definedProps.smResponsiveComplexeString = undefined
    return <div {...htmlProps} />
}

TypedComponent({})
