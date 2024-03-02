import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IPInput from './pages/ipinput';
import Home from './pages/home2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={IPInput} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        
        {/* Add other screens as needed, e.g., 'App' for your main app screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;