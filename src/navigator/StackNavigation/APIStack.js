/* importamos react */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import APIScreen from '../ScreensStack/APIScreen';
const stack = createNativeStackNavigator;

export default APIStack = () =>{
    /*  */

    render(
        <Stack.Navigator>
            <Stack.Screen name="API" component= {APIScreen}/>
        </Stack.Navigator>
    );
}