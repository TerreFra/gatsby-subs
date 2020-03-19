import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const PostTools = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFontChange = e => {
        const newValue = e.target.value + 'px';
        props.handleSize(newValue);

        e.preventDefault();
    }

    const handleLineHeightChange = e => {
        const newValue = e.target.value / 10;
        newValue.toString().replace(',', '.');
        props.handleLineHeight(newValue);

        e.preventDefault();
    }

    return (
        <div id="postToolsContainer">
            <div className="postTools text-center mb-2">
                <FontAwesomeIcon icon={faCog} onClick={handleShow} />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>As your wish nappy team. </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Font Size: { props.fontSize }</span><input className="w-100" type="range" min="12" max="24" onChange={handleFontChange} defaultValue={parseInt(props.fontSize)} />
                    <span>Line Height: { props.lineHeight }</span><input className="w-100" type="range" min="10" max="26" onChange={handleLineHeightChange} defaultValue={parseInt(props.lineHeight * 10)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PostTools;