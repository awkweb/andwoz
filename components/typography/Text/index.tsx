import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import {
    color, // textColor
    margin,
    typography,
    TextAlignProps,
    TextColorProps,
    TypographyProps,
    MarginProps,
} from 'styled-system'

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

export const Text = ({ el, ...props }: Props) => {
    switch (el) {
        case _Element.Span:
            return <Span {...props} />
        case _Element.P:
            return <P {...props} />
        case _Element.Label:
            return <Label {...props} />
        case _Element.H1:
            return <H1 {...props} />
        case _Element.H2:
            return <H2 {...props} />
        case _Element.H3:
            return <H3 {...props} />
        case _Element.H4:
            return <H4 {...props} />
        case _Element.H5:
            return <H5 {...props} />
        case _Element.Div:
        default:
            return <Div {...props} />
    }
}

Text.defaultProps = {
    color: Color.Foreground,
    el: _Element.Div,
    fontSize: _Typography.Size.Sm,
    fontFamily: _Typography.Font.Body,
    m: 0,
}

Text.Align = _Typography.Align
Text.Element = _Element
Text.Color = _Color
Text.Font = _Typography.Font
Text.Size = _Typography.Size
Text.Weight = _Typography.Weight

const styles = css`
    ${color}
    ${margin}
    ${typography}
`

const Span = styled.span`
    ${styles}
`
const P = styled.p`
    ${styles}
`
const Label = styled.label`
    ${styles}
`
const H1 = styled.h1`
    ${styles}
`
const H2 = styled.h2`
    ${styles}
`
const H3 = styled.h3`
    ${styles}
`
const H4 = styled.h4`
    ${styles}
`
const H5 = styled.h5`
    ${styles}
`
const Div = styled.div`
    ${styles}
`
