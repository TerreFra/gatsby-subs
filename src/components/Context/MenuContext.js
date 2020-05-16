import React, { useState } from 'react';

// Creo il context e lo scompongo.
let MenuContext;

const defaultState =  {
    acanMenu: ''
}

const { Provider, Consumer } = MenuContext = React.createContext(defaultState);

const MenuProvider = props => {

    //menuVariables
    const acanMenu = [ {'Projects' : 'projects'}, {'Special Thanks' : 'special_thanks'}, {'About Us': 'about_us' } ];

    return (
        <Provider value={{ acanMenu }}>
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