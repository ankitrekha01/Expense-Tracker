import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, } from 'react-native';
import Home from "./app/Components/Home";
import MainMenu from "./app/Components/MainMenu";
import EachClickDesc from "./app/Components/EachClickDesc";
import StartScreen from "./app/Components/StartScreen";

import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen 
          name='StartScreen'
          component={StartScreen}
          options={{ headerShown:false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
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
              fontSize:23
            },
            headerTintColor: 'white',
            headerRight:() => (
              <View style={{
                marginEnd:20,
                width:40,
                alignItems:'center',
                height:'100%',
                justifyContent:'center'
              }}>
                <FontAwesome name="dollar" size={20} color="white" />
              </View>
            )
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
