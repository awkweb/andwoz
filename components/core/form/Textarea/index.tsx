import { ChangeEvent, RefObject } from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'

import { Box } from '../../layout/Box'
import * as _Color from '../../../types/color'
import * as _Position from '../../../types/position'
import * as _Size from '../../../types/size'
import * as _Border from '../../../types/border'
import * as _Typography from '../../../types/typography'
import { Label } from './components/Label'

interface StyledProps {
    disabled: boolean
    error: boolean
    id: string
    onChange: (e: ChangeEvent<any>) => void
    value: string | undefined
}

interface Props extends StyledProps {
    autofocus: boolean
    label: string
    ref?: RefObject<any>
}

const StyledInput = styled('textarea')((props: StyledProps) =>
    css({
        borderColor: !!props.error ? _Color.Color.Error : _Color.Color.Primary2,
        appearance: 'none',
        backgroundColor: _Color.Color.White,
        borderRadius: _Border.Radius.Small,
        borderStyle: _Border.Style.Solid,
        borderWidth: _Border.Width.Normal,
        color: _Color.Color.Foreground,
        fontFamily: _Typography.Font.Body,
        fontSize: _Typography.Size.Xs,
        minHeight: _Size.Size.TextareaHeight,
        outline: 0,
        position: _Position.Position.Relative,
        px: 3,
        py: 2,
        transition: 'border-color 250ms ease-in-out',
        width: '100%',
        ':focus': {
            borderColor: !!props.error
                ? _Color.Color.Error
                : _Color.Color.Foreground,
        },
        '&[rows]': {
            height: 'auto',
        },
    }),
)

export const Textarea = ({
    autofocus,
    disabled,
    error,
    id,
    label,
    onChange,
    ref,
    value,
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
        error,
        id,
        name: id,
        onChange: handleChange,
        spellCheck: false,
        ref,
        rows: 8,
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

Textarea.defaultProps = {
    autofocus: false,
    disabled: false,
    error: false,
}
