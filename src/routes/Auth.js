import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Contato } from "../screens/Contato";
import { Inicio } from "../screens/Inicio";

const Auth = createNativeStackNavigator();

export function AuthNav() {

    return (
        <Auth.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
            <Auth.Screen name="Inicio" component={Inicio} />
            <Auth.Screen name="Contato" component={Contato} />
        </Auth.Navigator>
    );
}