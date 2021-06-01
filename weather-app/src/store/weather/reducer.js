"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
var reducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 0 /* GET_WEATHER_BY_CITY */:
            return __spreadArray(__spreadArray([], state), [
                action.payload
            ]);
        case 1 /* DELETE_WEATHER_BY_CITY */:
            return state.filter(function (city) { return city !== action.payload; });
        default:
            return state;
    }
};
exports.reducer = reducer;
