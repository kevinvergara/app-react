import React, { Component, Fragment } from 'react';
import { StyleSheet, Image, Text, View, TextInput } from 'react-native';
import { Images } from "../../assets/index";

export default class Container extends Component<{}, State> {
    render() {
        return (
            <Fragment>
                <View style={styles.container}>
                    <View style={{paddingTop: 100, flex:1, flexDirection: "column"}}>
                        <Image
                            style={{borderWidth: 2, borderColor: 'blue', width: 60, height: 60}}
                            source={Images.IconApp}
                        />
                    </View>
                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{}}> User</Text>
                        <TextInput style={{borderColor:'grey', borderWidth: 2, width: 150}}/>
                        </View>
                        <Text> Login to your Account</Text>
                    </View>
                </View>
            </Fragment>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 20,

    },
});
