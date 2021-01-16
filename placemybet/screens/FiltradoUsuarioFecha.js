import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
} from 'react-native';

import {PlaceMyBetLogo} from '../component/PlaceMyBetLogo';
import {AdminUsuario} from '../component/AdminUsuario';
import {LabelData} from '../component/LabelData';
import {InputData} from '../component/InputData';
import {Input} from 'react-native-elements';
import {BotonOk} from '../component/BotonOk';
import {ElementoFiltradoFecha} from '../component/ElementoFiltradoFecha';
import {FlatList} from 'react-native';

export default class FiltradoUsuarioFecha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [{fecha: '18-1-20', tipo: 'under', goles: 1.5, apuesta: 75},
                {fecha: '18-11-21', tipo: 'over', goles: 2.5, apuesta: 175},
                {fecha: '10-1-20', tipo: 'under', goles: 3.5, apuesta: 750}],
        };
    }

    render() {
        return (
            <View style={styles.backGround}>
                <StatusBar barStyle="dark-content"/>
                <ScrollView>
                    <PlaceMyBetLogo></PlaceMyBetLogo>
                    <AdminUsuario></AdminUsuario>
                    <LabelData></LabelData>
                    <Input title='Dato' style={styles.input}></Input>

                    <Text></Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'column', width: 125}}>
                            <LabelData></LabelData>
                            <Input style={styles.input}>__/__/____</Input>
                        </View>
                        <View style={{flexDirection: 'column', width: 125}}>
                            <LabelData></LabelData>
                            <Input style={styles.input}>__/__/____</Input>
                        </View>
                    </View>
                    <Text></Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>


                        <Text style={styles.estiloTabla}>Fecha</Text>
                        <Text style={styles.estiloTabla}>Tipo apuesta</Text>
                        <Text style={styles.estiloTabla}>Goles</Text>
                        <Text style={styles.estiloTabla}>Apuesta</Text>
                    </View>
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
                                              {item.fecha}
                                          </Text>
                                          <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold', margin: 5}}>
                                              {item.tipo}
                                          </Text>
                                          <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold', margin: 5}}>
                                              {item.goles}
                                          </Text>
                                          <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold', margin: 5}}>
                                              {item.apuesta}
                                          </Text>
                                      </View>
                                  );
                              }}/>
                    {/*<ElementoFiltradoFecha fecha='18/12/20' tp='Under' goles='1.5' apuesta='75'></ElementoFiltradoFecha>*/}
                    {/*<ElementoFiltradoFecha fecha='18/12/20' tp='Under' goles='1.5' apuesta='75'></ElementoFiltradoFecha>*/}
                    {/*<ElementoFiltradoFecha fecha='18/12/20' tp='Under' goles='1.5' apuesta='75'></ElementoFiltradoFecha>*/}
                    {/*<ElementoFiltradoFecha fecha='18/12/20' tp='Under' goles='1.5' apuesta='75'></ElementoFiltradoFecha>*/}
                    {/*<Text></Text>*/}
                </ScrollView>
                <BotonOk></BotonOk>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    input: {
        flexDirection: 'column',
        width: 500,
        backgroundColor: 'grey',
        borderColor: 'orange',
        borderWidth: 4,
    },
    estiloTabla: {
        color: 'orange',
        fontSize: 20,
        borderColor: 'orange',
        borderWidth: 3,
        padding: 20,
        flex: 1,
        height: 100,
    },
});
