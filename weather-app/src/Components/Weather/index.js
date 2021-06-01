"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var actions_1 = require("../../store/weather/actions");
var react_redux_1 = require("react-redux");
var CityInfo_1 = __importDefault(require("./CityInfo"));
var measureTypes_1 = require("../../store/weather/measureTypes");
function Weather() {
    var _a = react_1.default.useState(''), query = _a[0], setQuery = _a[1];
    var _b = react_1.default.useState(measureTypes_1.MEASURE_TYPES.KELVIN), measure = _b[0], setMeasure = _b[1];
    var dispatch = react_redux_1.useDispatch();
    var cities = react_redux_1.useSelector(function (state) { return state; });
    var changeQuery = function (e) {
        setQuery(e.target.value);
    };
    var submitForm = function (e) {
        e.preventDefault();
        actions_1.getWeatherByCity(query)(dispatch);
        setQuery('');
    };
    var deleteCity = function (city) {
        var isConfirmed = window.confirm("are you sure to delete?");
        if (isConfirmed) {
            dispatch(actions_1.deleteWeatherbyCity(city));
        }
    };
    var measureChangeHandler = function (e) {
        var type = e.target.value;
        setMeasure(type);
    };
    var measureHandler = function (temp) {
        switch (measure) {
            case measureTypes_1.MEASURE_TYPES.KELVIN:
                return { measureTemp: temp, unit: "°K" };
            case measureTypes_1.MEASURE_TYPES.CELCIUS:
                return { measureTemp: temp - 273.15, unit: "°C" };
            case measureTypes_1.MEASURE_TYPES.FEHRENHEIGHT:
                return { measureTemp: (temp * 9 / 5) - 459.67, unit: "°F" };
            default:
                return { measureTemp: temp, unit: "°K" };
        }
    };
    console.log(cities);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("section", { className: "top-banner" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement("h1", { className: "heading" }, "Simple Weather App"),
                react_1.default.createElement("form", { onSubmit: submitForm, className: "mb-3" },
                    react_1.default.createElement("input", { type: "text", placeholder: "Search for a city", autoFocus: true, value: query, onChange: changeQuery }),
                    react_1.default.createElement("button", { type: "submit" }, "SUBMIT"),
                    react_1.default.createElement("span", { className: "msg" })),
                Object.values(measureTypes_1.MEASURE_TYPES).map(function (mtype) {
                    return react_1.default.createElement("div", { key: mtype, className: "form-check" },
                        react_1.default.createElement("input", { onChange: measureChangeHandler, type: "radio", name: "measureBy", className: "form-check-input", value: mtype, id: mtype, checked: measure === mtype && true }),
                        react_1.default.createElement("label", { htmlFor: mtype, className: "form-check-label" }, mtype));
                }))),
        react_1.default.createElement("section", { className: "ajax-section" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement("ul", { className: "cities" }, cities.map(function (city) {
                    return react_1.default.createElement(CityInfo_1.default, { city: city, key: city.id, measureHandler: measureHandler, deleteCity: deleteCity });
                }))))));
}
exports.default = Weather;
