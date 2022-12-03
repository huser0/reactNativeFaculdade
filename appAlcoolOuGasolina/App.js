import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { View, Text, TextInput, Button,Image } from 'react-native';
import {styles} from './Style.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        alcool:0,
        gasolina:0,
        mensagem:''
    };

    this.obterPrecoAlcool = this.obterPrecoAlcool.bind(this);  
    this.obterPrecoGasolina = this.obterPrecoGasolina.bind(this);  
    this.Resultado = this.Resultado.bind(this);  
  }

  obterPrecoAlcool(texto){
    this.setState({
      alcool: texto
    });
  }

  obterPrecoGasolina(texto){
    this.setState({
      gasolina: texto
    });
  }
  
  Resultado(){
    result = this.state.alcool / this.state.gasolina
    if(result < 0.7){
      this.setState({mensagem: 'Compensa abastecer com álcool'})
    }
    else{
      this.setState({mensagem: 'Compensa abastecer com gasolina'})
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>
          Alcool ou Gasolina?
        </Text>

        <Imagem largura={300} altura={200}/>

        <TextInput style={styles.input}
          placeholder="Preço do Álcool"
          onChangeText={this.alcool}>
        </TextInput>

        <TextInput style={styles.input}
          placeholder="Preço da Gasolina"
          onChangeText={this.gasolina}>
        </TextInput>
        
        <Button title="Calcular" onPress={this.Resultado} />

        <Text>Resultado:{this.state.mensagem}</Text>
      </View>
    );
  }
}

class Imagem extends Component {
  render(){
    let img='https://i.pinimg.com/originals/a7/11/5b/a7115bf3401530a8716c395e2ce096e9.png';
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
 


export default App;
