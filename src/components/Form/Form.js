import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '../Input';

export class Form extends React.Component {
    state = {
        password: '',
        email: '',
        remember: false,
        error: '',
    };

    onSubmit = (event) => {
        event.preventDefault();

        if (this.validate()) {
            this.props.onLogin(this.state)
        }
    };

    validate = () => {
        const {
            email,
            password
        } = this.state;

        if (!this.isValidEmail(email)) {
            this.setState({error: 'Invalid email'});
            return false;
        }

        if (!this.isValidPassword(password)) {
            this.setState({error: 'Invalid password'});
            return false;
        }

        this.setState({error: ''});
        return true;
    };

    isValidEmail = (email) => {
        return email && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    };

    isValidPassword = (password) => {
        return password &&
            password.length > 6 &&
            password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.loginError) {
            this.setState({
                error: nextProps.loginError
            })
        }
    }

    render() {
        const {
            error,
        } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                {error && <div>{error}</div>}
                <Input
                    label='Email'
                    name='email'
                    type='text'
                    onChange={(value) => this.setState({email: value})}
                />
                <Input
                    label='Password'
                    name='password'
                    type='password'
                    onChange={(value) => this.setState({password: value})}
                />
                <Input
                    label='Remember me'
                    name='remember'
                    type='checkbox'
                    onChange={(value) => this.setState({remember: value})}
                />
                <input type="submit" value="login"/>
            </form>
        );
    }
}

Form.defaultProps = {
    onLogin: () => undefined,
    loginError: ''
};

Form.propTypes = {
    onLogin: PropTypes.func,
    loginError: PropTypes.string
};

export default Form