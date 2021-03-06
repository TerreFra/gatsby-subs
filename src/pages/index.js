import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import ListContainer from '../components/ListContainer/ListContainer';
import CardContainer from '../components/CardContainer/CardContainer';

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
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 acanPosts">
            <ListContainer postInfo={data} name="Guild Master" slugFilter="after-defeating-the-demon-lord-he-became-guild-master" />
          </div>
          <div className="col-lg-6 nappyPosts">
            <ListContainer postInfo={data} name="New Game" slugFilter="a-new-game-from-the-depths-of-captivity" />
          </div>
        </div>
      </div>
      <div className="fastAccess border-top py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5 className="py-3">Acan Lorem Ipsum.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, 
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Qui ci metterei le mascottine.</p>
            </div>
            <div className="col-lg-8">
              <CardContainer />
            </div>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  )
}


export const query = graphql`
{
  allWordpressPost(limit: 12) {
    nodes {
      slug
      title
      excerpt
      categories {
        name
        slug
      }
    }
  }
}
`