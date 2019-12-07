import React, { Component } from 'react';
import { Container, Header, Content, Card, Item, Text, Body, Title, Button, Label, Input } from 'native-base';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Header style={{ flexDirection: "column" }}>
                    <Body style={{ paddingTop: 15 }}>
                        <Title>Login</Title>
                    </Body>
                </Header>
                <Content style={{ paddingTop: 200, paddingRight:10, paddingLeft: 10 }}>
                    <Card style={{ alignItems: 'center', paddingTop: 20 }}>
                        <Item floatingLabel rounded>
                            <Label>  Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel rounded>
                            <Label>  Password</Label>
                            <Input />
                        </Item>
                        <Item>
                            <Button rounded style={{ margin: 20 }}>
                                <Text>GO!</Text>
                            </Button>
                        </Item>
                    </Card>
                </Content>
            </Container>
        );
    }
}