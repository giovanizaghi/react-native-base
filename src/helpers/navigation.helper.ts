import { NavigationActions } from "react-navigation";

let _navigator;

export const setTopLevelNavigator = (navigatorRef) => _navigator = navigatorRef;

export const navigate = (routeName: string, params?: object): void => {
    _navigator.dispatch(NavigationActions.navigate({ routeName, params }));
}