import { ReactNode, MouseEvent } from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import {
    border,
    color,
    layout,
    position,
    shadow,
    space,
    typography,
    variant,
    compose,
} from 'styled-system'

import { Box } from '../../layout/Box'
import * as _Attribute from '../../types/attribute'
import * as _Border from '../../types/border'
import * as _Color from '../../types/color'
import * as _Layout from '../../types/layout'
import * as _Position from '../../types/position'
import * as _Shadow from '../../types/shadow'
import * as _Size from '../../types/size'
import * as _Typography from '../../types/typography'
import * as _Variant from '../../types/variant'

import variants from './variants'

interface Props {
    block: boolean
    children: ReactNode
    disabled: boolean
    fluid: boolean
    isLoading: boolean
    onClick?: ((e: MouseEvent<HTMLElement>) => void) | boolean
    type: _Attribute.ButtonType
    variant?: _Variant.Button
}

const StyledButton = styled('button')(
    (props: Props) =>
        css({
            display: props.block
                ? _Layout.Display.Block
                : _Layout.Display.InlineBlock,
            opacity: props.disabled ? 0.65 : null,
            pointerEvents: props.disabled ? 'none' : null,
            textAlign: props.fluid
                ? _Typography.Align.Left
                : _Typography.Align.Center,
            width: props.fluid ? '100% !important' : null,
        }),
    compose(
        border,
        color,
        layout,
        position,
        shadow,
        space,
        typography,
    ),
    variant({
        variants,
    }),
)

export const Button = ({ children, onClick, ...props }: Props) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (onClick && typeof onClick === 'function') {
            onClick(e)
        }
    }
    const { isLoading } = props
    const loadingContent = (
        <Box
            alignItems={Box.AlignItems.Center}
            display={Box.Display.Flex}
            flexDirection={Box.FlexDirection.Column}
            fluidHeight
            fluidWidth
            justifyContent={Box.JustifyContent.Center}
            left={0}
            position={Box.Position.Absolute}
            top={0}
            zIndex={Box.ZIndex.Highest}
        >
            <Box
                css={loaderCSS()}
                borderRadius={Box.BorderRadius.Circle}
                display={Box.Display.Block}
                height="1rem"
                left="50%"
                ml="-0.5rem"
                mt="-0.5rem"
                position={Box.Position.Absolute}
                top="50%"
                width="1rem"
                zIndex={Box.ZIndex.Higher}
            />
        </Box>
    )
    const content = <Box css={contentCSS(isLoading)}>{children}</Box>
    return (
        <StyledButton onClick={handleClick} {...props}>
            {isLoading ? loadingContent : null}
            {content}
        </StyledButton>
    )
}

Button.defaultProps = {
    block: false,
    disabled: false,
    fluid: false,
    isLoading: false,
    type: _Attribute.ButtonType.Button,
    variant: _Variant.Button.Primary,
}

Button.Variant = _Variant.Button
Button.Type = _Attribute.ButtonType

const loaderCSS = () =>
    css({
        '@keyframes loading': {
            '0%': {
                transform: 'rotate(0deg)',
            },
            '100%': {
                transform: 'rotate(360deg)',
            },
        },
        animation: 'loading 0.5s infinite linear',
        border: `0.1rem solid`,
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        boxSizing: 'border-box',
        content: '',
    })

const contentCSS = (isLoading: boolean) =>
    css({
        visibility: isLoading ? 'hidden' : 'visible',
    })
