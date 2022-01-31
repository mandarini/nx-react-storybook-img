import { Story, Meta } from '@storybook/react';
import { Fifth, FifthProps } from './fifth';

export default {
  component: Fifth,
  title: 'Fifth',
} as Meta;

const Template: Story<FifthProps> = (args) => <Fifth {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
