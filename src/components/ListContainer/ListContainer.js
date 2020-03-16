import React from 'react';
import { Link } from 'gatsby';
import { ListGroup } from 'react-bootstrap';

const ListContainer = (props) => {

    return (
        <div className="listContainer py-3">
            <h6 className="pb-1">Latest {props.name} Releases</h6>
            <div className="littleDivider mb-1" />
            <ListGroup variant="flush">
                {props.postInfo.allWordpressPost.nodes.map((post, index) => (
                    <ListGroup.Item key={index}>
                        <Link className="postTitle" to={post.slug} dangerouslySetInnerHTML={{ __html: post.title }} />
                        {post.categories.map((category) => (
                            <p className="categoryName">{category.name}</p>
                        ))}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default ListContainer;

