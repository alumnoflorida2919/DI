/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { 
  
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import {  
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Button,Header, Image,Avatar, Input,Card} from 'react-native-elements';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header
  leftComponent={{ icon: 'home', color: '#fff' }}
  centerComponent={{ text: 'Ejercici de Juan', style: { color: '#fff' } }}  
/>  
<Image
style={{ width: 450, height: 200 }}
  source={{ uri: 'https://www.wallpaperup.com/uploads/wallpapers/2013/08/19/135949/00297a2528269ffcd01955cb6acb0a12.jpg' }}  
/>
<Avatar
  source={{
    uri:
      'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg',
  }}
/>
<Input
   placeholder="Login"
   leftIcon={{ type: 'font-awesome', name: 'comment' }}
   style={styles}
   onChangeText={value => this.setState({ comment: value })}
  />
  <Input 
  placeholder="Password"
  leftIcon={{ type: 'font-awesome', name: 'Password' }}
  style={styles}
   onChangeText={value => this.setState({ comment: value })}
  secureTextEntry={true} style={styles.default}  
  />     
      <Button title='Entrar...' type= 'outline' Icon='check'></Button>
      <ScrollView style={styles.scrollView}>
      <Card>
      <Image
style={{ width: 350, height: 170 }}
  source={{ uri: 'https://blogs.florida.es/floridauniversitariablog/wp-content/uploads/sites/19/2018/10/FLORIDA-UNIVERSITARIA.png' }}  
/>
      </Card>
      </ScrollView>
          
    </>
  );
};

const styles = StyleSheet.create({ 
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
