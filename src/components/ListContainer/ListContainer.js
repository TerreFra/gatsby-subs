import React from 'react';
import { Link } from 'gatsby';
import { ListGroup } from 'react-bootstrap';

const ListContainer = (props) => {
    return (
        <div className="listContainer py-3">
            <h5 className="pb-1">Latest {props.name} Releases</h5>
            <div className="littleDivider mb-1" />
            <ListGroup variant="flush">
                {props.postInfo.allWordpressPost.nodes.map((post, index) => {
                    if( props.slugFilter === post.categories[0].slug ) {
                    return <ListGroup.Item key={index}>
                        <Link className="postTitle" to={post.slug} dangerouslySetInnerHTML={{ __html: post.title }} />
                        {post.categories.map((category) => (
                            <p className="categoryName">{category.name}</p>
                        ))}
                    </ListGroup.Item>
                    }
                })}
            </ListGroup>
        </div>
    );
}

export default ListContainer;

