/* importar react  */
import React from 'react';
import {ScrollView,Text,View} from 'react-native';
/* importarmos  NativeBaseProvider  */
import { useToast } from 'native-base';
import { NativeBaseProvider, Box ,Image,AspectRatio,Stack,Button,Heading,color,Card,VStack,Center, Container} from "native-base";


const  HomeScreen = () =>{
  const toast = useToast();
    return(
      <NativeBaseProvider>
       

        <Box flex={1} bg="#C9F4E9" alignItems="center" justifyContent="center">
      <Stack p="4" space={3}>
            <Stack >
            <Heading size="lg" ml="-1">
            Consultorio smails
            </Heading>
          </Stack>
          </Stack>
              
       <Image   size={100} resizeMode={"contain"} borderRadius={100}  source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHv0JjhqNVW0gBMgzF7JUmfSGsapMzsdB0Q&usqp=CAU"}} alt="Alternate Text"/>
             <Stack p="9" space={5}>
            <Stack>
              <Text fontSize="6xl"> Somos un consultorio que tabajamos profesionalmente con todo tipo de trabajo referenciado con cuidados bucales</Text>       
            </Stack>
          <Stack>
          <Text fontSize="6xl">telefono:7227544600</Text>
          </Stack>
        <Stack>
        <Text fontSize="6xl">Gmail: consultorio_smiles1955@outlook.com</Text>
        </Stack>
          </Stack>  
      </Box>
  
          
                    
                      
               
            </NativeBaseProvider>
        );
}

export default HomeScreen;