'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import Toast from '@/src/components/Toast'

interface ToastContextType {
  mostrarToast: (mensaje: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<{ id: number; mensaje: string }[]>([])

  const mostrarToast = (mensaje: string) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, mensaje }])
  }

  const cerrarToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ mostrarToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            mensaje={toast.mensaje}
            onClose={() => cerrarToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast debe usarse dentro de ToastProvider')
  }
  return context
}