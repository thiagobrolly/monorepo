import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '.';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    children: 'Title Black',
    uppercase: false,
    bold: false,
    color: 'gray',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Light: Story<CardProps> = (args) => <Card {...args} />;
export const Dark: Story<CardProps> = (args) => <Card {...args} />;

Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

Dark.args = {
  children: 'Title White',
  color: 'white',
};
