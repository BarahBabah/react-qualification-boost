import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});

export const PrimaryDark = Template.bind({});

export const withError = Template.bind({});
export const withErrorDark = Template.bind({});
export const Loading = Template.bind({});

withError.decorators = [
    StoreDecorator({
        loginForm: { username: 'admin', password: '124', error: 'ERROR' },
    }),
];
withErrorDark.decorators = [
    StoreDecorator({
        loginForm: { username: 'admin', password: '124', error: 'ERROR' },
    }),
    ThemeDecorator(Theme.DARK),
];

Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        loginForm: { username: 'admin', password: '124' },
    }),
];
PrimaryDark.decorators = [
    StoreDecorator({
        loginForm: { username: 'admin', password: '124' },
    }),
    ThemeDecorator(Theme.DARK),
];
Loading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
    ThemeDecorator(Theme.DARK),
];
