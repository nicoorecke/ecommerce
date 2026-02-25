'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@/src/context/ThemeContext'
import { CarritoProvider } from '@/src/context/CarritoContext'
import { ToastProvider } from '@/src/context/ToastContext'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CarritoProvider>
        <ToastProvider> 
          {children}
        </ToastProvider>
      </CarritoProvider>
    </ThemeProvider>
  )
}