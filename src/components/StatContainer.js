import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    NavLink,
    Redirect
} from 'react-router-dom';
import '../css/app.css';

// Components
import CountryStats from './CountryStats';
import Info from './Info';

class StatContainer extends Component {
    render() {
        return(
            <BrowserRouter>
                <div className='data-container'>
                    <ul className='text-center'>
                        <Redirect from='/' to='/search' />
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

export default StatContainer;