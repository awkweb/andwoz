import { useContext, FormEvent, ChangeEvent } from 'react'
import { NextPage } from 'next'
// eslint-disable-next-line import/no-unresolved
import Link from 'next/link'

import { Box, Text } from '~/components'
import AppContext from '~/store/AppContext'

interface Props {}

const Register: NextPage<Props> = () => {
    const { email, setEmail } = useContext(AppContext)
    const handleChange = (event: ChangeEvent<any>) => {
        const {
            target: { value },
        } = event
        setEmail(value)
    }
    const handleSubmit = (event: FormEvent) => event.preventDefault()
    return (
        <Box>
            <Box mb={2}>
                <Text>Welcome back</Text>
            </Box>
            <Box mb={2}>
                <Text>
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
                <Box>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                </Box>
                <Box>
                    <input type="password" placeholder="Password" />
                </Box>
                <button type="submit">Log In</button>
            </Box>
        </Box>
    )
}

export default Register
