import React, { useEffect } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'

import {
  ToastContainer,
  ToastTitle,
  ToastViewport,
  ToastCloseContainer,
  CloseIcon,
  ToastDescription,
} from './styles'

export type ToastProps = React.ComponentProps<typeof ToastPrimitive.Root> & {
  title?: string
  children: React.ReactNode
  action?: React.ComponentType
  actionAltText: string
}

export const Toast = ({
  title,
  children,
  content,
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
      <ToastDescription>{children || content}</ToastDescription>
      {Action && (
        <ToastPrimitive.Action altText={actionAltText} asChild>
          <Action />
        </ToastPrimitive.Action>
      )}
      <ToastCloseContainer aria-label="Fechar">
        <CloseIcon aria-hidden size={20} />
      </ToastCloseContainer>
    </ToastContainer>
  )
}

export const ToastProvider = ToastPrimitive.Provider
export { ToastViewport }
