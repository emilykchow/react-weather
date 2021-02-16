import React from 'react';
import './DisplayInfo.css';

const DisplayInfo = ({weather}) => {
    if (!weather) {
        return (null);
    }

    var today = new Date();
    const date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 15) ? 'warmBg' : 'coldBg') : 'display-info-wrapper'}>
            <div className='display-content'>
                    <h3>{weather.name}, {weather.sys.country}</h3>
                    <p>{date}</p>
                    <h4>Temperature: {Math.round(weather.main.temp)}°C</h4> 
                    <h4>Time: {weather.timezone}</h4>
                    <h4>Low: {weather.main.temp_min}°C, High: {weather.main.temp_max}°C</h4> 
                    <h4 className='capitalize'>Description: {weather.weather[0].description}</h4>
            </div>         
        </div>
       
    ) 
    }


export default DisplayInfo;