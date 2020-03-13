import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import ListContainer from '../components/ListContainer/ListContainer';

import { graphql } from 'gatsby';

export default ({ data }) => {
    return (
      <PrimaryLayout>
        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-lg-6 acanPosts">
              <ListContainer node={data}/>
            </div>
            <div className="col-lg-6 nappyPosts">
              <ListContainer node={data}/>
            </div>
          </div>
        </div>
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