import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    NavLink
} from 'react-router-dom';
import '../css/app.css';

// Components
import CountryStats from './CountryStats';
import Info from './Info';

class Container extends Component {
    render() {
        return(
            <BrowserRouter>
                <div className='data-container'>
                    <ul>
                        <NavLink to='/info'>What is Covid-19?</NavLink>
                        <NavLink to='/search'>Search</NavLink>
                    </ul>
                    <Route path='/search'><CountryStats /></Route>
                    <Route path='/info'><Info /></Route>
                </div>

                
            </BrowserRouter>
        );
    }
}

export default Container;