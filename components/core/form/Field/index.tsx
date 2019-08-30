import { ChangeEvent } from 'react'
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
import { Label } from './components/Label'

interface Props {
    autofocus: boolean
    disabled: boolean
    error?: string
    id: string
    label: string
    onChange: (e: ChangeEvent<any>) => void
    type: _Attribute.InputType
    valid?: boolean
    value: string | number | undefined
    variant?: _Variant.Field
}

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
    const labelProps = { active, error, label, htmlFor: id }
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
            <Label {...labelProps} />
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
