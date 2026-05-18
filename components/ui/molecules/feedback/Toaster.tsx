// Toaster molecule that renders active toast notifications from the useToast hook.
"use client";

import { useToast } from "../../../../hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastViewport,
} from "./toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            {description && (
              <ToastDescription>{description}</ToastDescription>
            )}
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
