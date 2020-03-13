import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import ListContainer from '../components/ListContainer/ListContainer';

// Static content
import Banner from '../../static/bannerSlider.png';

import { graphql } from 'gatsby';

export default ({ data }) => {
  return (
    <PrimaryLayout>
      <div className="container-fluid bannerStart">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src={Banner} alt="bannerSlider" className="py-5" />
          </div>
        </div>
      </div>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-lg-6 acanPosts">
            <ListContainer postInfo={data} name="Acan" />
          </div>
          <div className="col-lg-6 nappyPosts">
            <ListContainer postInfo={data} name="Nappy" />
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
      categories {
        name
      }
    }
  }
}
`