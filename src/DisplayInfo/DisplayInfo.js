import React from 'react';
import './DisplayInfo.css';

const DisplayInfo = ({weather,query}) => {
    if (weather){
        return(
            <div>
                {/* <h4>{name}, {sys.country}</h4> */}
                <h4>Temperature: {weather.main.temp}°C</h4>
                {/* <h3>{sys.timezone}</h3> */}
                {/* <h3>Low: {weather.main.temp_min}, High: {weather.main.temp_max}</h3> */}
                <h3>{weather.description}</h3>
            </div>
        ) else {
                <div>hi</div>
        }
    }
    return(
        <div className='display-info-wrapper'>
            <div>
                {weather}
                {/* <h4>{name}, {sys.country}</h4> */}
                {/* <h4>Temperature: {weather.main.temp}°C</h4>  */}
                {/* <h3>{sys.timezone}</h3> */}
                {/* <h3>Low: {weather.main.temp_min}, High: {weather.main.temp_max}</h3>  */}
                {/* <h3>{weather.description}</h3> */}
            </div>
        </div>
    )

}

// const {main.temp, main.temp_min, main.temp_max, name, sys.country, sys.timezone, weather.description}
export default DisplayInfo;