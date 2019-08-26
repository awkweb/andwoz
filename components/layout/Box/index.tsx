import React, { FormEvent, ReactNode } from 'react'
import styled from '@emotion/styled'
import {
    border,
    color,
    display,
    flexbox,
    layout,
    position,
    space,
    textAlign,
    BackgroundColorProps,
    DisplayProps,
    FlexboxProps,
    TextAlignProps,
    PositionProps,
    LayoutProps,
    SpaceProps,
    BorderProps,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { Align as _Align } from '../../types/typography'
import { Box as _Element } from '../../types/element'
import { Color as _Color } from '../../types/color'
import { Display as _Display } from '../../types/layout'
import { Size as _Size } from '../../types/size'
import * as _Border from '../../types/border'
import * as _Flexbox from '../../types/flexbox'
import * as _Position from '../../types/position'

interface Props
    extends BackgroundColorProps,
        BorderProps,
        DisplayProps,
        FlexboxProps,
        LayoutProps,
        PositionProps,
        SpaceProps,
        TextAlignProps {
    children?: ReactNode
    el?: _Element
    onSubmit?: (e: FormEvent<HTMLElement>) => void
}

export const Box = ({ el, children, ...props }: Props) => {
    return (
        <Styled as={el} {...props}>
            {children}
        </Styled>
    )
}

Box.defaultProps = {
    el: _Element.Div,
}

Box.AlignItems = _Flexbox.AlignItems
Box.BackgroundColor = _Color
Box.BorderColor = _Color
Box.BorderRadius = _Border.Radius
Box.BorderStyle = _Border.Style
Box.BorderWidth = _Border.Width
Box.Display = _Display
Box.Element = _Element
Box.FlexDirection = _Flexbox.FlexDirection
Box.FlexWrap = _Flexbox.FlexWrap
Box.JustifyContent = _Flexbox.JustifyContent
Box.Position = _Position.Position
Box.Size = _Size
Box.TextAlign = _Align

const Styled = styled('div', {
    shouldForwardProp,
})(border, color, display, flexbox, layout, position, space, textAlign)
