import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        numero:0,
        mensagem: ''
    };

    this.numero = this.numero.bind(this);  
    this.resultado = this.resultado.bind(this);  

  }

  numero(texto){
    this.setState({
      numero: texto
    });
  }

  resultado(){

    numeroAleatorio = Math.floor(Math.random(this.state.numero) * 10)
    if(numeroAleatorio == this.state.numero){
      this.setState({mensagem: `Você acertou! o número é ${numeroAleatorio}`}) 
    }
    if(numeroAleatorio != this.state.numero) {
      this.setState({mensagem: `Você errou! o número era ${numeroAleatorio}`}) 
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Número aleatório
        </Text>

        <Imagem largura={300} altura={200}/>

        <Text style={styles.texto}>
          Pense em um nº entre 0 e 10
        </Text>
        <TextInput style={styles.input}
          placeholder=""
          onChangeText={this.numero}>
        </TextInput>

        <Button title="Calcular" onPress={this.resultado} />

        <Text style={styles.texto}>Resultado: {this.state.mensagem}</Text>
        
      </View>
    );
  }
}

class Imagem extends Component {
  render(){
    let img='https://i.pinimg.com/originals/f5/ad/56/f5ad565616004ad3f3464812dacae59c.jpg';
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
      titulo:{
        textAlign: 'center',
        fontSize: 25,
      },
      texto:{
        textAlign: 'center',
        fontSize: 18,
      }
});

export default App;