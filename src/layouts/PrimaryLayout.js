import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeContext } from "../components/Context/ThemeContext";

const PrimaryLayout = (props) => {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div id="primaryLayout" className={theme.isDark ? 'darkTheme' : 'lightTheme'}>
            <Header></Header>
              {props.children}
            <Footer></Footer>
          </div>
      )}
      </ThemeContext.Consumer>
    );
  };
  
  export default PrimaryLayout;