import React from 'react';
import Application from '../../src/containers/Application/Application';
import {SuccessPage} from '../../src/components/SuccessPage';
import {Form} from '../../src/components/Form';
import {shallow} from "enzyme";

describe('Application', () => {

    const setUp = ({
        login
    }) => {
        return shallow(<Application
            loginService={{
                login,
            }}
        />);
    };

    test('should show success message when user is logged', () => {
        const wrapper = setUp({
            login: jest.fn()
        });

        wrapper.setState({
            isLogged: true,
            loginError: '',
        });

        expect(wrapper.find(SuccessPage)).toHaveLength(1);
    });

    test('should show login form when user is not logged', () => {
        const wrapper = setUp({
            login: jest.fn()
        });

        wrapper.setState({
            isLogged: false,
            loginError: '',
        });

        expect(wrapper.find(Form)).toHaveLength(1);
    });

    test('should set login error when login request is rejected', () => {
        const wrapper = setUp({
            login: jest.fn().mockRejectedValue(false)
        });

        return wrapper.find(Form).prop('onLogin')({})
            .then(() => {
                expect(wrapper.state('loginError')).toBe('Invalid email or password');
                expect(wrapper.state('isLogged')).toBeFalsy();
            });
    });

    test('should set user as logged when login request is resolved ', () => {
        const wrapper = setUp({
            login: jest.fn().mockResolvedValue(true)
        });

        return wrapper
            .find(Form)
            .prop('onLogin')({})
            .then(() => {
                expect(wrapper.state('isLogged')).toBeTruthy();
            });
    });
});

