import { AppProvider } from '../store/AppContext'

const App = ({ Component, pageProps }) => {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
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
