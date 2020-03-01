import React, { useState } from 'react';

// Creo il context e lo scompongo.
let ThemeContext;
const { Provider, Consumer } = ThemeContext = React.createContext();
const ThemeProvider = props => {

    // themeState
    const [isDark, setDark] = useState(true);
    const changeTheme = () => {
        setDark(!isDark);
    };

    // booleanWebsite
    const [whatMenu, setMenu] = useState();
    const handleMenuChange = (event) => {
        setMenu(event.target.innerHTML);
    }

    //menuVariables
    const acanMenu = ['Projects', 'Special Thanks', 'About Us'];
    const nappyMenu = ['Prog(h)etti', 'Canzoni', 'Contatti', 'Info', 'Guidine Utili'];

    return (
        <Provider value={{ isDark, changeTheme, whatMenu, handleMenuChange, acanMenu, nappyMenu }}>
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