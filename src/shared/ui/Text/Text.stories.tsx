import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Text, { TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lore',
    text: 'text lore',
};
export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: 'Title lore',
    text: 'text lore',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lore',
};
export const onlyText = Template.bind({});
onlyText.args = {
    text: 'text lore',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lore',
    text: 'text lore',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lore',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'text lore',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
