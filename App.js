import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/Signup';
import TodoList from "./src/TodoList"
import OnOpen from './src/Home';


const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={OnOpen} options={{ headerShown: false }} />
      <Stack.Screen name="TodoList" component={TodoList} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
)

const Stack = createNativeStackNavigator();

export default App