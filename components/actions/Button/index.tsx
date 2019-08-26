import { ReactNode, MouseEvent } from 'react'
import styled from '@emotion/styled'
import {
    border,
    color,
    layout,
    position,
    space,
    typography,
    variant,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

import css from '@emotion/css'

import { Box } from '../../layout/Box'
import { Button as _Variant } from '../../types/variant'
import { Color as _Color } from '../../types/color'
import { Display as _Display } from '../../types/layout'
import { Position as _Position } from '../../types/position'
import { Size as _Size } from '../../types/size'
import * as _Border from '../../types/border'
import * as _Button from '../../types/button'
import * as _Typography from '../../types/typography'

interface Props {
    block: boolean
    children: ReactNode
    disabled: boolean
    fluid: boolean
    isLoading: boolean
    onClick?: ((e: MouseEvent<HTMLElement>) => void) | boolean
    type: _Button.Type
    variant?: _Variant
}

export const Button = ({ children, isLoading, onClick, ...props }: Props) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (onClick && typeof onClick === 'function') {
            onClick(e)
        }
    }
    const loadingContents = (
        <Box
            alignItems={Box.AlignItems.Center}
            display={Box.Display.Flex}
            flexDirection={Box.FlexDirection.Column}
            height="100%"
            justifyContent={Box.JustifyContent.Center}
            left={0}
            position={Box.Position.Absolute}
            top={0}
            width="100%"
            zIndex={3}
        >
            <LoadingSpinner />
        </Box>
    )
    const content = (
        <Box
            css={css`
                visibility: ${isLoading ? 'hidden' : 'visible'};
            `}
        >
            {children}
        </Box>
    )
    return (
        <Styled onClick={handleClick} {...props}>
            {isLoading ? loadingContents : null}
            {content}
        </Styled>
    )
}

Button.defaultProps = {
    block: false,
    disabled: false,
    fluid: false,
    isLoading: false,
    type: _Button.Type.Button,
    variant: _Variant.Primary,
}

Button.Variant = _Variant
Button.Type = _Button.Type

const commonVariant = {
    borderRadius: _Border.Radius.Small,
    borderStyle: _Border.Style.Solid,
    borderWidth: _Border.Width.Normal,
    fontFamily: _Typography.Font.Title,
    fontSize: _Typography.Size.Xs,
    fontWeight: _Typography.Weight.SemiBold,
    height: _Size.Button,
    position: _Position.Relative,
    px: 4,
    py: 0,
}

const variants = {
    [_Variant.Primary]: {
        ...commonVariant,
        backgroundColor: _Color.Foreground,
        borderColor: _Color.Foreground,
        color: _Color.Background,
    },
    [_Variant.Secondary]: {
        ...commonVariant,
        backgroundColor: _Color.Background,
        borderColor: _Color.Primary8,
        color: _Color.Foreground,
    },
}

const Styled = styled('button', {
    shouldForwardProp,
})(
    ({ block, disabled, fluid }) => ({
        cursor: 'pointer',
        display: block ? _Display.Block : _Display.InlineBlock,
        opacity: disabled ? 0.35 : 'unset',
        pointerEvents: disabled ? 'none' : 'unset',
        textAlign: fluid ? _Typography.Align.Left : _Typography.Align.Center,
        width: fluid ? '100%' : 'unset',
    }),
    border,
    color,
    layout,
    position,
    space,
    typography,
    variant({
        variants,
    }),
)

const LoadingSpinner = styled.div`
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    animation: loading 0.5s infinite linear;
    border: 0.1rem solid ${props => props.color};
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    box-sizing: border-box;
    content: '';
    display: block;
    height: 1rem;
    left: 50%;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    position: absolute;
    top: 50%;
    width: 1rem;
    z-index: 1;
`
