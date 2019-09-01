import React, { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link' // eslint-disable-line import/no-unresolved
import styled from '@emotion/styled'
import css from '@styled-system/css'

import { Box } from '../../layout/Box'
import * as _Attribute from '../../../types/attribute'
import * as _Color from '../../../types/color'
import * as _Position from '../../../types/position'
import * as _Size from '../../../types/size'
import * as _Border from '../../../types/border'
import * as _Typography from '../../../types/typography'

interface Props {}

const StyledInput = styled('input')(
    css({
        appearance: 'none',
        backgroundColor: 'transparent',
        borderColor: _Color.Color.Foreground,
        borderStyle: _Border.Style.Solid,
        borderTop: 0,
        borderWidth: _Border.Width.Normal,
        borderLeft: 0,
        borderRight: 0,
        color: _Color.Color.Foreground,
        fontFamily: _Typography.Font.Body,
        fontSize: _Typography.Size.Md,
        outline: 0,
        pb: 1,
        pl: 0,
        pr: 8,
        pt: 0,
        width: '100%',
        '::-webkit-input-placeholder': {
            color: _Color.Color.Primary4,
            opacity: 1,
        },
    }),
)

const StyledButton = styled('button')(
    css({
        appearance: 'none',
        backgroundColor: 'transparent',
        border: 0,
        color: _Color.Color.Foreground,
        cursor: 'pointer',
        fontFamily: _Typography.Font.Title,
        fontWeight: _Typography.Weight.Medium,
        fontSize: _Typography.Size.Sm,
        outline: 0,
        py: 0,
        px: 2,
        position: _Position.Position.Absolute,
        right: 0,
        top: '0.3rem',
    }),
)

export const EmailCapture = (props: Props) => {
    const [email, setEmail] = useState('')
    const handleChange = (event: ChangeEvent<any>) => {
        const {
            target: { value },
        } = event
        setEmail(value)
    }
    const handleSubmit = (event: FormEvent) => event.preventDefault()
    return (
        <Box
            el={Box.Element.Form}
            position={Box.Position.Relative}
            onSubmit={handleSubmit}
        >
            <Box mb={2}>
                <StyledInput
                    placeholder="email@address.com"
                    type="text"
                    value={email}
                    onChange={handleChange}
                />
            </Box>
            <Link
                href={{
                    pathname: '/register',
                    query: { email },
                }}
            >
                <StyledButton type="submit">Join</StyledButton>
            </Link>
        </Box>
    )
}
