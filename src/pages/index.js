import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import Post from '../components/Post/Post';

import { graphql } from 'gatsby';

export default ({ data }) => {
    return (
      <PrimaryLayout>
        {data.allWordpressPost.nodes.map((node) => (
                <Post
                    title={node.title}
                    excerpt={node.excerpt}
                    readMore={node.slug}
              ></Post>
        ))}
      </PrimaryLayout>
    ) 
}


export const query = graphql`
{
  allWordpressPost {
    nodes {
      slug
      title
      excerpt
    }
  }
}
`