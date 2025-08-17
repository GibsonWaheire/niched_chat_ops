import { useToast } from "../../hooks/use-toast"
import * as React from "react"
import * as ToastUI from "../ui/toast"

type ToastItem = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}

export function Toaster() {
  const { toasts } = useToast() as { toasts: ToastItem[] }

  return (
    <ToastUI.ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <ToastUI.Toast key={id} {...(props as React.ComponentProps<typeof ToastUI.Toast>)}>
            <div className="grid gap-1">
              {title && <ToastUI.ToastTitle>{title}</ToastUI.ToastTitle>}
              {description && (
                <ToastUI.ToastDescription>{description}</ToastUI.ToastDescription>
              )}
            </div>
            {action}
            <ToastUI.ToastClose />
          </ToastUI.Toast>
        )
      })}
      <ToastUI.ToastViewport />
    </ToastUI.ToastProvider>
  )
}