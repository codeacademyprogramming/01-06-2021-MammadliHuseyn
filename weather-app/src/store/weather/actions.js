"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWeatherbyCity = exports.getWeatherByCity = void 0;
var axios_1 = __importDefault(require("axios"));
var apiKey = "af6e0a6c0cb014eff6a9dc473b056967";
var getWeatherByCity = function (cityName) {
    return function (dispatch) {
        return axios_1.default.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey)
            .then(function (_a) {
            var data = _a.data;
            return dispatch({ type: 0 /* GET_WEATHER_BY_CITY */, payload: data });
        }, function (err) { return console.log(err); });
    };
};
exports.getWeatherByCity = getWeatherByCity;
var deleteWeatherbyCity = function (city) {
    return {
        type: 1 /* DELETE_WEATHER_BY_CITY */,
        payload: city
    };
};
exports.deleteWeatherbyCity = deleteWeatherbyCity;
