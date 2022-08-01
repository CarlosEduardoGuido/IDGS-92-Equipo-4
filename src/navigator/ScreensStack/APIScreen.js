/* importar react  */
import React, { useEffect, useState } from 'react';
/* importamos los componentes de react */
import {view,ActivityIndicator} from 'react-native';
/* Importamso NativeBase */
import {Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, Image,NativeBaseProvider, Card, ScrollView, Button } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const baseUrl = "https://consultorio.consultoriosmilestoluca.com/";
const  APIScreen = () =>{
    /* loading */
    const [isLoading, setLoading] = useState(true);

    /* declaramos nuestro statda date en un state vacio  */
    const [data, setData] = useState([]);
    /* Funcion para obtener en la fake api las movies */
    const getProductos = async () => {
      try {
      //const response = await fetch('https://reactnative.dev/movies.json');
      const response = await fetch( baseUrl + 'productos',{method:'GET',});
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
 }
 /* inicializamos nuestro useEffect */
 useEffect(() => {getProductos();}, []);

    return(

    <NativeBaseProvider>
            <FlatList data={data} renderItem={({
            item
          }) => 
                <Box alignItems="center">
                  <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" >
                    <Box bg="#FFFFFF">
                      <Card>
                        <Center>
                          <Image source={{uri: item.imagen}} alt="image" style={{height: 180, width:160}}/>
                        </Center>
                        <VStack space="2.5" mt="4" px="10">
                          <Heading size="sm">
                            <Text >{item.nombre}</Text>
                          </Heading>
                            <Text >{item.detalles} </Text>
                          <Heading size="sm">
                            <Text>$ {item.precio} </Text>
                          </Heading>
                          <Button leftIcon={<MaterialCommunityIcons  size={15} name="cart" type="Ionicons" color="white" />}
                          colorScheme="blue">
                          Agregar
                          </Button>
                        </VStack> 
                      </Card>
                    </Box>
                  </Box>
                </Box>} keyExtractor={item => item.id} />
    </NativeBaseProvider>
    );
};

export default APIScreen;
