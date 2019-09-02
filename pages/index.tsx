import { NextPage } from 'next'

import { useMount } from '~/lib/hooks/useMount'

interface Props {}

const Home: NextPage<Props> = () => {
    useMount(() => {
        console.log(`Hello, World!`)
    })

    return (
        <div>
            <h1>Find a collaborator</h1>
            <p>
                &amp;Woz is a community of vetted designers and engineers
                looking to find partners to do the best work of their life.
            </p>
        </div>
    )
}

export default Home
