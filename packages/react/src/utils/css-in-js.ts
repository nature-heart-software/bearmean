import { rem } from 'polished';

type Value = number | string
type FontSizeProperty = 'lineHeight' | 'letterSpacing'
type TailwindFontSize =
    Value
    | [Value, Record<FontSizeProperty, Value>]
    | readonly [Value, Record<FontSizeProperty, Value>]

export const getFontSize = (tailwindFontSize: TailwindFontSize) =>
    typeof tailwindFontSize === 'number' || typeof tailwindFontSize === 'string' ? rem(tailwindFontSize) : rem(tailwindFontSize[0]);

export const getLineHeight = (tailwindFontSize: TailwindFontSize) =>
    // eslint-disable-next-line no-nested-ternary
    typeof tailwindFontSize === 'number' || typeof tailwindFontSize === 'string' ? tailwindFontSize : rem(tailwindFontSize[1].lineHeight);

export const getLetterSpacing = (tailwindFontSize: TailwindFontSize) =>
    typeof tailwindFontSize === 'number' || typeof tailwindFontSize === 'string' ? 'normal' : rem(tailwindFontSize[1]?.letterSpacing) || 'normal';

export const getFontSizeStyle = (tailwindFontSize: TailwindFontSize) => ({
    fontSize: getFontSize(tailwindFontSize),
    lineHeight: getLineHeight(tailwindFontSize),
    letterSpacing: getLetterSpacing(tailwindFontSize)
});

export type PropsToFilter<E extends keyof JSX.IntrinsicElements, P> = Record<keyof Omit<Required<P>, keyof JSX.IntrinsicElements[E]>, true>
export const propsToFilter =
    <E extends keyof JSX.IntrinsicElements = 'div', P = Record<string, unknown>, K extends PropsToFilter<E, P> = PropsToFilter<E, P>>(propsToFilter: K) =>
        (prop: string) =>
            ['as', 'theme'].includes(prop) ? false : !propsToFilter[prop as keyof K];
