import { addDecorator, addParameters, configure } from '@storybook/react'
import { Box, GlobalStyles, theme, ThemeProvider } from '../components'

addParameters({
    options: {
        panelPosition: 'right',
    },
})

addDecorator(story => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            <Box maxWidth={350} p={5}>
                {story()}
            </Box>
        </>
    </ThemeProvider>
))

const req = require.context('../components/core', true, /stories\.tsx$/)
const loadStories = () => req.keys().forEach(req)

configure(loadStories, module)
