import React from 'react';
import { City } from '../../interfaces/types';

interface CityInfo {
    city: City
    measureHandler: Function
    deleteCity: Function
}

function CityInfo({ city, measureHandler, deleteCity }: CityInfo) {
    const { measureTemp, unit } = measureHandler(Number(city.main.temp));
    return (
        <li className="city">
            <h2 className="city-name">
                <span data-testid='city-name'>{city.name}</span>
                <sup>{city.sys.country}</sup>
            </h2>
            <button
                type="button"
                onClick={() => deleteCity(city)} className="btn btn-danger">-</button>
            <div className="city-temp">{measureTemp.toFixed()}<sup>{unit}</sup></div>
            <figure>
                <img className="city-icon" src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${city.weather[0].icon}.svg`} alt={city.weather[0].description} />
                <figcaption>{city.weather[0].description}</figcaption>
            </figure>
        </li>
    )
}

export default CityInfo
