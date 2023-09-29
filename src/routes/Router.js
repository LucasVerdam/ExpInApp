import { NavigationContainer } from "@react-navigation/native";

import { StackNav } from "./Stack";
import { AuthNav } from "./Auth";

import { useAuth } from "../context/AuthContext";

export function Router() {
    const { authData } = useAuth()

    return (
        <NavigationContainer>
            {authData ? <AuthNav /> : <StackNav />}
        </NavigationContainer>
    );

}

