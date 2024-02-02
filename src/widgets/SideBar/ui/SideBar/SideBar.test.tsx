import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import SideBar from './SideBar';

describe('SideBar', () => {
    test('Test render', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
    });
    test('Test toggle SideBar', () => {
        componentRender(<SideBar />);
        const toggleButton = screen.getByTestId('SideBar-toggle');

        expect(screen.getByTestId('SideBar')).toBeInTheDocument();

        fireEvent.click(toggleButton);

        expect(screen.getByTestId('SideBar')).toHaveClass('collapsed');
    });
});
