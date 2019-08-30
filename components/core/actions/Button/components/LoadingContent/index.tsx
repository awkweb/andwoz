import css from '@styled-system/css'

import { Box } from '../../../../layout/Box'

export const LoadingContent = () => {
    return (
        <Box
            alignItems={Box.AlignItems.Center}
            display={Box.Display.Flex}
            flexDirection={Box.FlexDirection.Column}
            fluidHeight
            fluidWidth
            justifyContent={Box.JustifyContent.Center}
            left={0}
            position={Box.Position.Absolute}
            top={0}
            zIndex={Box.ZIndex.Highest}
        >
            <Box
                borderRadius={Box.BorderRadius.Circle}
                css={loaderCSS()}
                display={Box.Display.Block}
                height="1rem"
                left="50%"
                ml="-0.5rem"
                mt="-0.5rem"
                position={Box.Position.Absolute}
                top="50%"
                width="1rem"
                zIndex={Box.ZIndex.Higher}
            />
        </Box>
    )
}

const loaderCSS = () =>
    css({
        '@keyframes loading': {
            '0%': {
                transform: 'rotate(0deg)',
            },
            '100%': {
                transform: 'rotate(360deg)',
            },
        },
        animation: 'loading 0.5s infinite linear',
        border: `0.1rem solid`,
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        boxSizing: 'border-box',
        content: '""',
    })
