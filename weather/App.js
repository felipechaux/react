import React from 'react';
import { StyleSheet, Text, View,Platform,TextInput,KeyboardAvoidingView } from 'react-native';

import SearchInput from './components/SearchInput';


export default class App extends React.Component {
  render() {
  const style={color:'red'};
    return (
      <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding"
      >
        <Text style={style}>
          Hello, friend I am a basic React Native Componente
        </Text>


        <Text style={[styles.largeText,styles.textStyle]}>
          San Francisco
        </Text>

        <Text style={[styles.smallText,styles.textStyle]}>
          Light Cloud
        </Text>

        <Text style={[styles.largeText,styles.textStyle]}>24°</Text>

        <SearchInput placeholder="Search any city"></SearchInput>

  {/*<Image source={require('./image.png')}/>*/}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    textAlign:'center',
    /*fontFamily:
    Platform.OS==='ios'?'AvenirNext-Regular':'Roboto',*/
     ...Platform.select({
      ios:{
        fontFamily:'AvenirNext-Regular',
      },
      android:{
        fontFamily:'Roboto',
      },
    }),
  },
  largeText:{
    fontSize:44,
  },
  smallText:{
    fontSize:18,
  },
  textInput:{
    backgroundColor:'#666',
    color:'white',
    height:40,
    width:300,
    marginTop:20,
    marginHorizontal:20,
    paddingHorizontal:10,
    alignSelf:'center',
  },

 
});
