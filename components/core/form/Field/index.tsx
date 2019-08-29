import { useState, ChangeEvent } from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { variant, compose } from 'styled-system'

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
    autocomplete?: string
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

const StyledInput = styled('input')(
    ({ error }) =>
        css({
            ':focus': {
                borderColor: !!error
                    ? _Color.Color.Error
                    : _Color.Color.Foreground,
            },
        }),
    variant({
        variants,
    }),
)

const StyledLabel = styled('label')(
    ({ error }) =>
        css({
            color: !!error ? _Color.Color.Error : _Color.Color.Foreground,
            fontFamily: _Typography.Font.Body,
            fontSize: _Typography.Size.Xxs,
        }),
    compose(),
)

export const Field = ({
    autocomplete,
    autofocus,
    disabled,
    error,
    id,
    label,
    onChange,
    type,
    value,
    variant,
    ...props
}: Props) => {
    const [touched, setTouched] = useState(false)
    const handleChange = (e: ChangeEvent<any>) => {
        if (onChange && typeof onChange === 'function') {
            onChange(e)
        }
    }
    const handleBlur = () => {
        if (!touched) {
            setTouched(true)
        }
    }

    const active = !!value || (touched && !!error)
    const labelProps = { active, error: touched && error, htmlFor: id }
    const inputProps = {
        active,
        disabled,
        id,
        type,
        value,
        autoComplete: autocomplete,
        autoFocus: autofocus,
        error: touched && error,
        name: id,
        onBlur: handleBlur,
        onChange: handleChange,
        placeholder: active ? '' : label,
        spellCheck: false,
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
            {variant !== _Variant.Field.Capture && (
                <StyledLabel {...labelProps}>
                    {touched && error ? error : label}
                </StyledLabel>
            )}
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
