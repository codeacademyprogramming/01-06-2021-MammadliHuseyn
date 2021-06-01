"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var redux_1 = require("redux");
var redux_2 = require("redux");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var redux_logger_1 = __importDefault(require("redux-logger"));
var reducer_1 = require("./weather/reducer");
exports.store = redux_2.createStore(reducer_1.reducer, redux_1.applyMiddleware(redux_logger_1.default, redux_thunk_1.default));
