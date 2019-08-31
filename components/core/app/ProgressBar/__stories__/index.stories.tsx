import { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { ProgressBar } from '..'
import { Box } from '../../../layout/Box'
import { Button } from '../../../actions/Button'

const TestWrapper = () => {
    const [amount, setAmount] = useState(0)
    const handleClick = () => {
        if (amount + 25 > 100) {
            setAmount(0)
        } else {
            setAmount(amount + 25)
        }
    }
    return (
        <>
            <Box mb={3}>
                <ProgressBar amount={amount} />
            </Box>
            <Button onClick={handleClick}>Increment Amount</Button>
        </>
    )
}

storiesOf('App|ProgressBar', module)
    .add('default', () => <ProgressBar />)
    .add('amount', () => <ProgressBar amount={75} />)
    .add('transition', () => <TestWrapper />)
