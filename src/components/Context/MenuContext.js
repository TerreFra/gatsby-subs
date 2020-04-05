import React, { useState } from 'react';

// Creo il context e lo scompongo.
let MenuContext;

const defaultState =  {
    whatMenu: ''
}

const { Provider, Consumer } = MenuContext = React.createContext(defaultState);

const MenuProvider = props => {

    // booleanWebsite
    const [whatMenu, setMenu] = useState();
    const handleMenuChange = (event) => {
        setMenu(event.target.innerHTML);
    }

    //menuVariables
    const acanMenu = [ {'Projects' : 'projects'}, {'Special Thanks' : 'special_thanks'}, {'About Us': 'about_us' } ];
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