import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from '../src/store/store.js';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import './css/app.css';

// Components
import GlobalStats from './components/GlobalStats';
import StatContainer from './components/StatContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container fluid className='p-0'>
          <Navbar bg='light' variant='light' className='d-flex justify-content-center'>
            <Navbar.Brand>Covid-19 Tracker</Navbar.Brand>
          </Navbar>
          <Container>
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
        </Container>
      </Provider>
    );
  }
}
connect()(App);
export default App;
