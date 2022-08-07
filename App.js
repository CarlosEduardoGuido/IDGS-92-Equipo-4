import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/navigator/ScreensStack/HomeScreen';
import TiendaScreen from './src/navigator/ScreensStack/TiendaScreen';
import CitasScreen from './src/navigator/ScreensStack/CitasScreen';
import DoctoresScreen from './src/navigator/ScreensStack/DoctoresScreen';
import EspecialidadesScreen from './src/navigator/ScreensStack/EspecialidadesScreen';
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
        name="Tienda" 
        component={TiendaScreen}options={{tabBarLabel: 'Tienda',tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }} 
      />

      <Tab.Screen 
        name="Doctores" 
        component={DoctoresScreen}options={{tabBarLabel: 'Doctores',tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="doctor" color={color} size={size} />
          ),
        }} 
      />

      <Tab.Screen 
        name="Especialidades" 
        component={EspecialidadesScreen}options={{tabBarLabel: 'Especialidades',tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tooth" color={color} size={size} />
          ),
        }} 
      />
    
      </Tab.Navigator>
    </NavigationContainer>
  );
};