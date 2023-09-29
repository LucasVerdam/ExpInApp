import React from "react";
import { Text } from "react-native";


export default props => {

    return (
        <>
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Bem vindo, </Text>

            {props.children}
        </>
    );

}
