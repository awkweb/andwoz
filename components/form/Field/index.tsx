import { useState, ChangeEvent } from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { variant, compose } from 'styled-system'

import { Box } from '../../layout/Box'
import { Field as _Variant } from '../../types/variant'
import { InputType as _InputType } from '../../types/attribute'
import { Color as _Color } from '../../types/color'
import { Position as _Position } from '../../types/position'
import { Size as _Size } from '../../types/size'
import * as _Border from '../../types/border'
import * as _Typography from '../../types/typography'

interface Props {
    autocomplete?: string
    autofocus: boolean
    disabled: boolean
    error?: string
    id?: string
    label: string
    onChange: (e: ChangeEvent<any>) => void
    type: _InputType
    valid?: boolean
    value: string | number | undefined
    variant?: _Variant
}

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
            {variant !== _Variant.Capture && (
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
    type: _InputType.Text,
    variant: _Variant.Form,
}

Field.Type = _InputType
Field.Variant = _Variant

const commonVariant = {
    '-webkit-appearance': 'none',
    borderStyle: _Border.Style.Solid,
    borderWidth: _Border.Width.Normal,
    color: _Color.Foreground,
    fontFamily: _Typography.Font.Body,
    outline: 0,
    position: _Position.Relative,
    width: '100%',
    '::-webkit-input-placeholder': {
        color: _Color.Primary4,
        opacity: 1,
    },
}

const variants = {
    [_Variant.Form]: {
        ...commonVariant,
        borderColor: _Color.Primary2,
        borderRadius: _Border.Radius.Small,
        fontSize: _Typography.Size.Sm,
        height: _Size.Field,
        px: 4,
        py: 0,
    },
    [_Variant.Capture]: {
        ...commonVariant,
        borderColor: _Color.Foreground,
        borderLeft: 'none',
        borderRight: 'none',
        borderTop: 'none',
        fontSize: _Typography.Size.Md,
        pb: 1,
        pt: 0,
        px: 0,
    },
}

const StyledInput = styled('input')(
    ({ error }) =>
        css({
            ':focus': {
                borderColor: !!error ? _Color.Error : _Color.Foreground,
            },
        }),
    variant({
        variants,
    }),
)

const StyledLabel = styled('label')(
    ({ error }) =>
        css({
            color: !!error ? _Color.Error : _Color.Foreground,
            fontFamily: _Typography.Font.Body,
            fontSize: _Typography.Size.Xxs,
        }),
    compose(),
)
