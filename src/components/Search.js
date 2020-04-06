import React from 'react';
// import { countries } from '../countries';

function Search(props) {
    return (
        <form>
            <select onChange={props.change}>
                {props.populateOptions}
            </select>
            <button onClick={props.search}>Search</button>
        </form>
    );

}

export default Search;