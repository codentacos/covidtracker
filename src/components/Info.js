import React from 'react';

const Info = () => {
    return (
        <div className='info-container'>
            <img src='/covid.png' alt='covid molecule'/>
            <h2>What is coronavirus disease 2019 (COVID-19)?</h2>
            <p>
            Coronavirus disease 2019 (COVID-19) is a respiratory illness
            that can spread from person to person. The virus that causes
            COVID-19 is a novel coronavirus that was first identified during
            an investigation into an outbreak in Wuhan, China.
            </p>
            <h2>How does COVID-19 spread?</h2>
            <p>
            The virus that causes COVID-19 probably emerged from an
            animal source, but is now spreading from person to person.
            The virus is thought to spread mainly between people who
            are in close contact with one another (within about 6 feet)
            through respiratory droplets produced when an infected
            person coughs or sneezes. It also may be possible that a person
            can get COVID-19 by touching a surface or object that has
            the virus on it and then touching their own mouth, nose, or
            possibly their eyes, but this is not thought to be the main
            way the virus spreads. 
            </p>
            <p>Please visit the <a href='https://www.cdc.gov/coronavirus/2019-ncov/downloads/2019-ncov-factsheet.pdf' rel="noopener noreferrer" target='_blank'>CDC website</a> for more information</p>
        </div>
    );
}

export default Info;