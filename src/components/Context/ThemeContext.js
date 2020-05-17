import React, { useState } from 'react';
import ls from 'local-storage'; // Local Storage

// Creo il context e lo scompongo.
let ThemeContext;

const defaultState =  {
    isDark: true
}

const { Provider, Consumer } = ThemeContext = React.createContext(defaultState);

const ThemeProvider = props => {
 
    // themeState
    const [isDark, setDark] = useState(ls.get('themeColor') || true);
    
    const changeTheme = () => {
        setDark(!isDark);
        ls.set('themeColor', isDark)
    };

    return (
        <Provider value={{ isDark, changeTheme }}>
            {props.children}
        </Provider>
    );
}

// Esporto il componente Provider.
export default ({ element }) => (
    <ThemeProvider>
        {element} 
    </ThemeProvider>
);

export { Consumer as ThemeConsumer, ThemeContext };