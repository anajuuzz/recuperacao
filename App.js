import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { fontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>

        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" transLucent={false} />

      <Image source={require('./src/assets/logoinstagram.png')}
      style={styles.logo}/>

      <TextInput placeholder="Celular, username ou email"
      style={styles.input} />

      <TextInput placeholder="Sua senha"
      style={styles.input} />

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}><right>Esqueceu a senha?</right></Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}><center>Acessar</center></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookContainer}>
        <fontAwesome5 name="facebook" size={25} color="#399fff"/>
        <Text style={styles.facebookText}>Continue como Fulano</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text styles={{marginHorizontal: '3%'}}>OU</Text>
        <View style={styles.divisorLine}></View>
        </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não possui uma conta</Text>
        <TouchableOpacity>
          <Text style={styles.signUpButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginTop: Platform.OS == 'android' ? '13%' : '20%',
    marginBottom: Platform.OS == 'android' ? '13%' : '15%'
  },
  input:{
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderwidth: 1,
    borderColor: "E0E0E0"
  },
  forgotContainer:{
    width: '90%',
    alingItems: 'flex-end'
  },
  forgotText:{
    color: '#399fff',
  },
  loginButton:{
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alingItems: 'center',
    borderRadius: 5,
  },
  loginText:{
    color: '#fff',
    fontsize: 17,
  },
  facebookContainer:{
    flexDirection: 'row',
    alingItems: 'center',
    marginTop: '15%'
  },
  facebookText:{
    color: '#399fff',
    paddingleft: 8,
    fontSize: 15
  },
  divisor:{
    marginTop: '18%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divisorLine:{
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5,
  },
  signUpContainer:{
    flexDirection: 'paragraph',
    marginTop: '10%',
    alignItems: 'center'

  },
  signUpText:{
    color: '#C4c4c4',
    paddingleft: 5,
  },
  signUpButton:{
    color: '#399fff',
    fontweight: 'bold'
  }
});
