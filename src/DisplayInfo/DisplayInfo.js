import React from 'react';
import './DisplayInfo.css';

const DisplayInfo = ({temperature, weather}) => {
    console.log(weather)
    return(
        <div className='display-info-wrapper'>
            <div>
                <h4>
                {/* temperature: {weather} */}
                </h4>  
            </div>
        </div>
    )

}

// const {main.temp, main.temp_min, main.temp_max, name, sys.country, sys.timezone, weather.description}
export default DisplayInfo;