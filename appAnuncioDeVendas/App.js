import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
    return(

      <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Anuncios da GSH</Text>

       <ScrollView showsVerticalScrollIndicator={true} 
       showsHorizontalScrollIndicator={false} 
       horizontal
       pagingEnabled={true}>
          <View style={styles.box1}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&w=1000&q=80' }}
          style={{ width: 500, height: 350}}/>
            <Text style={styles.subtitulo}>AirPods 3 TWS - O melhor do mercado!</Text>
            <Text style={styles.descricao}>Os AirPods vão mudar para sempre o jeito que você usa fones de ouvido. Quando você tira do estojo de carga, eles ligam sozinhos e se conectam ao seu iPhone, Apple Watch, iPad ou Mac1. É só colocar no ouvido que o som começa a tocar automaticamente, e para quando você tira. Para ajustar o volume, mudar de música, fazer uma ligação ou pesquisar itinerários, ative a Siri com apenas dois toques.</Text>
          </View>
          <View style={styles.box2}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80' }}
          style={{ width: 500, height: 350}}/>
            <Text style={styles.subtitulo}>Tênis Nike Precision VI Masculino</Text>
            <Text style={styles.descricao}>Muito mais do que um tênis de basquete, a Nike traz tradição e design incomparáveis para que possa dar o seu melhor dentro e fora das quadras. Em sua sexta versão, o Tênis Nike Precision Masculino opta por estrutura mais leve do que a versão anterior, pensando também em precisão, conforto e performance.</Text>
          </View>
          <View style={styles.box3}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80' }}
          style={{ width: 500, height: 350}}/>
            <Text style={styles.subtitulo}>Apple MacBook Air M1</Text>
            <Text style={styles.descricao}>O Apple MacBook Air (M1, 2020) é um laptop macOS com tela de 13,30 polegadas e resolução de 2560x1600 pixels. Ele é alimentado por um processador Apple M1 e vem com 8 GB de RAM. O Apple MacBook Air (M1, 2020) inclui 512 GB de armazenamento SSD</Text>
          </View>   
          <View style={styles.box4}>
          <Image source={{ uri: 'https://assets.reedpopcdn.com/ps5-vrr-notext.jpg/BROK/thumbnail/1600x900/quality/100/ps5-vrr-notext.jpg' }}
          style={{ width: 500, height: 350}}/>
            <Text style={styles.subtitulo}>Play Station 5</Text>
            <Text style={styles.descricao}>O mais recente Sony PlayStation lançado em novembro de 2020. Alimentado por uma CPU AMD Zen 2 de oito núcleos e GPU AMD Radeon personalizada, o PS5 é oferecido em dois modelos: com e sem unidade Blu-ray 4K</Text>
          </View>    
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
      flex: 1,
  },
  tituloPrincipal:{
      marginTop: 70,
      marginBottom: 40,
      fontSize: 35,
      textAlign: 'center',
      color: `#222`,
      fontWeight: 'bold'    
  },
  subtitulo:{
      padding: 10,
      fontSize: 30,
      color: `#191970`,
      fontWeight: 'bold'
  },
  descricao:{
    padding: 10,
    fontSize: 20,
  },
  box1:{
    backgroundColor: 'white',
    height: 250,
    width: 510,
    height: 670,
    margin: 5,
    borderWidth: 5,
    borderRadius: 10
  },
  box2:{
    backgroundColor: 'white',
    height: 250,
    width: 510,
    height: 670,
    margin: 5,
    borderWidth: 5,
    borderRadius: 10
  },
  box3:{
    backgroundColor: 'white',
    height: 250,
    width: 510,
    height: 670,
    margin: 5,
    borderWidth: 5,
    borderRadius: 10
  },
  box4:{
    backgroundColor: 'white',
    height: 250,
    width: 510,
    height: 670,
    margin: 5,
    borderWidth: 5,
    borderRadius: 10
  },
})
 
export default App;
