import { ACTION_TYPES } from './../store/actionTypes';

interface ICoord {
    lon: number
    lat: number
}

interface IWeather {
    id: number
    main: string
    description: string
    icon: string
}

interface IMain {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}

interface IWind {
    speed: number
    deg: number
    gust?: number
}

interface IRain {
    "1h": number
}

interface IClouds {
    all: number
}

interface ISys {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
}

export interface ICityWeather {
    coord: ICoord
    weather: Array<IWeather>
    base: string
    main: IMain
    visibility: number
    wind: IWind
    rain: IRain
    clouds: IClouds
    dt: number
    sys: ISys
    timezone: number
    id: number
    name: string
    cod: number
}

export interface Action {
    type: ACTION_TYPES
    payload: ICityWeather
}