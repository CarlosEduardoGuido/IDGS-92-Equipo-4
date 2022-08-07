import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/navigator/ScreensStack/HomeScreen';
import TiendaScreen from './src/navigator/ScreensStack/TiendaScreen';
import Especialidades2Screen from './src/navigator/ScreensStack/Especialidades2Screen';
import DoctoresScreen from './src/navigator/ScreensStack/DoctoresScreen';
import Doctores2Screen from './src/navigator/ScreensStack/Doctores2Screen';
import EspecialidadesScreen from './src/navigator/ScreensStack/EspecialidadesScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

 function HomeTabs(){
    return(
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
    )

 }

const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Especialidades2" component={Especialidades2Screen} /> 
      <Stack.Screen name="Doctores2" component={Doctores2Screen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};