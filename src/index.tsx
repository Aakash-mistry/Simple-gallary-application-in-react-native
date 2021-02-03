import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import MACicon from 'react-native-vector-icons/MaterialCommunityIcons';

import {About, Home, Photos, Album} from './screen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{tabBarColor: '#333'}}
        activeColor="#fff"
        inactiveColor="#1e1e1e">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Photos',
            tabBarColor: '#1e1e1e',
            tabBarIcon: () => (
              <MACicon size={25} color="#fff" name="google-photos" />
            ),
          }}
        />
        <Tab.Screen
          name="Albums"
          component={Album}
          options={{
            tabBarColor: 'blue',
            tabBarIcon: () => (
              <MACicon name="image-album" size={25} color="#fff" />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarColor: 'orange',
            tabBarIcon: () => (
              <MACicon name="account-heart-outline" size={25} color="#fff" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
