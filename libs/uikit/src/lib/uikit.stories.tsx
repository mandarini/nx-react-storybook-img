import { Story, Meta } from '@storybook/react';
import { Uikit } from './uikit';

export default {
  component: Uikit,
  title: 'Uikit',
} as Meta;

const Template: Story = (args) => <Uikit name={''} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Katerina',
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'Anastasis',
};
