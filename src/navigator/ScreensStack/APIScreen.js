/* importar react  */
import React, { useEffect, useState } from 'react';
/* importamos los componentes de react */
import {view,ActivityIndicator} from 'react-native';
/* Importamso NativeBase */
import {Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";


const  APIScreen = () =>{
    /* loading */
    const [isLoading, setLoading] = useState(true);

    /* declaramos nuestro statda date en un state vacio  */
    const [data, setData] = useState([]);
    /* Funcion para obtener en la fake api las movies */
    const getPersonajes = async () => {
      try {
      //const response = await fetch('https://reactnative.dev/movies.json');
      const response = await fetch('https://www.breakingbadapi.com/api/characters');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
 }
 /* inicializamos nuestro useEffect */
 useEffect(() => {getPersonajes();}, []);

    return(

    <NativeBaseProvider>
      <Box>
          <Heading fontSize="xl" p="4" pb="3">
            Personajes Breaking Bad
          </Heading>
          <FlatList data={data} renderItem={({
          item
        }) => <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar size="60px" source={{
              uri: item.img
            }} />
                  <VStack>
                    <Text _dark={{
                color: "warmGray.50"
              }} color="coolGray.800" bold>
                      Nombre: {item.name}
                    </Text>
                    <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                      Ocupacion: {item.occupation}
                    </Text>
                    <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                      Apodo: {item.nickname}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text fontSize="xs" _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" alignSelf="flex-start">
                    {item.id}
                  </Text>
                </HStack>
              </Box>} keyExtractor={item => item.id} />
        </Box>
    </NativeBaseProvider>
    );
};

export default APIScreen;
