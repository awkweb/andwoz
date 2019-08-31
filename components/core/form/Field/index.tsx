import { ChangeEvent } from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'

import { Box } from '../../layout/Box'
import * as _Attribute from '../../../types/attribute'
import * as _Color from '../../../types/color'
import * as _Position from '../../../types/position'
import * as _Size from '../../../types/size'
import * as _Border from '../../../types/border'
import * as _Typography from '../../../types/typography'

import { Label } from './components/Label'

interface StyledProps {
    disabled: boolean
    error?: string
    onChange: (e: ChangeEvent<any>) => void
    type: _Attribute.InputType
    valid?: boolean
    value: string | number | undefined
}

interface Props extends StyledProps {
    autofocus: boolean
    label: string
}

const StyledInput = styled('input')((props: StyledProps) =>
    css({
        borderColor: !!props.error ? _Color.Color.Error : _Color.Color.Primary2,
        appearance: 'none',
        backgroundColor: _Color.Color.White,
        borderRadius: _Border.Radius.Small,
        borderStyle: _Border.Style.Solid,
        borderWidth: _Border.Width.Normal,
        color: _Color.Color.Foreground,
        fontFamily: _Typography.Font.Body,
        fontSize: _Typography.Size.Sm,
        height: _Size.Size.FieldHeight,
        outline: 0,
        position: _Position.Position.Relative,
        px: 4,
        py: 0,
        transition: 'border-color 250ms ease-in-out',
        width: '100%',
        ':focus': {
            borderColor: !!props.error
                ? _Color.Color.Error
                : _Color.Color.Foreground,
        },
        '::-webkit-input-placeholder': {
            color: _Color.Color.Primary4,
            opacity: 1,
        },
    }),
)

export const Field = ({
    autofocus,
    disabled,
    error,
    label,
    onChange,
    type,
    value,
}: Props) => {
    const handleChange = (e: ChangeEvent<any>) => {
        if (onChange && typeof onChange === 'function') {
            onChange(e)
        }
    }
    const id = label
        .toLowerCase()
        .split(' ')
        .join('-')
    const active = !!value || !!error
    const labelProps = { active, error, label, htmlFor: id }
    const inputProps = {
        active,
        autoFocus: autofocus,
        disabled,
        error,
        id,
        name: id,
        onChange: handleChange,
        placeholder: active ? '' : label,
        spellCheck: false,
        type,
        value,
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
}

Field.Type = _Attribute.InputType
