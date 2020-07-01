import React, {useContext} from 'react'
import AppContext from './context'

const ThemeButton = ({text}) => {
    const appContext = useContext(AppContext)
    // This button should use the current theme
    return (
        <button style={appContext.theme}>click me</button>
    )
}

export default ThemeButton
