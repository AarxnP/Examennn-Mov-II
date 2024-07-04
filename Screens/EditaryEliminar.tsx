import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, FlatList, TouchableOpacity } from 'react-native';
import { db } from '../config/Config';
import { ref, set, remove } from 'firebase/database';

const Screen3 = () => {
  const [autos, setAutos] = useState([
    { id: '1', marca: 'Toyota', modelo: 'Corolla', anio: '2022', color: 'Negro' },
    { id: '2', marca: 'Honda', modelo: 'Civic', anio: '2023', color: 'Blanco' },
    { id: '3', marca: 'Ford', modelo: 'Fiesta', anio: '2021', color: 'Rojo' },
  ]);

  const [editandoAuto, setEditandoAuto] = useState(null);
  const [marcaEditada, setMarcaEditada] = useState('');
  const [modeloEditado, setModeloEditado] = useState('');
  const [anioEditado, setAnioEditado] = useState('');
  const [colorEditado, setColorEditado] = useState('');

  const guardarCambios = () => {
    if (!marcaEditada || !modeloEditado || !anioEditado || !colorEditado) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    const autosActualizados = autos.map(auto => {
      if (auto.id ) {
        return {
          ...auto,
          marca: marcaEditada,
          modelo: modeloEditado,
          anio: anioEditado,
          color: colorEditado
        };
      } else {
        return auto;
      }
    });

    setAutos(autosActualizados);
    setEditandoAuto(null);
    setMarcaEditada('');
    setModeloEditado('');
    setAnioEditado('');
    setColorEditado('');

    Alert.alert('Registro Editado', 'El registro se ha editado correctamente.');
  };

  const confirmarEliminacion = (auto:any) => {
    Alert.alert(
      'Confirmar Eliminación',
      `¿Estás seguro que deseas eliminar el auto ${auto.marca} ${auto.modelo}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: () => eliminarAuto(auto)
        }
      ]
    );
  };

  const eliminarAuto = (auto:any) => {
    const autosRef = ref(db, `autos/${auto.id}`);
    remove(autosRef)
      .then(() => {
        const autosFiltrados = autos.filter(a => a.id !== auto.id);
        setAutos(autosFiltrados);
        Alert.alert('Registro Eliminado', 'El registro ha sido eliminado correctamente.');
      })
      .catch(error => {
        console.error('Error al eliminar el auto:', error);
        Alert.alert('Error', 'Hubo un problema al eliminar el auto. Por favor intenta de nuevo.');
      });
  };

  const mostrarFormularioEdicion = (auto:any) => {
    setEditandoAuto(auto);
    setMarcaEditada(auto.marca);
    setModeloEditado(auto.modelo);
    setAnioEditado(auto.anio);
    setColorEditado(auto.color);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Formulario para editar registro */}
      {editandoAuto && (
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Editar Registro:</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
            placeholder="Marca"
            value={marcaEditada}
            onChangeText={text => setMarcaEditada(text)}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
            placeholder="Modelo"
            value={modeloEditado}
            onChangeText={text => setModeloEditado(text)}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
            placeholder="Año"
            value={anioEditado}
            onChangeText={text => setAnioEditado(text)}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 5 }}
            placeholder="Color"
            value={colorEditado}
            onChangeText={text => setColorEditado(text)}
          />
          <Button
            title="Guardar Cambios"
            onPress={guardarCambios}
          />
        </View>
      )}

      {/* Lista de registros */}
      <FlatList
        data={autos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => mostrarFormularioEdicion(item)}>
            <View style={{ padding: 10, marginBottom: 5, backgroundColor: '#f0f0f0', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text>{item.marca} - {item.modelo}</Text>
                <Text>Año: {item.anio}</Text>
                <Text>Color: {item.color}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Button
                  title="Editar"
                  onPress={() => mostrarFormularioEdicion(item)}
                />
                <Button
                  title="Eliminar"
                  onPress={() => confirmarEliminacion(item)}
                  color="red"
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Screen3;
