import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/screens/HomeScreen";
import CountryScreen from "./src/screens/CountryScreen";
import CountryDetail from "./src/screens/CountryDetail";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen initialRouteName name="Home" component={HomeScreen} />
        <Stack.Screen name="Country" component={CountryScreen} />
        <Stack.Screen name="Capital Details" component={CountryDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;