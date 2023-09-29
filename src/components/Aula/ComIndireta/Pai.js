import React, { useState } from "react";
import { Text } from "react-native";
import Filho from "./Filho";


export default (props) => {

    const [num, setNum] = useState(1)

    //let num = 1

    function dobrar(num) {
        setNum(num * 2)
        //num * 2
        //console.warn(num);
    }

    return (
        <>
            <Text style={{ fontSize: 30, marginBottom: 10, textAlign: 'center' }}>
                Número a ser dobrado:{'\n'} {num}
            </Text>

            <Filho numero={num} func={dobrar} />
        </>
    );

}
