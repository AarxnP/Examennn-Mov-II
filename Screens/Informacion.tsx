import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const Informacion = ({ route }: any) => {
  const { autos } = route.params;

  const mostrarAlerta = (auto: any) => {
    alert(`Detalles del Auto:\nNombre: ${auto.nombre}\nModelo: ${auto.modelo}\nAño: ${auto.anio}\nColor: ${auto.color}`);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Lista de Autos</Text>
      <FlatList
        data={autos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => mostrarAlerta(item)}>
            <View style={{ padding: 10, marginBottom: 5, backgroundColor: '#f0f0f0' }}>
              <Text>{item.nombre}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Informacion;
