/* importamos react */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../ScreensStack/HomeScreen';
const stack = createNativeStackNavigator;

export default HomeStack = () =>{
    /*  */

    render(
        <Stack.Navigator>
            <Stack.Screen  name="Inicio" component= {HomeScreen}/>
        </Stack.Navigator>
    );
}