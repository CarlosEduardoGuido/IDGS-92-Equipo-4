/* importar react  */
import React, { useEffect, useState } from 'react';
/* importamos los componentes de react */
import {view,ActivityIndicator,Alert} from 'react-native';
/* Importamso NativeBase */
import {Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, Image,NativeBaseProvider, Card, ScrollView, Button,AspectRatio,Stack } from "native-base";
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
                            <FlatList
                          data={data}
                          key={"2"}
                          numColumns={2}
                          renderItem={({ item }) => 
                            <Box>
                        <Card maxW="200" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                          borderColor: "coolGray.600",
                          backgroundColor: "gray.700"
                        }} _web={{
                          shadow: 2,
                          borderWidth: 0
                        }} _light={{
                          backgroundColor: "gray.50"
    }}>
                              <Image 
                            source={{uri: item.imagen}}
                            style={{
                              width: 180,
                              height: 220,
                              borderWidth: 2,
                              resizeMode: "contain",
                              margin: 6,
                            }}
                                />
                            <VStack space={1} >
                            <Heading >                      
                            <Text fontSize="md" >{item.nombre}</Text>
                            </Heading>
                            <Text fontSize="xs">{item.detalles}</Text>
                            <Text>$ {item.precio} </Text>
                          <Button onPress={() => Alert.alert("Producto Agregado")} leftIcon={<MaterialCommunityIcons name="cart" type="Ionicons" color="white" />}
                          colorScheme="blue">
                          Agregar
                          </Button>
                        </VStack> 
                       
                </Card>
                </Box>}
                 
                  keyExtractor={item => item.id}
                
            ></FlatList>
              </NativeBaseProvider>
    );
};

export default APIScreen;
