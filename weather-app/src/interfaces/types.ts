import { ACTION_TYPES } from './../store/actionTypes';

export interface City {
    coord: object
    weather: Array<any>
    base: string
    main: any
    visibility: number
    wind: object
    clouds: object
    dt: number
    sys: any
    timezone: number
    id: number
    name: string
    cod: number
}

export interface Action {
    type: ACTION_TYPES
    payload: City
}