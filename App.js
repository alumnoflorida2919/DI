/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Icon,Image } from 'react-native-elements';

class App extends Component {
  render() {
    return (
      <>
      
        <StatusBar barStyle="dark-content" />
        
        <View style={styles.backGround}>
          
          <View style={styles.cabecera}>
            <Icon name="menu" color={'grey'} size={80}></Icon>
          <Text style={styles.textoCabecera}>PLACE MY BET</Text>
          
        </View>
        <Text></Text>
        <Text style={styles.textoUsuario}>USUARIO</Text>
        <Text></Text>
        <View style={styles.cajasApuestas}>
        <Image
            source={{
              uri:
                'https://seeklogo.com/images/V/Valencia-logo-1CD5C7F53E-seeklogo.com.png',
            }}
            style={{width: 50, height: 75}}
          />
          <Text style={styles.guionApuestas}>-</Text>
          <Image
            source={{
              uri:
                'https://seeklogo.com/images/R/RCD_Espanyol_De_Barcelona-logo-1C52C9C43F-seeklogo.com.png',
            }}
            style={{width: 50, height: 75}}
          />
          
        </View>
        <View style={styles.cajasApuestas}>
        <Image
            source={{
              uri:
                'https://seeklogo.com/images/V/Valencia-logo-1CD5C7F53E-seeklogo.com.png',
            }}
            style={{width: 50, height: 75}}
          />
          <Text style={styles.guionApuestas}>-</Text>
          <Image
            source={{
              uri:
                'https://seeklogo.com/images/R/real-sociedad-logo-E1EA64206C-seeklogo.com.png',
            }}
            style={{width: 50, height: 75}}
          />
        </View>
        <View style={styles.cajasApuestas}>
        <Image
            source={{
              uri:
                'https://seeklogo.com/images/R/real-madrid-c-f-logo-C08F61D801-seeklogo.com.png',
            }}
            style={{width: 50, height: 75}}
          />
          <Text style={styles.guionApuestas}>-</Text>
          <Image
            source={{
              uri:
                'https://seeklogo.com/images/D/deportivo-alaves-logo-0FBE6894C8-seeklogo.com.png',
            }}
            style={{width: 50, height: 75}}
          />
        </View>
        <View style={styles.cajasApuestas}>
        <Image
            source={{
              uri:
                'https://seeklogo.com/images/M/Malaga_CF-logo-13247ADD75-seeklogo.com.png',
            }}
            style={{width: 50, height: 75}}
          />
          <Text style={styles.guionApuestas}>-</Text>
          <Image
            source={{
              uri:
                'https://seeklogo.com/images/F/FC_Barcelona-logo-D941E13B46-seeklogo.com.png',
            }}
            style={{width: 50, height: 75}}
          />
        </View>
        <View style={styles.cajasApuestas}>
        <Image
            source={{
              uri:
                'https://seeklogo.com/images/C/club-atletico-de-madrid-logo-48FFB53486-seeklogo.com.png',
            }}
            style={{width: 50, height: 75}}
          />
          <Text style={styles.guionApuestas}>-</Text>
          <Image
            source={{
              uri:
                'https://seeklogo.com/images/S/sevilla-fc-puerto-rico-logo-6E335812C8-seeklogo.com.png',
            }}
            style={{width: 50, height: 75}}
          />
        </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  backGround: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  cabecera:{
    padding:1,
    flex:1,
    justifyContent: 'space-between', 
    //justifyContent: 'center',     
    backgroundColor:'orange',
    flexDirection:'row',
  },
  textoCabecera:{
    
    
    fontSize:25,
    textAlign:'right',
    color:'grey',
  },
  textoUsuario:{
    padding:8,
    color:'grey',
    fontSize:18,
  },
  cajasApuestas:{    
    flex:1,
    //justifyContent:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    borderColor:'grey',
    borderWidth:3,
    margin:4,
    padding:12,
    backgroundColor:'grey',
  },
  guionApuestas:{
    color:'#433d3c', 
    //display:'flex',
    //justifyContent:'center',
    //alignItems:'center',
    //textAlign:'center',
    fontSize:100,
  }
  
});

export default App;
