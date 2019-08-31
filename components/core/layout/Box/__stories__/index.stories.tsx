import { storiesOf } from '@storybook/react'

import { Box } from '..'
import { Text } from '../../../typography/Text'

storiesOf('Layout|Box', module).add('default', () => (
    <Box
        borderColor={Box.BorderColor.Primary2}
        borderRadius={Box.BorderRadius.Small}
        borderStyle={Box.BorderStyle.Solid}
        borderWidth={Box.BorderWidth.Normal}
        p={5}
        textAlign={Box.TextAlign.Center}
    >
        <Text>I&rsquo;m a Box</Text>
    </Box>
))
