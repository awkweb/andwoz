import { useContext, FormEvent, ChangeEvent } from 'react'
import { NextPage } from 'next'
// eslint-disable-next-line import/no-unresolved
import Link from 'next/link'

import { Box, Text, Field, Button } from '~/components'
import AppContext from '~/store/AppContext'

interface Props {}

const Login: NextPage<Props> = () => {
    const { email, setEmail } = useContext(AppContext)
    const handleChange = (event: ChangeEvent<any>) => {
        const {
            target: { value },
        } = event
        setEmail(value)
    }
    const handleSubmit = (event: FormEvent) => event.preventDefault()
    return (
        <Box fluidWidth maxWidth={Box.Size.AuthWidth} mx="auto" pt={10}>
            <Box mb={1}>
                <Text variant={Text.Variant.H4}>Welcome back</Text>
            </Box>
            <Box mb={7}>
                <Text color={Text.Color.Primary5} fontSize={Text.Size.Sm}>
                    Need an account?{' '}
                    <Link
                        href={{
                            pathname: '/register',
                            query: { email },
                        }}
                    >
                        <a>Sign up</a>
                    </Link>
                </Text>
            </Box>
            <Box el={Box.Element.Form} onSubmit={handleSubmit}>
                <Box mb={4}>
                    <Field
                        autofocus
                        label="Email"
                        value={email}
                        onChange={handleChange}
                    />
                </Box>
                <Box mb={4}>
                    <Field label="Password" value="" onChange={() => {}} />
                </Box>
                <Button fluid>Log In</Button>
            </Box>
        </Box>
    )
}

export default Login
