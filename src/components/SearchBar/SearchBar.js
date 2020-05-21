import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPoll } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql, Link } from 'gatsby'; // GraphQL

import Banner from '../../../static/bannerSlider.png';
import { ThemeContext } from '../Context/ThemeContext';

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
                categories {
                    name
                  }
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

       dataToSearch.addDocuments(rawIndex);
       setSearchIndex(dataToSearch);
    }

    const searchData = e => {
        const queryResult = searchIndex.search(e.target.value);
        setSearchQuery(e.target.value);
        setSearchResult(queryResult);
    }

    const { isDark } = useContext(ThemeContext);


    return (
        <React.Fragment>
            <FontAwesomeIcon className="searchIcon mr-2" icon={faSearch} onClick={handleSearchShow} />
            <Modal show={showSearch} onHide={handleSearchClose} className={isDark ? 'searchWrapper darkTheme' : 'searchWrapper lightTheme'}>
                
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
                    {searchQuery && <div className="resultsCounter text-left mb-3"><FontAwesomeIcon className="mr-1" icon={faPoll} /> {searchResult.length} Results.</div>}
                    {searchResult && searchResult.map((result, index) => (
                        <li className="searchResult mb-3 py-3 px-3" key={index}>
                            <Link to={result.slug} dangerouslySetInnerHTML={{ __html: result.title }} />
                            <h6 className="mt-2" dangerouslySetInnerHTML={{ __html: result.categories[0].name }} />
                            <p dangerouslySetInnerHTML={{ __html: result.excerpt }} />
                        </li>
                    ))}
                </Modal.Body>
                
            </Modal>
        </React.Fragment>
    );
}

export default SearchBar;