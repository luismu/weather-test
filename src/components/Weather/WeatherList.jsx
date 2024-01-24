import React from 'react';

import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';
import sun from '../Assets/sun.png';
import half_moon from '../Assets/half-moon.png';

import Loading from '../Loading';


const  WeatherList = (props) => {
  const { data, fetchLoading } = props;
  const forecastDaysList = data?.properties?.periods;
  console.log(forecastDaysList)

  if (fetchLoading) {
    return <Loading />; // You can replace this with your loading indicator or message
  }

  return (
    <>
      <div className="forecast-seven-container">
        {forecastDaysList && forecastDaysList.map((day, index) => (
          <div className='forecast-seven-day' key={index}>
            <div className="day">{day.name}</div>
            <div className='weather-image'>
              {/* You can replace this with logic to select the appropriate icon */}
              <img src={day.isDaytime ? sun : half_moon} alt="" />
            </div>
            <div className="weather-temp">{day.temperature}° F</div>
            <div className="data-container">
              <div className="element">
                <img src={humidity_icon} alt="" />
                <div className='data'>
                  <div className="humidity-percent">{day.relativeHumidity?.value}%</div>
                  <div className="text">Humidity</div>
                </div>
              </div>
              <div className="element">
                <img src={wind_icon} alt="" />
                <div className='data'>
                  <div className="wind-speed">{day.windSpeed}</div>
                  <div className="text">Wind Speed</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeatherList;
