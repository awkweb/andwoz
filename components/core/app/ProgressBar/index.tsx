import React from 'react'
import css from '@styled-system/css'

import { Box } from '../../layout/Box'
import { Text } from '../../typography/Text'

interface Props {
    amount: number
}

export const ProgressBar = ({ amount }: Props) => (
    <Box>
        <Box mb="6px">
            <Text color={Text.Color.Primary7} fontSize={Text.Size.Xs}>
                {amount}% completed
            </Text>
        </Box>
        <Box
            backgroundColor={Box.BackgroundColor.Primary2}
            borderRadius={Box.BorderRadius.Small}
            fluidWidth
            height={4}
        >
            <Box
                backgroundColor={Box.BackgroundColor.Success}
                borderRadius={Box.BorderRadius.Small}
                css={barCSS()}
                height={4}
                width={`${amount}%`}
            />
        </Box>
    </Box>
)

ProgressBar.defaultProps = {
    amount: 0,
}

const barCSS = () =>
    css({
        transition: 'width 250ms ease-in-out',
    })
