import React from 'react';
import './DisplayInfo.css';

const DisplayInfo = ({weather}) => {
    if (!weather) {
        return (null);
    }

    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 15) ? 'warmBg' : 'coldBg') : 'display-info-wrapper'}>
            <div className='display-content'>
                    <h3>{weather.name}, {weather.sys.country}</h3>
                    <h4>Temperature: {Math.round(weather.main.temp)}°C</h4> 
                    <h4>{weather.timezone}</h4>
                    <h4>Low: {weather.main.temp_min}, High: {weather.main.temp_max}</h4> 
                    <h4>Description: {weather.weather[0].description}</h4>
            </div>         
        </div>
       
    ) 
    }


export default DisplayInfo;