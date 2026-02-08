import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useState } from 'react';
import { describe, it, expect, vi } from 'vitest';
import InputChips from './InputChip';

// Wrapper component to manage state for testing
const TestWrapper = (props: any) => {
    const [chips, setChips] = useState<string[]>(props.initialChips || []);
    const [inputValue, setInputValue] = useState('');

    return (
        <InputChips
            chips={chips}
            setChips={setChips}
            inputValue={inputValue}
            setInputValue={setInputValue}
            {...props}
        />
    );
};

describe('InputChips', () => {
    it('renders correctly', () => {
        render(<TestWrapper />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    it('adds a chip when Enter is pressed', () => {
        render(<TestWrapper />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test-chip' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        expect(screen.getByText('test-chip')).toBeInTheDocument();
    });

    it('removes a chip when delete button is clicked', () => {
        render(<TestWrapper initialChips={['chip1']} />);
        const deleteBtn = screen.getByTestId('remove-chip-btn-0');
        fireEvent.click(deleteBtn);
        expect(screen.queryByText('chip1')).not.toBeInTheDocument();
    });

    it('removes the last chip on Backspace when input is empty', () => {
        render(<TestWrapper initialChips={['chip1']} backspaceToRemoveChip={true} />);
        const input = screen.getByRole('textbox');
        fireEvent.keyDown(input, { key: 'Backspace', code: 'Backspace' });
        expect(screen.queryByText('chip1')).not.toBeInTheDocument();
    });

    it('validates input before adding chip', () => {
        const validate = vi.fn().mockReturnValue(false);
        render(<TestWrapper validate={validate} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'invalid' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        expect(screen.queryByText('invalid')).not.toBeInTheDocument();
        expect(validate).toHaveBeenCalled();
    });
});
