import React, {useState, useContext} from 'react'
import AppContext from './context'

const ThemeInput = () => {
    // This input should use the current theme
    const appContext = useContext(AppContext)
    const [inputValue, setInputValue] = useState('')
    return (
        <input
            style={appContext.theme}
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
        />
    )
}

export default ThemeInput

