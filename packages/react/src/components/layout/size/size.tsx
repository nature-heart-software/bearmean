import { forwardRef, useCallback, useEffect, useState } from 'react'
import { StSize } from './size.styled'
import { SizeElementSize, SizeProps, sizePropsDefinition } from './size.shared'
import { FRC, useDefinitionProps } from '@/utils/component'
import { mergeRefs } from 'react-merge-refs'
import debounce from 'lodash/debounce'

type UseElementSizeOptions = {
    debounce?: number
}

const useElementSize = (options: UseElementSizeOptions = {}): [(node: HTMLElement | null) => void, SizeElementSize] => {
    const [element, setElement] = useState<HTMLElement | null>(null)
    const [size, setSize] = useState<SizeElementSize>({ width: 0, height: 0 })

    const calculateSize = useCallback(() => {
        if (element) {
            const { offsetWidth, offsetHeight } = element
            setSize({ width: offsetWidth, height: offsetHeight })
        }
    }, [element])

    const debouncedCalculateSize = useCallback(debounce(calculateSize, options.debounce), [options.debounce, calculateSize])

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            debouncedCalculateSize()
        })

        if (element) {
            resizeObserver.observe(element)
        }

        return () => {
            resizeObserver.disconnect()
            debouncedCalculateSize.cancel()
        }
    }, [element, debouncedCalculateSize])

    const refCallback = useCallback((node: HTMLElement | null) => {
        if (node) setElement(node)
    }, [])

    return [refCallback, size]
}

const useSizeUtils = () => {
    function select<V>(values: [boolean, V][]): V {
        return values.filter(([condition]) => Boolean(condition))?.[0]?.[1]
    }

    return {
        select,
    }
}

export const Size: FRC<HTMLDivElement, SizeProps> = forwardRef(function Size(props, forwardedRef) {
    const [{ debounce, ...sizeProps }, { children, ...htmlProps }] = useDefinitionProps(props, sizePropsDefinition)
    const [elementSizeRef, size] = useElementSize({
        debounce,
    })
    const { select } = useSizeUtils()
    return (
        <StSize
            data-size
            ref={mergeRefs([forwardedRef, elementSizeRef])}
            {...htmlProps}
            styled={{
                debounce: 0,
                ...sizeProps,
            }}
        >
            {children({ ...size, select })}
        </StSize>
    )
})
