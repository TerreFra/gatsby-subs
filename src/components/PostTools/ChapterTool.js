import React, { useState, useContext } from 'react';
import { Modal, Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import './ChapterTool.scss';

import { ThemeContext } from '../Context/ThemeContext';


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

   const { isDark } = useContext(ThemeContext);

    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faBook} onClick={handleChapterShow} />

            <Modal show={showChapters} onHide={handleChapterClose} className={isDark ? 'chapterModal darkTheme' : 'chapterModal lightTheme'}>
                
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
            </Modal>

        </React.Fragment>
    );
}

export default ChapterTool;