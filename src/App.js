import React, { Component } from 'react';
import CoffeeButton from './components/CoffeeButton';
import './css/app.css';

// Components
import GlobalStats from './components/GlobalStats';
import Container from './components/Container';
import Footer from './components/Footer';

class App extends Component {

render() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <GlobalStats />
        <Container />
      </div>
      <CoffeeButton />
      <Footer />
    </div>
  );
}
  
}

export default App;
