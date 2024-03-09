import { render, screen } from '@testing-library/react';
import Text, { TextTheme } from './Text';

describe('Text', () => {
    test('Test render', () => {
        render(<Text text="TEST" />);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test text', () => {
        render(<Text theme={TextTheme.PRIMARY} text="TEST" />);
        expect(screen.getByText('TEST')).toHaveClass('text');
        screen.debug();
    });
    test('Test title', () => {
        render(<Text theme={TextTheme.PRIMARY} title="TEST" />);
        expect(screen.getByText('TEST')).toHaveClass('title');
        screen.debug();
    });
});
