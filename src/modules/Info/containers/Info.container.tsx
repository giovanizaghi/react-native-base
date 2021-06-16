import { connect } from 'react-redux';
import { getInfoData } from '../store/Info.actions';
import Info from '../components/Info.component';
import { State } from '../../../reducers';

const mapDispatchToProps = dispatch => ({
    getInfoData: () => dispatch(getInfoData()),
});

const mapStateToProps = (state: State) => ({
    info: state.info
});

export const InfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Info);