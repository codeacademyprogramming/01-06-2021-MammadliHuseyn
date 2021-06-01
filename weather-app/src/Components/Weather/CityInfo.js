"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function CityInfo(_a) {
    var city = _a.city, measureHandler = _a.measureHandler, deleteCity = _a.deleteCity;
    var _b = measureHandler(Number(city.main.temp)), measureTemp = _b.measureTemp, unit = _b.unit;
    return (react_1.default.createElement("li", { className: "city" },
        react_1.default.createElement("h2", { className: "city-name" },
            react_1.default.createElement("span", null, city.name),
            react_1.default.createElement("sup", null, city.sys.country)),
        react_1.default.createElement("button", { type: "button", onClick: function () { return deleteCity(city); }, className: "btn btn-danger" }, "-"),
        react_1.default.createElement("div", { className: "city-temp" },
            measureTemp.toFixed(),
            react_1.default.createElement("sup", null, unit)),
        react_1.default.createElement("figure", null,
            react_1.default.createElement("img", { className: "city-icon", src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/" + city.weather[0].icon + ".svg", alt: city.weather[0].description }),
            react_1.default.createElement("figcaption", null, city.weather[0].description))));
}
exports.default = CityInfo;
