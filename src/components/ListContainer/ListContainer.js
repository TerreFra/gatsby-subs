import React from 'react'
import { ListGroup } from 'react-bootstrap'

const ListContainer = (props) => {
    return (
        <ListGroup>
            { props.node.allWordpressPost.nodes.map((node) => (
                <ListGroup.Item dangerouslySetInnerHTML={{ __html: node.title }} />
            ))}
        </ListGroup>
    );
}

export default ListContainer;

