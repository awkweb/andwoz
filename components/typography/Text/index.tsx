import { ReactNode } from 'react'
import styled from '@emotion/styled'
import {
    color,
    margin,
    MarginProps,
    TextAlignProps,
    TextColorProps,
    typography,
    TypographyProps,
    variant,
    compose,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

import * as _Color from '../../types/color'
import * as _Element from '../../types/element'
import * as _Typography from '../../types/typography'
import * as _Variant from '../../types/variant'

import variants from './variants'

interface StyledProps
    extends MarginProps,
        TextColorProps,
        TextAlignProps,
        TypographyProps {
    children: ReactNode
    color?: any // https://github.com/styled-system/styled-system/issues/463#issuecomment-518403934
    variant?: _Variant.Text
}

interface Props extends StyledProps {
    el?: _Element.Text
}

const StyledDiv = styled('div', {
    shouldForwardProp,
})(
    compose(
        color,
        margin,
        typography,
    ),
    variant({
        variants,
    }),
)

export const Text = ({ el, ...props }: Props) => (
    <StyledDiv as={el} {...props} />
)

Text.defaultProps = {
    color: _Color.Color.Foreground,
    el: _Element.Text.Div,
    fontSize: _Typography.Size.Sm,
    fontFamily: _Typography.Font.Body,
    mb: 0,
    mt: 0,
}

Text.Align = _Typography.Align
Text.Element = _Element.Text
Text.Color = _Color.Color
Text.Font = _Typography.Font
Text.LineHeight = _Typography.LineHeight
Text.Size = _Typography.Size
Text.Weight = _Typography.Weight
Text.Variant = _Variant.Text
