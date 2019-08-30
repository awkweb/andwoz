import styled from '@emotion/styled'
import css from '@styled-system/css'

import * as _Color from '../../../../../types/color'
import * as _Position from '../../../../../types/position'
import * as _Typography from '../../../../../types/typography'

interface StyledProps {
    htmlFor: string
    error: boolean
}

interface Props extends StyledProps {
    label: string
}

const StyledLabel = styled('label')((props: Props) =>
    css({
        color: props.error ? _Color.Color.Error : _Color.Color.Foreground,
        fontFamily: _Typography.Font.Body,
        fontSize: _Typography.Size.Xs,
        lineHeight: _Typography.LineHeight.Body,
        mb: 1,
    }),
)

export const Label = (props: Props) => {
    return <StyledLabel {...props}>{props.label}</StyledLabel>
}

Label.defaultProps = {
    error: false,
}
