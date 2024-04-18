import styled from '@emotion/styled'
import { ExclusiveAspectProps } from './aspect.shared.ts'
import { StBox } from '@/components/layout'
import { ratio as _ratio } from '@/tokens/ratio.ts'
import { getRawValue } from '@/utils/css-in-js.ts'

export const StAspect = styled(StBox, {
    shouldForwardProp: (prop) => !['styled', 'as'].includes(prop),
})<{
    styled: ExclusiveAspectProps
}>(({ theme: { ratio = _ratio }, styled: { ratio: ratioProp } }) => [
    ratioProp && {
        aspectRatio: getRawValue(ratioProp, ratio),
    },
])
