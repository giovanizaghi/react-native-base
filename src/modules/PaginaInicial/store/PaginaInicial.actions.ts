import { actionIds } from './PaginaInicial.actionTypes';
import { BaseAction } from '../../../interfaces.global';

export const setFirstText = (text: string): BaseAction => ({
  type: actionIds.SET_FIRST_TEXT,
  payload: text,
});

export const setSecondText = (text: string): BaseAction => ({
  type: actionIds.SET_SECOND_TEXT,
  payload: text,
});

export const getHello = (): BaseAction => ({
  type: actionIds.GET_HELLO
});

export const getWeatherInfo = (): BaseAction => ({
  type: actionIds.GET_WEATHER_INFO
});

export const setWeatherInfo = (obj: object): BaseAction => ({
  type: actionIds.SET_WEATHER_INFO,
  payload: obj
});