import { useContext, FormEvent, ChangeEvent } from 'react'
import { NextPage } from 'next'
// eslint-disable-next-line import/no-unresolved
import Link from 'next/link'

import { Box, Text, Field, Button } from '~/components'
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
                    <Field
                        label="Email"
                        value={email}
                        onChange={handleChange}
                    />
                </Box>
                <Button>Sign Up</Button>
            </Box>
        </Box>
    )
}

export default Register
