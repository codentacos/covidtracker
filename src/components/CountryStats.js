import React, { Component } from 'react';
import '../css/app.css';

// Components
import Search from './Search';

class CountryStats extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    performSearch = (query) => {
        const axios = require("axios");
        axios({
            "method": "GET",
            "url": `https://covid-19-data.p.rapidapi.com/country?${ query }`,
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "e7a3dfa939mshfe1928f190d1bddp189afbjsn938e9d19693b"
            }, "params": {
                "format": "json",
                "name": `${ query }`
            }
        })
            .then((response) => {
                console.log(response)
                this.setState({
                    country: response.data[0].country,
                    confirmed: response.data[0].confirmed,
                    critical: response.data[0].critical,
                    recovered: response.data[0].recovered,
                    deaths: response.data[0].deaths
                });
            })
            .catch((error) => {
                console.log('There has been an error fetching data: ', error)
            })
    }

    render() {
        return (
            <div className='country-stats'>
                <h1>Country Stats</h1>
                <span>Searh specific countries for more information</span>
                <Search 
                    onSearch={ this.performSearch }
                />
                <h2>{ this.state.country }</h2>
                <p className='confirmed'>Confirmed: {this.state.confirmed}</p>
                <p className='recovered'>Recovered: {this.state.recovered}</p>
                <p className='critical'>Critical: {this.state.critical}</p>
                <p className='deaths'>Deaths: {this.state.deaths}</p>
            </div>
        );
    }
}

export default CountryStats;