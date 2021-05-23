import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Home from '../../usecases/Home';
import HomeDetail from '../../usecases/HomeDetail';

const Stack = createStackNavigator();

const options = {
  ...TransitionPresets.SlideFromRightIOS,
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="none"
        screenOptions={options}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeDetail" component={HomeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
