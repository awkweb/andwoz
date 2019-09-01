import { NextPage } from 'next'

import { toRemString } from '~/lib/toRemString'
import { Box, Text, EmailCapture } from '~/components'

interface Props {}

const Home: NextPage<Props> = () => {
    return (
        <Box
            alignItems={Box.AlignItems.Center}
            display={Box.Display.Flex}
            fluidHeight
            maxWidth={Box.Size.ContainerWidth}
            mx="auto"
            pb={8}
            px={7}
        >
            <Box>
                <Box maxWidth={toRemString(368)} mb={5}>
                    <Text el={Text.Element.H1} variant={Text.Variant.H1}>
                        Find a collaborator to build things together.
                    </Text>
                </Box>
                <Box maxWidth={toRemString(368)} mb={8}>
                    <Text el={Text.Element.P} variant={Text.Variant.Lead}>
                        &amp;Woz is a community of vetted designers and
                        engineers looking to find partners to do the best work
                        of their life.
                    </Text>
                </Box>
                <Box maxWidth={toRemString(315)}>
                    <EmailCapture />
                </Box>
            </Box>
        </Box>
    )
}

export default Home
