import { combineReducers } from 'redux';
import { PaginaInicialReducer, PaginaInicialState } from './modules/PaginaInicial/store/PaginaInicial.reducers';
import { InfoReducer, InfoState } from './modules/Info/store/Info.reducer';

export interface State {
    paginaInicial: PaginaInicialState;
    info: InfoState;
}

export const rootReducers = combineReducers<State>({
    paginaInicial: PaginaInicialReducer,
    info: InfoReducer,
});