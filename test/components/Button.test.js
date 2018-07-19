import React from 'react';
import Button from '../../src/components/Button/Button';
import {shallow} from "enzyme";

describe('Button', () => {

    let wrapper;
    let value = 'test_value';
    beforeEach(() => {
        wrapper = shallow(<Button
            value={value}
        />);
    });

    test('should show button with value', () => {
        const button = wrapper.find('button');

        expect(button).toHaveLength(1);
        expect(button.text()).toBe(value);
    });
});

