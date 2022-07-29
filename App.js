import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/navigator/ScreensStack/HomeScreen';
import TiendaScreen from './src/navigator/ScreensStack/TiendaScreen';
import CitasScreen from './src/navigator/ScreensStack/CitasScreen';
import APIScreen from './src/navigator/ScreensStack/APIScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function App() {
 
  return (
    <NavigationContainer >
    <Tab.Navigator >
      <Tab.Screen  
        name="Inicio" 
        component={HomeScreen}options={{tabBarLabel: 'Inicio',tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Citas" 
        component={CitasScreen}options={{tabBarLabel: 'Citas',tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-details" color={color} size={size} />
          ),
        }} 
      />
      
      <Tab.Screen 
        name="TIENDA SMILE'S" 
        component={TiendaScreen}options={{tabBarLabel: 'Tienda',tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }} 
      />
          <Tab.Screen 
        name="API" 
        component={APIScreen}options={{tabBarLabel: 'Api',tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="api" color={color} size={size} />
          ),
        }} 
      />
    
      </Tab.Navigator>
    </NavigationContainer>
  );
};