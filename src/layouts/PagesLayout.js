import React, { useContext } from "react";

// Layout
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeContext } from "../components/Context/ThemeContext";
import { graphql } from 'gatsby'; // GraphQL


const PagesLayout = ({ data }) => {

  const { isDark } = useContext(ThemeContext);
  const pageData = data.wordpressPage;

    return (
          <div id="pagesLayout" className={isDark ? 'darkTheme' : 'lightTheme'}>
            <Header></Header>
            <div className="container">
            <div className="spacerDiv pt-4"></div>
              <div className="row justify-content-md-center px-3">
                <div className="col-lg-12 col-md-12 py-4">
                  <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
                </div>
              </div>
            </div>
            <Footer></Footer>
          </div>
    );
  };
  
  export default PagesLayout;

  export const query = graphql`
    query($slug: String!) {
        wordpressPage(slug: { eq: $slug }) {
            content
            title
            slug
        }
    }
  `