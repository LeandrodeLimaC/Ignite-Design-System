import { styled } from '@stitches/react'
import * as ToastPrimitive from '@radix-ui/react-toast'

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  // --viewport-padding: 25px;
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '25px',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastContainer = styled(ToastPrimitive.Root, {
  paddingBlock: '12px',
  paddingInline: '20px',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
})
