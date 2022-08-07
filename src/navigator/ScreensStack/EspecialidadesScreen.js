/* importar react  */
import React, { useEffect, useState } from 'react';
/* importamos los componentes de react */
import {view,ActivityIndicator} from 'react-native';
/* Importamso NativeBase */
import {Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, Image,NativeBaseProvider, Card, ScrollView, Button, AspectRatio, Stack } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const baseUrl = "https://consultorio.consultoriosmilestoluca.com/";
const  EspecialidadesScreen = () =>{
    /* loading */
    const [isLoading, setLoading] = useState(true);

    /* declaramos nuestro statda date en un state vacio  */
    const [data, setData] = useState([]);
    /* Funcion para obtener en la fake api las movies */
    const getEspecialidades = async () => {
      try {
      //const response = await fetch('https://reactnative.dev/movies.json');
      const response = await fetch( baseUrl + 'especialidades2',{method:'GET',});
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
 }
 /* inicializamos nuestro useEffect */
 useEffect(() => {getEspecialidades();}, []);

    return(

    <NativeBaseProvider>
            <FlatList data={data} renderItem={({
            item
          }) => 
                <Box alignItems="center">
                  <Box m="1" maxW="75%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{borderColor: "coolGray.600",backgroundColor: "gray.700"}} _web={{shadow: 2,borderWidth: 0}} _light={{backgroundColor: "gray.50"}}>
                    <Box>
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{uri: item.imagen}} alt="image"  />
                      </AspectRatio>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="md" ml="-1">
                          {item.nombre}
                        </Heading>
                      </Stack>
                      <Text fontWeight="400">
                        {item.descripcion}
                      </Text>
                      <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                        </HStack>
                      </HStack>
                    </Stack>
                  </Box>
        
    
                </Box>} keyExtractor={item => item.id} />
    </NativeBaseProvider>
    );
};

export default EspecialidadesScreen;
