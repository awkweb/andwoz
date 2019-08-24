import { createContext, useState } from 'react'

interface Props {
    email: string
    setEmail: Function
}

const AppContext = createContext<Props>(null)
const { Consumer, Provider } = AppContext

const AppProvider = ({ children }) => {
    const [email, setEmail] = useState('')
    return <Provider value={{ email, setEmail }}>{children}</Provider>
}

export default AppContext
export { Consumer as AppConsumer, AppProvider }
