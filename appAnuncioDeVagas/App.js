import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text} from 'react-native';
 
class App extends Component{
  render(){
    return(

      <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Anuncios de Vagas</Text>

       <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box1}>
            <Text style={styles.subtitulo}>Desenvolvedor .NET</Text>
            <Text style={styles.salario}>R$ 4.000,00</Text>
            <Text style={styles.descricao}>Profissional com conhecimento em .NET, Sql Server, Api Rest Full, Angular</Text>
            <Text style={styles.contato}>(+55) 9999-9999</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.subtitulo}>Desenvolvedor Java</Text>
            <Text style={styles.salario}>R$ 5.000,00</Text>
            <Text style={styles.descricao}>Profissional com conhecimento em Java 11, Spring MVC, Apache Kafka, Kubernates, AWS S3</Text>
            <Text style={styles.contato}>(+55) 9999-9999</Text>

          </View>
          <View style={styles.box3}>
            <Text style={styles.subtitulo}>Sofware Engineer</Text>
            <Text style={styles.salario}>R$ 10.000,00</Text>
            <Text style={styles.descricao}>Conhecimento em Rust, Golang, React, Node, Integração CI/CD</Text>
            <Text style={styles.contato}>(+55) 9999-9999</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.subtitulo}>Scrum Master</Text>
            <Text style={styles.salario}>R$ 5.000,00</Text>
            <Text style={styles.descricao}>Conhecimento em metodologias ageis, facilitador de equipes, conhecimento em design thinking</Text>
            <Text style={styles.contato}>(+55) 9999-9999</Text>


          </View>    
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
     padding: 2,
     marginTop: 45,
     alignItems: 'center'
  },
  tituloPrincipal:{
      fontSize: 35,
      textAlign: 'center',
      color: `#b22222`,
      fontWeight: 'bold'
      
  },
  subtitulo:{
      padding: 10,
      fontSize: 19,
      color: `#191970`,
  },
  salario:{
      fontSize: 20,
      paddingHorizontal: 10,
      color: '#70f',
      fontWeight: 'bold'
  },  
  descricao:{
    padding: 10,
    fontSize: 20,
  },
  contato: {
    padding: 10,
    fontSize: 20
  },
  box1:{
    backgroundColor: 'white',
    height: 250,
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
    borderRadius: 10
  },
  box2:{
    backgroundColor: 'white',
    height: 250,
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
    borderRadius: 10

  },
  box3:{
    backgroundColor: 'white',
    height: 250,
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
    borderRadius: 10

  },
  box4:{
    backgroundColor: 'white',
    height: 250,
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
    borderRadius: 10
  },
})
 
export default App;
