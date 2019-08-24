import React from 'react'
import { Container } from 'next/app'

import 'sanitize.css'
import 'sanitize.css/typography.css'
import 'sanitize.css/forms.css'

import { ThemeProvider } from 'styled-components'

import { AppProvider } from '~/store/AppContext'

const App = ({ Component, pageProps }) => {
    return (
        <Container>
            <ThemeProvider theme={{}}>
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
            </ThemeProvider>
        </Container>
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
