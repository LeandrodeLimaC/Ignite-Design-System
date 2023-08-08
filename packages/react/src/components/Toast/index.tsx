import React, { useEffect } from 'react'
import { X } from 'phosphor-react'
import * as ToastPrimitive from '@radix-ui/react-toast'

import { ToastContainer, ToastTitle, ToastViewport } from './styles'

export type ToastProps = React.ComponentProps<typeof ToastPrimitive.Root> & {
  title?: string
  children: React.ReactNode
  action?: React.ComponentType
  actionAltText: string
}

export const Toast = ({
  title,
  children,
  action: Action,
  actionAltText,
  ...props
}: ToastProps) => {
  useEffect(() => {
    console.log('open', open)
  }, [props.open])

  return (
    <ToastContainer {...props}>
      {title && <ToastTitle>{title}</ToastTitle>}
      <ToastPrimitive.Description>{children}</ToastPrimitive.Description>
      {Action && (
        <ToastPrimitive.Action altText={actionAltText} asChild>
          <Action />
        </ToastPrimitive.Action>
      )}
      <ToastPrimitive.Close aria-label="Close">
        <X aria-hidden size={20} />
      </ToastPrimitive.Close>
    </ToastContainer>
  )
}

export const ToastProvider = ToastPrimitive.Provider
export { ToastViewport }
