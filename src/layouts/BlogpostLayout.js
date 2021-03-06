import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../components/Context/ThemeContext"; // Context.

// Layout
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Blog Tools
import ResizerTool from '../components/PostTools/ResizerTool';
import ChapterTool from '../components/PostTools/ChapterTool';
import DonateTool from '../components/PostTools/DonateTool';
import ProgressBar from '../components/ReadProgressBar/ReadProgressBar';

import { DiscussionEmbed } from 'disqus-react'; // Disqus-React.
import { graphql } from 'gatsby'; // GraphQL
import ls from 'local-storage'; // Local Storage

const BlogpostLayout = ({ data }) => {

    // Refs & Context
    const { isDark } = useContext(ThemeContext);
    const postData = data.wordpressPost;
    const slugDonate = data.wordpressPost.categories[0].slug;
    const categoryPostData = data.allWordpressPost;
    const progressRef = useRef();

    // disqusConfig
    const disqusConfig = {
        shortname: 'nappy-1',
        config: { identifier: postData.slug }
    }


    // Hooks State and Functions.
    const [size, setSize] = useState(ls.get('fontSize') || '16px');
    const [lineHeight, setLineHeight] = useState(ls.get('lineHeight') || '1.6');

    const handleSetSize = (value) => {
        setSize(value);
        ls.set('fontSize', value);
    }

    const handleSetLineHeight = (value) => {
        setLineHeight(value);
        ls.set('lineHeight', value)
    }

    return (
        <div id="blogpostLayout" className={isDark ? 'darkTheme' : 'lightTheme'}>
            <Header></Header>
            <ProgressBar attachTo={progressRef} />

            <div className="container">

                <div className="postTools text-center py-4">
                    <ResizerTool handleSize={handleSetSize} handleLineHeight={handleSetLineHeight} fontSize={size} lineHeight={lineHeight} />
                        <span className="mr-3"></span>
                    <ChapterTool chaptersInfo={categoryPostData} />
                        <span className="mr-3"></span>
                    <DonateTool donateSlugs={slugDonate}/>

                </div>

                <div className="row justify-content-md-center px-3">
                    <div className="postHeading">
                        <h3 className="pb-4" dangerouslySetInnerHTML={{ __html: postData.title }} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: postData.content }} ref={progressRef} style={{ fontSize: size, lineHeight: lineHeight }} />
                </div>

                <DiscussionEmbed {...disqusConfig} />

            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default BlogpostLayout;

export const query = graphql`
    query($slug: String!, $category: String!) {
        allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $category }}}}) {
            nodes {
                title
                slug
            }
        }
        wordpressPost(slug: { eq: $slug }) {
            content
            title
            slug
            categories {
                slug
            }
        }
    }
  `