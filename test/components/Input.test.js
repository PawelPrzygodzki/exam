import React from 'react';
import Input from '../../src/components/Input/Input';
import {shallow} from "enzyme";

describe('Input', () => {
    const defaultProps = {
        type: 'text',
        onChange: jest.fn(),
        name: 'test_name',
        label: 'test_label',
    };

    const setUp = ({
        label,
        type,
        name,
        onChange
    }) => {
        return shallow(<Input
            label={label}
            type={type}
            name={name}
            onChange={onChange}
        />);
    };

    test('should set input name attribute', () => {
        const name = 'new_test_name';

        const wrapper = setUp({
            ...defaultProps,
            name
        });
        const input = wrapper.find('input');

        expect(input.prop('name')).toBe(name);
        expect(input.prop('id')).toBe(name);
    });

    test('should set input type attribute', () => {
        const type = 'password';

        const wrapper = setUp({
            ...defaultProps,
            type
        });
        const input = wrapper.find('input');

        expect(input.prop('type')).toBe(type);
    });

    test('should show label for input form props', () => {
        const labelValue = 'new_test_label';

        const wrapper = setUp({
            ...defaultProps,
            label: labelValue
        });
        const label = wrapper.find('label');

        expect(label.text()).toBe(labelValue);
    });

    test('should call on change function on input change', () => {
        const inputValue = 'new input value';

        const onChange= jest.fn();
        const wrapper = setUp({
            ...defaultProps,
            onChange
        });

        wrapper.find('input').simulate('change', {
            target: {
                value: inputValue,
            }
        });

        expect(onChange).toHaveBeenCalledWith(inputValue);
    });
});

