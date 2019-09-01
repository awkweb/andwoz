import { useContext, FormEvent, ChangeEvent } from 'react'
import { NextPage } from 'next'
import Link from 'next/link' // eslint-disable-line import/no-unresolved

import { Box, Text, Field, Button, PasswordFeatures } from '~/components'
import AppContext from '~/store/AppContext'
import { useMount } from '~/lib/hooks/useMount'
import { get } from '~/lib/get'

interface Props {
    query: any
}

const Register: NextPage<Props> = ({ query }) => {
    const { email, setEmail } = useContext(AppContext)
    const handleChange = (event: ChangeEvent<any>) => {
        const {
            target: { value },
        } = event
        setEmail(value)
    }
    const handleSubmit = (event: FormEvent) => event.preventDefault()

    useMount(() => {
        setEmail(get(() => query.email, ''))
    })

    return (
        <Box fluidWidth maxWidth={Box.Size.AuthWidth} mx="auto" pt={10}>
            <Box mb={1}>
                <Text variant={Text.Variant.H4}>Register an account</Text>
            </Box>
            <Box mb={7}>
                <Text color={Text.Color.Primary5} fontSize={Text.Size.Sm}>
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
                <Box mb={4}>
                    <Field
                        autofocus
                        label="Email"
                        value={email}
                        onChange={handleChange}
                    />
                </Box>
                <Box mb={3}>
                    <Box mb={2}>
                        <Field label="Password" value="" onChange={() => {}} />
                    </Box>
                    <PasswordFeatures
                        hasLowercaseLetter={false}
                        hasNumber={false}
                        hasUppercaseLetter={false}
                        isMinLength={false}
                    />
                </Box>
                <Box mb={4}>
                    <Field
                        label="Confirm Password"
                        value=""
                        onChange={() => {}}
                    />
                </Box>
                <Button fluid>Sign Up</Button>
                <Box mt={2}>
                    <Text color={Text.Color.Primary5} fontSize={Text.Size.Xxs}>
                        By signing up, you agree to the{' '}
                        <a href="https://notion.so/tmm">Terms of Use</a> and{' '}
                        <a href="https://notion.so/tmm">Privacy Policy</a>.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

Register.getInitialProps = async ({ query }) => {
    return { query }
}

export default Register
