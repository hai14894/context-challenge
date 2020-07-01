import React, {useState} from 'react'
import AppContext from './context'
import {themes} from './context'
import Form from './Form'

const App = () => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <>
        <button 
        onClick={()=>{
            setTheme(theme === themes.light? themes.dark : (theme ===themes.dark?  themes.ocean : themes.light))
        }}>
            toggler
        </button>


        <AppContext.Provider value={{theme}}>
            <Form />
        </AppContext.Provider>
        </>
        // implement a button which toggles the theme
    )
}

export default App
