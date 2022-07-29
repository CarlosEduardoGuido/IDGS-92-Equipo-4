/* importar react  */
import React from 'react';
import {ScrollView, Text,View} from 'react-native';

import { NativeBaseProvider, Box ,Image,AspectRatio,Stack,Button,Heading,color,Card,VStack,Center, Container} from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const  TiendaScreen = () =>{
  return(
        <NativeBaseProvider>
          <ScrollView>
      <Box flex={1} bg="#C9F4E9" alignItems="center" justifyContent="center">
        <Box bg="#FFFFFF">
    <Card>
      <Center>
    <Image source={{
            uri: "https://consultorio.consultoriosmilestoluca.com/images/Enjuague%20Bucal.jpg"
          }} alt="image" style={{height: 180, width:160}}/>
          </Center>    
            <VStack space="2.5" mt="4" px="10">
              <Heading size="sm">
                <Text >Enjuague Bucal</Text>
              </Heading>
            <Text >Colgate Sensitive Pro-Alivio</Text>
            <Heading size="sm">
                <Text>Costo: $94</Text>
              </Heading>
              <Button leftIcon={<MaterialCommunityIcons  size={15} name="cart" type="Ionicons" color="white" />}
              colorScheme="blue">
              Agregar
            </Button>
            </VStack>     
            </Card>
            <Card>
              <Center>
            <Image source={{
                    uri: "https://consultorio.consultoriosmilestoluca.com/images/GUM%20Flossers%20Angulado.png"
                  }} alt="image" style={{height: 180, width:160}}/>
                  </Center>    
                    <VStack space="2.5" mt="4" px="8">
                      <Heading size="sm">
                        <Text>GUM Flossers Angulado</Text>
                      </Heading>
                    <Text >Menta 75</Text>
                    <Heading size="sm">
                        <Text>Costo: $22 </Text>
                      </Heading>
                      <Button leftIcon={<MaterialCommunityIcons  size={15} name="cart" type="Ionicons" color="white" />}
                      colorScheme="blue">
                      Agregar
                    </Button>
                    </VStack>             
              </Card>
              <Card>
                <Center>
              <Image source={{
                      uri: "https://consultorio.consultoriosmilestoluca.com/images/Cepillo%20Interdental.jpg"
                    }} alt="image" style={{height: 180, width:160}}/>
                    </Center>    
                      <VStack space="2.5" mt="4" px="8">
                        <Heading size="sm">
                          <Text>Cepillo Interdental</Text>
                        </Heading>
                      <Text >Oral-B Cepillo Interdental</Text>
                      <Heading size="sm">
                          <Text>Costo: $42 </Text>
                        </Heading>
                        <Button leftIcon={<MaterialCommunityIcons  size={15} name="cart" type="Ionicons" color="white" />}
                        colorScheme="blue">
                        Agregar
                      </Button>
                      </VStack>             
                      </Card>
                      </Box>
                      </Box>
                </ScrollView>
            </NativeBaseProvider>
            );
        }

export default TiendaScreen;