/* Thanks to
 * https://www.jacobparis.com/content/react-slot
 */

import { Children, cloneElement, HTMLAttributes, isValidElement, ReactNode } from 'react'

export function Slot({
    children,
    ...props
}: HTMLAttributes<HTMLElement> & {
    children?: ReactNode
}) {
    if (isValidElement(children)) {
        return cloneElement(children, {
            ...props,
            ...children.props,
            style: {
                ...props.style,
                ...children.props.style,
            },
            className: [props.className, children.props.className].filter(Boolean).join(' '),
        })
    }
    if (Children.count(children) > 1) {
        Children.only(null)
    }
    return null
}
