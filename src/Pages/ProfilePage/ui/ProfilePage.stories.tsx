import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/tests/avatar.jpeg';
import { Country } from '../../../entities/Country';
import { Currency } from '../../../entities/Currency';

import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'Lorem_Ipsum',
            first: 'Lorem',
            lastname: 'Ipsum',
            city: Country.Belarus,
            currency: Currency.RUB,
            age: 22,
            avatar,
        },
    },
})];
export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'Lorem_Ipsum',
            first: 'Lorem',
            lastname: 'Ipsum',
            city: Country.Belarus,
            currency: Currency.RUB,
            age: 22,
            avatar,
        },
    },
})];
