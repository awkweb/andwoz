import { useState, ChangeEvent } from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { variant } from 'styled-system'

import { Box } from '../../layout/Box'
import * as _Variant from '../../../types/variant'
import * as _Attribute from '../../../types/attribute'
import * as _Color from '../../../types/color'
import * as _Position from '../../../types/position'
import * as _Size from '../../../types/size'
import * as _Border from '../../../types/border'
import * as _Typography from '../../../types/typography'

import variants from './variants'

interface Props {
    autofocus: boolean
    disabled: boolean
    error?: string
    id?: string
    label: string
    onChange: (e: ChangeEvent<any>) => void
    type: _Attribute.InputType
    valid?: boolean
    value: string | number | undefined
    variant?: _Variant.Field
}

interface LabelProps {
    active?: boolean
    error?: boolean
    htmlFor?: string
    theme?: any
}

const StyledLabel = styled('label')((props: LabelProps) =>
    css({
        backgroundImage: `linear-gradient(to bottom, ${props.theme.colors.background} 45%, ${props.theme.colors.white} 45%)`,
        color: props.error ? _Color.Color.Error : _Color.Color.Foreground,
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

const StyledInput = styled('input')(
    (props: Props) =>
        css({
            borderColor: !!props.error
                ? _Color.Color.Error
                : _Color.Color.Primary2,
            ':focus': {
                borderColor: !!props.error
                    ? _Color.Color.Error
                    : _Color.Color.Foreground,
            },
        }),
    variant({
        variants,
    }),
)

export const Field = ({
    autofocus,
    disabled,
    error,
    id,
    label,
    onChange,
    type,
    value,
    variant,
}: Props) => {
    const handleChange = (e: ChangeEvent<any>) => {
        if (onChange && typeof onChange === 'function') {
            onChange(e)
        }
    }

    const active = !!value || !!error
    const labelProps = { active, error: !!error, htmlFor: id }
    const inputProps = {
        active,
        autoFocus: autofocus,
        disabled,
        error: !!error,
        id,
        name: id,
        onChange: handleChange,
        placeholder: active ? '' : label,
        spellCheck: false,
        type,
        value,
        variant,
    }
    return (
        <Box
            border="none"
            display={Box.Display.Flex}
            el={Box.Element.Fieldset}
            flexDirection={Box.FlexDirection.Column}
            m={0}
            p={0}
            position={Box.Position.Relative}
        >
            <StyledLabel {...labelProps}>{error ? error : label}</StyledLabel>
            <StyledInput {...inputProps} />
        </Box>
    )
}

Field.defaultProps = {
    autofocus: false,
    disabled: false,
    type: _Attribute.InputType.Text,
    variant: _Variant.Field.Form,
}

Field.Type = _Attribute.InputType
Field.Variant = _Variant.Field
