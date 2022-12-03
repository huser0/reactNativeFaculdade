import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {styles} from './Style.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        resultado:0,
        numero1:0,
        numero2:0
    };

    this.obterNum1 = this.obterNum1.bind(this);  
    this.obterNum2 = this.obterNum2.bind(this);  
    this.Multiplicar = this.Multiplicar.bind(this);  


  }

  obterNum1(texto){
    this.setState({
      numero1: texto
    });
  }

  obterNum2(texto){
    this.setState({
      numero2: texto
    });
  }
  
  Multiplicar(){
    this.setState({
      resultado: this.state.numero1 * this.state.numero2
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>
          Multiplicador de numeros
        </Text>

        <TextInput style={styles.input}
          placeholder="Digite um numero"
          onChangeText={this.obterNum1}>
        </TextInput>

        <TextInput style={styles.input}
          placeholder="Digite um numero"
          onChangeText={this.obterNum2}>
        </TextInput>
        
        <Button title="Calcular" onPress={this.Multiplicar} />

        <Text>Resultado:{this.state.resultado}</Text>
      </View>
    );
  }
}

export default App;
