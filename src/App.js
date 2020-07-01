import React, {useState} from 'react'
import AppContext from './context'
import {themes} from './context'
import Form from './Form'

const App = () => {

    const [theme, setTheme] = useState(themes.ocean)

    return (
        <AppContext.Provider value={{theme}}>
            <Form />
        </AppContext.Provider>
        // implement a button which toggles the theme
    )
}

export default App
