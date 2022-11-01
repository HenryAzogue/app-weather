import React, { useState } from 'react';
import useWeather from '../hook/useWeather';

const Weather = () => {
  const { weather } = useWeather({});
  const [isKelvin, setIsKelvin] = useState(true);

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let date = day + '/' + month + '/' + year;


  // console.log(weather);
  return (
    <div className='section'>
      <section className='section__header'>
        <h1 className="header__h1">Wheather App</h1>
        <p className="header__p">
          {weather.name} {" "}
          <span className='header__span'>{weather.sys?.country}</span>
        </p>
        <p className="header__date">{date}</p>
      </section>

      <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
        alt="overcast"
        className='img'
      />

      <section className="section__temp">
        <div className='c1'>
          <p className="temp__data temp__data-t1">
            {isKelvin ? weather.main?.temp : (weather.main?.temp - 273.15).toFixed(1)}{" "}
            {isKelvin ? "ºK" : "ºC"}
          </p>
        </div>
        <div className='c2'>
          <p className="temp__data">
            Max. {" "}{isKelvin ? weather.main?.temp : (weather.main?.temp - 273.15).toFixed(1)}
            {" "}{isKelvin ? "ºK" : "ºC"}
          </p>
        </div>
        <div className='c3'>
          <p className="temp__data">
            Min. {" "}{isKelvin ? weather.main?.temp : (weather.main?.temp - 273.15).toFixed(1)}
            {" "}{isKelvin ? "ºK" : "ºC"}
          </p>
        </div>
      </section>

      <div className="section__info">
        <p className="info__p info__p-a">{weather.weather?.[0].description}</p>
        <p className="info__p"><b>Wind speed:</b> {weather.wind?.speed} m/s</p>
        <p className="info__p"><b>Humidity:</b> {weather.main?.humidity} %</p>
        <p className="info__p"><b>Pressure:</b> {weather.main?.pressure} hPa</p>
      </div>

      <div className="section__btn">
        <button className='btn__action'
          onClick={() => setIsKelvin(!isKelvin)}
        >
          {isKelvin ? "Degrees" : "Kelvin"}
        </button>
      </div>
    </div>
  );
};

export default Weather;