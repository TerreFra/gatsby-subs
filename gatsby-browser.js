// Components
import React from 'react';
import ThemeProvider from './src/components/Context/ThemeContext';
import MenuProvider from './src/components/Context/MenuContext';

// Styles
import './node_modules/bootstrap/dist/css/bootstrap.css';
import './src/global.scss';

// wrapRoot, per passare gli Hooks.
export const wrapRootElement = (props) => {
    return (
        <ThemeProvider>
            <MenuProvider {...props} />
        </ThemeProvider>
    );
}
