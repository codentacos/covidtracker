import React, { Component } from 'react';
import { countries } from '../countries';
import ClipboardIcon from './icons/ClipboardIcon';
import PlusIcon from './icons/PlusIcon';
import BedIcon from './icons/BedIcon';
import CriticalIcon from './icons/CriticalIcon';
import '../css/app.css';

// Components
import Search from './Search';

class CountryStats extends Component {
    constructor() {
        super();
        this.state = {
            countries: '',
            
        }
    }

    componentDidMount() {
        this.setState({
            countries: countries,
            selected: 'AF',
            noData: true
        });
    }

    populateOptions = countries.length > 0
    && countries.map((item, i) => {
        return (
            <option key={i} value={item.code}>{item.name}</option>
        )
    });

    // handleChange is passed to the search form to update current selected country value
    handleChange = (e) => {
        let val = e.target.value;

        this.setState ((prevState) => ({
            countries: prevState.countries,
            selected: val
        }));
        console.log(e.target.value);  
    }

    performSearch = (e) => {
        e.preventDefault();

        const axios = require("axios");
        const query = this.state.selected;

        axios({
            "method": "GET",
            "url": `https://covid-19-data.p.rapidapi.com/country/code?${query}`,
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            }, "params": {
                "format": "undefined",
                "code": `${query}`
            }
        })
            .then((response) => {
                // console.log(typeof response.data[0].confirmed);
                
                this.setState((prevState) => ({
                    countries: prevState.countries,
                    selected: prevState.selected,
                    country: response.data[0].country,
                    confirmed: 'Confirmed: ' + response.data[0].confirmed.toLocaleString('en'),
                    critical: 'critical: ' + response.data[0].critical.toLocaleString('en'),
                    recovered: 'Recovered: ' + response.data[0].recovered.toLocaleString('en'),
                    deaths: 'Deaths: ' + response.data[0].deaths.toLocaleString('en'),
                    noData: false
                }));
            })
            .catch((error) => {
                console.log('There has been an error fetching data: ', error)
            })
    }

    render() {
        return (
            <div className='country-stats text-center'>
                <h1>Country Stats</h1>
                <span>Search specific countries for more information</span>
                <Search
                    data={this.state.countries}
                    search={this.performSearch}
                    populateOptions={this.populateOptions}
                    change={this.handleChange}
                />
                { (() => {
                    if (this.state.noData === true) {
                        return <div></div>;
                    } else {
                        return (
                        <div>
                            <p className='confirmed'><ClipboardIcon />  {this.state.confirmed}</p>
                            <p className='recovered'><PlusIcon />  {this.state.recovered}</p>
                            <p className='critical'><CriticalIcon />  {this.state.critical}</p>
                            <p className='deaths'><BedIcon />  {this.state.deaths}</p>
                        </div>
                        );
                    }
                })() }
                
                
            </div>
        );
    }
}

export default CountryStats;