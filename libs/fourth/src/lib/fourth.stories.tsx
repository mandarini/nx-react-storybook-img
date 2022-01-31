import { Story, Meta } from '@storybook/react';
import { Fourth, FourthProps } from './fourth';

export default {
  component: Fourth,
  title: 'Fourth',
} as Meta;

const Template: Story<FourthProps> = (args) => <Fourth {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
