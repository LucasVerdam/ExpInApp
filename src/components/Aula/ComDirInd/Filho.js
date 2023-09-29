import React from "react";
import { Text, Button } from "react-native";


export default props => {

    return (
        <>

            <Text style={{ fontSize: 20, marginBottom: 10 }}>{props.nome}</Text>
            <Button title={props.titulo} onPress={() => { console.warn(props.nome) }}></Button>

        </>

    );

}
