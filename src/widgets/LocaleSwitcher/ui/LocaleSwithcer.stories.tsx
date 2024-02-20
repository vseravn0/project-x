import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LocaleSwitcher } from './LocaleSwitcher';

export default {
    title: 'widgets/LocaleSwitcher',
    component: LocaleSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LocaleSwitcher>;

const Template: ComponentStory<typeof LocaleSwitcher> = () => <LocaleSwitcher />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
