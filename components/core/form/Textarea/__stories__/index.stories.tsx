import { ChangeEvent, useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Textarea } from '..'

const label = `Please tell us about an interesting project, preferably outside of class or work. Include urls if possible.`

const TestWrapper = () => {
    const [value, setValue] = useState('')
    const handleChange = (event: ChangeEvent<any>) => {
        const {
            target: { value },
        } = event
        setValue(value)
    }
    return (
        <>
            <Textarea
                id="interesting"
                label={label}
                value={value}
                onChange={handleChange}
            />
        </>
    )
}

storiesOf('Form|Textarea', module)
    .add('default', () => <TestWrapper />)
    .add('error', () => (
        <Textarea
            error
            id="interesting"
            label={label}
            value="The quick brown fox jumped over the lazy dogs."
            onChange={() => {}}
        />
    ))
    .add('autofocus', () => (
        <Textarea
            autofocus
            id="interesting"
            label={label}
            value=""
            onChange={() => {}}
        />
    ))
