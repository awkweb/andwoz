import { storiesOf } from '@storybook/react'

import { Box } from '.'
import { Text } from '../../typography/Text'

storiesOf('Layout|Box', module).add('default', () => (
    <Box
        borderColor={Box.BorderColor.Primary2}
        borderStyle={Box.BorderStyle.Solid}
        borderRadius={Box.BorderRadius.Small}
        borderWidth={Box.BorderWidth.Normal}
        textAlign={Box.TextAlign.Center}
        p={5}
    >
        <Text>I&lsquo;m a Box</Text>
    </Box>
))
