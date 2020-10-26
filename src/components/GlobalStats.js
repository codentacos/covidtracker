import React, { Component } from 'react';
import ClipboardIcon from './icons/ClipboardIcon';
// import PlusIcon from './icons/PlusIcon';
// import BedIcon from './icons/BedIcon';
// import redux from 'redux';
import '../css/app.css';

const mapStateToProps = (store) => {
  return { globalStats: store.globalStats }
};

const callGlobal = () => {
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
      // this.setState({
      //     confirmed: 'Confirmed: ' + parseInt(response.data[0].confirmed).toLocaleString(),
      //     recovered: 'Recovered: ' + parseInt(response.data[0].recovered).toLocaleString(),
      //     deaths: 'Deaths: ' + parseInt(response.data[0].deaths).toLocaleString(),
      // });
    })
    .catch((error) => {
      console.log('There was an error fetching data: ', error)
    })
}

const GlobalStats = () => {

  // constructor() {
  //     super();
  //     this.state = {

  //     }
  // }

  // componentDidMount() {
  // this.callGlobal();
  // }

  // render() {
  return (
    <div className='global-stats p-3'>
      <h1 className='text-center'>Global Stats</h1>
      <div className='text-center'>
        {/* <p className='confirmed'><ClipboardIcon />  {store.globalStats.confirmed}</p> */}
        {/* <p className='recovered'><PlusIcon />  {this.state.recovered}</p>
          <p className='deaths'><BedIcon />  {this.state.deaths}</p> */}
      </div>
      {/* <CoffeeButton /> */}
    </div>
  );
}

// connect()(GlobalStats);
// connect(mapStateToProps)(GlobalStats);
export default GlobalStats;