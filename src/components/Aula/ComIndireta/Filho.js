import React from "react";
import { Button } from "react-native";


export default (props) => {

    const { numero, func } = props

    return (

        <Button title="Dobrar" onPress={() => func(numero)} />

    );

}
