import React, { useState } from 'react';

// Creo il context e lo scompongo.
let ThemeContext;

const defaultState =  {
    isDark: true
}

const { Provider, Consumer } = ThemeContext = React.createContext(defaultState);

const ThemeProvider = props => {
 
    // themeState
    const [isDark, setDark] = useState(true);
    const changeTheme = () => {
        setDark(!isDark);
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