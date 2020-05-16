// Components
import ThemeProvider from './src/components/Context/ThemeContext';

// Styles
import './node_modules/bootstrap/dist/css/bootstrap.css';
import './src/global.scss';

// wrapRoot, per passare gli Hooks.
export const wrapRootElement = ThemeProvider;
