import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { graphql } from 'gatsby';
import { ThemeContext } from "../components/Context/ThemeContext";

const BlogpostLayout = ({ data }) => {

    const { isDark } = useContext(ThemeContext);
    const postData = data.wordpressPost;

    return (
        <div id="blogpostLayout" className={isDark ? 'lightTheme' : 'darkTheme'}>
            <Header></Header>
            <div className="container">
                <div className="row justify-content-md-center">
                    <h1 dangerouslySetInnerHTML={{ __html: postData.title }} />
                    <div dangerouslySetInnerHTML={{ __html: postData.content }} />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BlogpostLayout;

export const query = graphql`
    query($slug: String!) {
        wordpressPost(slug: { eq: $slug }) {
            content
            title
        }
    }
  `