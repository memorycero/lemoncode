import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextField } from './text-field';

describe('text-field component specs', () => {
    it('should display the component when it mounts', () => {
        //Arrange
        const props = {
            name: '',
            label: '',
            value: '',
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
            value: 'Salt',
            onChange: jest.fn()
        };

        // Act
        const { getByDisplayValue} = render(<TextField {...props} />);
        const textInput = getByDisplayValue(props.value) as HTMLInputElement;
        fireEvent.change(textInput, { target: { value: 'new value' } });

        // Assert
        expect(props.onChange).toHaveBeenCalled();
        expect(props.onChange).toHaveBeenCalledTimes(1);

    });

    it('should call onBlur property when the component loses focus', () => {
        // Arrange
        const props = {
            name: 'name',
            label: 'label',
            value: 'Salt',
            onChange: jest.fn(),
            onBlur: jest.fn()
        };

        // Act
        const { getByDisplayValue } = render(<TextField {...props} />);
        const textInput = getByDisplayValue(props.value) as HTMLInputElement;
        fireEvent.blur(textInput);

        // Assert
        expect(props.onBlur).toHaveBeenCalled();
        expect(props.onBlur).toHaveBeenCalledTimes(1);

    });

});
