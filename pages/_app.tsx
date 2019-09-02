import { ThemeProvider } from 'emotion-theming'

import { GlobalStyles, theme } from '../components'
import { AppProvider } from '../store/AppContext'

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
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
