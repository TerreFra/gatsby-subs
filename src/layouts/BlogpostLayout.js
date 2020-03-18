import React, { useContext, useRef, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProgressBar from '../components/ReadProgressBar/ReadProgressBar';
import PostTools from '../components/PostTools/PostTools';

import { graphql } from 'gatsby';
import { ThemeContext } from "../components/Context/ThemeContext";

const BlogpostLayout = ({ data }) => {

    // Refs & Context
    const { isDark } = useContext(ThemeContext);
    const postData = data.wordpressPost;
    const progressRef = useRef();

    // Local State
    const [size, setSize] = useState(16);
    const [lineHeight, setLineHeight] = useState(1.6);
    const handleSetSize = (value) => {
        setSize(value);
    }

    const handleSetLineHeight = (value) => {
        setLineHeight(value);
    }

    return (
        <div id="blogpostLayout" className={isDark ? 'lightTheme' : 'darkTheme'}>
            <Header></Header>
            <ProgressBar attachTo={progressRef} />
            <div className="container">
                <div className="row justify-content-md-center py-4">
                    <div className="postHeading">
                        <PostTools handleSize={handleSetSize} handleLineHeight={handleSetLineHeight} />
                        <h1 className="pb-4" dangerouslySetInnerHTML={{ __html: postData.title }} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: postData.content }} ref={progressRef} style={{ fontSize: size, lineHeight: lineHeight }} />
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