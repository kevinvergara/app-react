import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Login from '../screens/login/index';
import {Provider} from "react-redux";
import {createStore} from "redux";
import combinedReducer from "../reducers";

const store = createStore(combinedReducer)

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('../../node_modules/native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (
            <Provider store={store}>
            <Container style={{paddingTop: 30}}>
                <Login></Login>
            </Container>
            </Provider>
        );
    }
}
