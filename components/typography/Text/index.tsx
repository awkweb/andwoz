import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import {
    color,
    margin,
    typography,
    TextAlignProps,
    TextColorProps,
    TypographyProps,
    MarginProps,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { Text as _Element } from '../../types/element'
import { Color as _Color, Color } from '../../types/color'
import * as _Typography from '../../types/typography'

interface Props
    extends MarginProps,
        TextColorProps,
        TextAlignProps,
        TypographyProps {
    children: ReactNode
    color?: any // https://github.com/styled-system/styled-system/issues/463#issuecomment-518403934
    el?: _Element
}

export const Text = ({ el, children, ...props }: Props) => {
    return (
        <Styled as={el} {...props}>
            {children}
        </Styled>
    )
}

Text.defaultProps = {
    color: Color.Foreground,
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
Text.Size = _Typography.Size
Text.Weight = _Typography.Weight

const Styled = styled('div', {
    shouldForwardProp,
})(color, margin, typography)
