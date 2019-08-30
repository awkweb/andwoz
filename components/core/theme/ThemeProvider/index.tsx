import React, { ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import { Theme } from 'styled-system'

interface Props {
    children: ReactNode
    theme: Theme
}

export const ThemeProvider = ({ theme, children }: Props) => {
    return (
        <EmotionThemeProvider theme={theme}>
            <>{children}</>
        </EmotionThemeProvider>
    )
}
