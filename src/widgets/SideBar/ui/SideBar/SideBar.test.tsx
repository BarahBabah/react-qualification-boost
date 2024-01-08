import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import SideBar from './SideBar';

describe('SideBar', () => {
    test('Test render', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
    });
    test('Test toggle SideBar', () => {
        renderWithTranslation(<SideBar />);
        const toggleButton = screen.getByTestId('SideBar-toggle');

        expect(screen.getByTestId('SideBar')).toBeInTheDocument();

        fireEvent.click(toggleButton);

        expect(screen.getByTestId('SideBar')).toHaveClass('collapsed');
    });
});
