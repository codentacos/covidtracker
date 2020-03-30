import React, { Component } from 'react';

class Search extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        // e.currentTarget.reset();
    }

    render() {
        return(
            <form onSubmit={ this.handleSubmit }>
                <input 
                    type='text'
                    placeholder='Search...'
                    onChange={ this.onSearchChange }
                    onSubmit={ this.props.onSearch }
                    ref={ (input) => this.query = input }
                />
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default Search;