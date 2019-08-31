import { storiesOf } from '@storybook/react'

import { Box } from '../../../layout/Box'
import { EmailCapture } from '..'

storiesOf('App|EmailCapture', module).add('default', () => (
    <Box maxWidth={315}>
        <EmailCapture />
    </Box>
))
