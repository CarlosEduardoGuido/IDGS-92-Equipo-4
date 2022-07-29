/* importamos react */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TiendaScreen from '../ScreensStack/TiendaScreen';
const stack = createNativeStackNavigator;

export default TiendaStack = () =>{
    /*  */

    render(
        <Stack.Navigator>
            <Stack.Screen name="Tienda" component= {TiendaScreen}/>
        </Stack.Navigator>
    );
}