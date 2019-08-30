import { ReactNode, MouseEvent } from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { variant } from 'styled-system'

import { Box } from '../../layout/Box'
import * as _Attribute from '../../../types/attribute'
import * as _Border from '../../../types/border'
import * as _Color from '../../../types/color'
import * as _Layout from '../../../types/layout'
import * as _Position from '../../../types/position'
import * as _Size from '../../../types/size'
import * as _Typography from '../../../types/typography'
import * as _Variant from '../../../types/variant'

import variants from './variants'
import { LoadingContent } from './components/LoadingContent'

interface StyledProps {
    block: boolean
    children: ReactNode
    disabled: boolean
    fluid: boolean
    onClick?: ((e: MouseEvent<HTMLElement>) => void) | boolean
    type: _Attribute.ButtonType
    variant?: _Variant.Button
}

interface Props extends StyledProps {
    loading: boolean
}

const StyledButton = styled('button')(
    (props: StyledProps) =>
        css({
            display: props.block
                ? _Layout.Display.Block
                : _Layout.Display.InlineBlock,
            textAlign: props.fluid
                ? _Typography.Align.Left
                : _Typography.Align.Center,
            width: props.fluid ? '100%' : null,
        }),
    variant({
        variants,
    }),
)

export const Button = ({ children, loading, onClick, ...props }: Props) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (onClick && typeof onClick === 'function') {
            onClick(e)
        }
    }
    const content = <Box css={contentCSS(loading)}>{children}</Box>
    return (
        <StyledButton onClick={handleClick} {...props}>
            {loading ? <LoadingContent /> : null}
            {content}
        </StyledButton>
    )
}

Button.defaultProps = {
    block: false,
    disabled: false,
    fluid: false,
    loading: false,
    type: _Attribute.ButtonType.Button,
    variant: _Variant.Button.Primary,
}

Button.Variant = _Variant.Button
Button.Type = _Attribute.ButtonType

const contentCSS = (loading: boolean) =>
    css({
        visibility: loading ? 'hidden' : 'visible',
    })
