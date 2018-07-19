import React from 'react';
import SuccessPage from '../../src/components/SuccessPage/SuccessPage';
import {shallow} from "enzyme";

describe('SuccessPage', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SuccessPage/>);
    });

    test('should show success message', () => {
        const successMessage = wrapper.find('div').text();

        expect(successMessage).toBe('Login successful');
    });
});

