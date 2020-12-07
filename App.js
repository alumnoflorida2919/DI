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
import { Icon, Image } from 'react-native-elements';
import TargetCabecera from './component/TargetCabecera';
import TargetEquipos from './component/TargetEquipos';

class App extends Component {
  render() {
    return (
      <>

        <StatusBar barStyle="dark-content" />

        <View style={styles.backGround}>

          <View>
          <TargetCabecera></TargetCabecera>
          </View>
          <View>
          <Text></Text>
          <Text style={styles.textoUsuario}>USUARIO</Text>
          <Text></Text>
          </View>
          <View>
            <TargetEquipos></TargetEquipos> 
            <TargetEquipos></TargetEquipos>
            <TargetEquipos></TargetEquipos>
            <TargetEquipos></TargetEquipos>
            <TargetEquipos></TargetEquipos>
            <TargetEquipos></TargetEquipos>
          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  textoUsuario: {
    padding: 8,
    color: 'grey',
    fontSize: 18,
  },
});

export default App;
