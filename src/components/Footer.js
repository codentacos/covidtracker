import React from 'react';
import Heart from './icons/Heart';
import CoffeeButton from './CoffeeButton';

const Footer = () => {
    return (
        <div className='footer'>
            {/* <CoffeeButton /> */}
            <span>Made with <Heart /> by Zachary Nelson</span>
        </div>
    );
}

export default Footer;