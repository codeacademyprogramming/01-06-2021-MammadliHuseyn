import { render } from '@testing-library/react';
import { City } from '../../../interfaces/types';
import CityInfo from "../CityInfo";

const city: City = {
    "coord": {
        "lon": 32.8543,
        "lat": 39.9199
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 283.42,
        "feels_like": 282.67,
        "temp_min": 278.9,
        "temp_max": 284.38,
        "pressure": 1011,
        "humidity": 83
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.06,
        "deg": 250
    },
    "clouds": {
        "all": 20
    },
    "dt": 1622589403,
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
                deleteCity={(city: City) => { }}
                key={city.id} />
        );

        expect(getByTestId('city-name').nodeValue).toBe(city.name);
    })

})
