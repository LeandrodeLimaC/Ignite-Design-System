import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled } from '@stitches/react'

export const TooltipContainer = styled(TooltipPrimitive.Root, {})

export const TooltipContent = styled(TooltipPrimitive.Content, {
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  color: '$gray100',
  paddingBlock: '$3',
  paddingInline: '$4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxShadow: '4px 16px 24px rgba(0,0,0,0.25)',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
})

export const { Trigger: TooltipTrigger, Portal: TooltipPortal } =
  TooltipPrimitive
