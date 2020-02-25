import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const PrimaryLayout = (props) => {
    return (
      <div id="primaryLayout">
        <Header></Header>
            {props.children}
        <Footer></Footer>
      </div>
    );
  };
  
  export default PrimaryLayout;