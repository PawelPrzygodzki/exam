import React from 'react';
import Form from '../../src/components/Form/Form';
import {Button} from '../../src/components/Button';
import {Checkbox} from '../../src/components/Checkbox';
import {shallow} from "enzyme";

describe('Form', () => {

    let wrapper;
    let onLogin = jest.fn();
    beforeEach(() => {
        wrapper = shallow(<Form
            onLogin={onLogin}
        />);
    });

    test('should show login button', () => {
        const button = wrapper.find(Button);

        expect(button).toHaveLength(1);
    });

    test('should show email input', () => {
        const emailInput = wrapper.find({name: 'email'});

        expect(emailInput).toHaveLength(1);
    });

    test('should show password input', () => {
        const passwordInput = wrapper.find({name: 'password'});

        expect(passwordInput).toHaveLength(1);
    });

    test('should remember me checbox', () => {
        const rememberMe = wrapper.find(Checkbox);

        expect(rememberMe).toHaveLength(1);
    });

    test('should set email in state on change email input', () => {
        const email = 'test@test.pl';

        const emailInput = wrapper.find({name: 'email'});
        emailInput.prop('onChange')(email);

        expect(wrapper.state('email')).toBe(email);
    });

    test('should set password in state on change password input', () => {
        const password = '1Password';

        const passwordInput = wrapper.find({name: 'password'});
        passwordInput.prop('onChange')(password);

        expect(wrapper.state('password')).toBe(password);
    });

    test('should set remember me in state on change remember me checkbox', () => {
        const rememberMe = wrapper.find(Checkbox);
        rememberMe.prop('onChange')(true);

        expect(wrapper.state('remember')).toBeTruthy();
    });

    test('should not send form when email is invalid', () => {
        const invalidEmail = 'invalidEmailAdress';
        const validPassword = '1ValidPassword';

        wrapper.setState({
            email: invalidEmail,
            password: validPassword,
            remember: false,
        });

        wrapper.simulate('submit', {
            preventDefault: jest.fn()
        });

        expect(onLogin).not.toHaveBeenCalled();
    });

    test('should show error when email is invalid', () => {
        const invalidEmail = 'invalidEmailAdress';
        const validPassword= '1ValidPassword';

        wrapper.setState({
            email: invalidEmail,
            password: validPassword,
            remember: false,
        });

        wrapper.simulate('submit', {
            preventDefault: jest.fn()
        });

        expect(wrapper.find('[data-ctx="error"]')).toHaveLength(1);
    });

    test('should not send form when password is invalid', () => {
        const validEmail = 'valid@email.pl';
        const invalidPassword = 'invalid';

        wrapper.setState({
            email: validEmail,
            password: invalidPassword,
            remember: false,
        });

        wrapper.simulate('submit', {
            preventDefault: jest.fn()
        });

        expect(onLogin).not.toHaveBeenCalled();
    });

    test('should show error when password is invalid', () => {
        const validEmail = 'valid@email.pl';
        const invalidPassword = 'invalid';

        wrapper.setState({
            email: validEmail,
            password: invalidPassword,
            remember: false,
        });

        wrapper.simulate('submit', {
            preventDefault: jest.fn()
        });

        expect(wrapper.find('[data-ctx="error"]')).toHaveLength(1);
    });

    test('should send form when all data in form are valid', () => {
        const validEmail = 'valid@email.pl';
        const validPassword = '1ValidPassword';

        const formData = {
            email: validEmail,
            password: validPassword,
            remember: false,
        };

        wrapper.setState(formData);

        wrapper.simulate('submit', {
            preventDefault: jest.fn()
        });

        expect(onLogin).toHaveBeenCalledWith(formData);
    });

});

