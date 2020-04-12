import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql, Link } from 'gatsby'; // GraphQL
import './SearchBar.scss';


const SearchBar = () => {

    const data = useStaticQuery(graphql`
    query HeaderQuery {
        allWordpressPost {
            nodes {
              slug
              title
            }
          }
     }
    `);

    // Modal createState & setState
    const [showSearch, setShowSearch] = useState(false);
    const handleSearchClose = () => setShowSearch(false);
    const handleSearchShow = () => setShowSearch(true);

    // Ricerca AutoCompletata.
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = React.useState([]);


    const handleSearch = e => {
        setSearchValue(e.target.value);
        console.log(data.allWordpressPost.nodes);
    }


    useEffect(() => {
        const results = data.allWordpressPost.nodes.filter(item  => item.title.toLowerCase().includes(searchValue.toLowerCase()) );
        setSearchResults(results);
    }, [searchValue])

    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faSearch} onClick={handleSearchShow} />
            <Modal show={showSearch} onHide={handleSearchClose} className="searchWrapper">
                
                <Modal.Header closeButton />

                <Modal.Body>
                    <input type="text" onChange={handleSearch} />
                    {searchResults.map(item => (
                        <li key={item.title}>
                            <Link to={item.slug} key={item.title} dangerouslySetInnerHTML={{__html: item.title}} /> 
                        </li>
                    ))}
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSearchClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default SearchBar;