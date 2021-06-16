import { StyleSheet } from "react-native";

export default (StyleSheet.create(
    {
        mainView: {
            marginTop: 50,
            alignItems: "center"
        },
        textInput:{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#999999",
            width: 300,
            padding: 10,
            marginVertical: 10
        },
        label:{
            textAlign: "left",
            width: 300,
            fontWeight: "bold"
        },
        results:{
            textAlign: "left",
            width: 300,
        }
    }
));