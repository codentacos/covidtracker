import React, { Component } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import './css/app.css';

// Components
import GlobalStats from './components/GlobalStats';
import StatContainer from './components/StatContainer';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <Container>
        <Navbar>
          
        </Navbar>
        {/* <Row>
          <Col xs={12} className='text-center'>
            <h1>Covid-19 Tracker</h1>
          </Col>
        </Row> */}
        <Row>
          <Col xs={12}>
            <img src='/doctors.svg' alt='doctors' className='d-block mt-2 ml-auto mr-auto' />
          </Col>
        </Row>
        <Row className='mt-5 justify-content-center'>
          <Col xs={12} lg={6}>
            <GlobalStats />
          </Col>
        </Row>
        <Row className='mt-3 justify-content-center'>
          <Col xs={12} lg={8} className='mb-3'>
            <StatContainer />
          </Col>
        </Row>
        <Row className='mt-5'>
          <Footer />
        </Row>
      </Container>
    );
  }

}

export default App;
