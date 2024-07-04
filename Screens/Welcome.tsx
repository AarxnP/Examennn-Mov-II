import React from 'react';
import { View, Button, Text, ImageBackground, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/b5/2a/19/b52a199a2ad77ba3c83b73db91851223.jpg' }} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>BIENVENIDOOOOOOS!</Text>
        <Text style={styles.title}>Aaron Palma</Text>
        <Button
        title="Ingresar!"
        onPress={() => navigation.navigate('BottomTabs')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta según tus preferencias ('cover', 'contain', 'stretch', etc.)
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo semi-transparente para mejorar la legibilidad del texto y botón
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
