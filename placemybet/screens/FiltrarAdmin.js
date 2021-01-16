import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    FlatList,
} from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import { PlaceMyBetLogo } from '../component/PlaceMyBetLogo';
import { BotonOk } from '../component/BotonOk';
import { LabelData } from '../component/LabelData'

export default class FiltrarAdmin extends Component {
    render() {
        return (
            <View style={styles.backGround}>
                <StatusBar barStyle="dark-content" />
                <ScrollView>
                    <PlaceMyBetLogo></PlaceMyBetLogo>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <CheckBox title='Over' checked='true' checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o' />
                        </View>
                        <View >
                            <LabelData></LabelData>

                            <Input style={styles.input}>Usuario</Input>
                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ flexDirection: 'column', width: 125 }}>
                                    <LabelData></LabelData>
                                    <Input style={styles.input}>__/__/____</Input>
                                </View>

                                <View style={{ flexDirection: 'column', width: 125 }}>
                                    <LabelData></LabelData>
                                    <Input style={styles.input}>__/__/____</Input>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={{ color: 'grey' }}>____________________________________________________________</Text>
                    <Text></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <CheckBox title='Over' checked='true' checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o' />
                        </View>
                        <View style={{ flexDirection: 'column', width: 125 }}>
                            <LabelData></LabelData>
                            <Input style={styles.input}>Mercado</Input>
                        </View>
                        <View style={{ flexDirection: 'column', width: 125 }}>
                            <LabelData></LabelData>
                            <Input style={styles.input}>Goles</Input>
                        </View>
                    </View>
                    <Text style={{ color: 'grey' }}>____________________________________________________________</Text>
                    <Text></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <CheckBox title='Over' checked='true' checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o' />
                        </View>
                        <View style={{ flexDirection: 'column', width: 125 }}>
                            <LabelData></LabelData>
                            <Input style={styles.input}>Cuota inicio</Input>
                        </View>
                        <View style={{ flexDirection: 'column', width: 125 }}>
                            <LabelData></LabelData>
                            <Input style={styles.input}>Cuota final</Input>
                        </View>
                    </View>
                    <Text style={{ color: 'grey' }}>____________________________________________________________</Text>

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
});