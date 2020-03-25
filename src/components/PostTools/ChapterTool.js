import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import './ChapterTool.scss';



const ChapterTool = props => { 

    // Modal createState & setState
    const [showChapters, setShowChapters] = useState(false);
    const handleChapterClose = () => setShowChapters(false);
    const handleChapterShow = () => setShowChapters(true);

    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faListUl} onClick={handleChapterShow} />

            <Modal show={showChapters} onHide={handleChapterClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Nappy's maggix grants your chapterz. </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {props.chaptersInfo.nodes.slice(0).reverse().map((info, index) => (
                        <div className="chapterInfo">
                            <Link to={info.slug} key={info.title} dangerouslySetInnerHTML={{__html: (index + 1) + '.&nbsp'  + info.title}} /> 
                        </div>
                    ))}
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="primary" onClick={handleChapterClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </React.Fragment>
    );
}

export default ChapterTool;