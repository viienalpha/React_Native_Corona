/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Components/HomeScreen';
import MapTracker from './src/Components/MapTracker';
import Provinces from './src/Components/Provinces';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Picker from './src/Components/Picker';
import Test from './src/Components/Test';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabBottom() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Province') {
            iconName = focused ? 'account-details' : 'account-details';
          } else if (route.name === 'Map') {
            iconName = focused ? 'google-maps' : 'google-maps';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#C56AE0',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Province" component={Test} />
      <Tab.Screen name="Map" component={MapTracker} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <TabBottom />
    </NavigationContainer>
  );
};

export default App;
