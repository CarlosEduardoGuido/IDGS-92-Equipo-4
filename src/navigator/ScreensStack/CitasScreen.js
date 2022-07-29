/* importar react  */
import React from 'react';
import {Text,View} from 'react-native';
/* importarmos  NativeBaseProvider  */
import { NativeBaseProvider, Box, Select , CheckIcon ,Center, Stack, Heading, Input, Button} from "native-base";
import { color } from 'native-base/lib/typescript/theme/styled-system';

const CitasScreen = () => {
    let [hora, setHora] = React.useState("");
    let [dia , setDia] = React.useState("");
    let [doctor , setDoctor] = React.useState("");
    return <Box w="3/4" maxW="300" >
          <Center><Heading>Formulario Citas</Heading></Center>
          <Stack space={4}>
          <Text style={{ color: 'black' }}>Hora:</Text>
          <Select selectedValue={hora} minWidth="200" accessibilityLabel="Elige la hora" placeholder="Elige la hora" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setHora(itemValue)}>
            <Select.Item label="10:00" value="10" />
            <Select.Item label="11:00" value="11" />
            <Select.Item label="12:00" value="12" />
            <Select.Item label="15:00" value="15" />
            <Select.Item label="16:00" value="16" />
            <Select.Item label="17:00" value="17" />
          </Select>
          <Text style={{ color: 'black' }}>Dia:</Text>
          <Select selectedValue={dia} minWidth="200" accessibilityLabel="Elige el dia" placeholder="Elige el dia" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setDia (itemValue)}>
            <Select.Item label="Lunes" value="lunes" />
            <Select.Item label="Martes" value="martes" />
            <Select.Item label="Miercoles" value="miercoles" />
            <Select.Item label="Jueves" value="jueves" />
            <Select.Item label="Viernes" value="viernes" />
          </Select>
          <Text style={{ color: 'black' }}>Asunto:</Text>
          <Input placeholder="Asunto" w="100%" />
          <Text style={{ color: 'black' }}>Doctor:</Text>
          <Select selectedValue={doctor} minWidth="200" accessibilityLabel="Elige el doctor" placeholder="Elige el dia" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setDoctor (itemValue)}>
            <Select.Item label="Maria Becerra Lopez" value="Maria Becerra Lopez" />
            <Select.Item label="Jorge Hernandez Sanchez" value="Jorge Hernandez Sanchez" />
          </Select>
          </Stack>
          {"\n"} 
          <Stack direction={{base: "column",md: "row"}} space={4}>
          <Button onPress={() => console.log("hello world")}>Agregar Cita</Button>
          <Button onPress={() => console.log("hello world")}>Inicio</Button>
          </Stack>
        </Box>
        ;
  };
  
      export default () => {
          return (
            <NativeBaseProvider>
              <Center flex={1} px="3">
                  <CitasScreen />
              </Center>
            </NativeBaseProvider>
          );
      };
      