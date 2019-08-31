import { storiesOf } from '@storybook/react'

import { Box } from '../../../layout/Box'
import { Field } from '../../../form/Field'
import { PasswordFeatures } from '..'

storiesOf('App|PasswordFeatures', module)
    .add('default', () => <PasswordFeatures />)
    .add('valid', () => (
        <>
            <Box mb={2}>
                <Field
                    label="Password"
                    type={Field.Type.Password}
                    value="merp"
                    onChange={() => {}}
                />
            </Box>
            <PasswordFeatures hasLowercaseLetter />
        </>
    ))
