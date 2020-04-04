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
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            }, "params": {
                "format": "undefined"
            }
        })
            .then((response) => {
                    this.setState({
                        confirmed: 'Confirmed: ' + response.data[0].confirmed,
                        recovered: 'Recovered: ' + response.data[0].recovered,
                        deaths: 'Deaths: ' + response.data[0].deaths
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
                    <p className='confirmed'>{this.state.confirmed}</p>
                    <p className='recovered'>{this.state.recovered}</p>
                    <p className='deaths'>{this.state.deaths}</p>
            </div>
        );
    }
}

export default GlobalStats;