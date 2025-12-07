import React, { use, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const Weather = () => {
    const navigate = useNavigate();
    const weather = useLoaderData();
    const [city, setCity] = useState('');
    const searchHandler = (e) => {
        if(e.key==='Enter'){
            navigate(`/weather?q=${city}`)
        }
    }

    return (
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} onKeyDown={searchHandler} />
        <h1>Weather in {weather.name}</h1>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        <p>Temperature: {weather.main.temp}</p>
        <p>Humidity: {weather.main.humidity}</p>
        <p>Pressure: {weather.main.pressure}</p>
        <p>Wind: {weather.wind.speed}</p>
      </div>
    );
}

export default Weather;
