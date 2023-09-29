import React from "react";
import { Text } from "react-native";


export default (props) => {

    return (
        <>
            <Text style={{ fontSize: 15, marginBottom: 10 }}>
                {props.nome}
            </Text>

        </>
    );

}
