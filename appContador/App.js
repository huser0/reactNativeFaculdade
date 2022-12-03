import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {styles} from './Style.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numeroContador: 0
    };

    this.aumentar = this.aumentar.bind(this);  
    this.diminuir = this.diminuir.bind(this);  
  }
  aumentar(){
    this.setState({ 
      numeroContador: this.state.numeroContador+1
    });
  }
  diminuir(){
    this.setState({ 
      numeroContador: this.state.numeroContador-1
    });
  }

  render(){
    return(
      <View style={styles.container}>

          <Text style={styles.texto}>
            Contador de Pessoas
          </Text>

          <Text style={styles.texto} >
            {this.state.numeroContador}
          </Text>

          <Button title="+" style={styles.botao} onPress={this.aumentar}/>

          <Button title="-" style={styles.botao} onPress={this.diminuir}/>
      </View>


    );
  }
}

export default App;
