import { useContext, FormEvent, ChangeEvent } from 'react'
import { NextPage } from 'next'
// eslint-disable-next-line import/no-unresolved
import Link from 'next/link'

import { toRemString } from '~/lib/toRemString'
import { Box, Text } from '~/components'
import AppContext from '~/store/AppContext'

interface Props {}

const Home: NextPage<Props> = () => {
    const { email, setEmail } = useContext(AppContext)
    const handleChange = (event: ChangeEvent<any>) => {
        const {
            target: { value },
        } = event
        setEmail(value)
    }
    const handleSubmit = (event: FormEvent) => event.preventDefault()
    return (
        <Box
            alignItems={Box.AlignItems.Center}
            display={Box.Display.Flex}
            height={Box.Size.ContainerY}
            maxWidth={Box.Size.ContainerX}
            mx="auto"
            pb={10}
        >
            <Box>
                <Box maxWidth={toRemString(400)} mb={5}>
                    <Text el={Text.Element.H1} variant={Text.Variant.H1}>
                        Find a collaborator to build things together.
                    </Text>
                </Box>
                <Box maxWidth={toRemString(400)} mb={8}>
                    <Text el={Text.Element.P} variant={Text.Variant.Lead}>
                        &amp;Woz is a community of vetted designers and
                        engineers looking to find partners to do the best work
                        of their life.
                    </Text>
                </Box>
                <Box el={Box.Element.Form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="email@address.com"
                        value={email}
                        onChange={handleChange}
                    />
                    <Link
                        href={{
                            pathname: '/register',
                            query: { email },
                        }}
                    >
                        <button disabled={false} type="submit">
                            Join
                        </button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Home
