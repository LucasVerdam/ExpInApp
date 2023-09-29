import React from "react";
import { Text } from "react-native";
import Filho from "./Filho";


export default (props) => {

    return (
        <>
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Bem vindo, </Text>

            <Filho nome='Lucas' />

            <Text>{props.mensagem}</Text>
        </>
    );

}
