import { addDecorator, addParameters, configure } from '@storybook/react'
import { ThemeProvider, Box } from '../components'

addParameters({
    options: {
        panelPosition: 'right',
    },
})

addDecorator(story => (
    <ThemeProvider>
        <>
            <Box maxWidth={350} p={5}>{story()}</Box>
        </>
    </ThemeProvider>
))

const req = require.context('../components/core', true, /stories\.tsx$/)

function loadStories() {
    req.keys().forEach(req)
}

configure(loadStories, module)
