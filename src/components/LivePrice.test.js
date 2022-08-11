import { render, screen, fireEvent } from '@testing-library/react';
import LivePrice from './LivePrice';


test('button test', () => {
    render(<LivePrice />);

    const button = screen.getByRole('button', {name: 'Up'});
    fireEvent.click(button);
    expect(button).toBeDisabled();

    
    const button2 = screen.getByRole('button', {name: 'Down'});
    fireEvent.click(button);
    expect(button2).toBeDisabled();
});