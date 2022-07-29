/* importamos react */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detailscreen from '../ScreensStack/DetailsScreen';
const stack = createNativeStackNavigator;

export default DetailsStack = () =>{
    /*  */

    render(
        <Stack.Navigator>
            <Stack.Screen name="Detalles" component= {Detailscreen}/>
        </Stack.Navigator>
    );
}