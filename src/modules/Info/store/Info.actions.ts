import { actionIds } from './Info.actionTypes';
import { BaseAction } from '../../../interfaces.global';

export const setInfoData = (text: string): BaseAction => ({
  type: actionIds.SET_INFO_DATA,
  payload: text
});

export const getInfoData = (): BaseAction => ({
  type: actionIds.GET_INFO_DATA
});