import React from 'react'

import { Box } from '../../layout/Box'
import { Text } from '../../typography/Text'

import * as _Color from '../../../types/color'

interface Props {
    color: _Color.Color
    date: string
    status: string
}

export const ApplicationStatus = ({ color, status, date }: Props) => (
    <Box alignItems={Box.AlignItems.Baseline} display={Box.Display.Flex}>
        <Box
            backgroundColor={color}
            borderRadius={Box.BorderRadius.Circle}
            height={10}
            mr={3}
            width={10}
        />
        <Box
            display={Box.Display.Flex}
            flexDirection={Box.FlexDirection.Column}
        >
            <Box>
                <Text color={Text.Color.Primary7} fontSize={Text.Size.Sm}>
                    {status}
                </Text>
            </Box>
            <Text color={Text.Color.Primary5} fontSize={Text.Size.Xs}>
                {date}
            </Text>
        </Box>
    </Box>
)

ApplicationStatus.defaultProps = {
    color: _Color.Color.Primary2,
}

ApplicationStatus.Color = _Color.Color
