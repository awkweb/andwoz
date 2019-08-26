import { useContext, FormEvent, ChangeEvent } from 'react'
import { NextPage } from 'next'
// eslint-disable-next-line import/no-unresolved
import Link from 'next/link'

import { toRemString } from '~/lib/toRemString'
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
                <Text>Register an account</Text>
            </Box>
            <Box mb={2}>
                <Text>
                    Been here before?{' '}
                    <Link
                        href={{
                            pathname: '/login',
                            query: { email },
                        }}
                    >
                        <a>Log in</a>
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
                <Box>
                    <input type="password" placeholder="Confirm Password" />
                </Box>
                <button type="submit">Sign Up</button>
            </Box>
        </Box>
    )
}

export default Register
