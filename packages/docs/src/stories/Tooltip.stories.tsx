import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@tiro-cruzado/react'
import { Avatar } from '@tiro-cruzado/react/src'
import {
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@tiro-cruzado/react/src/components/Tooltip'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  decorators: [
    (_, context) => {
      return (
        <TooltipProvider>
          <Tooltip {...context.args}>{context.args.children}</Tooltip>
        </TooltipProvider>
      )
    },
  ],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <Button variant="tertiary">Hover pra ver Tooltip</Button>,
    content: 'Conteúdo do tooltip',
  },
}
