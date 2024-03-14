import { ComponentMeta, ComponentStory } from '@storybook/react';
import image from 'shared/assets/tests/avatar.jpeg';
import Avatar from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
    <Avatar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    src: image,
    size: 200,
};

export const Small = Template.bind({});
Small.args = {
    src: image,
    size: 50,
};
