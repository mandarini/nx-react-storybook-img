import { Story, Meta } from '@storybook/react';
import { Third, ThirdProps } from './third';

export default {
  component: Third,
  title: 'Third',
} as Meta;

const Template: Story<ThirdProps> = (args) => <Third {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
