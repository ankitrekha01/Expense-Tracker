import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/Components/Home";
import MainMenu from "./app/Components/MainMenu";
import EachClickDesc from "./app/Components/EachClickDesc";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EachClickDesc">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{
            headerTitle: "Expense Tracker",
            headerStyle: {
              backgroundColor: "#161a1d",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
          }}
        />
        <Stack.Screen
          name="EachClickDesc"
          component={EachClickDesc}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
