import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const ResizerTool = props => {

    // Modal createState & setState
    const [showResizer, setShowResizer] = useState(false);
    const handleResizerClose = () => setShowResizer(false);
    const handleResizerShow = () => setShowResizer(true);

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
        <React.Fragment>
            <FontAwesomeIcon icon={faCog} onClick={handleResizerShow} />

            <Modal show={showResizer} onHide={handleResizerClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Nappy's maggix grants u wisshis. </Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <span>Font Size: {props.fontSize}</span><input className="w-100" type="range" min="12" max="24" onChange={handleFontChange} defaultValue={parseInt(props.fontSize)} />
                    <span>Line Height: {props.lineHeight}</span><input className="w-100" type="range" min="10" max="26" onChange={handleLineHeightChange} defaultValue={parseInt(props.lineHeight * 10)} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleResizerClose}>Close</Button>
                    <Button variant="primary" onClick={handleResizerClose}>Save Maggix</Button>
                </Modal.Footer>
            </Modal>

        </React.Fragment >
    );
}

export default ResizerTool;