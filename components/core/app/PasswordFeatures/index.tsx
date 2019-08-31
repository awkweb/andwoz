import React from 'react'

import { Box } from '../../layout/Box'
import { PasswordFeature } from './components/PasswordFeature'

interface Props {
    hasLowercaseLetter: boolean
    hasUppercaseLetter: boolean
    hasNumber: boolean
    isMinLength: boolean
}

export const PasswordFeatures = (props: Props) => (
    <Box
        display={Box.Display.Flex}
        flexDirection={[Box.FlexDirection.Column, Box.FlexDirection.Row]}
    >
        <Box mr={5}>
            <PasswordFeature
                feature="One lowercase letter"
                valid={props.hasLowercaseLetter}
            />
            <PasswordFeature
                feature="One uppercase letter"
                valid={props.hasUppercaseLetter}
            />
        </Box>
        <Box>
            <PasswordFeature feature="One number" valid={props.hasNumber} />
            <PasswordFeature
                feature="8 characters minimum"
                valid={props.isMinLength}
            />
        </Box>
    </Box>
)

PasswordFeatures.defaultProps = {
    hasLowercaseLetter: false,
    hasUppercaseLetter: false,
    hasNumber: false,
    isMinLength: false,
}
