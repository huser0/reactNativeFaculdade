import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet,TouchableOpacity, Image} from 'react-native'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      real: 0, 
      dolar: 5.40,
      euro: 5.29
    }

    this.Calcular = this.Calcular.bind(this)
  }
  Calcular(){   
    let real = parseFloat(this.state.real.replace(',','.'))
    let dolar = parseFloat(this.state.dolar)
    let euro = parseFloat(this.state.euro)
    let conversaoDolar = real / dolar
    let conversaoEuro = real / euro
    conversaoDolar = conversaoDolar.toFixed(2)
    conversaoEuro = conversaoEuro.toFixed(2)
    this.setState({conversaoDolar, conversaoEuro})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitulo}>CONVERSOR DE MOEDA</Text>
        <Image
          source={{ uri: 'https://i.pinimg.com/originals/c9/8c/12/c98c12093d990a68c8792486141867a2.jpg'}}
          style={{ width: 200, height: 200, marginHorizontal: 50}}
        />
        <Text style={styles.textSubTitulo}>BRL para USD/EURO</Text>
        <TextInput style={styles.textInput}
        onChangeText={(real) => {this.setState({real})}}
        keyboardType='numeric'
        placeholder='Valor em BRL'
        />
        <TouchableOpacity style={styles.button} onPress={this.Calcular}>
          <Text style={styles.textButton}>Converter</Text>
        </TouchableOpacity>
        <Text style={styles.textResul}>USD: {this.state.conversaoDolar}</Text>
        <Text style={styles.textResul}>Euro: {this.state.conversaoEuro}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  textInput:{
    padding: 30,
    backgroundColor: '#222',
    color: '#fff',
    marginHorizontal: 50,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 5,
    marginTop: 30,
    fontSize: 20,
  },
  button:{
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'green'
  },
  textButton:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  textResul:{
    color:'green',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  textTitulo:{
    marginBottom: 20,
    marginTop:70,
    color:'green',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  textSubTitulo:{
    marginTop:10,
    color:'green',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
})