import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeConsumer } from "../components/Context/ThemeContext";

const PrimaryLayout = (props) => {
    return (
      <ThemeConsumer>
        {theme => (
          <div id="primaryLayout" className={theme.isDark ? 'darkTheme' : 'lightTheme'}>
            <Header></Header>
              {props.children}
            <Footer></Footer>
          </div>
      )}
      </ThemeConsumer>
    );
  };
  
  export default PrimaryLayout;