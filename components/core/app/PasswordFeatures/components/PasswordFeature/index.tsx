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
            borderRadius: '50%',
            content: '""',
            display: 'inline-block',
            height: '7px',
            marginBottom: '1.5px',
            marginRight: '6px',
            minHeight: '7px',
            minWidth: '7px',
            width: '7px',
        },
    }),
)

export const PasswordFeature = ({ feature, ...props }: Props) => (
    <StyledDiv {...props}>
        <Text fontSize={Text.Size.Xxs}>{feature}</Text>
    </StyledDiv>
)

PasswordFeature.defaultProps = {
    valid: false,
}
