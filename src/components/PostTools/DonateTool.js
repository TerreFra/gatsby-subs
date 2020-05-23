import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

import Cat from '../../../static/babyCat.png';


import { ThemeContext } from '../Context/ThemeContext';

const DonateTool = props => {

    const [showDonate, setShowDonate] = useState(false);
    const handleDonateClose = () => setShowDonate(false);
    const handleDonateShow = () => setShowDonate(true);
    
    // ArrayDonate.
    const donateArray = [ 
        {'after-defeating-the-demon-lord-he-became-guild-master' : 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=X5235WVNVHLKY'},
        {'a-new-game-from-the-depths-of-captivity' : 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=R7L8TQ62V8RUJ'},
        {'welcome-to-the-monsters-guild' : 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZW7E65SNWW2Y8'} 
    ]


    const { isDark } = useContext(ThemeContext);

     return (
         <React.Fragment>
            <FontAwesomeIcon icon={faMugHot} onClick={handleDonateShow} />

            <Modal show={showDonate} onHide={handleDonateClose} className={isDark ? 'chapterModal darkTheme' : 'chapterModal lightTheme'}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Please, we work hard for fuck our shittis, donate! </Modal.Title>
                </Modal.Header>
                
                <Modal.Body className="text-center">
                    <div className="innerImgContainer">
                        <img src={Cat} alt="babyCat" />
                    </div>
                    {donateArray.map(link => (
                            props.donateSlugs === Object.keys(link)[0] &&  
                            
                            <a href={link[props.donateSlugs]}>
                                <Button className="mb-5" variant="outline-warning">Donate <FontAwesomeIcon className="ml-3" icon={faMugHot} /></Button>
                            </a>
                        ))
                    }
                </Modal.Body>
            </Modal>
         </React.Fragment>
     );
}

export default DonateTool;