import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from '../Context/ThemeContext';

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

    const { isDark } = useContext(ThemeContext);

    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faCog} onClick={handleResizerShow} />

            <Modal show={showResizer} onHide={handleResizerClose} className={isDark ? 'chapterModal darkTheme' : 'chapterModal lightTheme'}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Nappy's maggix grants u wisshis. </Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <span>Font Size: {props.fontSize}</span><input className="w-100" type="range" min="12" max="24" onChange={handleFontChange} defaultValue={parseInt(props.fontSize)} />
                    <span>Line Height: {props.lineHeight}</span><input className="w-100" type="range" min="10" max="26" onChange={handleLineHeightChange} defaultValue={parseInt(props.lineHeight * 10)} />
                </Modal.Body>
            </Modal>

        </React.Fragment >
    );
}

export default ResizerTool;