import React, { Component } from 'react';
import './css/app.css';

// Components
import GlobalStats from './components/GlobalStats';
import CountryStats from './components/CountryStats';

class App extends Component {

render() {
  return (
    <div className='container'>
      <GlobalStats />
      <CountryStats />
    </div>
  );
}
  
}

export default App;
