import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Cadastro } from "../screens/Cadastro";
import { Login } from "../screens/Login";

const Stack = createNativeStackNavigator();

export function StackNav() {

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    );
}