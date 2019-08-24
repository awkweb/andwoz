import { FormEvent, useContext, ChangeEvent } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

import Text from '~/components/Text'
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
        <>
            <Text>Find a collaborator to build things together.</Text>
            <Text>
                &amp;Woz is a community of vetted designers and engineers
                looking to find partners to do the best work of their life.
            </Text>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="email@address.com"
                    value={email}
                    onChange={handleChange}
                />
                <Link
                    prefetch
                    href={{ pathname: '/register', query: { email } }}
                >
                    <button disabled={false} type="submit">
                        Join
                    </button>
                </Link>
            </form>
        </>
    )
}

export default Home
