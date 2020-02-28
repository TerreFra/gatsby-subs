import React, { useState } from 'react';

// Creo il context e lo scompongo.
const { Provider, Consumer } = React.createContext();

const ThemeProvider = props => {
    // themeState
    const [isDark, setDark] = useState(true);
    return (
        <Provider value={{ isDark, changeTheme: () => setDark(!isDark)}}>
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

export { Consumer as ThemeConsumer };