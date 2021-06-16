import React from "react";
import { Text, Button, View, TextInput } from "react-native";
import { State } from "../../../reducers";
import styles from "../PaginaInicial.styles";
import { navigate } from "../../../helpers/navigation.helper";
interface Props extends State {
    setFirstText: (text: string) => void;
    setSecondText: (text: string) => void;
    getWeatherInfo: () => void
}

export default class PaginaInicial extends React.Component<Props> {

    componentDidMount() {
        this.props.getWeatherInfo();
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Text style={styles.label}>First Text</Text>
                <TextInput style={styles.textInput} placeholder="Insert a text" onChange={data => this.props.setFirstText(data.nativeEvent.text)} />

                <Text style={styles.label}>Second Text</Text>
                <TextInput style={styles.textInput} placeholder="Insert another text" onChange={data => this.props.setSecondText(data.nativeEvent.text)} />
                <Text style={styles.label}>JSON State:</Text>
                <Text style={styles.results}>{`{`}</Text>
                <Text style={styles.results}>{`       "FirstText": "${this.props.paginaInicial.FirstText}",`}</Text>
                <Text style={styles.results}>{`       "SecondText": "${this.props.paginaInicial.SecondText}"`}</Text>
                <Text style={styles.results}>{`}`}</Text>

                <Text style={styles.results}>Wheather API: {JSON.stringify(this.props.paginaInicial.WeatherInfo)}</Text>

                <Button title="Navigate to Info" onPress={() => navigate("Info")} />

                <Text style={{...styles.label, }}>Do you open Info Screen? {this.props.info.InfoData ? "YES" : "NO"}</Text>
            </View>
        );
    }
}