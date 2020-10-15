import React from 'react';
import Heart from './icons/Heart';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg='light' fixed='bottom' className='justify-content-center' >
            <span>Made with <Heart /> by Zachary Nelson</span>
        </Navbar>
    );
}

export default Footer;