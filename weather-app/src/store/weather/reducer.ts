import { ACTION_TYPES } from '../actionTypes';
import { Action, City } from './../../interfaces/types';


export const reducer = (state: Array<City> = [], action: Action): Array<City> => {
    switch (action.type) {
        case ACTION_TYPES.GET_WEATHER_BY_CITY:
            return [
                ...state,
                action.payload
            ];
        case ACTION_TYPES.DELETE_WEATHER_BY_CITY:
            return state.filter(city => city !== action.payload);
        default:
            return state;
    }
}