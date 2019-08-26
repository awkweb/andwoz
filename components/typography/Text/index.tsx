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
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { Text as _Element } from '../../types/element'
import { Color as _Color } from '../../types/color'
import { Text as _Variant } from '../../types/variant'
import * as _Typography from '../../types/typography'

interface Props
    extends MarginProps,
        TextColorProps,
        TextAlignProps,
        TypographyProps {
    children: ReactNode
    color?: any // https://github.com/styled-system/styled-system/issues/463#issuecomment-518403934
    el?: _Element
    variant?: _Variant
}

export const Text = ({ children, ...props }: Props) => {
    return (
        <Styled as={props.el} {...props}>
            {children}
        </Styled>
    )
}

Text.defaultProps = {
    color: _Color.Foreground,
    el: _Element.Div,
    fontSize: _Typography.Size.Sm,
    fontFamily: _Typography.Font.Body,
    mb: 0,
    mt: 0,
}

Text.Align = _Typography.Align
Text.Element = _Element
Text.Color = _Color
Text.Font = _Typography.Font
Text.LineHeight = _Typography.LineHeight
Text.Size = _Typography.Size
Text.Weight = _Typography.Weight
Text.Variant = _Variant

const variants = {
    [Text.Variant.H1]: {
        fontFamily: _Typography.Font.Title,
        fontSize: _Typography.Size.Xxxl,
        fontWeight: _Typography.Weight.Bold,
        lineHeight: _Typography.LineHeight.Title,
    },
    [Text.Variant.Lead]: {
        color: _Color.Primary5,
        fontSize: _Typography.Size.Lg,
        lineHeight: _Typography.LineHeight.Body,
    },
}

const Styled = styled('div', {
    shouldForwardProp,
})(
    color,
    margin,
    typography,
    variant({
        variants,
    }),
)
