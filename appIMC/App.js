import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        peso:0,
        altura:0,
        mensagem: ''
    };

    this.obterPeso = this.obterPeso.bind(this);  
    this.obterAltura = this.obterAltura.bind(this);  
    this.resultado = this.resultado.bind(this);  
  }

  obterPeso(texto){
    this.setState({
      peso: texto
    });
  }

  obterAltura(texto){
    this.setState({
      altura: texto
    });
  }
  
  resultado(){

    imc = (this.state.peso / (this.state.altura * this.state.altura));

    if (imc < 18.5)
      this.setState({mensagem: 'Abaixo do Peso'});
    if ((imc >= 18.5) && (imc <= 24.9))
      this.setState({mensagem: 'Peso Normal'});
    if ((imc >= 25) && (imc <= 29.9))
      this.setState({mensagem: 'Sobrepeso'});
    if ((imc >= 30) && (imc <= 34.9))
      this.setState({mensagem: 'Obesidade Grau I'});
    if ((imc >= 35) && (imc <= 39.9))
      this.setState({mensagem: 'Obesidade Grau II'});
    if (imc > 40)
      this.setState({mensagem: 'Obesidade Grau III Ou Mórbida'});

  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>
          Cálculo do IMC
        </Text>

        <Imagem largura={300} altura={200}/>

        <TextInput style={styles.input}
          placeholder="Peso"
          onChangeText={this.obterPeso}>
        </TextInput>

        <TextInput style={styles.input}
          placeholder="Altura"
          onChangeText={this.obterAltura}>
        </TextInput>
        
        <Button title="Calcular" onPress={this.resultado} />

        <Text>Resultado:{this.state.mensagem}</Text>
        
      </View>
    );
  }
}

class Imagem extends Component {
  render(){
    let img='https://es.calcuworld.com/wp-content/uploads/sites/2/2013/02/imc.png';
    return(
      <View>
          <Image
            source={{ uri: img }}
            style={{ width: this.props.largura, height: this.props.altura}}
          />
      </View>
    )
  }
}
 

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      texto:{
        textAlign: 'center',
        fontSize: 25,
      }
});

export default App;