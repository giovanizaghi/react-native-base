import { BaseAction } from "../../../interfaces.global";
import { actionIds } from "./Info.actionTypes";

export type InfoState = {
  InfoData?: string
};

export const InfoReducer = (state: InfoState = {}, action: BaseAction) => {
  switch (action.type) {
    case actionIds.SET_INFO_DATA:
      return { ...state, InfoData: action.payload };
  }
  return state;
};