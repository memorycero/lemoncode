import * as React from 'react';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import { Button } from './button';

describe('Button component specs', () => {
    it('should display a default button type with a label', () => {
        // Arrange
        const props = {
            label: 'Click Me'
        };

        // Act
        const { getByText, asFragment } = render(<Button {...props} />);

        // Assert
        getByText(props.label);
        expect(asFragment()).toMatchSnapshot();

    });

    it('should call onClick property when it clicks on button', () => {
        // Arrange
        const props = {
            label: 'Click Me',
            onClick: jest.fn(),      
        };

        // Act
        const { getByText } = render(<Button {...props} />);

        const buttonElement = getByText('Click Me');
        fireEvent.click(buttonElement);

        // Assert
        expect(props.onClick).toHaveBeenCalled();
        expect(props.onClick).toHaveBeenCalledTimes(1);

    });
})