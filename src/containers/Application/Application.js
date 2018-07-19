import React from 'react';
import {SuccessPage} from '../../components/SuccessPage';
import {Form} from '../../components/Form';
import LoginService from "../../service/LoginService/LoginService";

export default class Application extends React.Component {
    state = {
        isLogged: false,
        loginError: '',
    };

    loginService = new LoginService();

    onLogin = (model) => {
        this.loginService
            .login(model)
            .then(() => this.setState({isLogged: true, loginError: ''}))
            .catch(() => this.setState({isLogged: false, loginError: 'Invalid email or password'}))
    };

    render() {
        if (this.state.isLogged) {
            return (
                <SuccessPage />
            )
        }

        return (
            <Form
                onLogin={this.onLogin}
                loginError={this.state.loginError}
            />
        )
    }
}