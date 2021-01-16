import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView, FlatList,
} from 'react-native';
import { Input } from 'react-native-elements';
import { PlaceMyBetLogo } from '../component/PlaceMyBetLogo';
import { BotonOk } from '../component/BotonOk';
import { Tabla } from '../component/Tabla';
import { TablaFecha } from '../component/TablaFecha';


export default class FiltrarEquipoFecha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [{equipo: "Valencia-Espanyol", fecha:'13-02-20'},
                {equipo: "Valencia-Espanyol", fecha:'13-02-20'},
                {equipo: "Valencia-Espanyol", fecha:'13-02-20'}]
        };
    }
    render() {
        return (
            <View style={styles.backGround}>
                <StatusBar barStyle="dark-content" />

                <PlaceMyBetLogo></PlaceMyBetLogo>
                <View>
                    <Text style={styles.usuario}>USUARIO</Text>
                </View>
                <Text></Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <View>
                            <Text style={styles.label}>equipo</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View>
                            <Text style={styles.label}>Fecha</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column' }}></View>
                    <View style={styles.input}>
                        <Input
                            placeholderTextColor='black'
                            placeholder='EQUIPO'
                        />
                    </View>
                    <View style={styles.input}>
                        <Input
                            placeholderTextColor='black'
                            placeholder='__/__/____'
                        />
                    </View>
                </View>
                <ScrollView>
                    <FlatList data={this.state.datos}
                              keyExtractor={(item, index) => index.toString()}
                              style={{padding: 5}}
                              renderItem={({item}) => {
                                  return (
                                      <View elevation={4} style={{
                                          backgroundColor: 'orange', display: 'flex', flexDirection: 'row'
                                          , justifyContent: 'space-between',
                                      }}>
                                          <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold', margin: 5}}>
                                              {item.equipo}
                                          </Text>
                                          <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold', margin: 5}}>
                                              {item.fecha}
                                          </Text>
                                      </View>
                                  );
                              }}/>
                    {/*<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>*/}
                    {/*    <View style={{ flexDirection: 'column' }}>*/}
                    {/*        <Tabla></Tabla>*/}
                    {/*    </View>*/}
                    {/*    <View style={{ flexDirection: 'column' }}>*/}
                    {/*        <TablaFecha></TablaFecha>*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                    <BotonOk>
                    </BotonOk>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    input: {
        backgroundColor: 'grey',
        color: 'white',
        padding: 20,
        flex: 0.10,
        flexDirection: 'row',
    },
    usuario: {
        color: 'grey',
        fontSize: 20,
        padding: 8,
    },
    label: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 15,
        padding: 10,
    },
    input2: {
        flex: 1,
        backgroundColor: 'grey',
        color: 'white',
        borderRadius: 15,
        borderColor: 'orange',
    },

});
