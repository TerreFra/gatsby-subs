import React, { useState } from 'react';
import { Modal, Button, Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import './ChapterTool.scss';



const ChapterTool = props => { 

    // Modal createState & setState
    const [showChapters, setShowChapters] = useState(false);
    const handleChapterClose = () => setShowChapters(false);
    const handleChapterShow = () => setShowChapters(true);


    const splitChapters = () => {
            let chaptersReverse = props.chaptersInfo.nodes.slice(0).reverse();
            let results = [];

            while (chaptersReverse.length) {
                results.push(chaptersReverse.splice(0, 10));
            }
            
            return results;
   }
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faBook} onClick={handleChapterShow} />

            <Modal show={showChapters} onHide={handleChapterClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Nappy's maggix grants your chapterz. </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {splitChapters().map((outroArray, index) => (
                        <Accordion className="chapterAccordion">
                            <Accordion.Toggle as={Card.Header} eventKey={index}>
                                <h6 dangerouslySetInnerHTML={{__html: outroArray[0].title + '<span class="introDivider">–</span>' +  outroArray[outroArray.length -1 ].title}} />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index}>
                                <div className="internalAccordion">
                                {outroArray.map((intoArray) => (
                                    <li>
                                        <Link to={intoArray.slug} key={intoArray.title} dangerouslySetInnerHTML={{__html: intoArray.title}} />
                                    </li>
                                ))}
                                </div>
                            </Accordion.Collapse>
                        </Accordion>
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