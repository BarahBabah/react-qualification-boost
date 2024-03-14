import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/tests/avatar.jpeg';
import { Country } from '../../../../entities/Country';
import { Currency } from '../../../../entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Light = Template.bind({});
Light.args = {
    data: {
        username: 'Lorem_Ipsum',
        first: 'Lorem',
        lastname: 'Ipsum',
        city: Country.Belarus,
        currency: Currency.RUB,
        age: 22,
        avatar,
    },
};
export const Dark = Template.bind({});
Dark.args = {
    data: {
        username: 'Lorem_Ipsum',
        first: 'Lorem',
        lastname: 'Ipsum',
        city: Country.Belarus,
        currency: Currency.RUB,
        age: 22,
        avatar,
    },
};
export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};
export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
Light.decorators = [StoreDecorator({})];
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
