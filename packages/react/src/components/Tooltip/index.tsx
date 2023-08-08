import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipTrigger,
} from './styles'

export type TooltipProps = React.ComponentProps<
  typeof TooltipPrimitive.Root
> & {
  children: React.ReactNode
  content: React.ReactNode
}

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: TooltipProps) {
  return (
    <TooltipContainer
      open={true}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipTrigger asChild>{children}</TooltipTrigger>

      <TooltipPortal>
        <TooltipContent side="top" align="center" {...props}>
          {content}
          <TooltipArrow width={11} height={5} />
        </TooltipContent>
      </TooltipPortal>
    </TooltipContainer>
  )
}

export const TooltipProvider = TooltipPrimitive.TooltipProvider
