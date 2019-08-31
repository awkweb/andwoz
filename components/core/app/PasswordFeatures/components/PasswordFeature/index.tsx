import styled from '@emotion/styled'
import css from '@styled-system/css'

import * as _Color from '../../../../../types/color'
import { Text } from '../../../../typography/Text'

interface StyledProps {
    valid: boolean
}

interface Props extends StyledProps {
    feature: string
}

const StyledDiv = styled('div')((props: StyledProps) =>
    css({
        alignItems: 'center',
        display: 'flex',
        marginBottom: '0.15rem',
        opacity: props.valid ? 0.35 : 1,
        transition: 'opacity 100ms',
        '::before': {
            backgroundColor: _Color.Color.Success,
            borderRadius: '8px',
            content: '""',
            display: 'inline-block',
            height: '8px',
            marginBottom: '1.5px',
            marginRight: '6px',
            minHeight: '8px',
            minWidth: '8px',
            width: '8px',
        },
    }),
)

export const PasswordFeature = (props: Props) => (
    <StyledDiv {...props}>
        <Text fontSize={Text.Size.Xxs}>{props.feature}</Text>
    </StyledDiv>
)

PasswordFeature.defaultProps = {
    valid: false,
}
