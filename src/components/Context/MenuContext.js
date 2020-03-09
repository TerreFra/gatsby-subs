import React, { useState } from 'react';

// Creo il context e lo scompongo.
let MenuContext;
const { Provider, Consumer } = MenuContext = React.createContext();

const MenuProvider = props => {

    // booleanWebsite
    const [whatMenu, setMenu] = useState();
    const handleMenuChange = (event) => {
        setMenu(event.target.innerHTML);
    }

    //menuVariables
    const acanMenu = ['Projects', 'Special Thanks', 'About Us'];
    const nappyMenu = ['Prog(h)etti', 'Canzoni', 'Contatti', 'Info', 'Guidine Utili'];

    return (
        <Provider value={{ whatMenu, handleMenuChange, acanMenu, nappyMenu }}>
            {props.children}
        </Provider>
    );
}

// Esporto il componente Provider.
export default ({ element }) => (
    <MenuProvider> 
        {element} 
    </MenuProvider>
);

export { Consumer as MenuConsumer, MenuContext };