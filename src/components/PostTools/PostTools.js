import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faListUl } from '@fortawesome/free-solid-svg-icons';

const PostTools = props => {

    // Modal createState & setState
    const [showResizer, setShowResizer] = useState(false);
    const [showChapters, setShowChapters] = useState(false);

    const handleResizerClose = () => setShowResizer(false);
    const handleResizerShow = () => setShowResizer(true);

    const handleChapterClose = () => setShowChapters(false);
    const handleChapterShow = () => setShowChapters(true);

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
                <FontAwesomeIcon icon={faCog} onClick={handleResizerShow} />
                <span className="mr-3"></span>
                <FontAwesomeIcon icon={faListUl} onClick={handleChapterShow} />
            </div>

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

            <Modal show={showChapters} onHide={handleChapterClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nappy's maggix grants your chapterz. </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.chaptersInfo.nodes.map((info, index) => (
                        <div>
                            <Link to={info.slug}>{index + 1}. {info.title}</Link> 
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleChapterClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default PostTools;