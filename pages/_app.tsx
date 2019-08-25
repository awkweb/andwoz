import React from 'react'

import 'sanitize.css'
import 'sanitize.css/typography.css'
import 'sanitize.css/forms.css'
import '~/static/styles/fonts.css'

import { ThemeProvider } from 'styled-components'

import { AppProvider } from '~/store/AppContext'
import { theme, GlobalStyle } from '~/components'

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
            </>
        </ThemeProvider>
    )
}

App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {}
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
}

export default App
