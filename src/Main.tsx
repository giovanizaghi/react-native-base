import React from "react";
import { Provider } from 'react-redux';
import { store } from "./store";
import Router from "./router";
import { setTopLevelNavigator } from "./helpers/navigation.helper";

class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router ref={ref => setTopLevelNavigator(ref)} />
            </Provider>
        );
    }
}

export default Main;