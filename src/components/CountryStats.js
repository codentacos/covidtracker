import React, { Component } from 'react';
// import '.env';
import '../css/app.css';

// Components
import Search from './Search';

class CountryStats extends Component {
    constructor() {
        super();
        this.state = {
            noData: false
        }
    }

    performSearch = (query) => {
        const axios = require("axios");
        axios({
            "method": "GET",
            "url": `https://covid-19-data.p.rapidapi.com/country?${query}`,
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            }, "params": {
                "format": "json",
                "name": `${query}`
            }
        })
            .then((response) => {
                console.log(response.data);
                
                if (response.data.length === 0) {
                    this.setState({ noData: true });
                } else {
                    this.setState({
                        country: response.data[0].country,
                        confirmed: 'Confirmed: ' + response.data[0].confirmed,
                        critical: 'critical: ' + response.data[0].critical,
                        recovered: 'Recovered: ' + response.data[0].recovered,
                        deaths: 'Deaths: ' + response.data[0].deaths,
                        noData: false
                    });
                }
            })
            .catch((error) => {
                console.log('There has been an error fetching data: ', error)
            })
    }

    render() {
        return (
            <div className='country-stats'>
                <h1>Country Stats</h1>
                <span>Search specific countries for more information</span>
                <Search
                    onSearch={this.performSearch}
                />

                { (() => {
                    if (this.state.noData === true) {
                        return <h2>There were no results. Please enter a valid country name</h2>;
                    } else {
                        return (
                        <div>
                            <h2>{this.state.country}</h2>
                            <p className='confirmed'>{this.state.confirmed}</p>
                            <p className='recovered'>{this.state.recovered}</p>
                            <p className='critical'>{this.state.critical}</p>
                            <p className='deaths'>{this.state.deaths}</p>
                        </div>
                        );
                    }
                })() }
               
                
            </div>
        );
    }
}

export default CountryStats;