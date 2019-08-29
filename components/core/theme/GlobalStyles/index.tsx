import React from 'react'
import { Global } from '@emotion/core'

import 'sanitize.css'
import 'sanitize.css/typography.css'
import 'sanitize.css/forms.css'

import '../../../../static/styles/fonts.css'

export const GlobalStyles = () => (
    <Global
        styles={theme => `
            html {
                font-size: ${theme.fontSizes.root};
            }
            body {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                background-color: ${theme.colors.background};
                color: ${theme.colors.foreground};
                min-height: 100vh;
                text-rendering: optimizeLegibility;
            }
            #__next {
                height: 100vh;
                min-height: 100vh;
            }
        `}
    />
)
