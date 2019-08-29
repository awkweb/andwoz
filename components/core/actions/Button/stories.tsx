import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '.'
import { Box } from '../../layout/Box'

const buttonText = 'Hello World'

storiesOf('actions|Button', module)
    .add('default', () => (
        <Button onClick={action('onClick')}>{buttonText}</Button>
    ))
    .add('variants', () => (
        <>
            <Box mb={3}>
                <Button onClick={action('onClick')}>{buttonText}</Button>
            </Box>
            <Button
                onClick={action('onClick')}
                variant={Button.Variant.Secondary}
            >
                {buttonText}
            </Button>
        </>
    ))
    .add('disabled', () => <Button disabled>{buttonText}</Button>)
    .add('loading', () => <Button loading>{buttonText}</Button>)
    .add('fluid', () => <Button fluid>{buttonText}</Button>)
