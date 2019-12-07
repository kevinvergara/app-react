import React, { Component, Fragment } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Images } from "../../assets/index";

export default class Container extends Component<{}, State> {
    render() {
        return (
            <Fragment>
                <View style={{flex: 5, flexDirection: "column", borderColor: "red", borderWidth: 2}}>
                    <Text>AFAFLM L SMLSMF LAS</Text>
                    <Image 
                    style={{borderWidth: 2, borderColor: 'blue', width: 600, height: 400}} 
                    uri={'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi8yu2A1aLmAhU1E7kGHXhTDZMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.agiliacenter.com%2Freactjs-vs-react-native%2F&psig=AOvVaw2p5pZ8ODpKmOF2z0IbB8LT&ust=1575778077498604'}
                    />
                </View>
                <Text> Login to your Accsssount</Text>
            </Fragment>
        )
    };
}

const styles = StyleSheet.create({
    container: {
    },
});