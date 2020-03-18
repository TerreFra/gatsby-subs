import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const PostTools = props => {

    const [show, setShow] = useState(false);
    const [actualFont, setActualFont] = useState('16px');
    const [actualLineHeight, setActualLineHeight] = useState('1.6');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFontChange = e => {
        const newValue = e.target.value + 'px';
        setActualFont(newValue);
        props.handleSize(newValue);

        e.preventDefault();
    }

    const handleLineHeightChange = e => {
        const newValue = e.target.value / 10;
        newValue.toString().replace(',', '.');

        setActualLineHeight(newValue);
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
                    <span>Font Size: { actualFont }</span><input className="w-100" type="range" min="12" max="18" onChange={handleFontChange} defaultValue="16" />
                    <span>Line Height: { actualLineHeight }</span><input className="w-100" type="range" min="10" max="26" onChange={handleLineHeightChange} defaultValue="16" />
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