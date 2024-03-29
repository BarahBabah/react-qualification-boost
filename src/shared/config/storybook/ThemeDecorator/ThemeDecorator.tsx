import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div id="app-root" className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
