import { render } from '@testing-library/react';
import { ICityWeather } from '../../../interfaces/types';
import CityInfo from "../CityInfo";

const city: ICityWeather = {
    "coord": {
        "lon": 32.8543,
        "lat": 39.9199
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 285.24,
        "feels_like": 284.38,
        "temp_min": 284.93,
        "temp_max": 286.66,
        "pressure": 1011,
        "humidity": 72
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.89,
        "deg": 286,
        "gust": 1.34
    },
    "rain": {
        "1h": 0.11
    },
    "clouds": {
        "all": 75
    },
    "dt": 1622614023,
    "sys": {
        "type": 2,
        "id": 267643,
        "country": "TR",
        "sunrise": 1622600513,
        "sunset": 1622653897
    },
    "timezone": 10800,
    "id": 323786,
    "name": "Ankara",
    "cod": 200
}
describe('CityInfo', () => {
    test('should render city info correctly', () => {

        const { getByTestId } = render(
            <CityInfo
                city={city}
                measureHandler={(temp: number) => ({ measureTemp: 1, unit: "K" })}
                deleteCity={(city: ICityWeather) => { }}
                key={city.id} />
        );

        expect(getByTestId('city-name').nodeValue).toBe(city.name);
    })

})
