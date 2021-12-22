import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import initDatabase from "./src/api/config";
import Home from "./src/screen/home";
import Cadastro from "./src/screen/cadastro";
import Party from "./src/screen/party";
import Inicio from "./src/screen/Inicio";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  initDatabase();
  return (
    <>


      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Inicio}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#111",
            },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="StarterScreen"
            component={Inicio}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cadastrar"
            component={ Cadastro }
            options={{ title: "Cadastrar Evento" }}
          />
          <Stack.Screen
            name="Inicio"
            component={ Party }
            options={{ title: "Detalhes Evento" }}
          />
          <Stack.Screen
            name="Festa"
            component={Home}
            options={{ title: "Lista de Eventos" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
