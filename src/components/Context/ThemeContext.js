import React, { useState } from 'react';

// Creo il context.
export const ThemeContext = React.createContext();

const Provider = props => {
    // themeState
    const [isDark, setDark] = useState(true);
    
    return (
        <ThemeContext.Provider value={{ isDark, changeTheme: () => setDark(!isDark)}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

// Esporto il componente Provider.
export default ({ element }) => (
    <Provider> 
        { element } 
    </Provider>
);