import { storiesOf } from '@storybook/react'

import { Text } from '..'
import { Box } from '../../../layout/Box'

storiesOf('Typography|Text', module)
    .add('default', () => <Text>Hello Text</Text>)
    .add('variants', () => (
        <>
            <Box mb={3}>
                <Text variant={Text.Variant.H1}>H1 Variant</Text>
            </Box>
            <Text variant={Text.Variant.Lead}>Lead Variant</Text>
        </>
    ))
