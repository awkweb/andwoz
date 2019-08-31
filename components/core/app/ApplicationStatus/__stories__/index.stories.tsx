import { storiesOf } from '@storybook/react'

import { ApplicationStatus } from '..'
import { Box } from '../../../layout/Box'

storiesOf('App|ApplicationStatus', module)
    .add('default', () => (
        <ApplicationStatus
            color={ApplicationStatus.Color.Warning}
            date="Aug 22, 11:00"
            status="Application Waiting Review"
        />
    ))
    .add('variants', () => (
        <>
            <Box mb={4}>
                <ApplicationStatus
                    color={ApplicationStatus.Color.Success}
                    date="Aug 22, 11:05"
                    status="Application Accepted"
                />
            </Box>
            <Box mb={4}>
                <ApplicationStatus
                    color={ApplicationStatus.Color.Warning}
                    date="Aug 22, 11:01"
                    status="Application Waiting Review"
                />
            </Box>
            <ApplicationStatus
                date="Aug 22, 11:00"
                status="Application Submitted"
            />
        </>
    ))
