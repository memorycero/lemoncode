import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextField } from './text-field';

describe('text-field component specs', () => {
    it('should display the component empty when it mounts', () => {
        //Arrange
        const props = {
            name: 'name',
            label: 'label',
            value: 'value',
            onChange: jest.fn()
        };
        //Act
        const { asFragment } = render(<TextField {...props} />);

        //Assert
        expect(asFragment()).toMatchSnapshot();
    });

    it('should call onChange property when the text change in the text field component', () => {
        // Arrange
        const props = {
            name: 'name',
            label: 'label',
            value: 'value',
            onChange: jest.fn()
        };

        // Act
        const { getByDisplayValue } = render(<TextField {...props} />);
        fireEvent.change(getByDisplayValue(props.value), { target: { value: 'new value' } });

        // Assert
        expect(props.onChange).toHaveBeenCalled();
        expect(props.onChange).toHaveBeenCalledTimes(1);

    });

    it('should call onBlur method when the component loose focus', () => {
        // Arrange
        const props = {
            name: 'name',
            label: 'label',
            value: 'value',
            onChange: jest.fn(),
            onBlur: jest.fn()
        };

        // Act
        const { getByDisplayValue } = render(<TextField {...props} />);
        fireEvent.blur(getByDisplayValue(props.value));

        // Assert
        expect(props.onBlur).toHaveBeenCalled();
        expect(props.onBlur).toHaveBeenCalledTimes(1);

    });

});
