import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Title, Left, Right } from 'native-base';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Header style={{alignItems: 'center'}}>
                    <Body>
                        <Title>Login</Title>
                    </Body>
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>NativeBase</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}