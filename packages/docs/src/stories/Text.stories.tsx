import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@tiro-cruzado/react'

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: [
          'xxs',
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
          '8xl',
          '9xl',
        ],
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
