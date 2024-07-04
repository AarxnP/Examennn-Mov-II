import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { db } from '../config/Config';
import { ref, push } from 'firebase/database';

const Homee = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anio, setAnio] = useState('');
  const [color, setColor] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const registrarAuto = () => {
    // Validar que todos los campos estén llenos antes de registrar
    if (!marca || !modelo || !anio || !color) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    // Crear un nuevo objeto auto
    const nuevoAuto = {
      marca: marca,
      modelo: modelo,
      anio: anio,
      color: color
    };

    // Guardar el nuevo auto en Firebase
    const autosRef = ref(db, 'autos');
    push(autosRef, nuevoAuto)
      .then(() => {
        // Limpiar los campos después de registrar
        setMarca('');
        setModelo('');
        setAnio('');
        setColor('');

        // Mostrar mensaje de registro exitoso
        setRegistroExitoso(true);
        setTimeout(() => {
          setRegistroExitoso(false);
        }, 3000);
      })
      .catch(error => {
        console.error('Error al registrar el auto:', error);
        Alert.alert('Error', 'Hubo un problema al registrar el auto. Por favor intenta de nuevo.');
      });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Agregar Auto</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Marca"
        value={marca}
        onChangeText={text => setMarca(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Modelo"
        value={modelo}
        onChangeText={text => setModelo(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Año"
        value={anio}
        onChangeText={text => setAnio(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 5 }}
        placeholder="Color"
        value={color}
        onChangeText={text => setColor(text)}
      />
      <Button
        title="Registrar Auto"
        onPress={registrarAuto}
      />

      {registroExitoso &&
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'green', fontSize: 18 }}>Registro Agregado Correctamente!</Text>
        </View>
      }
    </View>
  );
}

export default Homee;
