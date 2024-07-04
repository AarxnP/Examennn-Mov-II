import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function APIScreens() {

  const API_SERIES = 'https://api.sampleapis.com/https://jritsqmet.github.io/web-api/series.json'
  const [data,setdata]=useState([])

  useEffect(() => {
    fetch(API_SERIES)
    .then(response => response.json())
    .then(datos => setdata(datos))
    .catch(error => console.log(error))
    console.log(data);
  }, [])
  
  return (
    <View>
      <Text>Lista</Text>
      <FlatList
      data={data}
      renderItem={({item}) => 
      <View style={styles.item}>
        <Text>{item.titulo}</Text>
        <Text>{item.anio}</Text>
        <Image
          src={item.imagen.main}
          style={styles.img}
        />
      </View>
      }
    />
    </View>
    )
  }

const styles = StyleSheet.create({
  item:{
    backgroundColor:'#666',
    margin:5
  },
  img:{
    width:40,
    height:70,
  }
})