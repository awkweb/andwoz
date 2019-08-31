import { storiesOf } from '@storybook/react'

import { Text } from '..'
import { Box } from '../../../layout/Box'

storiesOf('Typography|Text', module)
    .add('default', () => (
        <Text>The quick brown fox jumped over the lazy dogs.</Text>
    ))
    .add('variants', () => (
        <>
            <Box mb={3}>
                <Text variant={Text.Variant.H1}>H1 Variant</Text>
            </Box>
            <Box mb={3}>
                <Text variant={Text.Variant.H2}>H2 Variant</Text>
            </Box>
            <Box mb={3}>
                <Text variant={Text.Variant.H3}>H3 Variant</Text>
            </Box>
            <Box mb={3}>
                <Text variant={Text.Variant.H4}>H4 Variant</Text>
            </Box>
            <Box mb={3}>
                <Text variant={Text.Variant.H5}>H5 Variant</Text>
            </Box>
            <Text variant={Text.Variant.Lead}>Lead Variant</Text>
        </>
    ))
