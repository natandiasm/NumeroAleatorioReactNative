import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDiceSix, faDiceOne, faDice } from '@fortawesome/free-solid-svg-icons'

export default class App extends React.Component {

  dados = {
    numAleatorio: <FontAwesomeIcon style={styles.icon} icon={faDice} size={30} />,
    max: 0,
    min: 0,
  }

  constructor(props) {
    super(props);
    this.state = { numAleatorio: <FontAwesomeIcon style={styles.icon} icon={faDice} size={80} /> }
  }

  gerarNumero = () => {
    let min = Math.ceil(this.dados.min);
    let max = Math.floor(this.dados.max);
    let numero = Math.floor(Math.random() * (max - min)) + min;
    this.setState(this.state, () => {
      this.state.numAleatorio = numero
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.numText} >{this.state.numAleatorio}</Text>
        <View style={styles.row}>
          <FontAwesomeIcon style={styles.icon} icon={faDiceOne} size={25} />
          <TextInput
            style={styles.input}
            onChangeText={text => {
              this.dados.min = text
            }}
          />
        </View>
        <View style={styles.row}>
          <FontAwesomeIcon style={styles.icon} icon={faDiceSix} size={25} />
          <TextInput
            style={styles.input}
            onChangeText={text => {
              this.dados.max = text
            }}
          />
        </View>
        <TouchableHighlight 
        onPress={this.gerarNumero}
                style ={styles.button}>
                  <Text style={styles.buttonText}>Gerar Numero</Text>
                </TouchableHighlight>
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
    height: 100,
    padding: 20
  },
  button: {
    height: 40,
    width:160,
    borderRadius:10,
    backgroundColor : "#556C91",
    marginLeft :50,
    marginRight:50,
    marginTop :20,
    paddingLeft:35,
    paddingTop:10
},
buttonText: {
  color: '#EAF0F3',
},
  input: {
    width: 80,
    height: 40,
    borderColor: '#8999A9',
    borderRadius: 8,
    borderWidth: 4,
    paddingLeft: 10,
    color: '#556C91',
    fontWeight: 'bold' 
  },
  icon: {
    marginTop: 7,
    marginRight: 5,
    color : '#8999A9'
  },
  numText: {
    color: '#556C91',
    fontSize: 50,
  }

});
