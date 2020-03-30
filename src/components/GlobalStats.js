import React, { Component } from 'react';
import '../css/app.css';

class GlobalStats extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        const axios = require("axios");

        axios({
            "method": "GET",
            "url": "https://covid-19-data.p.rapidapi.com/totals",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "e7a3dfa939mshfe1928f190d1bddp189afbjsn938e9d19693b"
            }, "params": {
                "format": "undefined"
            }
        })
            .then((response) => {
                // console.log(response);
                this.setState({
                    confirmed: response.data[0].confirmed,
                    recovered: response.data[0].recovered,
                    deaths: response.data[0].deaths
                    });
            })
            .catch((error) => {
                console.log('There was an error fetching data: ', error)
            })
    }

    render() {
        return (
            <div className='global-stats'>
                <h1>Global Stats</h1>
                <p className='confirmed'>Confirmed: {this.state.confirmed }</p>
                <p className='recovered'>Recovered: { this.state.recovered }</p>
                <p className='deaths'>Deaths: {this.state.deaths}</p>
            </div>
        );
    }
}

export default GlobalStats;