import React, { Component } from 'react';
import { authenticationActions } from '../../reducers/authentication/actions'
import {reducer} from '../../reducers/authentication/index'
import { connect } from "react-redux";
import { Container, Header, Content, Card, Item, Text, Body, Title, Button, Label, Input } from 'native-base';
import type, {CombinedState} from "../../reducers";

type StateProps = {|
    +tryingToLogin: boolean,
|}

type State = {
    userName: string,
};


class LoginConnected extends Component<{...StateProps}, State> {

    state = {
        userName: 'Dialler',
    };
    componentDidMount(): void {
        const {tryingToLogin} = this.props;
        if(!tryingToLogin){
            this.setState({userName: 'KEVINLACHUPA'})
        }
    }

    handleAuthentication = () => {
        const {authenticate} = this.props;
        authenticate('BEGIN_AUTHENTICATION');
    };

    render() {
        const {userName} = this.state;
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
                            <Input/>
                        </Item>
                        <Item floatingLabel rounded>
                            <Input placeholder={userName} />
                        </Item>
                        <Item>
                            <Button rounded style={{ margin: 20 }} onPress={this.handleAuthentication}>
                                <Text>GO!</Text>
                            </Button>
                        </Item>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const defaultProps: StateProps = {
    tryingToLogin: true,
};

const mapStateToProps = ({authentication}: CombinedState): StateProps => {
    const {isLogin} = authentication;
    if(isLogin){
        return { tryingToLogin: false};
    }
    return defaultProps;
};

const Login = connect(
    mapStateToProps,
    {...authenticationActions}
)(LoginConnected);

export default Login;
