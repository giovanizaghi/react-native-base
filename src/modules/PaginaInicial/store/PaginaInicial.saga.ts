import { call, put, takeEvery } from "redux-saga/effects";
import { actionIds } from './PaginaInicial.actionTypes';
import { setWeatherInfo } from "./PaginaInicial.actions";
import api from "./PaginaInicial.api";

export function* PaginaInicialRequestStart() {
    yield takeEvery(actionIds.GET_WEATHER_INFO, getWeatherInfo);
}

function* getWeatherInfo() {
    const result = yield call(api.getAllPeople);
    if (result.data) yield put(setWeatherInfo(result.data.consolidated_weather[0]));
}