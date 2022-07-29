/* importar react  */
import React from 'react';
import {Text,View} from 'react-native';
/* importarmos  NativeBaseProvider  */
import { NativeBaseProvider, Box } from "native-base";

const  APIScreen = () =>{
    return(
      <NativeBaseProvider>
      <Box flex={1} bg="#C9F4E9" alignItems="center" justifyContent="center">
        <Text>API</Text>
      </Box>
          </NativeBaseProvider>
      );
}

export default APIScreen;