import React, { Component } from 'react';
import './css/app.css';

// Components
import GlobalStats from './components/GlobalStats';
import Container from './components/Container';

class App extends Component {

render() {
  return (
    <div className='container'>
      <GlobalStats />
      <Container />
    </div>
  );
}
  
}

export default App;
