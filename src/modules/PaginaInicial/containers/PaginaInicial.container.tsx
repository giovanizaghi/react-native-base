
import { connect } from 'react-redux';
import { getHello, setFirstText, setSecondText, getWeatherInfo } from '../store/PaginaInicial.actions';
import PaginaInicial from '../components/PaginaInicial.component';
import { State } from '../../../reducers';

const mapDispatchToProps = dispatch => ({
    getHello: () => dispatch(getHello()),
    setFirstText: (text: string) => dispatch(setFirstText(text)),
    setSecondText: (text: string) => dispatch(setSecondText(text)),
    getWeatherInfo: () => dispatch(getWeatherInfo())
});

const mapStateToProps = (state: State) => ({
    paginaInicial: state.paginaInicial,
    info: state.info
});

export const PaginaInicialContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaginaInicial);