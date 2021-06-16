import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { PaginaInicialContainer } from "./modules/PaginaInicial/containers/PaginaInicial.container"
import { InfoContainer } from "./modules/Info/containers/Info.container"

const Main = createStackNavigator(
    {
        PaginaInicial: { screen: PaginaInicialContainer },
        Info: { screen: InfoContainer }
    },
    {
        headerMode: 'none',
    }
);

const AppRoutes = createSwitchNavigator(
    {
        Main,
    },
    {
        initialRouteName: "Main"
    }
);
export { AppRoutes };
export default createAppContainer(AppRoutes);