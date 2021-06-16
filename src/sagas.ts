import { all, fork } from 'redux-saga/effects';
import { PaginaInicialRequestStart } from './modules/PaginaInicial/store/PaginaInicial.saga';
import { InfoRequestStart } from './modules/Info/store/Info.saga';

export const rootSaga = function* root() {
  yield all([
    fork(PaginaInicialRequestStart),
    fork(InfoRequestStart)
  ]);
};
