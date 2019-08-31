import styled from '@emotion/styled'
import css from '@styled-system/css'

import * as _Color from '../../../../../types/color'
import * as _Position from '../../../../../types/position'
import * as _Typography from '../../../../../types/typography'

interface StyledProps {
    active?: boolean
}

interface Props extends StyledProps {
    error?: string
    label: string
    htmlFor: string
    theme?: any
}

const StyledLabel = styled('label')((props: Props) =>
    css({
        backgroundImage: `linear-gradient(to bottom, ${props.theme.colors.background} 45%, ${props.theme.colors.white} 45%)`,
        color: !!props.error ? _Color.Color.Error : _Color.Color.Foreground,
        fontFamily: _Typography.Font.Body,
        fontSize: _Typography.Size.Xxs,
        left: '0.8rem',
        opacity: props.active ? 1 : 0,
        pointerEvents: 'none',
        position: _Position.Position.Absolute,
        px: 1,
        transform: props.active ? 'translateY(-.5rem)' : 'translateY(1.6rem)',
        transition: 'opacity, transform 100ms ease',
        zIndex: _Position.ZIndex.High,
    }),
)

export const Label = (props: Props) => (
    <StyledLabel {...props}>
        {props.error ? props.error : props.label}
    </StyledLabel>
)

Label.defaultProps = {
    active: false,
    error: false,
}
