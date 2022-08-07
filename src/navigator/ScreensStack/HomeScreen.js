/* importar react  */
import React, { useEffect, useState } from 'react';
import {Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, Image,NativeBaseProvider, Card, ScrollView, Button, AspectRatio, Stack } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const baseUrl = "https://consultorio.consultoriosmilestoluca.com/";
const  HomeScreen = () =>{
    /* loading */
    const [isLoading, setLoading] = useState(true);

    /* declaramos nuestro statda date en un state vacio  */
    const [data, setData] = useState([]);
    /* Funcion para obtener en la fake api las movies */
    const getInicio = async () => {
      try {
      //const response = await fetch('https://reactnative.dev/movies.json');
      const response = await fetch( baseUrl + 'inicio',{method:'GET',});
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
 }
 /* inicializamos nuestro useEffect */
 useEffect(() => {getInicio();}, []);

    return(

    <NativeBaseProvider>
            <FlatList data={data} renderItem={({
            item
          }) => 
                <Box alignItems="center" flex={1}>
                    <Box bg="#FFFFFF">
                        <Center>
                          <Heading size="xl">
                            {item.titulo}
                          </Heading>
                        </Center>
                        <Center>
                          <Image source={{uri: item.imagen}} alt="fallback text" size={200} borderRadius={100}/>
                        </Center>
                        <VStack space="2.5" mt="4" px="10">
                          <Heading size="sm">
                            <Text>{item.descripcion}</Text>
                          </Heading>
                          <Center>
                          <Heading size="sm">
                            Mision
                          </Heading >
                          </Center>
                          <Text >{item.mision}</Text>
                          <Center>
                          <Heading size="sm">
                            Vision
                          </Heading>
                          </Center>
                          <Text >{item.vision} </Text>
                          <Center>
                          <Heading size="sm">
                            Valores
                          </Heading> 
                          </Center>
                          <Text>{item.valores} </Text>
                          <Center>
                          <Heading size="sm">
                            Direccion
                          </Heading> 
                          </Center>
                          <Text>{item.direccion} </Text>
                          <Center>
                          <Heading size="sm">
                            Telefono
                          </Heading> 
                          <Text>{item.telefono} </Text>
                          </Center>
                          <Center>
                          <Heading size="sm">
                            Correo
                          </Heading> 
                          <Text>{item.email} </Text>
                          </Center>
                        </VStack> 
                    </Box>
                </Box>} keyExtractor={item => item.id} />
    </NativeBaseProvider>
    );
};

export default HomeScreen;