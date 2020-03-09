import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Post = (props) => (
    <div className="p-3 col-xs-6">
        <Card>
            <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
                <Card.Text>
                    <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
                </Card.Text>
                <Button variant="primary" href={props.readMore}>Read More...</Button>
            </Card.Body>
        </Card>
    </div>
);

export default Post;