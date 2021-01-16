import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView, FlatList,
} from 'react-native';

import { PlaceMyBetLogo } from '../component/PlaceMyBetLogo';
import { AdminUsuario } from '../component/AdminUsuario';
import { LabelData } from '../component/LabelData';
import { InputData } from '../component/InputData';
import { BotonOk } from '../component/BotonOk';

export default class FiltradoMercado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [{fecha: '18-1-20', partido: 'Valenica-Espanyol', cuota:1.44},
                {fecha: '18-1-20', partido:'Valenica-Espanyol', cuota:1.44},
                {fecha: '18-1-20', partido: 'Valenica-Espanyol', cuota:1.44},
                {fecha: '18-1-20', partido: 'Valenica-Espanyol', cuota:1.44}],
        };
    }
    render() {
        return (<View style={styles.backGround}>
            <StatusBar barStyle="dark-content" />
            <ScrollView>

                <PlaceMyBetLogo></PlaceMyBetLogo>
                <AdminUsuario></AdminUsuario>

                <Text></Text>
                <LabelData></LabelData>
                <InputData></InputData>
                <LabelData></LabelData>
                <InputData></InputData>
                <Text></Text>
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
                                          {item.partido}
                                      </Text>
                                      <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold', margin: 5}}>
                                          {(item.cuota)}
                                      </Text>
                                  </View>
                              );
                          }}/>
                {/*<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>*/}
                {/*    <View style={{ flexDirection: 'column' }}>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*    <View style={{ flexDirection: 'column' }}>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*    <View style={{ flexDirection: 'column' }}>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*        <View>*/}
                {/*            <Text style={styles.estiloTabla}>DATO</Text>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*</View>*/}
                <Text></Text>
            </ScrollView>
            <BotonOk></BotonOk>
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
