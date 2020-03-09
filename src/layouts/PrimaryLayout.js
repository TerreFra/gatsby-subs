import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeContext } from "../components/Context/ThemeContext";

const PrimaryLayout = (props) => {

  const { isDark } = useContext(ThemeContext);
    return (
          <div id="primaryLayout" className={isDark ? 'lightTheme' : 'darkTheme'}>
            <Header></Header>
              {props.children}
            <Footer></Footer>
          </div>
    );
  };
  
  export default PrimaryLayout;