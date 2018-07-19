import React from 'react';
import {SuccessPage} from '../../components/SuccessPage';
import {Form} from '../../components/Form';
import PropTypes from 'prop-types';
import LoginService from "../../service/LoginService/LoginService";

export default class Application extends React.Component {
    state = {
        isLogged: false,
        loginError: '',
    };

    onLogin = (model) => {
        return this.props.loginService
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

Application.propTypes = {
    loginService: PropTypes.instanceOf(LoginService)
};