import Second from './second';

export default {
  component: Second,
  title: 'Second',
};

const Template = (args) => <Second {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
