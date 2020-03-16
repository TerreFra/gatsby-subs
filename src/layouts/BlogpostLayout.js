import React, { useContext, useRef } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProgressBar from '../components/ReadProgressBar/ReadProgressBar';
import { graphql } from 'gatsby';
import { ThemeContext } from "../components/Context/ThemeContext";

const BlogpostLayout = ({ data }) => {

    const { isDark } = useContext(ThemeContext);
    const postData = data.wordpressPost;
    const progressRef = useRef();

    return (
        <div id="blogpostLayout" className={isDark ? 'lightTheme' : 'darkTheme'}>
            <Header></Header>
            <ProgressBar attachTo={progressRef} />
            <div className="container">
                <div className="row justify-content-md-center py-4">
                    <h1 className="pb-4" dangerouslySetInnerHTML={{ __html: postData.title }} />
                    <div dangerouslySetInnerHTML={{ __html: postData.content }} ref={progressRef}/>
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