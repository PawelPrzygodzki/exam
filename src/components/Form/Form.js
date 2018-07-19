import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '../Input';
import {Checkbox} from '../Checkbox';
import {Button} from '../Button';
import styles from './Form.scss';

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
            <form className={styles.container} onSubmit={this.onSubmit}>
                <h1 className={styles.header}>Sign in</h1>
                {error && <div className={styles.error}>{error}</div>}
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
                <Checkbox
                    label='Remember me'
                    name='remember'
                    onChange={(value) => this.setState({remember: value})}
                />
                <div className={styles.buttonWrapper}> <Button value='Login'/></div>
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