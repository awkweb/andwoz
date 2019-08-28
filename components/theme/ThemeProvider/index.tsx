import React, { ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import { theme } from '../theme'
import { GlobalStyles } from './global'

interface Props {
    children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
    return (
        <EmotionThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                {children}
            </>
        </EmotionThemeProvider>
    )
}
