import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import initDatabase from "./src/api/config";
import Cadastro from "./src/screen/cadastro";
import Party from "./src/screen/party";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  initDatabase();
  return (
    <>


      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#111",
            },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="Inicio"
            component={Cadastro}
            options={{ title: "Cadastrar Evento" }}
          />
          <Stack.Screen name="Festa" component={Party} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
