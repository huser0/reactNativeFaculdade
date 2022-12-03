import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet, Switch, Button } from 'react-native';

import { Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: '',
      escolaridade: '',
      limite: '',
      status: '',
      
      exibirNome: '',
      exibirIdade: '',
      exibirSexo: '',
      exibirEscolaridade: '',
      exibirLimite: '',
      exibirStatus: '',

      sexos: [
      'Selecione um sexo',
      'Masculino',
      'Feminino' ,
      'Outro',
      ],
      escolaridades: [
        'Selecione uma Escolaridade',
        'Ensino Fundamental',
        'Ensino Medio',
        'Graduação',
        'Mestrado',
        'Doutorado',
      ],
    };
    this.entrar = this.entrar.bind(this);

  }

entrar(){
  this.setState({
    exibirNome: this.state.nome, 
    exibirIdade: this.state.idade, 
    exibirSexo: this.state.sexo, 
    exibirEscolaridade: this.state.escolaridade, 
    exibirLimite: this.state.limite,
    exibirStatus: this.state.status

  })
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Abertura de Conta</Text>
        <Text>Nome</Text>
        <TextInput style={styles.textInput}  placeholder=" Digite seu nome? " onChangeText={value => this.setState({nome: value })} />
        <Text>Idade</Text>
        <TextInput style={styles.textInput} onChangeText={value => this.setState({idade: value })}/>

        <Text>Sexo: </Text>
        <Picker
          selectedValue={this.state.sexo}
          onValueChange={value => this.setState({sexo: value})}>
          {this.state.sexos.map((valor, chave) => {
            return (
              <Picker.Item key={chave} value={chave} label={valor} />
            );
          })}
        </Picker>

        <Text>Escolaridade: </Text>
        <Picker selectedValue={this.state.escolaridade} onValueChange={value=> this.setState({escolaridade: value})}>
          {this.state.escolaridades.map((valor, chave) => {
            return (
              <Picker.Item key={chave} value={chave} label={valor} />
            );
          })}
        </Picker>

          <Text>Limite: </Text>
          <Slider minimumValue={0}
            maximumValue={100} onValueChange={value => this.setState({limite: value})}/>

        <Switch value={this.state.status} onValueChange={(value) => this.setState({status: value})}/>
        
        <Button title='Entrar' onPress={this.entrar}/> 

        <Text>Dados Informados:</Text>   
        <Text>Nome: {this.state.exibirNome}</Text>
        <Text>Idade: {this.state.exibirIdade}</Text>
        <Text>Sexo: { this.state.sexos.filter((value, index) => {
            return index == this.state.exibirSexo ? value : ''
        })}</Text>
        <Text>Escolaridade: { this.state.escolaridades.filter((value, index) => {
            return index == this.state.exibirEscolaridade ? value : ''
        })}</Text>
        <Text>Limite: {Math.floor(this.state.exibirLimite)}</Text>
        <Text>Status: {this.state.exibirStatus ? 'Ativo' : 'Inativo'}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginVertical: 30,
    backgroundColor: "#eaeaea"
  },
  box: {
    flexDirection: 'row'
  },
  textInput: {
    borderColor: '#000',
    width: 200,
    borderWidth: 2
  }
})

export default App;
