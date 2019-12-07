import React, { Component, Fragment } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Images } from "../../assets/index";

export default class Container extends Component {
    render() {
        return (
            <Fragment>
                <View style={styles.container}>
                    <View style={{flex: 1, flexDirection: "row", borderColor: "red", borderWidth: 2}}>
                        <Image style={{borderWidth: 2, borderColor: 'blue', width: 60, height: 60}} uri={Images.IconApp}/>
                        <Text>AFAFLM L SMLSMF LAS</Text>
                    </View>
                    <Text> Login to your Accsssount</Text>
                </View>
            </Fragment>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column"
    },
});