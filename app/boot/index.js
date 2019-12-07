import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Images} from "../../assets/index";
import Image from "react-native-web/dist/exports/Image";
import TextInput from "react-native-web/src/exports/TextInput";
import {Button} from "react-native-web";

export default class Container extends Component<{}, State> {
    render() {
        return (
        <>
            <View>
                <Image uri={Images.IconApp} width={scale(60)} height={scale(60)} />
            </View>
            <Text> Login to your Account</Text>
            <TextInput/>
            <TextInput/>
            <Button onPress={} title={}/>
            <Text> -or sign in with-</Text>
            <View style={styles.container}>
                <Text>Hello, world!</Text>
            </View>
        </>
    )};
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
