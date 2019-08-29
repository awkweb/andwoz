import { addDecorator, addParameters, configure } from '@storybook/react'
import { ThemeProvider, Box } from '../components'

addParameters({
    options: {
        showPanel: false,
    },
})

addDecorator(story => (
    <ThemeProvider>
        <>
            <Box p={3}>{story()}</Box>
        </>
    </ThemeProvider>
))

const req = require.context('../components/core', true, /stories\.tsx$/)

function loadStories() {
    req.keys().forEach(req)
}

configure(loadStories, module)
