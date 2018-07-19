import React from 'react';
import Checkbox from '../../src/components/Checkbox/Checkbox';
import {shallow} from "enzyme";

describe('Checkbox', () => {
    const defaultProps = {
        onChange: jest.fn(),
        name: 'test_name',
        label: 'test_label',
    };

    const setUp = ({
        label,
        name,
        onChange
    }) => {
        return shallow(<Checkbox
            label={label}
            name={name}
            onChange={onChange}
        />);
    };

    test('should set checkbox name attribute', () => {
        const name = 'new_test_name';

        const wrapper = setUp({
            ...defaultProps,
            name
        });
        const input = wrapper.find('input');

        expect(input.prop('name')).toBe(name);
        expect(input.prop('id')).toBe(name);
    });

    test('should set checkbox input type attribute to checkbox', () => {
        const wrapper = setUp(defaultProps);
        const input = wrapper.find('input');

        expect(input.prop('type')).toBe('checkbox');
    });

    test('should show label for checkbox form props', () => {
        const labelValue = 'new_test_label';

        const wrapper = setUp({
            ...defaultProps,
            label: labelValue
        });
        const label = wrapper.find('label');

        expect(label.text()).toBe(labelValue);
    });

    test('should call on change function on checkbox change', () => {
        const onChange= jest.fn();
        const wrapper = setUp({
            ...defaultProps,
            onChange
        });

        wrapper.find('input').simulate('change', {
            target: {
                checked: true,
            }
        });

        expect(onChange).toHaveBeenCalledWith(true);
    });
});

