import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'

import { Button } from '@tiro-cruzado/react/src/components/Button'
import { Portal } from '@tiro-cruzado/react/src/index'
import {
  Toast,
  ToastProps,
  ToastProvider,
  ToastViewport,
} from '@tiro-cruzado/react/src/components/Toast'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  decorators: [
    (_, context) => {
      const [open, setOpen] = React.useState(false)
      const timerRef = React.useRef(0)

      React.useEffect(() => {
        return () => clearTimeout(timerRef.current)
      }, [])

      return (
        <ToastProvider swipeDirection="right">
          <Button
            onClick={() => {
              setOpen(false)
              window.clearTimeout(timerRef.current)
              timerRef.current = window.setTimeout(() => {
                setOpen(true)
                console.log('show')
              }, 100)
            }}
          >
            Abrir Toast
          </Button>
          <Portal.Root>
            <Toast {...context.args} open={open} onOpenChange={setOpen} />
            <ToastViewport />
          </Portal.Root>
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    children: 'Quarta-feira, 23 de Outubro às 16h',
  },
}
