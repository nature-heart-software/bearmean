import { RequireField } from '@/utils/object'

export const defaultProps = <P extends Record<any, any>, D extends Record<any, any>>(props: P, defaultValues: D) => {
    return { ...defaultValues, ...props } as unknown as RequireField<P, keyof D>;
};
