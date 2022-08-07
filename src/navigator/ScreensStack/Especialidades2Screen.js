/* importar react  */
import React, { useEffect, useState } from 'react';
/* importamos los componentes de react */
import {view,ActivityIndicator} from 'react-native';
/* Importamso NativeBase */
import {Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, Image,NativeBaseProvider, Card, ScrollView, Button, AspectRatio, Stack } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const baseUrl = "https://consultorio.consultoriosmilestoluca.com/";
const  DoctoresScreen = ({route,navigation}) =>{
    /* loading */
    const [isLoading, setLoading] = useState(true);
    const {EspecialidadId} = route.params;

    /* declaramos nuestro statda date en un state vacio  */
    const [data, setData] = useState([]);
    /* Funcion para obtener en la fake api las movies */
    const getDoctores = async () => {
      try {
      //const response = await fetch('https://reactnative.dev/movies.json');
      const response = await fetch( baseUrl + 'doctores2',{method:'GET',});
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
 }
 /* inicializamos nuestro useEffect */
 useEffect(() => {getDoctores();}, []);
    const filtro = data.filter(data => {return data.id_especialidad === EspecialidadId;})

    return(

    <NativeBaseProvider>
        <Center>
            <Heading size="xl">Doctores</Heading>
        </Center>
            <FlatList data={filtro} renderItem={({
            item
          }) => 
                <Box alignItems="center">
                  <Box flex={1} maxW="75%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{ borderColor: "coolGray.600",backgroundColor: "gray.700" }} _web={{ shadow: 2,borderWidth: 0 }} _light={{ backgroundColor: "gray.50" }}>
                    <Card>
                      <Box> 
                          <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{uri: item.imagen}} alt="image"  />
                      </Box>
                      <Stack p="4" space={3}>
                        <Stack space={2}>
                          <Heading size="md" ml="-1">
                            {item.nombre}
                          </Heading>
                          <Text fontSize="xs" _light={{
                          color: "violet.500"
                        }} _dark={{
                          color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            {item.especialidad}
                          </Text>
                        </Stack>
                        <Text fontWeight="400">
                          {item.descripcion}
                        </Text>
                      </Stack>
                      <Button size="sm" onPress={() => {navigation.navigate('Especialidades');}}>Especialidades</Button>
                    </Card>
                  </Box>            
                </Box>} keyExtractor={item => item.id} />
    </NativeBaseProvider>
    );
};

export default DoctoresScreen;
