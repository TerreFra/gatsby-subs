import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql, Link } from 'gatsby'; // GraphQL
import * as JsSearch from "js-search"; // JsSearch
import './SearchBar.scss';

// Link utili: https://github.com/bvaughn/js-search || https://www.gatsbyjs.org/docs/adding-search-with-js-search

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

    // Js-Search Index & StateManager
    const [rawIndex, setRawIndex] = useState();
    const [searchIndex, setSearchIndex] = useState();
    const [searchResult, setSearchResult] = useState();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setRawIndex(data.allWordpressPost.nodes);
        if(rawIndex) {
            rebuildIndex();
        } else { console.log('Loading Search..'); }
    }, [rawIndex]);

    const rebuildIndex  = () => {
       const dataToSearch = new JsSearch.Search('slug');

       dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
       dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
       dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("slug");

       dataToSearch.addIndex('slug');
       dataToSearch.addIndex('title');

       dataToSearch.addDocuments(rawIndex);
       setSearchIndex(dataToSearch);
    }

    const searchData = e => {
        const queryResult = searchIndex.search(e.target.value);
        setSearchQuery(e.target.value);
        setSearchResult(queryResult);
    }


    return (
        <React.Fragment>
            <FontAwesomeIcon className="searchIcon mr-2" icon={faSearch} onClick={handleSearchShow} />
            <Modal show={showSearch} onHide={handleSearchClose} className="searchWrapper">
                
                <Modal.Header closeButton />

                <Modal.Body>
                    <input type="text" value={searchQuery} onChange={searchData} />
                    {searchResult && searchResult.map((result, index) => (
                        <li key={index}>
                            <Link to={result.slug} dangerouslySetInnerHTML={{ __html: result.title }} />
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