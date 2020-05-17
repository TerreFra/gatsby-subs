import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql, Link } from 'gatsby'; // GraphQL

import Banner from '../../../static/bannerSlider.png';

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
                excerpt
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
    const [searchResult, setSearchResult] = useState('');
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
       dataToSearch.addIndex('excerpt');

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
                
                <Modal.Header closeButton>
                    <FontAwesomeIcon className="searchIconInside mr-3" icon={faSearch} />
                    <input type="text" value={searchQuery} onChange={searchData} placeholder="Search your novel chapter." />
                </Modal.Header>

                <Modal.Body>
                    {!searchQuery &&
                    <div className="placeholderSearch">
                        <h1>Lorem Ipsum! Che stavi cercando?</h1>
                        <img src={Banner} alt="bannerSlider" className="searchMascottes py-5" />
                    </div>
                    }
                    {searchResult && searchResult.map((result, index) => (
                        <li className="searchResult mb-3 py-3 px-3" key={index}>
                            <Link to={result.slug} dangerouslySetInnerHTML={{ __html: result.title }} />
                            <p dangerouslySetInnerHTML={{ __html: result.excerpt }} />
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