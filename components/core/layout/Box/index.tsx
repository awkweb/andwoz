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
    compose,
} from 'styled-system'
import css from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'

import * as _Border from '../../../types/border'
import * as _Color from '../../../types/color'
import * as _Element from '../../../types/element'
import * as _Flexbox from '../../../types/flexbox'
import * as _Layout from '../../../types/layout'
import * as _Position from '../../../types/position'
import * as _Size from '../../../types/size'
import * as _Typography from '../../../types/typography'

interface StyledProps
    extends BackgroundColorProps,
        BorderProps,
        DisplayProps,
        FlexboxProps,
        LayoutProps,
        PositionProps,
        SpaceProps,
        TextAlignProps {
    children?: ReactNode
    fluidHeight: boolean
    fluidWidth: boolean
    onSubmit?: (e: FormEvent<HTMLElement>) => void
}

interface Props extends StyledProps {
    el?: _Element.Box
}

const StyledDiv = styled('div', {
    shouldForwardProp,
})(
    (props: StyledProps) =>
        css({
            height: props.fluidHeight ? '100%' : null,
            width: props.fluidWidth ? '100%' : null,
        }),
    compose(
        border,
        color,
        display,
        flexbox,
        layout,
        position,
        space,
        textAlign,
    ),
)

export const Box = ({ el, ...props }: Props) => <StyledDiv as={el} {...props} />

Box.defaultProps = {
    el: _Element.Box.Div,
    fluidHeight: false,
    fluidWidth: false,
}

Box.AlignItems = _Flexbox.AlignItems
Box.BackgroundColor = _Color.Color
Box.BorderColor = _Color.Color
Box.BorderRadius = _Border.Radius
Box.BorderStyle = _Border.Style
Box.BorderWidth = _Border.Width
Box.Display = _Layout.Display
Box.Element = _Element.Box
Box.FlexDirection = _Flexbox.FlexDirection
Box.FlexWrap = _Flexbox.FlexWrap
Box.JustifyContent = _Flexbox.JustifyContent
Box.Position = _Position.Position
Box.Size = _Size.Size
Box.TextAlign = _Typography.Align
Box.ZIndex = _Position.ZIndex
