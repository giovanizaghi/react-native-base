import { BaseAction } from "../../../interfaces.global";
import { actionIds } from "./PaginaInicial.actionTypes";

export type PaginaInicialState = {
  FirstText?: string,
  SecondText?: string,
  WeatherInfo?: object
};

export const PaginaInicialReducer = (state: PaginaInicialState = {}, action: BaseAction) => {
  switch (action.type) {
    case actionIds.SET_FIRST_TEXT:
      return { ...state, FirstText: action.payload };
    case actionIds.SET_SECOND_TEXT:
      return { ...state, SecondText: action.payload };
    case actionIds.SET_WEATHER_INFO:
      return { ...state, WeatherInfo: action.payload };
  }
  return state;
};
