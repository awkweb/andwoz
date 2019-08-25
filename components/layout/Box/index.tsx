import React, { FormEvent, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import {
    border,
    color, // backgroundColor
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

import { Align as _Align } from '../../types/typography'
import { Box as _Element } from '../../types/element'
import { Color as _Color } from '../../types/color'
import { Display as _Display } from '../../types/layout'
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

export const Box = ({ el, ...props }: Props) => {
    switch (el) {
        case _Element.Footer:
            return <Footer {...props} />
        case _Element.Form:
            return <Form {...props} />
        case _Element.Header:
            return <Header {...props} />
        case _Element.Nav:
            return <Nav {...props} />
        case _Element.Section:
            return <Section {...props} />
        case _Element.Div:
        default:
            return <Div {...props} />
    }
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
Box.TextAlign = _Align

const styles = css`
    ${border}
    ${color}
    ${display}
    ${flexbox}
    ${layout}
    ${position}
    ${space}
    ${textAlign}
`

const Footer = styled.footer`
    ${styles}
`
const Form = styled.form`
    ${styles}
`
const Header = styled.header`
    ${styles}
`
const Nav = styled.nav`
    ${styles}
`
const Section = styled.section`
    ${styles}
`
const Div = styled.div`
    ${styles}
`
