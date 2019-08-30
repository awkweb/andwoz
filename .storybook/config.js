import { addDecorator, addParameters, configure } from '@storybook/react'
import { ThemeProvider } from 'emotion-theming'
import { Box, GlobalStyles, theme } from '../components'

addParameters({
    options: {
        panelPosition: 'right',
    },
})

addDecorator(story => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            <Box maxWidth={375} m={5}>
                {story()}
            </Box>
        </>
    </ThemeProvider>
))

const req = require.context('../components/core', true, /stories\.tsx$/)
const loadStories = () => req.keys().forEach(req)

configure(loadStories, module)
