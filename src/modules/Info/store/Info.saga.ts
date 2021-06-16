import { call, put, takeEvery } from "redux-saga/effects";
import { actionIds } from './Info.actionTypes';
import { setInfoData } from "./Info.actions";

export function* InfoRequestStart() {
    yield takeEvery(actionIds.GET_INFO_DATA, getInfoData);
}

function* getInfoData() {
   yield put(setInfoData("Text inserted from saga"));
}