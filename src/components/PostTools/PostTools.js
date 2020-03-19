import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CompactPicker } from 'react-color';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const PostTools = props => {

    // Modal createState & setState
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Handle Color e Font Changes.
    const handleBGColorChange = (color) => props.handleBGColor(color.hex);
    const handleBGChangeComplete = (color) => props.handleBGColor(color.hex);
    const handleFTColorChange = (color) => props.handleFTColor(color.hex);
    const handleFTChangeComplete = (color) => props.handleFTColor(color.hex);

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
                <FontAwesomeIcon icon={faCog} onClick={handleShow} style={{ color: props.colorFT }} />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nappy's maggix grants u wisshis. </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Font Size: {props.fontSize}</span><input className="w-100" type="range" min="12" max="24" onChange={handleFontChange} defaultValue={parseInt(props.fontSize)} />
                    <span>Line Height: {props.lineHeight}</span><input className="w-100" type="range" min="10" max="26" onChange={handleLineHeightChange} defaultValue={parseInt(props.lineHeight * 10)} />
                    <div className="mt-3 text-center">Background Color:</div>
                    <div className="my-3 text-center">
                        <CompactPicker onChange={handleBGColorChange} onChangeComplete={handleBGChangeComplete} color={props.colorBG} />
                    </div>
                    <div className="mt-3 text-center">Font Color: </div>
                    <div className="my-3 text-center">
                        <CompactPicker onChange={handleFTColorChange} onChangeComplete={handleFTChangeComplete} color={props.colorFT} />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Maggix
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PostTools;