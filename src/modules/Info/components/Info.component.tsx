import React from "react";
import { Text, View } from "react-native";
import { State } from "../../../reducers";
import styles from "../Info.styles";

interface Props extends State {
    getInfoData: () => void
}

export default class Info extends React.Component<Props> {

    componentDidMount() {
        this.props.getInfoData();
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Text>Informations</Text>
                <Text style={styles.results}>{this.props.info.InfoData}</Text>
            </View>
        );
    }
}